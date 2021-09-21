import { useState } from 'react';

function LikeButton(props) {
    const colors = ['purple','blue','green','yellow','orange','red']
    const [count, setCount] = useState(0)
    const [bgColor, setBgColor] = useState(colors[0])
    const clickHandler = () => {
        setBgColor((currentColor) => {
            const index = Math.floor(Math.random()*6);
            currentColor = colors[index]
            return currentColor
        })
        setCount(count + 1)
    }
    return (
        <div className="LikeButton">
            <button onClick={clickHandler} style={{backgroundColor:bgColor}}>{count} Likes</button>
        </div>
    );
}  

export default LikeButton;