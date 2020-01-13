import React from 'react';
const CharacterDetail = (props) => {
    console.log(props)

    const { name, species, image, status, origin, episode } = props.character
    return (
        <div>

            <h2>{name}</h2>
            <p>{species}</p>
            <p>{origin.name}</p>
            <p>{episode.length}</p>
            <p>{status}</p>
            <img src={image} alt={name} />

        </div>
    )

}
export default CharacterDetail;