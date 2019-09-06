using Innofactor.EfCoreJsonValueConverter;
using LPCRM.Entity.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Entity.DTO
{
    public class ContactGroupDTO
    {
        public Guid ContactGroupId { get; set; }
        public string InvestorGroupName { get; set; }
        public int FundVehicleId { get; set; }
        public string FundVehicleName { get; set; }
        public List<InvestorContactGroupDTO> InvestorContactGroup { get; set; }
    }

    public class InvestorContactGroupDTO
    {
        public Guid InvestorContactGroupId { get; set; }
        public Guid ContactGroupId { get; set; }
        public List<InvestorEntity> InvestorEntity { get; set; }
        public List<ContactGroupTypeDTO> ContactGroupTypes { get; set; }

    }


    public class ContactGroupTypeDTO
    {
        public Guid ContactGroupTypeId { get; set; }
        public Guid InvestorContactGroupId { get; set; }
        public List<ContactType> ContactType { get; set; }
        public List<ContactListDTO> ContactList { get; set; }
    }

    public class ContactListDTO
    {
        public Guid ContactListId { get; set; }
        public Guid ContactGroupTypeId { get; set; }
        public Guid InvContactID { get; set; }
        public DateTime ContactValidFrom { get; set; }
        public string ContactValidTo { get; set; }
        public bool IsCurrentContact { get; set; }
        public bool IsAttachment { get; set; }
        public bool IsAdvisoryBoard { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FulllName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
    }


    public class InvestorContactDTO
    {
        public Guid InvContactID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string FaxNumber { get; set; }
        public string ContactNote { get; set; }
        public List<InvestorContactGroupRefDTO> InvestorContactGroup { get; set; }
 
    }

    public class InvestorContactGroupRefDTO
    {
        public List<InvestorEntity> InvestorEntity { get; set; }
        public string ContactGroup { get; set; }
        public string Fund { get; set; }
    }

}
