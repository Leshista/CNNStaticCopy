let header = document.querySelector('.header');
let navItems = document.querySelectorAll('.nav__item');
let languageSelectionSwitcher = document.querySelector('.language-selection__switcher');
let languageSelectionSwitcherFooter = document.querySelector('.language-selection__switcher_in-the-footer');
let languageSelectionLabel = document.querySelector('.language-selection__label');
let languageSelectionBlockFooter = document.querySelector('.language-selection__block_in-the-footer');
let languageSelectionBlock = document.querySelector('.language-selection__block');
let searchBar = document.querySelector('.search__searchbar');
let searchSubmit = document.querySelector('.search__submit');
let burgerSwitcher = document.querySelector('.burger__switcher');
let burgerBlock = document.querySelector('.burger__block');
let videoBlock = document.querySelector('.video-block');
let videoButton = document.querySelector('.video-button');

// Making clicking on switcher reveal block, the first way
languageSelectionSwitcher.addEventListener('click', function () {
    languageSelectionBlock.classList.toggle('hidden');
});

languageSelectionSwitcherFooter.addEventListener('click', function () {
    languageSelectionBlockFooter.classList.toggle('hidden');
});

// Hitting 'Enter' in submit equals clicking the submit button for some reason
searchSubmit.addEventListener('click', function () {
    alert(searchBar.value);
});
// Making things visible when burger-block is active
burgerSwitcher.addEventListener('click', function () {
    burgerBlock.classList.toggle('hidden');
    header.classList.toggle('burger__block_open-header');
    // We need to change color and deactivate the nav links in the header only, leaving the footer ones without changes
    navItems.forEach(function (e, i, a) {
        if (!e.classList.contains('nav__item_in-the-footer')) {
            e.classList.toggle('burger__block_open');
        };
        // Closing language selection when burger menu is opened
        if (!languageSelectionBlock.classList.contains('hidden')) {
            languageSelectionBlock.classList.toggle('hidden');
        };
        if (!languageSelectionBlockFooter.classList.contains('hidden')) {
            languageSelectionBlockFooter.classList.toggle('hidden');
        };
    });
    languageSelectionLabel.classList.toggle('burger__block_open');
});
// Hover a video makes button red
videoBlock.addEventListener('mouseover', function () {
    videoButton.classList.toggle('video-button_red');
});
videoBlock.addEventListener('mouseout', function () {
    videoButton.classList.toggle('video-button_red');
});