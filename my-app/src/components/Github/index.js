import React from 'react'

export const Github = () => {
    return (
        <div className='card github_card'>
            <div className='header_card'>
                <img className='card_avatar' src='https://media-exp1.licdn.com/dms/image/C4E03AQHFkGMlnBhZbQ/profile-displayphoto-shrink_800_800/0/1639002995068?e=1672876800&v=beta&t=p8NTaV3J7rA7cZQZUFYFIbD4JgrrhtFwfhGaZXwXtnY'></img>
                <div className='card_name'>Carlos Zarate</div>
            </div>
            <hr></hr>
            <div className='card_btnContainer'>
                <div className='card_btn git_btn'>
                    <img className='card_btnIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'></img>
                    <div>GitHub</div>
                </div>
                <div className='card_btn git_btn'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'></img>
                </div>
                <div className='card_btn lnkdn_bnt'>

                </div>
            </div>

        </div>
    )
}
