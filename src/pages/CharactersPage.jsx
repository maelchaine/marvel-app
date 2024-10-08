import React, { useEffect, useState } from 'react';
import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";
import { getCharacters } from '../api/characters-api';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersData = await getCharacters();
            setCharacters(charactersData);
        };

        fetchCharacters();
    }, []);

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};


export default CharactersPage;