
const Card = ({name, email, idx}) => (
            <div className='card-container'>
                <img
                    alt={`card ${name}`}
                    src={`https://robohash.org/${idx}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )

export default Card;