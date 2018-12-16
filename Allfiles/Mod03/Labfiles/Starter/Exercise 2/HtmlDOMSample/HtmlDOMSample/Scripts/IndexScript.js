function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function addHobbies() {
    var inputList = document.querySelectorAll('.hobbiesInput');
    if (inputList.length < 5) {

        var hobbiesList = document.getElementById('hobbiesList');
        var newLineElement = createNode('br'),
            inputElement = createNode('input');

        inputElement.setAttribute("class", "hobbiesInput");

        append(hobbiesList, newLineElement);
        append(hobbiesList, inputElement);
    }
    else {
        document.getElementById('newHobbyBtn').removeEventListener('click', addHobbies);
    }
}

document.addEventListener("DOMContentLoaded",
    function() {
        document.getElementById('newHobbyBtn').addEventListener('click', addHobbies);
    });
