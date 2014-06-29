using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJS1.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public DateTime Date { get; set; }

        public string Time { get; set; }

        public Location Location { get; set; }

        public string ImageUrl { get; set; }

        public  ICollection<Session> Sessions { get; set; }



        //public virtual int Id { get; set; }
        //public virtual string Name { get; set; }

        //public virtual DateTime Date { get; set; }

        //public virtual string Time { get; set; }

        //public virtual Location Location { get; set; }

        //public virtual string ImageUrl { get; set; }

        //public virtual ICollection<Session> Sessions { get; set; }
    }
}