using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twitter.Controllers
{
    public class ExtrasController : Controller
    {
        public IActionResult Extras()
        {
            return View();
        }
    }
}
