import React, { Component } from 'react'

class Row extends React.Component {         
    render() {        
        return (
            <div id={this.props.index} className="row">                
                {this.props.dataRow.map((col, colIndex) => (                    
                    col === 0 ? (
                        <div id={"id_col_" + this.props.indexRow + "_" + colIndex} key={"key_col_" + this.props.indexRow + "_" + colIndex} className="col empty">
                            <span>{col}</span>
                        </div>
                    ) : (
                        <div id={"id_col_" + this.props.indexRow + "_" + colIndex} key={"key_col_" + this.props.indexRow + "_" + colIndex} className="col">
                            <span>{col}</span>
                        </div>
                    )
                ))}
            </div>
        )
    }
}

export default Row