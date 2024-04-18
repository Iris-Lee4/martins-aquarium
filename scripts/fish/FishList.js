// Import the function that returns a copy of the fish array
import { getFish } from '../database.js';
import { mostHolyFish, soldierFish, nonHolyFish } from './fishFilter.js';

//mostHolyfish first 
export const holyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = mostHolyFish()

    // Start building a string filled with HTML syntax
    let holyHtmlString = '<h3>Most Holy Fish</h3><article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        holyHtmlString += `<section class="fish">
            <figure><img  class="fish__pic" src="${fish.picture}" /><figcaption class="fish_name">${fish.name}</figcaption></figure>
            <ul>
            <li class="fish__detail">species: ${fish.species}</li>
            <li class="fish__detail">size: ${fish.size}</li>
            <li class="fish__detail">location: ${fish.location}</li>
            <li class="fish__detail">food: ${fish.food}</li>
            </ul>
        </section>
`
    }
    holyHtmlString += `</article>`

    return holyHtmlString
}

//then soldier fish
export const soldierFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = soldierFish()

    // Start building a string filled with HTML syntax
    let soldierHtmlString = '<h3>Soldier Fish</h3><article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        soldierHtmlString += `<section class="fish">
            <figure><img  class="fish__pic" src="${fish.picture}" /><figcaption class="fish_name">${fish.name}</figcaption></figure>
            <ul>
            <li class="fish__detail">species: ${fish.species}</li>
            <li class="fish__detail">size: ${fish.size}</li>
            <li class="fish__detail">location: ${fish.location}</li>
            <li class="fish__detail">food: ${fish.food}</li>
            </ul>
        </section>
`
    }
    soldierHtmlString += `</article>`

    return soldierHtmlString
}

//then rest of fish
export const nonHolyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = nonHolyFish()

    // Start building a string filled with HTML syntax
    let nonHtmlString = '<h3>Etc</h3><article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        nonHtmlString += `<h1>Fish List</h1><section class="fish">
            <figure><img  class="fish__pic" src="${fish.picture}" /><figcaption class="fish_name">${fish.name}</figcaption></figure>
            <ul>
            <li class="fish__detail">species: ${fish.species}</li>
            <li class="fish__detail">size: ${fish.size}</li>
            <li class="fish__detail">location: ${fish.location}</li>
            <li class="fish__detail">food: ${fish.food}</li>
            </ul>
        </section>
`
    }
    nonHtmlString += `</article>`

    return nonHtmlString
}