
import './App.css'
import { useData } from '../hooks/useData'

import { Card1 } from '../components/card1';
import { Card2 } from '../components/card2';
import { Button } from '../components/button';

function App() {

  const {
    changeState,
    card1,
    card2,
  } = useData();


  return (
    <div style={{ display:'flex' }}>

      <Card1
        calculo={card1}
      />
      <Card2
        calculo={card2}
      />
      {/* <Button
        changeState={() => changeState()}
      /> */}
    </div>
  )
}

export default App
