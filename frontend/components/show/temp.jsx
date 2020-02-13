import React from 'react'

const Temp = ({ logout }) => {
    return (
        <div className="temp-container">
            <button className="temp-logout-btn" onClick={() => logout()}>
                <h1>
                    Log Out
                </h1>
            </button>
        </div>
    )
}


export default Temp;