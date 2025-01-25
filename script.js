const options = [
    "Couscous",
    "Ojja",
    "Tajine",
    "Fricasse",
];

const searched = document.getElementById("text-field");
const suggestionsContainer = document.getElementById("suggestions-container");
const resetButton = document.getElementById("reset-button");

searched.onkeyup = function() {
    var search = searched.value;
    var filteredSuggestions = [];
    suggestionsContainer.innerHTML = "";
    suggestionsContainer.style.display = "none";

    if (search !== "") {
        filteredSuggestions = options.filter((option) => {
            return option.toLowerCase().includes(search.toLowerCase());
        });

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.map((suggestion) => {
                display(suggestion);
            });
            suggestionsContainer.style.display = "block";
        } else {
            noResults();
        }
    }
};

function display(suggestion) {
    const suggestionElement = document.createElement("div");
    suggestionElement.classList.add("suggestion");
    suggestionElement.innerText = suggestion;
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
}
