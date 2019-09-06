using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LPCRM.Entity.Model
{
    public class FundVehicle 
    { 
        [Key]
        public int FundVehicleId { get; set; }
        public string FundVehicleName { get; set; }
    }
}
