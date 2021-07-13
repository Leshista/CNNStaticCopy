let languageSelectionSwitcher = document.querySelector('.language-selection__switcher');
let languageSelectionBlock = document.querySelector('.language-selection__block');
languageSelectionSwitcher.addEventListener('click', function () {
    languageSelectionBlock.classList.toggle('hidden');
});