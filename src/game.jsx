import React, { Component } from 'react'
import Row from './row.jsx'

class Game extends React.Component {  
    constructor () {
        super();        

        this.state = {
            gabarito: [
                [0,   "R",   0,   0,   0],
                ["L", "E", "C", "O", "M"],
                [0,   "A",   0,   0,   0],                
                [0,   "C",   0,   0,   0],
                [0,   "T",   0,   0,   0],
            ]
        }
    }   

    render() {        
        return (
            <div className="game">
                {this.state.gabarito.map((row, rowIndex) => (   
                    <Row dataRow={row} key={"key_row_" + rowIndex} index={"id_row_" + rowIndex} indexRow={rowIndex} />
                ))}                                
            </div>
        )
    }
}

export default Game