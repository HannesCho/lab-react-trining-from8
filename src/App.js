import './App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable'

function App() {
  return (
    <div className="App">
      <h1>LikeButton</h1>
        <LikeButton /> <LikeButton />
      <h1>ClickablePicture</h1>
        <ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />
      <h1>Dice</h1>
        <Dice />
      <h1>Carousel</h1>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />  
        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />

    </div>
  );
}

export default App;
