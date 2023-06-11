import Image1 from '../../assets/Fire and Fable.png'
import Image2 from '../../assets/Pokedex.png'
import Image3 from '../../assets/a way home.png'
import Image4 from '../../assets/to-do.png'

import Image10 from '../../assets/project10.png'



const data = [
    {
        id: 1,
        category: 'uiux',
        image: Image1,
        title: "Fire & Fable (UIUX)",
        desc: "New design for the Fire & Fable candle online shop",
        figma: 'https://www.figma.com/file/zLnIhTsxXzOmLpKKqYFsQA/Marchante-Llopis%2C-Miki---Proyecto-Beta?type=design&node-id=0-1&t=fhIPOVkO92q6paqy-0'
    },
    {
        id: 2,
        category: 'react',
        image: Image2,
        title: "Pokedex (React)",
        desc: "Tribute to the original pokedex shown in the first season of the anime. Contains a list of the first 151 pokemon, their numbers and their descriptions.",
        github: 'https://github.com/25Miki/Pokedex'
    },

    {
        id: 3,
        category: 'videogames',
        image: Image3,
        title: "A way home (Videogames)",
        desc: "Videogame demo about an astronaut who has to scape from this planet and return home. Art made by Chalbus and Mario Casanova, code made by Natalia Sanchez and me.",
        youtube: 'https://www.youtube.com/watch?v=GSGm-iVSKHI&ab_channel=Interacci%C3%B3nyVideojuegos.BBAA-UPV'
    },

    {
        id: 4,
        category: 'javascrpt',
        image: Image4,
        title: "To-do list (JS)",
        desc: "Javascript exercise",
        github: 'https://github.com/25Miki/To-do'
    },

    {
        id: 10,
        category: 'art',
        image: Image10,
        title: "Dodogama (Art)",
        desc: "Pixelart fanart of the Monster Hunter's creature 'Dodogama'.",

        
    },


]


export default data