const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const ApiFetch = () => fetch(ENDPOINT).then(response => response.json())

export { ApiFetch };
