import React from 'react';

const CharacterCard = (props) => {

    const { name, species, image } = props.character

    return (
        <div>
            <h3>{name}</h3>
            <p>{species}</p>
            <img src={image} alt={name} />
        </div>

    )
}

export default CharacterCard;