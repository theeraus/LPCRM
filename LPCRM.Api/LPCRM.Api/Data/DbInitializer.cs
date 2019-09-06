using LPCRM.Entity;
using LPCRM.Entity.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Data
{
    public class DbInitializer
    {
        public static void Initialize(MyContext context)
        {
            // Look for any.
            if (context.FundVehicle.Any())
            {
                return;   // DB has been seeded
            }

            string contactType = @"data/json/contact_type.json";
            string investorEntity = @"data/json/investor_entity.json";
            string fund = @"data/json/fund.json";

            using (StreamReader r = new StreamReader(fund))
            {
                var json = r.ReadToEnd();
                var data = JsonConvert.DeserializeObject<List<FundVehicle>>(json);
                data.ToList().ForEach(dba =>
                {
                    context.FundVehicle.Add(dba);
                });
                context.SaveChanges();
            }

            using (StreamReader r = new StreamReader(contactType))
            {
                var json = r.ReadToEnd();
                var data = JsonConvert.DeserializeObject<List<ContactType>>(json);
                data.ToList().ForEach(dba =>
                {
                    context.ContactType.Add(dba);
                });
                context.SaveChanges();
            }

            using (StreamReader r = new StreamReader(investorEntity))
            {
                var json = r.ReadToEnd();
                var data = JsonConvert.DeserializeObject<List<InvestorEntity>>(json);
                data.ToList().ForEach(dba =>
                {
                    context.InvestorEntity.Add(dba);
                });
                context.SaveChanges();
            }

        }
    }
}
