import React from 'react';
import './Chessboard.css';
import Tile from '../Tile/Tile';

const verticalAxis = [1,2,3,4,5,6,7,8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {

    let board = [];
           for(let j = verticalAxis.length-1; j>=0; j--){
           for(let i = 0; i< horizontalAxis.length; i++){
              //   need to add 2 because i starts at 0 and j starts at an offset of 1
                const number = i + j + 2;
                board.push(<Tile number={number}/>)
            }
           }
    return <div id="chessboard">
           {board}
           </div>
}