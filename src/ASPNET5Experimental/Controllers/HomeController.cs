
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Identity;

namespace ASPNET5Experimental.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.UserName = "Faked User 11";

            if (User.Identity.IsAuthenticated)
            {
                ViewBag.UserName = User.Identity.Name;
            }
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}
