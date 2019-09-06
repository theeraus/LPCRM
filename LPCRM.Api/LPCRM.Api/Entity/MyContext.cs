using Innofactor.EfCoreJsonValueConverter;
using LPCRM.Configuration;
using LPCRM.Entity.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Entity
{
    public class MyContext : DbContext
    {
        [Obsolete]
        public static readonly LoggerFactory MyLoggerFactory
        = new LoggerFactory(new[] {
            new ConsoleLoggerProvider((category, level)
                => category == DbLoggerCategory.Database.Command.Name
                   && level == LogLevel.Information, true)
        });

        public DbSet<ContactGroup> ContactGroup { get; set; }
        public DbSet<ContactGroupType> ContactGroupType { get; set; }
        public DbSet<ContactList> ContactList { get; set; }
        public DbSet<ContactType> ContactType { get; set; }
        public DbSet<FundVehicle> FundVehicle { get; set; }
        public DbSet<InvestorContact> InvestorContact { get; set; }
        public DbSet<InvestorContactGroup> InvestorContactGroup { get; set; }
        public DbSet<InvestorEntity> InvestorEntity { get; set; }

        [Obsolete]
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder
                  .UseLoggerFactory(MyLoggerFactory)
                  .UseNpgsql(Configurator.SqlConnection);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<InvestorContactGroup>().Property(m => m.InvestorEntity);
            builder.Entity<ContactGroupType>().Property(m => m.ContactType);
            builder.AddJsonFields();

            base.OnModelCreating(builder);
        }
    }
}
