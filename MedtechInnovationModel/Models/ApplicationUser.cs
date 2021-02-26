using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedtechInnovationModel.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Sex { get; set; }
        public string County { get; set; }
        public string CompanyName { get; set; }
        public string ProfilePicture { get; set; }
        public string UserType { get; set; }
        public string CompanySize { get; set; }
    }
}
