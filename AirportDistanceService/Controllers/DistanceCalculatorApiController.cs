using AirportDistanceService.Models;
using Microsoft.AspNetCore.Mvc;

namespace AirportDistanceService.Controllers
{
    [Route("[controller]")]
    public class DistanceCalculatorApiController : Controller
    {
        [HttpGet("[action]")]
        public double CalculateDistanceBetweenAirports(DistanceCalculatorApiRequest request)
        {
            if (!ModelState.IsValid)
            {
                return default;
            }
            var calculator = new DistanceCalculator();
            return calculator.Calculate(request.FirstAirportLocation, request.SecondAirportLocation);
        }
    }
}
