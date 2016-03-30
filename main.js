"use strict"

let firstName = ["Bryan", "Carolyn", "Bryan", "Timothy", "Henry"];
let middleName = ["Lee", "Faulkner", "Tyler", "Duff", "Sloan"];
let lastName = ["Hankins", "Hankins", "Hankins", "Hankins", "Hankins"];


let familyNamesDOM = document.getElementById("namesCombined");

for(let i = 0; i < firstName.length; i++) {
	familyNamesDOM.innerHTML += "<div>" + firstName[i] + " " + middleName[i] + " " + lastName[i] + "</div>";
}