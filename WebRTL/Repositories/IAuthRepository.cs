using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebRTL.Models;
namespace WebRTL.Repositories
{
   public interface IAuthRepository
    {
        Task<TblUser> Register(TblUser user, string password);
        Task<TblUser> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
