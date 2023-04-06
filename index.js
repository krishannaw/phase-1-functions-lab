function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264; // There are 264 feet per block in NYC
    const distanceInBlocks = Math.abs(42 - blocks); // Calculate the distance in blocks from HQ
    const distanceInFeet = distanceInBlocks * feetPerBlock; // Calculate the distance in feet
    return distanceInFeet; // Return the distance in feet
  }
  function distanceFromHqInBlocks(blocks) {
    const hqBlock = 42; // The headquarters block number is 42
    let distanceInBlocks = 0;
    if (blocks >= hqBlock) {
      distanceInBlocks = blocks - hqBlock;
    } else {
      distanceInBlocks = hqBlock - blocks;
    }
    return distanceInBlocks;
  }
  function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264; // There are 264 feet per block in NYC
    let distanceInBlocks = 0;
    if (start >= end) {
      distanceInBlocks = start - end;
    } else {
      distanceInBlocks = end - start;
    }
    const distanceInFeet = distanceInBlocks * feetPerBlock; // Calculate the distance in feet
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // There are 264 feet per block in NYC
    const freeFeet = 400; // The first 400 feet are free
    let distanceInFeet = 0;
    if (start >= destination) {
      distanceInFeet = (start - destination) * feetPerBlock;
    } else {
      distanceInFeet = (destination - start) * feetPerBlock;
    }
    if (distanceInFeet <= freeFeet) {
      return 0; // The first 400 feet are free
    } else if (distanceInFeet > freeFeet && distanceInFeet <= 2000) {
      return (distanceInFeet - freeFeet) * 0.02; // Charge 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Charge a flat fee of 25 dollars for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Do not allow rides over 2500 feet
    }
  }
  