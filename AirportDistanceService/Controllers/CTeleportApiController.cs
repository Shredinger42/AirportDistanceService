using AirportDistanceService.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace AirportDistanceService.Controllers
{
    [Route("[controller]")]
    public class CTeleportApiController : Controller
    {
        [HttpGet("[action]")]
        public async Task<AiroportInformation> GetAirportInformation(AirportInformationRequest airportInformationRequest)
        {
            var url = $"https://places-dev.cteleport.com/airports/{airportInformationRequest.AirportCodeIATA}";
            var result = await _client.GetAsync(url);
            var resultParse = await result.Content.ReadAsAsync(typeof(AiroportInformation));
            return resultParse as AiroportInformation;
        }

        private readonly HttpClient _client = new HttpClient();
    }
}
