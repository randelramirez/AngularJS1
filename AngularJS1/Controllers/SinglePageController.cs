using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJS1.Controllers
{
    public class SinglePageController : Controller
    {
        // GET: SinglePage
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateEvent()
        {
            return View();
        }
    }
}