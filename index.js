function distanceFromHqInBlocks(streetNumber) {
    if(streetNumber < 42){
        return 42 - streetNumber
    } else {
        return streetNumber - 42
    }
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(start, destination) {
    if(destination > start) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if(distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}