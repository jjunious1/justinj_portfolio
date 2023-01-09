import { DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di'
import {
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiHeroku,
  SiAmazonaws
} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import blackjack from '../../assets/project images/blackjack.png'
import excNut from '../../assets/project images/ExcellentNutrition.png'
import park from '../../assets/project images/AmusmentPark.png'
import buy from '../../assets/project images/YouBuy.png'
import music from '../../assets/project images/Dotify.png'

export const portfolioItems = [
  {
    id: 0,
    image: music,
    title: 'Dotify',
    github: 'https://github.com/jjunious1/dotify',
    demo: 'https://dotify-a.herokuapp.com/',
    oneline:
      'An app that utilizes DMCA free music and AWS to allow you to listen and create a playlist.',
    stack: [
      <DiReact />,
      <DiJavascript />,
      <FaNodeJs />,
      <SiPostgresql />,
      <SiAmazonaws />,
      <SiExpress />,
      <SiHeroku />,
      <DiHtml5 />,
      <DiCss3 />
    ]
  },
  {
    id: 1,
    image: excNut,
    title: 'Excellent Nutrition',
    github: 'https://github.com/jjunious1/Justins-Super-App-2',
    demo: 'https://justins-nutrition-app.herokuapp.com/',
    oneline:
      'An app to track daily nutrtion. You can make recipes, add food and create a meal plan.',
    stack: [
      <DiReact />,
      <DiJavascript />,
      <DiCss3 />,
      <FaNodeJs />,
      <DiHtml5 />,
      <SiMongodb />,
      <SiExpress />
    ]
  },
  {
    id: 2,
    image: park,
    title: 'CJA Amusement Park Guide',
    github: 'https://github.com/jjunious1/CJA_ThemeParkGuide',
    demo: 'https://cja-guide.herokuapp.com',
    oneline:
      'Use this guide to search and view attractions. Leave a comment on an attraction about your experience for other guest.',
    stack: [
      <DiReact />,
      <DiJavascript />,
      <FaNodeJs />,
      <SiPostgresql />,
      <SiExpress />,
      <SiHeroku />,
      <DiHtml5 />,
      <DiCss3 />
    ]
  },
  {
    id: 3,
    image: blackjack,
    title: 'BlackJack',
    github: 'https://github.com/jjunious1/Justins-first-game',
    demo: 'https://justins-blackjack-game.surge.sh/',
    oneline: 'Play Blackjack. A game to see who gets closest to 21.',
    stack: [<DiJavascript />, <DiHtml5 />, <DiCss3 />]
  },
  {
    id: 4,
    image: buy,
    title: 'YouBuy',
    github: 'https://github.com/jjunious1/You_Buy_Backend',
    demo: 'https://you-buyapp.herokuapp.com/',
    oneline:
      'Where Ebay meets craigslist. View items for sale or sell yourself. Connect with the seller to purchase goods.',
    stack: [
      <DiReact />,
      <DiJavascript />,
      <FaNodeJs />,
      <SiPostgresql />,
      <SiExpress />,
      <SiHeroku />,
      <DiHtml5 />,
      <DiCss3 />
    ]
  }
]
