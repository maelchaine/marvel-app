import characters from '../data/characters.json';

// Function that returns all characters
export const getCharacters = () => characters;

// Function that returns a character by its id
export const getCharacterById = (id) => {
    const characters = getCharacters();
    return characters.find(character => character.id === id);
};
