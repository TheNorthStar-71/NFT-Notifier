export { createUser };

function createUser(username, trackerList) {
    return {
        username,
        trackerList, //trackerList is an list of objects that contain a collection name and a target price for that collection
        // e.g. each trackerList object should be of the form {collectionName: 'XXXX', targetPrice: XXXX}

        getUsername() {
            return this.username;
        },

        getTrackerList() {
            return this.trackerList;
        },

        removeFromTrackerList(collectionName) {
            //TBI
            //remove collection collectionName from trackerList
        },

        addToTrackerList(collectionName, targetPrice) {
            this.trackerList.push({ collectionName, targetPrice });
        },

        getTrackingCount() {
            return trackerList.length;
        },

        checkIfCollectionIsTracked(collectionName) {
            return [...this.trackerList].some(item => item.collectionName === collectionName);
        },

        getPriceTargetOfCollection(collectionName) {
            let result = [...this.trackerList].find(x => x.collectionName === collectionName).targetPrice;
            if (result > 0) {
                return result;
            } else {
                throw new Error("getPriceTargetOfCollection did not find the collection " + collectionName + " in the tracker list of " + this.username);
            }
        },

        setTargetPrice(collectionName, targetPrice) {
            let result = [...this.trackerList].find(x => x.collectionName === collectionName).targetPrice;
            if (result > 0) {
                result.targetPrice = targetPrice;
            } else {
                throw new Error("setTargetPrice did not find the collection " + collectionName + " in the tracker list of " + this.username);
            }
        }
    }
}