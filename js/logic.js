const submitButton = document.getElementById("submit-button");
const goBack = document.getElementById("back-btn");
const userName = document.getElementById('username-input');
const title = document.getElementById('title-input');
const content = document.getElementById('content-input');
const switchMode = document.getElementById('dark-light-mode');

//switch function
function changeTheme() {
    const rootElement = document.documentElement;
    let dataTheme = rootElement.getAttribute('data-theme');
    let checkTheme;

    checkTheme = (dataTheme === 'light') ? 'dark' : 'light';

    rootElement.setAttribute('data-theme', checkTheme);

    return;
};

// Add event listener
document.getElementById('dark-light-mode').addEventListener('click', changeTheme)