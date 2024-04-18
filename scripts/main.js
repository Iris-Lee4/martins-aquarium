import { holyFishList, soldierFishList, nonHolyFishList  } from './fish/FishList.js';
import { tipList } from './tips/tipList.js';
import { locationsList } from './locations/locationList.js';

const holyString = holyFishList();
const soldierString = soldierFishList();
const nonHolyString = nonHolyFishList();

const fishList = 
    `${holyString}

    ${soldierString}

    ${nonHolyString}`

const parentHTMLElement = document.querySelector("#container")
parentHTMLElement.innerHTML = fishList;

const asideHTMLElement = document.querySelector("#sideBar")
asideHTMLElement.innerHTML = tipList();

const locationHTMLElement = document.querySelector("#locationList")
locationHTMLElement.innerHTML = locationsList();