import React, { useEffect, useState } from 'react'; 
import './battlefield.scss';



function GameWritingPlace({piece}) {
    const [value, setValue] = useState('');

   
    const _onChange = e => { 
        setValue(e.target.value);
    };

    useEffect(() => {
        setValue( value => { 
          return [value, piece?.selectedPiece].join('');
      }) 
    }, [piece]);


    const _saveGame = () => {
        console.log(value)
    };

  return (
    <div>
     <label>
        write down your moves
        <textarea 
        className='battlefield'
        name='chess-game' 
        value={value}
        onChange={_onChange}
        rows={25}
        cols={30}
        />
      </label>
      <button onClick={_saveGame}>save</button>
    </div>
  )
}

export default GameWritingPlace
