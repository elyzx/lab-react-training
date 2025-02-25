import React, {useState} from 'react'

function LikeButton() {
    const [ count, updateCount ] = useState(0)
    const clickHandler = () => {
        updateCount(count +1)
    }
    return (
        <div>
            <button onClick={clickHandler}>{count} Likes</button>
        </div>
    )
}

export default LikeButton;