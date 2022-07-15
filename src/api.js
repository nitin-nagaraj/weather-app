const api_key = process.env.RAPID_API_KEY;

export const geoApiOptions = {
    
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd1894adf9msh5d0909a20a20070p12028cjsne87997613922',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "dfc8c83491a434239f0a327f7a9c12aa";
