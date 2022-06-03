
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];
console.log(searchBar);

searchBar.addEventListener('keyup',(e) =>{
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.title.toLowerCase().includes(searchString) ||
            character.description.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch("products.json");
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <img src="${character.thumbnail}" ></img>
                <h2 >${character.title}</h2>
                <p >${character.description}</p>
                <div class="cart" >
                <a href="https://c.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif" target="_blank" style="text-decoration: none;">
                 $ ${character.price}<i class="bx bx-cart-alt"></i>
                 </a>
                 </div>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();