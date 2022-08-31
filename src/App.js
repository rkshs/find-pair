import {useEffect, useState, useRef} from 'react';
import Card from './components/Card'
import Timer from './components/Timer'
import './App.css';

 const cardImages = [
     {'className': 'card-image-1', matched: false},
     {'className': 'card-image-2', matched: false},
     {'className': 'card-image-3', matched: false},
     {'className': 'card-image-4', matched: false},
     {'className': 'card-image-5', matched: false},
     {'className': 'card-image-6', matched: false},
     {'className': 'card-image-7', matched: false},
     {'className': 'card-image-8', matched: false},
     {'className': 'card-image-9', matched: false},
     {'className': 'card-image-10', matched: false},
     {'className': 'card-image-11', matched: false},
     {'className': 'card-image-12', matched: false},
     {'className': 'card-image-13', matched: false},
     {'className': 'card-image-14', matched: false},
     {'className': 'card-image-15', matched: false},
     {'className': 'card-image-16', matched: false},
     {'className': 'card-image-17', matched: false},
     {'className': 'card-image-18', matched: false},
 ]

function App() {

    const [cards, setBunchCards] = useState([]);
    const [turn, setTurn] = useState(0);
    const [chosenOne, setChosenOne] = useState(null);
    const [chosenTwo, setChosenTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [timer, setTimer] = useState({
        started: false,
        reset: false
    });

    const timerRef = useRef(null);


    const shuffle = () => {
    const newBunchCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((el) => {
        return {...el, id: Math.random()}
    })

        setChosenOne(null);
        setChosenTwo(null);
        setBunchCards(newBunchCards);
        setTurn(0)
        timerRef.current.resetTimer();
    }

    const setChoose = (card) => {
        if (!timer.started) {
            setTimer(() => ({started: true}));
        }
        chosenOne ? setChosenTwo(card) : setChosenOne(card);
    }

    useEffect(() => {
        if (chosenOne && chosenTwo) {
            setDisabled(true);

            if (chosenOne.className === chosenTwo.className) {
                setBunchCards(newBunch => {
                    return newBunch.map(card => {
                        if (card.className === chosenOne.className) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                reseter();
            } else {
                setTimeout(() => reseter(), 1500);
            }
        }
    }, [chosenOne, chosenTwo])

    const reseter = () => {
        setChosenOne(null);
        setChosenTwo(null);
        setTurn(t => t + 1);
        setDisabled(false);
    }

    useEffect(() => {
        shuffle();
    }, [])

    return (
    <div className="App">
        <div className="container">
            <h1>Find a pair game</h1>
            <div className="counters">
                <span>Turns: {turn}</span>
                <button onClick={shuffle}>New game</button>
                <span>
                    Time:
                    <Timer
                        timerStarted={timer.started}
                        ref={timerRef}
                    />
                </span>
            </div>
            <div className='grid'>
                {
                    cards.map(card => (
                        <Card
                            key={card.id}
                            card={card}
                            setChoose={setChoose}
                            flip={card === chosenOne || card === chosenTwo || card.matched}
                            disabled={disabled}
                        />
                    ))
                }
            </div>
        </div>
    </div>
    );
}

export default App;
