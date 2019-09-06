using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LPCRM.Entity.Model
{
    public class ContactGroup : BaseEntity
    { 
        [Key]
        public Guid ContactGroupId { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 4, ErrorMessage = "The Field cannot be 4 to 50 characters.")]
        public string InvestorGroupName { get; set; }

        [Required]
        public int FundVehicleId { get; set; }

        public FundVehicle FundVehicle { get; set; }
        public List<InvestorContactGroup> InvestorContactGroup { get; set; }
    }
}
