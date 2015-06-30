using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using ASPNET5Experimental.Models;
using System.Security.Claims;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ASPNET5Experimental.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        CourseRepository _repository;

        public CoursesController(CourseRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        public IEnumerable<CourseDTO> GetAllCourses()
        {
            return _repository.GetCourses((ClaimsIdentity)User.Identity);
        }
    }
}
