using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LPCRM.Configuration;
using LPCRM.Entity.ApiModel;
using Microsoft.AspNetCore.Mvc;

namespace LPCRM.Api.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<ApiStatusModel> Get()
        {
            ApiStatusModel version = new ApiStatusModel();
            version.App_name = Configurator.AppName;
            version.Version = Configurator.Version;
            version.Update_date = Configurator.AppUpdate;
            version.Envoloment = Configurator.EnvironmentName;
            version.DateTime = DateTime.Now;

            return version;
        }
    }
}
