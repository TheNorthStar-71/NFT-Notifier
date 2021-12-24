export { getCollectionStats, getFloorPrice, maintainFloorPriceStatus }

async function getCollectionStats(collectionName) {
    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    let response = await fetch('https://api.opensea.io/api/v1/collection/' + collectionName + '/stats', options)

    let data = await response.json();

    return data.stats;
}

async function getFloorPrice(collectionName) {
    let response = await getCollectionStats(collectionName);

    //console.log(response.floor_price);
    return response.floor_price;
}

async function maintainFloorPriceStatus(collectionName, updateInterval, checkStopCondition) {
    // stopCondition is some function that checks the value of an outside boolean variable
    // updateInterval in units of milliseconds
    let count = 0;
    while (!checkStopCondition()) {
        let latestFloorPrice = await getFloorPrice(collectionName);

        document.getElementById("fp").textContent = latestFloorPrice;

        await new Promise(r => setTimeout(r, updateInterval)); //why does this need to be written this way?

        console.log(++count)
    }
}




//////////////////////////////////////

/* OpenSea API stats list
average_price
count
floor_price
market_cap
num_owners
num_reports
one_day_average_price
one_day_change
one_day_sales
one_day_volume
seven_day_average_price
seven_day_change
seven_day_sales
seven_day_volume
thirty_day_average_price
thirty_day_change
thirty_day_sales
thirty_day_volume
total_sales
total_supply
total_volume
*/

/// --- init test page ///

/*
// this is to test maintainFloorPriceStatus
document.getElementById("stop").addEventListener("click", updateStopCondition);
let stop = false;

function updateStopCondition() {
    stop = true;
}

function getStopCondition() {
    return stop;
}

maintainFloorPriceStatus("nouns", 1000, getStopCondition);
*/

/* // this is to test getCollectionStats
let result;

(async() => {
    result = await getCollectionStats("cryptopunks");
    console.log(result)
})();
*/