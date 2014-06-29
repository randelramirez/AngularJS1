using AngularJS1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJS1.Controllers
{
    public class EventDetailsController : Controller
    {
        private EventContext db;

        public EventDetailsController()
        {
            this.db = new EventContext();
        }

        //
        // GET: /EventDetails/
        public ActionResult Index()
        {
            //ViewBag.Title = "";
            return View();
        }

        
	}
}