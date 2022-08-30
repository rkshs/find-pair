import './Card.css';

export default function Card({ card }) {
    return (
        <div key={card.id} className='card'>
            <div className='card-cover' />
            <div className={`card-image ${card.className}`} />
        </div>
    )
}