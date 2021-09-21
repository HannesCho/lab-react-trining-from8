import { useState } from 'react';

function Dice(props) {
    const images = ['/img/dice1.png','/img/dice2.png','/img/dice3.png',
    '/img/dice4.png','/img/dice5.png','/img/dice6.png','/img/dice-empty.png']
    const [img, setImg] = useState(images[2])
    
    
    const clickHandler = () => {
        const index = Math.floor(Math.random()*5);
      setTimeout(() => {setImg(images[6])}, 1)
      setTimeout(() => {setImg(images[index])}, 1000)
    }
    return (
            <img src={ img } alt="image" className="Dice" onClick={clickHandler} />
    );
}  

export default Dice;