using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LPCRM.Entity.Model
{
    public class ContactType 
    { 
        [Key]
        public int ContactTypeId { get; set; }
        public string ContactTypeName { get; set; }
    }
}
