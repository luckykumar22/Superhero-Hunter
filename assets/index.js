<<<<<<< HEAD
const allTabsBody = document.querySelectorAll('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');
const searchForm = document.querySelector('.app-header-search');
let searchList = document.getElementById('search-list');

let activeTab = 1, allData;

const init = () => {
    showActiveTabBody();
    showActiveTabHead();
}

const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

const showActiveTabBody = () => {
    hideAllTabBody();
    allTabsBody[activeTab - 1].classList.add('show-tab');
}

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

// even listeners
window.addEventListener('DOMContentLoaded', () => init());
// button event listeners
allTabsHead.forEach(singleTabHead => {
    singleTabHead.addEventListener('click', () => {
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        showActiveTabHead();
        showActiveTabBody();
    });
});

const getInputValue = (event) => {
    event.preventDefault();
    let searchText = searchForm.search.value;
    fetchAllSuperHero(searchText);
}

// search form submission
searchForm.addEventListener('submit', getInputValue);

// api key => 727054372039115
const fetchAllSuperHero = async(searchText) => {
    let url = `https://www.superheroapi.com/api.php/727054372039115/search/${searchText}`;
    try{
        const response = await fetch(url);
        allData = await response.json();
        if(allData.response === 'success'){
            // console.log(allData);
            showSearchList(allData.results);
        }
    } catch(error){
        console.log(error);
    }
}

const showSearchList = (data) => {
    searchList.innerHTML = "";
    data.forEach(dataItem => {
        const divElem = document.createElement('div');
        divElem.classList.add('search-list-item');
        divElem.innerHTML = `
            <img src = "${dataItem.image.url ? dataItem.image.url : ""}" alt = "">
            <p data-id = "${dataItem.id}">${dataItem.name}</p>
        `;
        searchList.appendChild(divElem);
    });
}

searchForm.search.addEventListener('keyup', () => {
    if(searchForm.search.value.length > 1){
        fetchAllSuperHero(searchForm.search.value);
    } else {
        searchList.innerHTML = "";
    }
});

searchList.addEventListener('click', (event) => {
    let searchId = event.target.dataset.id;
    let singleData = allData.results.filter(singleData => {
        return searchId === singleData.id;
    })
    showSuperheroDetails(singleData);
    searchList.innerHTML = "";
});

const showSuperheroDetails = (data) => {
    console.log(data);
    document.querySelector('.app-body-content-thumbnail').innerHTML = `
        <img src = "${data[0].image.url}">
    `;

    document.querySelector('.name').textContent = data[0].name;
    document.querySelector('.powerstats').innerHTML = `
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>intelligence</span>
        </div>
        <span>${data[0].powerstats.intelligence}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>strength</span>
        </div>
        <span>${data[0].powerstats.strength}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>speed</span>
        </div>
        <span>${data[0].powerstats.speed}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>durability</span>
        </div>
        <span>${data[0].powerstats.durability}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>power</span>
        </div>
        <span>${data[0].powerstats.power}</span>
    </li>
    <li>
        <div>
            <i class = "fa-solid fa-shield-halved"></i>
            <span>combat</span>
        </div>
        <span>${data[0].powerstats.combat}</span>
    </li>
    `;

    document.querySelector('.biography').innerHTML = `
    <li>
        <span>full name</span>
        <span>${data[0].biography['full-name']}</span>
    </li>
    <li>
        <span>alert-egos</span>
        <span>${data[0].biography['alter-egos']}</span>
    </li>
    <li>
        <span>aliases</span>
        <span>${data[0].biography['aliases']}</span>
    </li>
    <li>
        <span>place-of-birth</span>
        <span>${data[0].biography['place-of-birth']}</span>
    </li>
    <li>
        <span>first-apperance</span>
        <span>${data[0].biography['first-appearance']}</span>
    </li>
    <li>
        <span>publisher</span>
        <span>${data[0].biography['publisher']}</span>
    </li>
    `;

    document.querySelector('.appearance').innerHTML = `
    <li>
        <span>
            <i class = "fas fa-star"></i> gender
        </span>
        <span>${data[0].appearance['gender']}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i> race
        </span>
        <span>${data[0].appearance['race']}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i> height
        </span>
        <span>${data[0].appearance['height'][0]}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i> weight
        </span>
        <span>${data[0].appearance['weight'][0]}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i> eye-color
        </span>
        <span>${data[0].appearance['eye-color']}</span>
    </li>
    <li>
        <span>
            <i class = "fas fa-star"></i> hair-color
        </span>
        <span>${data[0].appearance['hair-color']}</span>
    </li>
    `;

    document.querySelector('.connections').innerHTML = `
    <li>
        <span>group--affiliation</span>
        <span>${data[0].connections['group-affiliation']}</span>
    </li>
    <li>
        <span>relatives</span>
        <span>${data[0].connections['relatives']}</span>
    </li>
    `;
}
=======
let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

let date = new Date();
console.log(date.getTime());

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

function displayWords(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  listContainer.innerHTML = "";
}

input.addEventListener("keyup", async () => {
  removeElements();
  if (input.value.length < 4) {
    return false;
  }

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`;

  const response = await fetch(url);
  const jsonData = await response.json();

  jsonData.data["results"].forEach((result) => {
    let name = result.name;
    let div = document.createElement("div");
    div.style.cursor = "pointer";
    div.classList.add("autocomplete-items");
    div.setAttribute("onclick", "displayWords('" + name + "')");
    let word = "<b>" + name.substr(0, input.value.length) + "</b>";
    word += name.substr(input.value.length);
    div.innerHTML = `<p class="item">${word}</p>`;
    listContainer.appendChild(div);
  });
});

button.addEventListener(
  "click",
  (getRsult = async () => {
    if (input.value.trim().length < 1) {
      alert("Input cannot be blank");
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

    const response = await fetch(url);
    const jsonData = await response.json();
    jsonData.data["results"].forEach((element) => {
      showContainer.innerHTML = `<div class="card-container">
        <div class="container-character-image">
        <img src="${
          element.thumbnail["path"] + "." + element.thumbnail["extension"]
        }"/></div>
        <div class="character-name">${element.name}</div>
        <div class="character-description">${element.description}</div>
        </div>`;
    });
  })
);
window.onload = () => {
  getRsult();
};
>>>>>>> 97394cb0c3aafebaa0430e8646a3da5e59e9fff9
