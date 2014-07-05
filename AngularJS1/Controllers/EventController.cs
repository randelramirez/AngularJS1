using AngularJS1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace AngularJS1.Controllers
{
    public class EventController : Controller
    {
        //
        // GET: /Event/

        private EventContext db = new EventContext();

        public ActionResult GetAll()
        {
            return this.Json(db.Events.Select(e => new { Id = e.Id, Name = e.Name, Date = e.Date, Location = e.Location, ImageUrl = e.ImageUrl, Time = e.Time, Sessions = e.Sessions }), JsonRequestBehavior.AllowGet);
        }


        public ActionResult Get(int id)
        {
            // maybe e.sessions should not use .Select(e =>) if it is not being lazy loaded
            // turn-off lazy loading when serializing

            // will work if session is virtual 
            //var x = db.Events.First().Sessions.First().Name;
            //ViewBag.Title = "";
            //var events = db.Events.ToList().Select(e => new { Id = e.Id, Name = e.Name, Location = e.Location, ImageUrl = e.ImageUrl, Time = e.Time, Sessions = e.Sessions.Select(s => new {Id = s.Id, Name = s.Name }) });

            // this worked if not all properties are marked virtual
            // worked if ICollection<Session> is virtual
            // if MARS is not enabled, ICollection<Session> can either be virtual or not and it will work 
            //return this.Json(db.Events.Include(e => e.Sessions).Select(e => new { Id = e.Id, Name = e.Name, Location = e.Location, ImageUrl = e.ImageUrl, Time = e.Time, Sessions = e.Sessions }), JsonRequestBehavior.AllowGet);

            // works with List<Session> and MARS disabled
            // also works event without mars, note inlcude is not called
            // does not work with ICollection<Session> virtual, probably in List also....
            //this.Response.AddHeader("Access-Control-Allow-Origin", "*");
            //this.Response.AddHeader("sample", "x123");
            

            return this.Json(db.Events.Select(e => new { Id = e.Id, Name = e.Name, Date = e.Date, Location = e.Location, ImageUrl = e.ImageUrl, Time = e.Time, Sessions = e.Sessions }).Single( e => e.Id == id), JsonRequestBehavior.AllowGet);

            // MARS should be in the connection string for lazy loading
            // all properties are marked virtual
            //return this.Json(db.Events.Include(e => e.Sessions).Select(e => new { Id = e.Id, Name = e.Name, Location = e.Location, ImageUrl = e.ImageUrl, Time = e.Time, Sessions = e.Sessions.Select(s => new { Id = s.Id, Name = s.Name }) }), JsonRequestBehavior.AllowGet);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Edit(Event eventToUpdate)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Event eventParameter)
        {
            this.db.Events.Add(eventParameter);
            this.db.SaveChanges();
            return View(eventParameter);
        }

      
	}
}