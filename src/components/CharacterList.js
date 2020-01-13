import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {


    return (
        <ul className="list">
            {props.characters
                .filter(character => props.value === '' || character.name.toLowerCase().includes(props.searching))

                .map((character) =>
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>
                            <CharacterCard
                                character={character}
                            />
                        </Link>
                    </li>

                )}

        </ul>
    )

}
export default CharacterList;