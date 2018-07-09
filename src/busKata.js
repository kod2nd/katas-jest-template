const busKata = (busStops) => {

    
    const numOfPeople = busStops.reduce((peopleOnBus, busStop) => {
        return peopleOnBus < 0 ? peopleOnBus : peopleOnBus + busStop[0] - busStop[1]
    }, 0);

    return (numOfPeople < 0) ? 'invalid input!' : numOfPeople

}

module.exports = busKata


