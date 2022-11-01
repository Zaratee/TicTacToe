import React from 'react'
import { Header } from '../Header'

export const Table = (props) => {
    const { gameMode } = props
    const { setRoute } = props

    return (
        <>
            <Header setRoute={setRoute} />
            <div>Table {gameMode}</div>
        </>
    )
}
