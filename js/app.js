//Darths Vaders Name
function starWarsName() {
  const requestData = JSON.parse(this.responseText);
  // console.log(requestData);
  const hisName = requestData.name;
  // console.log(hisName);
  const contentEl = document.querySelector('#content');
  person4Name.innerHTML = hisName;
}

const oReq = new XMLHttpRequest();

oReq.addEventListener('load', starWarsName);
oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();

// Darth Vaders world
function starWarsWorld() {
  const requestData = JSON.parse(this.responseText);
  const hisWorld = requestData.name;
  const contentEl = document.querySelector('#content');
  person4HomeWorld.innerHTML = hisWorld;
}
const dReq = new XMLHttpRequest();

dReq.addEventListener('load', starWarsWorld);
dReq.open('GET', 'http://swapi.co/api/planets/1/');
dReq.send();

//Hans solos name
function starWarsHero() {
  const requestData = JSON.parse(this.responseText);
  const hisName = requestData.name;
  const contentEl = document.querySelector('#content');
    person14Name.innerHTML = hisName;
}
const cReq = new XMLHttpRequest();

cReq.addEventListener('load', starWarsHero);
cReq.open('GET', 'http://swapi.co/api/people/14/');
cReq.send();

//Hans solos species
function starWarsType() {
  const requestData = JSON.parse(this.responseText);
  const hisSpecies = requestData.name;
  const contentEl = document.querySelector('#content');
    person14Species.innerHTML = hisSpecies;
}
const hReq = new XMLHttpRequest();

hReq.addEventListener('load', starWarsType);
hReq.open('GET', 'http://swapi.co/api/species/1/');
hReq.send();

function film() {
  const requestData = JSON.parse(this.responseText);
  console.log(requestData);
  const title = requestData.results[0].title;
  console.log(title)
  const contentEl = document.querySelector('#content');
    filmTitle.innerHTML = title;
}

const tReq = new XMLHttpRequest();

tReq.addEventListener('load', film);
tReq.open('GET', 'http://swapi.co/api/films/');
tReq.send();