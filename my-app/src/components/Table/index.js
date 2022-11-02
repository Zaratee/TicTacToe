import React from 'react'
import { Header } from '../Header'
import "./table.scss"

export const Table = (props) => {
    const { gameMode } = props
    const { setRoute } = props

    return (
        <>
            <Header setRoute={setRoute} />
            <div className='container'>
                {
                    gameMode == "P2P" ?
                        <>
                            <div className='table_tittle' >Player VS Player</div>
                        </> :
                        <>
                            <div className='table_tittle' >Player VS Computer</div>
                        </>
                }
            </div>
        </>
    )
}
