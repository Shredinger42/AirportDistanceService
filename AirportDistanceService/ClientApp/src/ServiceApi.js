export class ServiceApi {
    async getAirportInfo(airportCode) {
        return await this.sendRequest(`CTeleportApi/GetAirportInformation?AirportCodeIATA=${airportCode}`);
    }

    async calculateDistanceBetweenAirports(locationOfFirstAirport, locationOfSecondAirport) {
        const url = `DistanceCalculatorApi/CalculateDistanceBetweenAirports?` +
            `FirstAirportLocation.lat=${locationOfFirstAirport.lat}&` +
            `FirstAirportLocation.lon=${locationOfFirstAirport.lon}&` +
            `SecondAirportLocation.lat=${locationOfSecondAirport.lat}&` +
            `SecondAirportLocation.lon=${locationOfSecondAirport.lon}`;

        return await this.sendRequest(url);
    }

    async sendRequest(url) {
        const response = await fetch(url)
        return await response.json();
    }
}
