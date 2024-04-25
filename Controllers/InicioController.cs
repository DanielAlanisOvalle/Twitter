using Microsoft.AspNetCore.Mvc;

namespace Twitter.Controllers
{
    public class InicioController : Controller
    {
        public IActionResult Inicio()
        {
            return View();
        }
    }
}
