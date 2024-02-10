const pokemonName = document.querySelector('.poke-name');
const pokemonNumber = document.querySelector('.poke-number');
const pokemonImage = document.querySelector('.poke-img');

const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const buttonPrev = document.querySelector('.btn-pev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIResponse.status == 200) {
    const data = await APIResponse.json();
    return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''

    const data = await fetchPokemon(pokemon);

    if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']
    ['black-white']['animated']['front_default'];

    input.value = '';
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found D:';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
    alert('prev clicked')
});

buttonNext.addEventListener('click', () => {
    alert('next clicked')
});

renderPokemon(searchPokemon);
