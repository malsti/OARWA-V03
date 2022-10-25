import React, { useState } from 'react'
import Poruka from './Poruka'


const App = (props) => {
    const [poruke, postaviPoruke]= useState (props.poruke)
    const [ unosPoruke, postaviUnos] = useState('unesi poruku...')
    const [ ispisSve, postaviIspis] = useState(true)
    const porukeZaIspis = ispisSve
    ? poruke
    : poruke.filter(poruka => poruka.vazno === true)

    const novaPoruka = (e) => {
        e.preventDefault()
        console.log('Klik', e.target)
        const noviObjekt = {
            id: poruke.length + 1,
            sadrzaj: unosPoruke,
            datum: new Date().toISOString(),
            vazno: Math.random() > 0.5      
          }
          postaviPoruke(poruke.concat(noviObjekt))
          postaviUnos('')
      }
  
    return (
      <div>
        <h1>Poruke</h1>
        <form onSubmit={novaPoruka}>
            <input value={unosPoruke} ></input>
            <button type='submit'>Spremi</button>
        </form>
        <ul>
          {
            porukeZaIspis.map (p => <Poruka  key={p.id} poruka={p}/>)
          }
        
        </ul>
      </div>
    )
  }
  export default App