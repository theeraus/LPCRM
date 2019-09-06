using LPCRM.Api.Common;
using LPCRM.Api.Entity.ApiModel;
using LPCRM.Configuration;
using LPCRM.Entity;
using LPCRM.Entity.DTO;
using LPCRM.Entity.Model;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LPCRM.Services
{
    public interface IInvestorContactService : IService<InvestorContact>
    {
        List<InvestorContactDTO> Fillter(List<FillterModel> param);
    }

    public class InvestorContactService : IInvestorContactService
    {
        private readonly MyContext _context;
        public InvestorContactService()
        {
            _context = new MyContext();
        }

        public string Add(InvestorContact value)
        {
            if (value == null)
                throw new InvalidOperationException(Constant.ErrorMessage.DataNoNotFound);
            value.InvContactID = Guid.NewGuid();
            _context.InvestorContact.Add(value);
            _context.SaveChanges();

            return value.InvContactID.ToString();
        }

        public bool Delete(InvestorContact value)
        {
            if (value == null)
                throw new InvalidOperationException(Constant.ErrorMessage.DataNoNotFound);

            var entity = _context.InvestorContact.FirstOrDefault(t => t.InvContactID == value.InvContactID);
            if (entity == null)
                throw new KeyNotFoundException(Constant.ErrorMessage.ExistingData);

            entity.IsDeleted = true;
            entity.UpdatedDate = DateTime.Now;
            _context.Update(entity);
            _context.SaveChanges();
            return true;
        }

        public List<InvestorContactDTO> Fillter(List<FillterModel> param)
        {
           
            var expCondition = ExpressionBuilder.True<InvestorContact>();
   
            foreach (var item in param)
            {
                switch (item.ParamType)
                {
                    case "name":
                        var exp = ExpressionBuilder.False<InvestorContact>();
                        exp = exp.Or(t => EF.Functions.ILike(t.FirstName, $"%{item.ParamValue}%"));
                        exp = exp.Or(t => EF.Functions.ILike(t.LastName, $"%{item.ParamValue}%"));
                        expCondition = expCondition.And(exp);
                        break;
                    case "title":
                        var exp2 = ExpressionBuilder.False<InvestorContact>();
                        exp2 = exp2.Or(t => EF.Functions.ILike(t.Title, $"%{item.ParamValue}%"));
                        expCondition = expCondition.And(exp2);
                        break;
                    case "email":
                        var exp3 = ExpressionBuilder.False<InvestorContact>();
                        exp3 = exp3.Or(t => EF.Functions.ILike(t.Email, $"%{item.ParamValue}%"));
                        expCondition = expCondition.And(exp3);
                        break;
                    case "investerGroup":
                        var exp4 = ExpressionBuilder.False<InvestorContact>();
                        exp4 = exp4.Or(t=> t.ContactList.Any(c=> EF.Functions.ILike(c.ContactGroupType.InvestorContactGroup.ContactGroup.InvestorGroupName, $"%{item.ParamValue}%")));
                        expCondition = expCondition.And(exp4);
                        break;
                    case "investorEntity":
                        var exp5 = ExpressionBuilder.False<InvestorContact>();
                        exp5 = exp5.Or(t => t.ContactList.Any(c=> c.ContactGroupType.InvestorContactGroup.InvestorEntity.Any(a=> EF.Functions.ILike(a.InvestorEntityName, $"%{item.ParamValue}%"))));
                        expCondition = expCondition.And(exp5);
                        break;
                    case "funds":
                        var exp6 = ExpressionBuilder.False<InvestorContact>();
                        exp6 = exp6.Or(t => t.ContactList.Any(c => c.ContactGroupType.InvestorContactGroup.ContactGroup.FundVehicle.FundVehicleName == item.ParamValue));
                        expCondition = expCondition.And(exp6);
                        break;
                }
            }

            var result = _context.InvestorContact
                .Include(t => t.ContactList)
                    .ThenInclude(t=>t.ContactGroupType)
                        .ThenInclude(t=>t.InvestorContactGroup)
                            .ThenInclude(t=>t.ContactGroup)
                                .ThenInclude(t => t.FundVehicle)
                .Where(expCondition)
                .Select(t => new InvestorContactDTO
                {
                    InvContactID = t.InvContactID,
                    FirstName = t.FirstName ,
                    LastName = t.LastName,
                    FullName = t.FirstName + " " + t.LastName,
                    Title = t.Title,
                    Email = t.Email,
                    Address = t.Address,
                    PhoneNumber = t.PhoneNumber,
                    FaxNumber = t.FaxNumber,
                    ContactNote = t.ContactNote,
                    InvestorContactGroup = t.ContactList
                                .Select(c=> new InvestorContactGroupRefDTO {
                                        InvestorEntity = c.ContactGroupType.InvestorContactGroup.InvestorEntity,
                                        ContactGroup = c.ContactGroupType.InvestorContactGroup.ContactGroup.InvestorGroupName,
                                        Fund = c.ContactGroupType.InvestorContactGroup.ContactGroup.FundVehicle.FundVehicleName
                                }).ToList()
                });

            //var obj = DTOMapper.Map<IQueryable<InvestorContact>, IQueryable<InvestorContactDTO>>(result);
            
            string sql = result.ToSql();
            return result.ToList() ;
        }

        public InvestorContact Get(object id)
        {
            var entity = _context.InvestorContact.FirstOrDefault(t => t.InvContactID.ToString() == id.ToString());
            return entity;
        }

        public string Update(InvestorContact value)
        {
            if (value == null)
                throw new InvalidOperationException(Constant.ErrorMessage.DataNoNotFound);

            var entity = _context.InvestorContact.FirstOrDefault(t => t.InvContactID == value.InvContactID);
            if (entity == null)
                throw new KeyNotFoundException(Constant.ErrorMessage.ExistingData);

            value.CreatedDate = null;
            JsonConvert.PopulateObject(JsonConvert.SerializeObject(value), entity, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
            _context.Update(entity);
            _context.SaveChanges();
            return value.InvContactID.ToString();
        }

  
    }



}
