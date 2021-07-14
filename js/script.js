let languageSelectionSwitcher = document.querySelector('.language-selection__switcher');
let languageSelectionBlock = document.querySelector('.language-selection__block');
let searchBar = document.querySelector('.search__searchbar');
let searchSubmit = document.querySelector('.search__submit');


// Making clicking on switcher reveal block, the first way
languageSelectionSwitcher.addEventListener('click', function () {
    languageSelectionBlock.classList.toggle('hidden');
});

// Hitting 'Enter' in submit equals clicking the submit button for some reason
searchSubmit.addEventListener('click', function () {
    alert(searchBar.value);
});