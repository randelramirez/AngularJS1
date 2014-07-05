using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AngularJS1
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            //routes.IgnoreRoute("{file}.html");

            //routes.MapRoute(
            //    name: "Application",
            //    url: "{*url}",
            //    defaults: new { controller = "SinglePage", action = "Index" }
            //);

            // Route override to work with Angularjs and HTML5 routing
            //routes.MapRoute(
            //    name: "Application1Override",
            //    url: "{*.}",
            //    defaults: new { controller = "SinglePage", action = "Index" }
            //);

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );




        }
    }
}
