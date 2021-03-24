using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TriquiGame.Models
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext> options):base(options)
        {

        }
        public DbSet<User> User { get; set; }
        public DbSet<IdentificationType> IdentificationType { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().HasData(
                new User { Name = "Will", LastName = "Marine" },
                new User { Name = "Admin", LastName = "Example" },
                new User { Name = "Test1", LastName = "Example" },
                new User { Name = "Test2", LastName = "Example" }
                );
        }
    }
}
