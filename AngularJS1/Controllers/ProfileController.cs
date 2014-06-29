using AngularJS1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJS1.Controllers
{
    public class ProfileController : Controller
    {
        //
        // GET: /Profile/
        public ActionResult Edit()
        {
            return this.View();
        }

        [HttpPost]
        public ActionResult Edit(User user)
        {
            return this.View(user);
        }
	}
}