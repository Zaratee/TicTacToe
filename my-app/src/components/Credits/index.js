import React from 'react'
import { Header } from '../Header'

export const Credits = (props) => {
    const { setRoute } = props

    return (
        <>
            <Header setRoute={setRoute} />
            <div className='container'>
                <div className='table_tittle' >Credits</div>
            </div>
        </>
    )
}
