import axios from "axios";

class DetailsPage {

    getHoroscope = async(zodiac) => {
        try {
            const options = {
                method: "GET",
                url: `https://horoscope34.p.rapidapi.com/api/horoscope/today`,
                headers: {
                    'X-RapidAPI-Key': '98c2784820msh1aef1af91e59944p169722jsn9feeceae1f3e',
                    'X-RapidAPI-Host': 'horoscope34.p.rapidapi.com'
                }
            }
            const response = await axios.request(options);
            return response.data.payload[zodiac]
        } catch (error) {
            console.log("in fetchHoroscope catch error with an error of: ", error)
        }
    }
    
}

export default new DetailsPage()