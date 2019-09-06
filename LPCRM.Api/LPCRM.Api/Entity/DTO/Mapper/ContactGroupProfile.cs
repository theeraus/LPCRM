using LPCRM.Entity;
using LPCRM.Entity.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPCRM.Entity.DTO
{
    public class ContactGroupProfile : BaseProfile
    {
        public ContactGroupProfile()
        {
            CreateMap<InvestorContactGroup, InvestorContactGroupDTO>();
            CreateMap<ContactGroupType, ContactGroupTypeDTO>();
            CreateMap<ContactGroup, ContactGroupDTO>()
                   .ForMember(dest => dest.FundVehicleName, opt => opt.MapFrom(src => src.FundVehicle.FundVehicleName));

            CreateMap<ContactList, ContactListDTO>()
                   .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.InvestorContact.FirstName))
                   .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.InvestorContact.LastName))
                   .ForMember(dest => dest.FulllName, opt => opt.MapFrom(src => src.InvestorContact.FirstName + " " + src.InvestorContact.LastName))
                   .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.InvestorContact.Email))
                   .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.InvestorContact.Address))
                   .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.InvestorContact.PhoneNumber));

            CreateMap<InvestorContact, InvestorContactDTO>()
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.FirstName + " " + src.LastName));
        }
    }
}
