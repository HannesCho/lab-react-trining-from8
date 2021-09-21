import { useState } from 'react';

function ClickablePicture(props) {
    const [img, setImg] = useState(props.img)
    const clickHandler = () => {
        if (img === props.img) {
            setImg(props.imgClicked)
        } else {
            setImg(props.img)
        }
    }
    return (
            <img src={ img } alt="image" className="ClickablePicture" onClick={clickHandler} />
    );
}  

export default ClickablePicture;