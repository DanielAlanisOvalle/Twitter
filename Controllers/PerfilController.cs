﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twitter.Controllers
{
    public class PerfilController : Controller
    {
        public IActionResult Perfil()
        {
            return View();
        }
    }
}
