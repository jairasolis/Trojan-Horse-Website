import React, { useState } from 'react'

export default function Home(props){
    const [clsRooms, setClsRooms] = useState({});
    return (
        <div
            id="student-home"
        >
            <header
                id="root-header"
                className={
                    `flex flex-row items-center`
                }
                >
                    <div
                        id="header-heading"
                        className={
                            `inline-flex flex-row items-center`
                        }
                    >
                        <div id="heading-title-container">

                        </div>
                        <div id="heading-title-description">

                        </div>
                    </div>
                    <nav id="header-nav">
                        <div id="burger-container">

                        </div>
                    </nav>
            </header>
        </div>
    )

}