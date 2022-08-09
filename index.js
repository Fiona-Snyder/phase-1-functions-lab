// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const Hq = 42
    let numberOfBlocks
    if (pickupLocation > Hq) {
        return numberOfBlocks = pickupLocation - Hq
    } else {
        return numberOfBlocks = -(pickupLocation - Hq)
    }
}

function distanceFromHqInFeet(pickupLocation) {
    let numberOfFeet
    return numberOfFeet = distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
    let numberOfFtTravelled
    if (start > destination) {
        return numberOfFtTravelled = (start - destination) * 264
    } else {
        return numberOfFtTravelled = (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance
    distance = distanceTravelledInFeet(start, destination)
    let price
    if (distance <= 400) {
        return price = 0
    } else if (distance > 400 && distance <= 2000) {
        return price = (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        return price = 25
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
}
