using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebRTL.Dtos;
using WebRTL.Models;

namespace WebRTL.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<LoginDto, TblUser>();
            CreateMap<RegisterDto, TblUser>();
        }
    }
}
