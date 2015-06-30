using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNET5Experimental.Models
{
    public class CourseTrackerDTO
    {
        public int CourseTrackerId { get; set; }
        public string CourseTitle { get; set; }
        public string Author { get; set; }
        public bool IsCompleted { get; set; }
    }
}
