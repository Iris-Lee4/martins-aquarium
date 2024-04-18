import { getFish } from '../database.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish - divisible by 3 fish
    const holyFish = []

    const fishes = getFish();

    for (const fish of fishes) {
        if(fish.size % 3 === 0) {
            holyFish.push(fish);
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish - divisible by 5 fish
    const soldiers =[]
    
    const fishes = getFish();

    for (const fish of fishes) {
        if(fish.size % 5 === 0) {
            soldiers.push(fish);
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    const fishes = getFish();

    for(const fish of fishes) {
        if(!(fish.size % 3 === 0 || fish.size % 5 === 0)) {
            regularFish.push(fish);
        }
    }
    return regularFish
}