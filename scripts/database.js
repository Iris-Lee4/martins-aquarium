const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3, 
            species: "banded leporinus", 
            location: "Amazon basin",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/banded-leoporinus-01.jpg"
        }, {
            name: "Bruce",
            food: "algae",
            size: 1, 
            species: "bloodfin tetra", 
            location: "Argentina",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/bloodfin-tetra-01.jpg"
        }, {
            name: "Belinda",
            food: "smaller fish",
            size: 2, 
            species: "rummy note tetra", 
            location: "South America",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/rummy-nose-tetra-01.jpg"
        }. {
            name: "Beetrus",
            food: "carrots",
            size: 3, 
            species: "orange chromide", 
            location: "Sri Lanka",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/orange-chromide-01.jpg"
        }. {
            name: "Brinley",
            food: "algae",
            size: 2, 
            species: "sailfin molly", 
            location: "Mexico",
            picture: "https://www.thinkfish.co.uk/tropical-fish-images/sailfin-molly-01.jpg"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}