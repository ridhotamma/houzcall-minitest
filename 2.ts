import axios from "axios";
import dotenv from "dotenv";
import moment from "moment";

dotenv.config();

const api_key = process.env.WEATHER_API_KEY;

const generateTemp = async(): Promise<number[]> => {
    const dailyTemp: number[] = [];
    try {
        const response = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=-6.200000&lon=106.816666&units=metric&exclude=current,minutely,hourly&appid=${api_key}`);
        const tempData = response.data.daily;
        for(let i = 0; i < tempData.length; i++) {
            dailyTemp.push(tempData[i].temp.day)
        }
        return dailyTemp;
    } catch(error) {
        return error.message;
    }
}

const generateDay = (day: number): string[] => {
    const dayList: string[] = [];
    for(let i = 0; i <= day; i++) {
        const dayAfter: string = moment().add(i, 'days').format("dddd Do YYYY")
        dayList.push(dayAfter)
    }
    return dayList;
}

const main = async (): Promise<void> => {
    console.log("\n\n SOAL KEDUA \n ===============================");
    const temperature = await generateTemp();
    const days = await generateDay(7);
    console.log("Weather Forecast")
    for(let i = 0; i < days.length; i++) {
        console.log(days[i] + ": " + temperature[i] + " °C");
    }
}

main()