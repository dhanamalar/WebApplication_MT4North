using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedtechInnovationModel.Models
{
    public class ApplicationUser : IdentityUser
    {
        [PersonalData]
        public string FirstName { get; set; }

        [PersonalData]
        public string LastName { get; set; }

        [PersonalData]
        public string Sex { get; set; }

        [PersonalData]
        public string County { get; set; }

        [PersonalData]
        public string CompanyName { get; set; }

        [PersonalData]
        public string ProfilePicture { get; set; }

        [PersonalData]
        public string UserType { get; set; }

        [PersonalData]
        public string CompanySize { get; set; }
    }
}
