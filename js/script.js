let menuItems = document.querySelectorAll('.menu__item');
let languageSelectionSwitcher = document.querySelector('.language-selection__switcher');
let languageSelectionLabel = document.querySelector('.language-selection__label');
let languageSelectionBlock = document.querySelector('.language-selection__block');
let searchBar = document.querySelector('.search__searchbar');
let searchSubmit = document.querySelector('.search__submit');
let burgerSwitcher = document.querySelector('.burger__switcher');
let burgerBlock = document.querySelector('.burger__block');


// Making clicking on switcher reveal block, the first way
languageSelectionSwitcher.addEventListener('click', function () {
    languageSelectionBlock.classList.toggle('hidden');
});

// Hitting 'Enter' in submit equals clicking the submit button for some reason
searchSubmit.addEventListener('click', function () {
    alert(searchBar.value);
});
// Making things visible when burger-block is active
burgerSwitcher.addEventListener('click', function () {
    burgerBlock.classList.toggle('hidden');
    menuItems.forEach(function (e, i, a) {
        e.classList.toggle('burger__block_open');
    });
    languageSelectionLabel.classList.toggle('burger__block_open');
});