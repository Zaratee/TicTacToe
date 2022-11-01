import React from 'react'
import { Header } from '../Header'

export const Configuration = (props) => {
    const { setRoute } = props

    return (
        <>
            <Header setRoute={setRoute} />
            <div>Configuration</div>
        </>
    )
}
