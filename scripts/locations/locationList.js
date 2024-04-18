import { getLocations } from "../database.js";

export const locationsList = () => {
    const locations = getLocations();
    let locationsString = '<h2>Martin\'s Fish Locations</h2><div class="locationsList"><ol>'
    for (const location of locations) {
        locationsString += `<li>${location.name}</li>`
    }
    locationsString += `</ol></div>`
    return locationsString
}