using ASPNET5Experimental.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNET5Experimental.Models
{
    public class CourseDTO
    {
        public string Author { get; internal set; }
        public int CourseId { get; internal set; }
        public int Duration { get; internal set; }
        public string Title { get; internal set; }
        public CourseTracker Tracked { get; internal set; }
    }
}
