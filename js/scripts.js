'use strict';

function getPerson() {
    const url = "http://swapi.dev/api/people/";
    get(url).then(response => {
        console.log("Response List:", response.results);
        buildPersonList(response.results);
    });
};

function buildPersonList(responseObject) {
    let personArray = [];
    let index = 0;
    for (index = 0; index < responseObject.length; index++) {
        personArray.push(responseObject[index].name);
    }
    console.log(personArray);
    addPersonOptions(personArray);
}

function addPersonOptions(array1) {
    const div = document.querySelector('#select')
    const personSelect = document.querySelector('#changeCharacter')
    array1.map(person => {
        let personOption = document.createElement('option');
        personOption.value = person;
        personOption.text = person;
        personSelect.appendChild(personOption);
    });
};

getPerson();