using LPCRM.Api.Entity.ApiModel;
using LPCRM.Configuration;
using LPCRM.Entity;
using LPCRM.Entity.DTO;
using LPCRM.Entity.Model;
using LPCRM.Services;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Services
{

    public interface IContactGroupService : IService<ContactGroup>
    {
        List<ContactGroup> Fillter(List<FillterModel> param);
        ContactGroupDTO GetMapper(object id);
    }

    public class ContactGroupService : IContactGroupService
    {
        private readonly MyContext _context;
        public ContactGroupService()
        {
            _context = new MyContext();
        }

        public string Add(ContactGroup value)
        {
            if (value == null)
                throw new InvalidOperationException(Constant.ErrorMessage.DataNoNotFound);
            value.ContactGroupId = Guid.NewGuid();
            _context.ContactGroup.Add(value);
            _context.SaveChanges();

            return value.ContactGroupId.ToString();
        }

        public bool Delete(ContactGroup value)
        {
            if (value == null)
                throw new InvalidOperationException(Constant.ErrorMessage.DataNoNotFound);

            var entity = _context.ContactGroup.FirstOrDefault(t => t.ContactGroupId == value.ContactGroupId);
            if (entity == null)
                throw new KeyNotFoundException(Constant.ErrorMessage.ExistingData);

            entity.IsDeleted = true;
            entity.UpdatedDate = DateTime.Now;
            _context.Update(entity);
            _context.SaveChanges();
            return true;
        }

        public List<ContactGroup> Fillter(List<FillterModel> param)
        {
            var result = _context.ContactGroup;
            return result.ToList();
        }

        public ContactGroup Get(object id)
        {
            var entity = _context.ContactGroup
                .Include(t=>t.FundVehicle)
                .Include(t=>t.InvestorContactGroup)
                    .ThenInclude(t=>t.ContactGroupTypes)
                        .ThenInclude(t=>t.ContactList)
                            .ThenInclude(t => t.InvestorContact)
                .FirstOrDefault(t => t.ContactGroupId.ToString() == id.ToString());

            return entity;
        }

        public ContactGroupDTO GetMapper(object id)
        {
            var entity = _context.ContactGroup
               .Include(t => t.FundVehicle)
               .Include(t => t.InvestorContactGroup)
                   .ThenInclude(t => t.ContactGroupTypes)
                       .ThenInclude(t => t.ContactList)
                           .ThenInclude(t => t.InvestorContact)
               .FirstOrDefault(t => t.ContactGroupId.ToString() == id.ToString());
            var result = DTOMapper.Map<ContactGroup, ContactGroupDTO>(entity);

            return result;
        }

        public string Update(ContactGroup value)
        {
            if (value == null)
                throw new InvalidOperationException(Constant.ErrorMessage.DataNoNotFound);

            var contactGroupEntity = _context.ContactGroup.FirstOrDefault(t => t.ContactGroupId == value.ContactGroupId);
            if (contactGroupEntity == null)
                throw new KeyNotFoundException(Constant.ErrorMessage.ExistingData);
            value.CreatedDate = null;
            value.UpdatedDate = DateTime.Now;
            JsonConvert.PopulateObject(JsonConvert.SerializeObject(value), contactGroupEntity, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
            contactGroupEntity.InvestorContactGroup = null;
            _context.Update(contactGroupEntity);
            _context.SaveChanges();
            foreach (var ContactGroup in value.InvestorContactGroup)
            {
                var investorContactGroupEntity = _context.InvestorContactGroup.FirstOrDefault(t => t.InvestorContactGroupId == ContactGroup.InvestorContactGroupId);
                if (investorContactGroupEntity == null)
                {
                    _context.InvestorContactGroup.Add(ContactGroup);
                }
                else
                {
                    ContactGroup.ContactGroupId = investorContactGroupEntity.ContactGroupId;
                    ContactGroup.CreatedDate = null;
                    ContactGroup.UpdatedDate = DateTime.Now;
                    JsonConvert.PopulateObject(JsonConvert.SerializeObject(ContactGroup), investorContactGroupEntity, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
                    investorContactGroupEntity.ContactGroupTypes = null;
                    _context.Update(investorContactGroupEntity);
                    _context.SaveChanges();
                }



                foreach (var GroupType in ContactGroup.ContactGroupTypes)
                {
                    var GroupTypesEntity = _context.ContactGroupType.FirstOrDefault(t => t.ContactGroupTypeId == GroupType.ContactGroupTypeId);
                    if (GroupTypesEntity == null)
                    {
                        _context.ContactGroupType.Add(GroupType);
                    }
                    else
                    {
                        GroupType.InvestorContactGroupId = GroupTypesEntity.InvestorContactGroupId;
                        GroupType.CreatedDate = null;
                        GroupType.UpdatedDate = DateTime.Now;
                        JsonConvert.PopulateObject(JsonConvert.SerializeObject(GroupType), GroupTypesEntity, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
                        GroupTypesEntity.ContactList = null;
                        _context.Update(GroupTypesEntity);
                        _context.SaveChanges();
                    }

                   
                    foreach (var ContactList in GroupType.ContactList)
                    {
                        var ContactListEntity = _context.ContactList.FirstOrDefault(t => t.ContactListId == ContactList.ContactListId);
                        if (ContactListEntity == null)
                        {
                            _context.ContactList.Add(ContactListEntity);
                        }
                        else
                        {
                            ContactList.ContactGroupTypeId = ContactListEntity.ContactGroupTypeId;
                            ContactList.CreatedDate = null;
                            ContactList.UpdatedDate = DateTime.Now;
                            JsonConvert.PopulateObject(JsonConvert.SerializeObject(ContactList), ContactListEntity, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
                            _context.Update(ContactListEntity);
                            _context.SaveChanges();
                        }

                    }
                }

            }


            return value.ContactGroupId.ToString();
        }
    }

}
