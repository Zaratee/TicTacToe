import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./header.scss"
export const Header = (props) => {

    const { setRoute } = props

    return (
        <>
            <div className='header_back' onClick={() => setRoute('DASHBOARD')}><AiOutlineArrowLeft /></div>
        </>
    )
}
