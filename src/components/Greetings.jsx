import React from 'react'

function Greetings({lang, firstName}) {
    let greetings = {
        fr: 'Bonjour',
        en: 'Heya',
        de: 'Hallo',
        es: 'Hola'
    }
    return (
        <div>
            <p>{greetings[lang]} {firstName}</p>
        </div>
    )
}

export default Greetings;