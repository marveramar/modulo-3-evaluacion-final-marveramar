import React from 'react';

const CharacterCard = (props) => {

    const { name, species, image } = props.character

    return (
        <div className="card" >
            <h3>{name}</h3>
            <p>{species}</p>
            <img className="img-card" src={image} alt={name} />
        </div>

    )
}

export default CharacterCard;