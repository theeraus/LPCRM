using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Entity.ApiModel
{
    public class ApiStatusModel
    {
        public string App_name { get; set; }
        public string Version { get; set; }
        public string Update_date { get; set; }
        public string Envoloment { get; set; }
        public DateTime DateTime { get; set; }
    }

    public class SelectItemModel
    {
        public int Value { get; set; }
        public string Text { get; set; }
    }
}
