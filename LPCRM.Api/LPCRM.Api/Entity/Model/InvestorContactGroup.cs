using Innofactor.EfCoreJsonValueConverter;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LPCRM.Entity.Model
{
    public class InvestorContactGroup : BaseEntity
    { 
        [Key]
        public Guid InvestorContactGroupId { get; set; }
        public Guid ContactGroupId { get; set; }

        [JsonField]
        [Column(TypeName = "json")]
        public List<InvestorEntity>  InvestorEntity { get; set; }
        public List<ContactGroupType> ContactGroupTypes { get; set; }
        public ContactGroup ContactGroup { get; set; }
    }
}
