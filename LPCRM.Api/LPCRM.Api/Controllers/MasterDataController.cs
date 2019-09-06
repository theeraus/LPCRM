using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LPCRM.Common;
using LPCRM.Configuration;
using LPCRM.Entity.ApiModel;
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
    public class MasterDataController : Controller
    {
        private static IMasterDataService _service;
        public MasterDataController(IMasterDataService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpGet("get_investor_entity")]
        public ApiResultBase<List<SelectItemModel>> GetInvestorEntity()
        {
            ApiResultBase<List<SelectItemModel>> res = new ApiResultBase<List<SelectItemModel>>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.GetInvestorEntity();
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
        [HttpGet("get_contact_type")]
        public ApiResultBase<List<SelectItemModel>> GetContactType()
        {
            ApiResultBase<List<SelectItemModel>> res = new ApiResultBase<List<SelectItemModel>>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.GetContactType();
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
        [HttpGet("get_fund")]
        public ApiResultBase<List<SelectItemModel>> GetFund()
        {
            ApiResultBase<List<SelectItemModel>> res = new ApiResultBase<List<SelectItemModel>>();
            try
            {
                res.RequestTime = DateTime.Now;
                res.Result = _service.GetFund();
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

    }
}