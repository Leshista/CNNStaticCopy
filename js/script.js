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
let activeImage = document.querySelector('.common-article__img_active');
let activeSubtitle = document.querySelector('.common-article__subtitle_active');

let videoBlocks = document.querySelectorAll('.video-block');
let videoButtons = document.querySelectorAll('.video-button');
let activeImages = document.querySelectorAll('.common-article__img_active');
let activeSubtitles = document.querySelectorAll('.common-article__subtitle_active');

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
videoBlocks.forEach(function (e, i, a) {
    videoBlocks[i].addEventListener('mouseover', function () {
        videoButtons[i].classList.toggle('red');
    });
    videoBlocks[i].addEventListener('mouseout', function () {
        videoButtons[i].classList.toggle('red');
    });
});
// Adding the same to some articles
activeImages.forEach(function (e, i, a) {
    activeImages[i].addEventListener('mouseover', function () {
        activeSubtitles[i].classList.toggle('red');
    });
    activeImages[i].addEventListener('mouseout', function () {
        activeSubtitles[i].classList.toggle('red');
    });
});