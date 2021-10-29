import React, { useState } from 'react'
import { ACTIVE_CELLS_ALLOWED, ROW_BOX_COUNT } from './constants'
import './game.css'

const Game = () => {

    const [activeCells, setActiveCells] = useState([])

    const onCellClick = id => {
        const lastActive = [...activeCells]
        if (activeCells.length === ACTIVE_CELLS_ALLOWED) {
            lastActive.shift()
        }
        lastActive.push(id)
        setActiveCells([...lastActive])
    }

    const createRow = id => {
        return <div key={id} className='row'>{
            [...Array(ROW_BOX_COUNT)].map((item, index) => {
                const cellId = `${id}${index}`
                const isActive = activeCells.includes(cellId) ? 'active' : ''
                return <div key={cellId} id={cellId} className={`cell ${isActive}`} onClick={() => onCellClick(cellId)}/>
            })
        }</div>
    }

    const createTable = () => {
        return (
            <div className='table'>
                {[...Array(ROW_BOX_COUNT)].map((item, index) => createRow(index))}
            </div>
        )
    }

    return (
        <div>
            {createTable()}
        </div>
    )
}

export default Game
