using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AngularJS1.Models
{
    public class Session
    //{
    //     name: 'Directives Masterclass',
    //                creatorName: 'Bob Smith',
    //                duration: 1,
    //                level: 'Advanced',
    //                abstract: 'In this sesison you will learn the ins and outs of directives!',
    //                upVoteCount: 0
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string CreatorName { get; set; }

        public int Duration { get; set; }

        public string Level { get; set; }

        public string Abstract { get; set; }
        public int UpVoteCount { get; set; }

        [ForeignKey("Event")]
        public int EventId { get; set; }

        public Event Event { get; set; }



        //public virtual int Id { get; set; }

        //public virtual string Name { get; set; }

        //public virtual string CreatorName { get; set; }

        //public virtual int Duration { get; set; }

        //public virtual string Level { get; set; }

        //public virtual string Abstract { get; set; }
        //public virtual int UpVoteCount { get; set; }

        //[ForeignKey("Event")]
        //public virtual int EventId { get; set; }

        //public virtual Event Event { get; set; }

    }
}