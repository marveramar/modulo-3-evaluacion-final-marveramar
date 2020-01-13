import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
    console.log(props)
    return (
        <ul>
            {props.characters
                .filter(character => props.value === '' || character.name.toLowerCase().includes(props.searching))

                .map((character, index) => <Link to={`/characterList/${character.id}`}>
                    <li key={index}>
                        <CharacterCard
                            character={character}
                        />
                    </li>
                </Link>
                )}

        </ul>
    )

}
export default CharacterList;