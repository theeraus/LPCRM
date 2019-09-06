using Innofactor.EfCoreJsonValueConverter;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LPCRM.Entity.Model
{
    public class ContactGroupType : BaseEntity
    { 
        [Key]
        public Guid ContactGroupTypeId { get; set; }
        public Guid InvestorContactGroupId { get; set; }

        [JsonField]
        [Column(TypeName = "json")]
        public List<ContactType> ContactType { get; set; }
        public List<ContactList> ContactList { get; set; }
        public InvestorContactGroup InvestorContactGroup { get; set; }
    }
}
