import { useState } from 'react';

function Carousel(props) {
    const [img, setImg] = useState(props.imgs[0])
    let index = 0;
    const leftHandler = () => {
        if (index <= 3 && index >=1) {
            index--
            console.log(index);
            setImg(props.imgs[index])
        } else {
            index = 3
        }
    }
    const rightHandler = () => {
        if (index <= 3 && index >=0) {
            index++
            console.log(index);
            setImg(props.imgs[index])
        } else {
            index = 0
        }
    }
    return (
        <div className="Carousel">
            <button onClick={leftHandler}>Left</button>
            <img src={img} alt="image" />            
            <button onClick={rightHandler}>Right</button>
        </div>
    );
}  

export default Carousel;