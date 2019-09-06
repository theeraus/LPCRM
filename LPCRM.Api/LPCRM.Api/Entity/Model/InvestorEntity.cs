using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LPCRM.Entity.Model
{
    public class InvestorEntity 
    { 
        [Key]
        public int InvestorEntityId { get; set; }
        public string InvestorEntityName { get; set; }
    }
}
