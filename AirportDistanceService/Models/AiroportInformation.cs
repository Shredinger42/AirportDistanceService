namespace AirportDistanceService.Models
{
    public sealed class AiroportInformation
    {
        public string Country { get; set; }
        public string City_IATA { get; set; }
        public string IATA { get; set; }
        public string City { get; set; }
        public string Timezone_Region_Name { get; set; }
        public string Country_IATA { get; set; }
        public int Rating { get; set; }
        public string Name { get; set; }
        public Location Location { get; set; }
        public string Type { get; set; }
        public int Hubs { get; set; }
    }
}
