using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TriquiGame.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public String Name { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public String LastName { get; set; }
        [ForeignKey("IdentificationTypeFK")]
        public int IdentificationType { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public int IdentificationNumber { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public String Password { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public String Email { get; set; }
    }
}
