const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = []

fetch(endpoint)
    .then(raw_data => raw_data.json())
    .then(data => cities.push(...data));


let findToMatch=  (wordTomatch , cities)=> {
    return cities.filter(place => {
        const regex = new RegExp(wordTomatch , 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

let displayWord =function(){

    if (this.value){
        const matchArray = findToMatch(this.value ,cities);
        console.log(matchArray);
        const ul = document.querySelector('ul');
        ul.textContent = '';
        matchArray.slice(0,7).forEach(place => { 
                const li = document.createElement('li');
                li.textContent = place.city ;
                li.classList.add('name');
                ul.appendChild(li);
            }
        );
    }
}


const input = document.querySelector('.search');
input.addEventListener('change',displayWord);
input.addEventListener('keyup',displayWord);
