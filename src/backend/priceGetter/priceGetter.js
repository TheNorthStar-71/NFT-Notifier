async function getCollectionStats(collectionName) {

    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    let response = await fetch('https://api.opensea.io/api/v1/collection/' + collectionName + '/stats', options)

    let data = await response.json();

    return data.stats;
}

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


// --- init test page ///
let result;

(async() => {
    result = await getCollectionStats("cryptopunks");
    console.log(result)
})();