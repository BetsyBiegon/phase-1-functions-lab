// Function to calculate the distance in blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

// Function to calculate the distance in feet from Scuber's headquarters to the pickup location
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function to calculate the distance traveled in feet given a starting block and an ending block
function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(endBlock - startBlock) * 264;
}

// Function to calculate the fare price based on the distance traveled
function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

// Exporting functions for testing
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};

