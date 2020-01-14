import React from 'react';
import PropTypes from 'prop-types';

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

CharacterCard.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
}

export default CharacterCard;