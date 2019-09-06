using LPCRM.Entity;
using LPCRM.Entity.ApiModel;
using LPCRM.Entity.Model;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Services
{
    public interface IMasterDataService 
    {
        List<SelectItemModel> GetContactType();
        List<SelectItemModel> GetInvestorEntity();
        List<SelectItemModel> GetFund();
    }

    public class MasterDataService : IMasterDataService
    {
        private readonly MyContext _context;
        public MasterDataService()
        {
            _context = new MyContext();
        }

        public List<SelectItemModel> GetContactType()
        {
            var result = _context.ContactType
                .Select(t=> new SelectItemModel { Value = t.ContactTypeId, Text=t.ContactTypeName });
            return result.ToList();
        }

        public List<SelectItemModel> GetFund()
        {
            var result = _context.FundVehicle
             .Select(t => new SelectItemModel { Value = t.FundVehicleId, Text = t.FundVehicleName });
            return result.ToList();
        }

        public List<SelectItemModel> GetInvestorEntity()
        {
            var result = _context.InvestorEntity
                .Select(t => new SelectItemModel { Value = t.InvestorEntityId, Text = t.InvestorEntityName });
            return result.ToList();
        }
    }
}
