import './Card.css';

export default function Card({ card, setChoose, flip, disabled }) {

    const clickHandler = () => {
        if (!disabled) {
            setChoose(card)
        }
    }

    return (
        <div key={card.id} className={`card ${flip ? 'flip' : ''}`}>
            <div className='card-cover' onClick={clickHandler} />
            <div className={`card-image ${card.className}`} />
        </div>
    )
}