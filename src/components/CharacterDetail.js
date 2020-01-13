import React from 'react';
const CharacterDetail = (props) => {

    const { name, species, image, status, origin, episode } = props.character

    return (
        <div className="detail">
            <div className="description">
                <h2>{name}</h2>
                <p>Specie: {species}</p>
                <p>Origin: {origin.name}</p>
                <p>Number of episodes: {episode.length}</p>
                <p>Status: {status}</p>
            </div>
            <img className="img-detail" src={image} alt={name} />

        </div>
    )
}



export default CharacterDetail;