import Card from '../card/card.component'

import './card-list-styles.css'

const CardList = ({cards}) => (
        <div className='card-list'>
            {cards.map((card, i) => {
                const { name, email } = card;
                return <Card name={name} email={email} idx={i}></Card>
            })}
        </div>
)

export default CardList;