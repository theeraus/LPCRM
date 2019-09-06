using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LPCRM.Api.Entity.ApiModel;
using LPCRM.Common;
using LPCRM.Configuration;
using LPCRM.Entity.DTO;
using LPCRM.Entity.Model;
using LPCRM.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LPCRM.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class InvestorContactController : Controller
    {
        private static IInvestorContactService _service;
        public InvestorContactController(IInvestorContactService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public ApiResultBase<InvestorContact> Get(string id)
        {
            ApiResultBase<InvestorContact> res = new ApiResultBase<InvestorContact>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.Get(id);
                res.ResponseTime = DateTime.Now;
                res.QueryTime = res.ResponseTime - res.RequestTime;
            }
            catch (Exception ex)
            {
                res.StatusCode = Constant.ErrorCodeSystem.SystemError;
                res.Message = Constant.ErrorMessage.SystemError;
                res.SystemErrorMessage = ex.Message;
            }

            return res;
        }

        [AllowAnonymous]
        [HttpPost("add")]
        public ApiResultBase<string> Add([FromBody]InvestorContact param)
        {
            ApiResultBase<string> res = new ApiResultBase<string>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.Add(param);
                res.ResponseTime = DateTime.Now;
                res.QueryTime = res.ResponseTime - res.RequestTime;
            }
            catch (Exception ex)
            {
                res.StatusCode = Constant.ErrorCodeSystem.SystemError;
                res.Message = Constant.ErrorMessage.SystemError;
                res.SystemErrorMessage = ex.Message;
            }

            return res;
        }

        [AllowAnonymous]
        [HttpPost("fillter")]
        public ApiResultBase<List<InvestorContactDTO>> Fillter([FromBody]List<FillterModel> param)
        {
            ApiResultBase<List<InvestorContactDTO>> res = new ApiResultBase<List<InvestorContactDTO>>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.Fillter(param);
                res.ResponseTime = DateTime.Now;
                res.QueryTime = res.ResponseTime - res.RequestTime;
            }
            catch (Exception ex)
            {
                res.StatusCode = Constant.ErrorCodeSystem.SystemError;
                res.Message = Constant.ErrorMessage.SystemError;
                res.SystemErrorMessage = ex.Message;
            }

            return res;
        }

        [AllowAnonymous]
        [HttpPut("update")]
        public ApiResultBase<string> Update([FromBody]InvestorContact param)
        {
            ApiResultBase<string> res = new ApiResultBase<string>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.Update(param);
                res.ResponseTime = DateTime.Now;
                res.QueryTime = res.ResponseTime - res.RequestTime;
            }
            catch (Exception ex)
            {
                res.StatusCode = Constant.ErrorCodeSystem.SystemError;
                res.Message = Constant.ErrorMessage.SystemError;
                res.SystemErrorMessage = ex.Message;
            }

            return res;
        }

        [AllowAnonymous]
        [HttpPut("delete")]
        public ApiResultBase<bool> Delete([FromBody]InvestorContact param)
        {
            ApiResultBase<bool> res = new ApiResultBase<bool>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.Delete(param);
                res.ResponseTime = DateTime.Now;
                res.QueryTime = res.ResponseTime - res.RequestTime;
            }
            catch (Exception ex)
            {
                res.Result = false;
                res.StatusCode = Constant.ErrorCodeSystem.SystemError;
                res.Message = Constant.ErrorMessage.SystemError;
                res.SystemErrorMessage = ex.Message;
            }

            return res;
        }
    }
}