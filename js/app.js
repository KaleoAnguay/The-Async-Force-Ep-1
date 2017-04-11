//Darth Vaders name
const badGuyReq = new XMLHttpRequest();
badGuyReq.addEventListener('load', starWarsName);
badGuyReq.open('GET', 'http://swapi.co/api/people/4/');
badGuyReq.send();

// Darth Vaders World
const badWorldReq = new XMLHttpRequest();
badWorldReq.addEventListener('load', starWarsWorld);
badWorldReq.open('GET', 'http://swapi.co/api/planets/1/');
badWorldReq.send();

//Han Solos Name
const peopleReq = new XMLHttpRequest();
peopleReq.addEventListener('load', starWarsHero);
peopleReq.open('GET', 'http://swapi.co/api/people/14/');
peopleReq.send();

//Hans solos World
const speciesReq = new XMLHttpRequest();
speciesReq.addEventListener('load', starWarsType);
speciesReq.open('GET', 'http://swapi.co/api/species/1/');
speciesReq.send();

//Film Titles and planets
const filmsReq = new XMLHttpRequest();
filmsReq.addEventListener('load', film);
filmsReq.open('GET', 'http://swapi.co/api/films/');
filmsReq.send();

//Darths Vaders Name
function starWarsName() {
  const requestData = JSON.parse(this.responseText);
  // console.log(requestData);
  const hisName = requestData.name;
  // console.log(hisName);
  const contentEl = document.querySelector('#content');
  person4Name.innerHTML = hisName;
}

// Darth Vaders world
function starWarsWorld() {
  const requestData = JSON.parse(this.responseText);
  const hisWorld = requestData.name;
  const contentEl = document.querySelector('#content');
  person4HomeWorld.innerHTML = hisWorld;
}


//Hans solos name
function starWarsHero() {
  const requestData = JSON.parse(this.responseText);
  const hisName = requestData.name;
  const contentEl = document.querySelector('#person14Name');
    person14Name.innerHTML = hisName;
}



//Hans solos species
function starWarsType() {
  const requestData = JSON.parse(this.responseText);
  const hisSpecies = requestData.name;
  const contentEl = document.querySelector('#person14Species');
    person14Species.innerHTML = hisSpecies;
}

//Film titles with planets
function film() {
  const requestData = JSON.parse(this.responseText);
  const data = requestData.results;
  console.log(data);

//for loop to add the movie titles
  for(var i = 0; i < data.length; i++) {
    let li = document.createElement('li');
      li.class = 'titleClass' + i;

    const contentEl = document.querySelector('#filmTitle');
      li.innerHTML = data[i].title;
      filmTitle.appendChild(li);

// new ul for planets
    const newUl = document.createElement('ul');
    li.appendChild(newUl);


// add the planets
    for(var j = 0; j < data[i].planets.length;  j++) {
      // console.log(data[i].planets[j]);

      const planetsReq = new XMLHttpRequest();

      planetsReq.addEventListener('load', onPlanetData);
      planetsReq.open('GET', data[i].planets[j]);
      planetsReq.send();

// loading the planet names
      function onPlanetData() {
        const requestData = JSON.parse(this.responseText);
        const planetName = requestData.name;
        let newLi = document.createElement('li');
          newLi.innerHTML = planetName;
          newUl.appendChild(newLi);
      }
    }
  }
}

