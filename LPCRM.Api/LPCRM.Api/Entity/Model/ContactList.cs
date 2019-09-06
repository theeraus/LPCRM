using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LPCRM.Entity.Model
{
    public class ContactList : BaseEntity
    { 
        [Key]
        public Guid ContactListId { get; set; }
        [Required]
        public Guid ContactGroupTypeId { get; set; }
        [Required]
        public Guid InvContactID { get; set; }
        public DateTime ContactValidFrom { get; set; }
        public string ContactValidTo { get; set; }
        public bool IsCurrentContact { get; set; }
        public bool IsAttachment { get; set; }
        public bool IsAdvisoryBoard { get; set; }
        public InvestorContact InvestorContact { get; set; }
        public ContactGroupType ContactGroupType { get; set; }
    }
}
