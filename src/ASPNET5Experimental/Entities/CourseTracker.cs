﻿using ASPNET5Experimental.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNET5Experimental.Entities
{
    public class CourseTracker
    {
        public int CourseTrackerID { get; set; }
        public int CourseID { get; set; }
        public string ApplicationUserId { get; set; }
        public bool IsCompleted { get; set; }
        public virtual Course Course { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
