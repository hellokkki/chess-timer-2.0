import React from 'react'; 
import { selectPiece } from '../battlefieldSlice'; 
import { useDispatch } from 'react-redux';
import './pieces.scss'
import { useOnKeyPress } from '../../hooks/useOnKeyPress';

function PiecesCheckbox() {
  const dispatch = useDispatch();

 
  return (
    <div className='notation-box'>
      <div className='black-pieces'>
       <Piece 
       className='piece-wrapper'
       label='P' 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('P')), 'p')}
       />
       <Piece 
       className='piece-wrapper'
       label='N'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('N')), 'n')}
      />
       <Piece 
       className='piece-wrapper'
       label='B'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('B')), 'b')}
       />
       <Piece 
       className='piece-wrapper'
       label='R'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('R')), 'q')}
       />
       <Piece 
       className='piece-wrapper'
       label='Q'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('Q')), 'q')}
        />
       <Piece 
       className='piece-wrapper'
       label='K'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('K')), 'k')}
       />
      </div>
      <div className='vovels-box'>
       <Piece 
       className='piece-wrapper'
       label='A' 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('a')), 'a')}
       />
        <Piece 
       className='piece-wrapper'
       label='B'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('b')), 'b')}
       />
       <Piece 
       className='piece-wrapper'     
       label='C' 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('c')), 'c')}
       />
       <Piece 
      className='piece-wrapper'    
       label='D' 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('d')), 'd')}
       />
       <Piece 
        className='piece-wrapper'    
       label='E'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('e')), 'e')}
       />
       <Piece 
       className='piece-wrapper'     
       label='F' 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('f')), 'f')}
       />
        <Piece 
        className='piece-wrapper'    
       label='G' 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('g')), 'g')}
       />
        <Piece  
        className='piece-wrapper'    
       label='H' 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('h')), 'h')}
       />
        </div>
      <div className='numbers-box'>
       <Piece 
       className='piece-wrapper'
       label='1'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('1')), '1')}
       />
      <Piece 
       className='piece-wrapper'
       label='2'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('2')), '2')}
       />
      <Piece 
       className='piece-wrapper'     
       label='3'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('3')), '3')}
        />
      <Piece 
      className='piece-wrapper'    
       label='4'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('4')), '4')}
       />
      <Piece 
        className='piece-wrapper'    
       label='5'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('5')), '5')}
       />
      <Piece 
       className='piece-wrapper'     
       label='6'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('6')), '6')}
       />
      <Piece 
        className='piece-wrapper'    
       label='7'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('7')), '7')}
      />
      <Piece 
        className='piece-wrapper'    
       label='8'
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('8')), '8')}
      />
      </div>
      <div className='moves-box'>
       <Piece 
       className='piece-wrapper'
       label="-"
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('-')), '-')}
       />
       <Piece 
       className='piece-wrapper'
       label="X" 
       onKeyDown={useOnKeyPress(() => dispatch(selectPiece('X')), 'x')}
              />
       <Piece 
       className='piece-wrapper'
       label="0-0" 
       />
       <Piece 
       className='piece-wrapper'
       label="0-0-0"
       />
       <Piece 
       className='piece-wrapper'
       label='+'
        />
       <Piece 
       className='piece-wrapper'
       label='++'
      />
      <Piece 
       className='piece-wrapper'
       label='#'
       />
      </div>
    </div>
  )
}


const Piece = ({ label, className, onKeyDown }) => {
  const dispatch = useDispatch();
 
  const handleCheckbox = e => {
   dispatch(selectPiece(e.target.textContent))
   console.log(e.target.textContent)
   console.log(e)
  }
  return (
  <div 
  className={className} 
  onClick={handleCheckbox}
  onKeyDown={onKeyDown}
  >
  <label>
        <span>{label}</span>
    </label>
  </div>
  )
};

export default PiecesCheckbox