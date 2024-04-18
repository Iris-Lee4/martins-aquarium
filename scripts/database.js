const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 5, 
            species: "banded leporinus", 
            location: "Amazon basin",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/banded-leoporinus-01.jpg"
        }, {
            name: "Bruce",
            food: "algae",
            size: 3, 
            species: "bloodfin tetra", 
            location: "Argentina",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/bloodfin-tetra-01.jpg"
        }, {
            name: "Belinda",
            food: "smaller fish",
            size: 10, 
            species: "rummy note tetra", 
            location: "South America",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/rummy-nose-tetra-01.jpg"
        }, {
            name: "Beetrus",
            food: "carrots",
            size: 9, 
            species: "orange chromide", 
            location: "Sri Lanka",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/orange-chromide-01.jpg"
        }, {
            name: "Brinley",
            food: "algae",
            size: 2, 
            species: "sailfin molly", 
            location: "Mexico",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/sailfin-molly-01.jpg"
        }
    ], 
        tips: [ {
            id: 1, 
            tip: 'Always keep your fish in water'
        }, {
            id: 2, 
            tip: 'fish LOVE water'
        }, {
            id: 3, 
            tip: 'feed daily',
        },{
            id: 4, 
            tip: 'some fish see friends as food',
        },{
            id: 5, 
            tip: 'keep them hydrated',
        },{
            id: 6, 
            tip: 'some fish like friends',
        },{
            id: 7, 
            tip: 'snack on the daily',
        }
    ], 
    locations: [
        {
            id: 1, 
            name: 'Argentina'
        }, {
            id: 2, 
            name: 'Mexico'
        },{
            id: 3, 
            name: 'Sri Lanka'
        },{
            id: 4, 
            name: 'South America'
        },{
            id: 5, 
            name: 'Amazon'
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}) )
}