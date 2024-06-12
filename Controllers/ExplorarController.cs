using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twitter.Controllers
{
    public class ExplorarController : Controller
    {
        public IActionResult Explorar()
        {
            return View();
        }
    }
}
