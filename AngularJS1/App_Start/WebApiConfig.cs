using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AngularJS1
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
             //application does not work without the code below
    //        config.Formatters.JsonFormatter.SerializerSettings.PreserveReferencesHandling =
    //Newtonsoft.Json.PreserveReferencesHandling.All;
    //        config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
