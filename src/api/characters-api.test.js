import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

describe('Characters API', () => {
    describe('getCharacters', () => {
        it('should return the full list of characters', () => {
            const result = getCharacters();
            expect(result).toEqual(characters);
        });
    });

    describe('getCharacterById', () => {
        it('should return the correct character for a given ID', () => {
            const id = characters[0].id;
            const result = getCharacterById(id);
            expect(result).toEqual(characters[0]);
        });

        it('should return undefined for an ID that does not exist', () => {
            const nonExistentId = 'non-existent-id';
            const result = getCharacterById(nonExistentId);
            expect(result).toBeUndefined();
        });
    });
});