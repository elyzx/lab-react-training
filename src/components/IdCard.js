import React from 'react'

function IdCard({firstName, lastName, gender, height, birth, picture}) {
    return (
        <div id="IdCard">
            <div> 
                <img src={picture} alt={firstName}></img>
            </div>
            <div>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth}</p>
        </div>
        </div>
    )
}

export default IdCard;