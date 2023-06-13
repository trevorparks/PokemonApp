import getResponse from '../../functions/getResponse';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getResponse', () => {
beforeEach(() => {
fetch.resetMocks();
});

it('returns a pokemons moves', async () => {
    const expected = [
        {
            abilities: 'ditto',
            forms: 'ditto',
            game_indices: 'red blue yellow gold silver crystal ruby sapphire emerald firered leafgreen diamond pearl platinum heartgold soulsilver  black, white, black-2, white-2',
            moves: 'transform',
            species: 'ditto',
            sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
            stats: 'hp : 48 attack : 48 defense : 48 special-attack : 48 special-defense : 48 speed : 48',
            types: 'normal'
        }
    ];

    fetch.mockResponseOnce(JSON.stringify({
        data: expected.map(({ abilities, forms, game_indices, moves, species, sprites, stats, types}) => ({
            abilities,
            forms,
            game_indices,
            moves,
            species,
            stats,
            types,
            sprites: {
                original: { url },
            }
        }))
    }));
    const result = await getReponse('pokemon/ditto/');

    expect(result).toEqual(expected);
});
it('throws an error if the response is not OK', async () => {
    fetch.mockResponseOnce('', { status: 404 });

    await expect(getResponse('pokemon/ditto/')).rejects.toThrow('HTTP error! status 404');
  });
});