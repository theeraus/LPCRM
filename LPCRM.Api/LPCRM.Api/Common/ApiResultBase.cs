using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace LPCRM.Common
{
    public class ApiResultBase<T>
    {
        public ApiResultBase()
        {
            StatusCode = "200";
            RequestTime = DateTime.Now;
        }
        [DataMember(Name = "message_body")]
        public string Message { get; set; }

        [DataMember(Name = "system_error_message")]
        public string SystemErrorMessage { get; set; }

        [DataMember(Name = "status_code")]
        public string StatusCode { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DataMember(Name = "request_time")]
        public DateTime RequestTime { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DataMember(Name = "response_time")]
        public DateTime ResponseTime { get; set; }

        [DataMember(Name = "query_time")]
        public TimeSpan QueryTime { get; set; }

        [DataMember(Name = "result")]
        public T Result { get; set; }
    }
}
