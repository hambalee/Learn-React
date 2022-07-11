import { animals } from './animals';
import React from 'react'
import ReactDOM from 'react-dom'

const title = ''
const background = <img className='background' ocean='ocean' src='/images/ocean.jpg' />
const images = []
let funFact = ''
const showBackground = true

const displayFact = e => {
  const optionIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length)
  funFact = animals[e.target.alt].facts[optionIndex]
  const factEl = document.getElementById('fact')
  factEl.innerHTML = funFact
}

for (const animal in animals) {
  images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact} />)
}

const animalFacts = (
  <div>
    <h1>{title === '' && 'Click an animal for a fun fact'}</h1>
    <p id='fact'>{funFact}</p>
    {showBackground && background}
    <div className='animals'>{images}</div>
  </div>
)

ReactDOM.render(animalFacts, document.getElementById('root'))