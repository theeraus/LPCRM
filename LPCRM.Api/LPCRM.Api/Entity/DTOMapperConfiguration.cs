using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Entity
{
    public class DTOMapperConfiguration
    {
        [Obsolete]
        public static void Configure()
        {
            DTOMapper.Initialize(config => GetConfiguration(config));
        }
        private static void GetConfiguration(IMapperConfigurationExpression configuration)
        {
            var profiles = typeof(BaseProfile).Assembly.GetTypes().Where(x => typeof(Profile).IsAssignableFrom(x));

            foreach (var profile in profiles)
            {
                configuration.AddProfile(Activator.CreateInstance(profile) as Profile);
            }
        }
    }
}
