using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Entity
{
    public class DTOMapper : Mapper
    {
        public DTOMapper(IConfigurationProvider configurationProvider)
            : base(configurationProvider)
        {
        }

        public DTOMapper(IConfigurationProvider configurationProvider, Func<Type, object> serviceCtor)
            : base(configurationProvider, serviceCtor)
        {
        }
    }

    public class BaseProfile : Profile
    {
    }
}
