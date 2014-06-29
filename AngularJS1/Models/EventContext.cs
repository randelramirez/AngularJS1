using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace AngularJS1.Models
{
    public class EventContext : DbContext
    {
        public DbSet<Event> Events { get; set; }

        public DbSet<Session> Sessions { get; set; }
    }
}
