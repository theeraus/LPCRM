using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LPCRM.Entity.Model
{
    public class InvestorContact : BaseEntity
    { 
        [Key]
        public Guid InvContactID { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "The Field cannot be 4 to 50 characters.")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "The Field cannot be 4 to 50 characters.")]
        public string LastName { get; set; }

        public string Title { get; set; }

        public string Email { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string FaxNumber { get; set; }
        public string ContactNote { get; set; }

        public List<ContactList> ContactList { get; set; }


    }
}
