(async function getCollectionStats(collectionName) {

    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    let response = await fetch('https://api.opensea.io/api/v1/collection/' + collectionName + '/stats', options)
        //.then(response => response.json())
        //.then(response => { return response.stats })
        //.catch(err => console.error(err));

    let data = await response.json();
    console.log(data.stats)
    return data.stats;
})();