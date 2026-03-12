const prompt = require("prompt-sync")();
const Data = require("./data.json");

const getRiders = async (city) => {
    if (Data.cities.hasOwnProperty(city)) {
        return Data.cities[city];
    } else {
        return "City not found!";
    }
};

const bookaRide = (riders) => {
    const entries = Object.entries(riders);
    const min = 0;
    const max = entries.length - 1;
    while(true)
    {
        const ind = Math.floor(Math.random() * (max - min + 1)) + min;
        if(entries[ind][1]=='available')
        {
            return entries[ind][0];
        }
    }
};

const startRide = async () => {
    let city = prompt("Enter your location city: ");
    let riders = await getRiders(city);

    if (riders == "City not found!") {
        console.log("There is no facility for your area.");
    } else {
        let result = bookaRide(riders);
        console.log("Your Driver:", result);
    }
};

startRide();
