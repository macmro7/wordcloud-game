import { useState, useEffect } from 'react';
import './App.css';
import dataArray from './data.json'
import Game from './Components/Game'


function App() {
  const [ data, setData ] = useState()

  useEffect(() => {
    let x = Math.floor((Math.random() * dataArray.length)).toString()
    console.log(x)
    setData(dataArray[x])
  }, [dataArray])
  
  console.log('data')
  console.log(data)
  return (
    <div className="App">
      { data && 
        <Game
          data={data}
        /> 
      }
    </div>
  );
}

export default App;
