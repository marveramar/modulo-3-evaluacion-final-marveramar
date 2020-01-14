import React from 'react';

const CharacterCard = (props) => {

    const { name, species, image } = props.character

    return (
        <div className="card" >
            <h3>{name}</h3>
            <p>{species}</p>
            <img className="card__img" src={image} alt={name} />
        </div>

    )
}

export default CharacterCard;