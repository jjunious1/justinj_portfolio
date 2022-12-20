import { DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di'
import {
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiHeroku,
  SiFirebase,
  SiRailway,
  SiNetlify,
  SiAmazonaws,
  SiVercel
} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandTailwind } from 'react-icons/tb'
import blackjack from '../../assets/project images/blackjack.png'
import excNut from '../../assets/project images/ExcellentNutrition.png'
import park from '../../assets/project images/AmusmentPark.png'
import buy from '../../assets/project images/YouBuy.png'
import music from '../../assets/project images/Dotify.png'

export const portfolioItems = [
  {
    id: 0,
    image: blackjack,
    title: 'BlackJack',
    github: 'https://github.com/jjunious1/Justins-first-game',
    demo: 'https://justins-blackjack-game.surge.sh/',
    oneline: '',
    stack: [<SiFirebase />, <DiReact />, <FaNodeJs />, <TbBrandTailwind />]
  },
  {
    id: 1,
    image: excNut,
    title: 'Excellent Nutrition',
    github: 'https://github.com/jjunious1/Justins-Super-App-2',
    demo: 'https://justins-nutrition-app.herokuapp.com/',
    oneline: '',
    stack: []
  },
  {
    id: 2,
    image: park,
    title: 'CJA Amusement Park Guide',
    github: 'https://github.com/jjunious1/CJA_ThemeParkGuide',
    demo: 'https://cja-guide.herokuapp.com',
    oneline: '',
    stack: []
  },
  {
    id: 3,
    image: buy,
    title: 'YouBuy',
    github: 'https://github.com/jjunious1/You_Buy_Backend',
    demo: 'https://you-buyapp.herokuapp.com/',
    oneline: '',
    stack: []
  },
  {
    id: 4,
    image: music,
    title: 'Dotify',
    github: 'https://github.com/jjunious1/dotify',
    demo: 'https://dotify-a.herokuapp.com/',
    oneline:
      'An app that utilizes dmca free music and aws to allow you to listen and create a playlist.',
    stack: []
  }
]
