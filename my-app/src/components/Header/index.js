import React from 'react'

export const Header = (props) => {

    const { setRoute } = props

    return (
        <>
            <div onClick={() => setRoute('DASHBOARD')}>Back</div>
        </>
    )
}
