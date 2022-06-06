using AirportDistanceService.Models;
using System;

namespace AirportDistanceService
{
    internal sealed class DistanceCalculator
    {
        public double Calculate(Location firstDistance, Location secondDistance)
        {
            var baseRad = Math.PI * firstDistance.Lat / 180;
            var targetRad = Math.PI * secondDistance.Lat / 180;
            var theta = firstDistance.Lon - secondDistance.Lon;
            var thetaRad = Math.PI * theta / 180;

            double dist =
                Math.Sin(baseRad) * Math.Sin(targetRad) + Math.Cos(baseRad) *
                Math.Cos(targetRad) * Math.Cos(thetaRad);
            dist = Math.Acos(dist);

            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;

            return dist * 1.609344;
        }
    }
}
