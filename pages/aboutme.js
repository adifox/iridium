import { useState } from 'react'
import Card from '../components/uiComponents/card'
import Dev from '../components/uiComponents/dev'

const initialState = 'Initial Title'

export default function Aboutme() {
  const [titleState, setTitleState] = useState(initialState)
  return (
    <div>
      <h3>The very interesting and unique page of 'About me'.</h3>
      <p>Well, soon to come. Still not ready.</p>
      <button onClick={() => setTitleState(titleState + Math.random())}>
        Change Title
      </button>
      <div
        style={{
          margin: '20px auto',
          border: '1px solid black',
          padding: '50px',
        }}
      >
        <Card
          background={'url(/images/react-pic.png)'}
          title={'Porque no usar Index como key en React'}
          description={
            'A estas alturas si has trabajado con React o simplemente has hecho la mítica “To Do List”, sabrás que para pintar una lista de elementos en react, cada elemento de un Array necesita una propiedad llamada key={}.'
          }
        />
      </div>
      <Dev />
    </div>
  )
}
