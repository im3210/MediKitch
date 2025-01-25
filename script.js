const options = [
    "Couscous",
    "Ojja",
    "Tajine",
    "Fricassée",
    "Riz",
    "chappti",
    "Makloub",
    "Baguette Farcie",

];

const searched = document.getElementById("text-field");
const suggestionsContainer = document.getElementById("suggestions-container");
const resetButton = document.getElementById("reset-button");

searched.onkeyup = function() {
    const search = searched.value.trim();
    let filteredSuggestions = [];
    suggestionsContainer.innerHTML = "";
    suggestionsContainer.style.display = "none";

    if (search !== "") {
        filteredSuggestions = options.filter(option =>
            option.toLowerCase().includes(search.toLowerCase())
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(display);
            suggestionsContainer.style.display = "block";
        } else {
            noResults();
            suggestionsContainer.style.display = "block";
        }
    }
};

function display(suggestion) {
    const suggestionElement = document.createElement("div");
    suggestionElement.classList.add("suggestion");
    suggestionElement.innerText = suggestion;

    suggestionElement.onclick = () => {
        searched.value = suggestion;
        suggestionsContainer.style.display = "none";
    };

    suggestionsContainer.appendChild(suggestionElement);
}

function noResults() {
    const noResultElement = document.createElement("div");
    noResultElement.classList.add("no-result");
    noResultElement.innerText = "No results found";
    suggestionsContainer.appendChild(noResultElement);
}

resetButton.onclick = function() {
    searched.value = "";
    suggestionsContainer.innerHTML = "";
    suggestionsContainer.style.display = "none";
};
