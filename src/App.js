import { useState } from 'react';
import Card from './components/Card'
import './App.css';

 const cardImages = [
     {'className': 'card-image-1'},
     {'className': 'card-image-2'},
     {'className': 'card-image-3'},
     {'className': 'card-image-4'},
     {'className': 'card-image-5'},
     {'className': 'card-image-6'},
     {'className': 'card-image-7'},
     {'className': 'card-image-8'},
     {'className': 'card-image-9'},
     {'className': 'card-image-10'},
     {'className': 'card-image-11'},
     {'className': 'card-image-12'},
     {'className': 'card-image-13'},
     {'className': 'card-image-14'},
     {'className': 'card-image-15'},
     {'className': 'card-image-16'},
     {'className': 'card-image-17'},
     {'className': 'card-image-18'},
 ]

function App() {

    const [cards, setBunchCards] = useState([]);
    const [turn, setTurn] = useState(0);

    const shuffle = () => {
    const newBunchCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((el) => {
        return {...el, id: Math.random()}
    })
        console.log(newBunchCards)

        setBunchCards(newBunchCards);
        setTurn(0)
    }

    console.log(cards, turn)

    return (
    <div className="App">
        <h1>Find a pair game</h1>
        <button onClick={shuffle}>New game</button>
        <div className='grid'>
            {
                cards.map(card => (
                    <Card key={card.id} card={card}/>
                ))
            }
        </div>
    </div>
    );
}

export default App;
