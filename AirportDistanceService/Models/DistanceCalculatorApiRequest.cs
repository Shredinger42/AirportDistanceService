using System.ComponentModel.DataAnnotations;

namespace AirportDistanceService.Models
{
    public class DistanceCalculatorApiRequest
    {
        [Required]
        public Location FirstAirportLocation { get; set; }
        [Required]
        public Location SecondAirportLocation { get; set; }
    }
}
