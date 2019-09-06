using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Entity
{
    public class BaseEntity
    {
        public BaseEntity()
        {
            IsActive = true;
            IsDeleted = false;
            Sorting = 1;
            CreatedDate = DateTime.Now;
            UpdatedDate = DateTime.Now;
            CreatedBy = "system";
        }
        public int? Sorting { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public string Remarks { get; set; }

        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd hh:mm:ss}", ApplyFormatInEditMode = true)]
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }

        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd hh:mm:ss}", ApplyFormatInEditMode = true)]
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}

