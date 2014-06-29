using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJS1.Models
{
    public class DataInitializer : DropCreateDatabaseIfModelChanges<EventContext>
    {

        protected override void Seed(EventContext context)
        {

            // name= "Angular Boot Camp",
            //date= "1/1/2013",
            //time= "10=30 am",
            //location= {
            //    address= "Google Headquarters",
            //    city= "Mountain View",
            //    province= "CA"
            //}
            var events = new List<Event>
            {
                new Event { Name = "Angular Boot Camp" , Date = new DateTime(2013,1,13), Time = "8am", 
                    ImageUrl = "img/angularjs-logo.png", 
                    Location = new Location 
                    { 
                        Address = "Google Headquarters",
                        City = "Mountain View",
                        Province = "CA"
                    }},
            };

            events.ForEach(e => context.Events.Add(e));
            context.SaveChanges();

            //sessions= [
            //    {
            //        name= "Directives Masterclass",
            //        creatorName= "Bob Smith",
            //        duration= 1,
            //        level= "Advanced",
            //        abstract= "In this sesison you will learn the ins and outs of directives!",
            //        upVoteCount= 0
            //    },
            //    {
            //        name= "Scopes for fun and profit",
            //        creatorName= "John Doe",
            //        duration= 2,
            //        level= "Introductory",
            //        abstract= "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
            //        upVoteCount= 0
            //    },
            //    {
            //        name= "Well Behaved Controllers",
            //        creatorName= "Jane Doe",
            //        duration= 4,
            //        level= "Intermediate",
            //        abstract= "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
            //        upVoteCount= 0
            //    }

            var sessions = new List<Session>
            {
                new Session { Name = "Directives Masterclass", CreatorName = "Bob Smith", Duration = 1, Level = "Advanced", Abstract = "In this sesison you will learn the ins and outs of directives!", UpVoteCount = 0, EventId = 1 },
                new Session {Name = "Scopes for fun and profit", CreatorName= "John Doe", Duration= 2, Level= "Introductory", Abstract= "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.", UpVoteCount= 0, EventId = 1 },
                new Session { Name= "Well Behaved Controllers", CreatorName= "Jane Doe", Duration= 4, Level= "Intermediate", Abstract= "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.", UpVoteCount= 0, EventId = 1}
            };

            sessions.ForEach(s => context.Sessions.Add(s));
        }
    }
}