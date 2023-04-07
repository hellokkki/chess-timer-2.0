import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import TimeSelecter from './features/time-elements/TimeSelecter';
import Timer from './features/time-elements/Timer';
import GameWritingPlace from './features/game-holder-folder/battlefield/GameWritingPlace';
import PiecesCheckbox from './features/game-holder-folder/pieces/PiecesCheckbox';


function App() {

  const piece = useSelector(state => {
    console.log(state.battlefield)
    return state.battlefield
  });
  console.log(piece)
  return (
    <div className="App">
      <header>
        
      </header>
      <main>
       <div className='section section--main'>

      <div className='section--main__time'>
      <TimeSelecter />
      <Timer />
      </div>
      <div className='section--main__textarea'>
      <PiecesCheckbox />  
      <GameWritingPlace piece={piece}/>
      </div>  
       </div>
       
      </main>
    </div>
  );
}

export default App;
