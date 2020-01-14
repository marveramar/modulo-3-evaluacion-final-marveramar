import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
    const { name, species, image, status, origin, episode } = props.character
    return (
        <React.Fragment>
            <Link className="back" to="/"> ~ Volver</Link>
            <div className="detail">
                <div className="detail__description">
                    <h2>{name}</h2>
                    <p>Specie: {species}</p>
                    <p>Origin: {origin.name}</p>
                    <p>Number of episodes: {episode.length}</p>
                    <p>Status: {status === 'Dead' ? status + ' 💀' : status + ' 💃'}</p>
                </div>
                <img className="detail__img" src={image} alt={name} />

            </div>
        </React.Fragment>
    )
}

export default CharacterDetail;