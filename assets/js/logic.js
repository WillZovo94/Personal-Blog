// storing locations of variables by accessing them with getElementById.
const submitButton = document.getElementById("submit-button");
const goBack = document.getElementById("back-btn");
const userName = document.getElementById('username-input');
const title = document.getElementById('title-input');
const content = document.getElementById('content-input');
const switchMode = document.getElementById('dark-light-mode');

// I'm using this same function on both form.js and logic.js. Keeps it working on both pages maybe due to which <script> on the HTML takes priority over.
// a theme switch function
function changeTheme() {
    // targets the root element
    const rootElement = document.documentElement;

    // using a new variable to gather the root element data-theme and creating another variable below.
    let dataTheme = rootElement.getAttribute('data-theme');
    let checkTheme;

    // This checks if dataTheme is set to 'light'. If it is.. then it will go to 'dark', otherwise it will stay 'light'. Esssentially using a ternary operator.
    checkTheme = (dataTheme === 'light') ? 'dark' : 'light';

    // This will set the data-theme to whatever value the checkTheme variable creates.
    rootElement.setAttribute('data-theme', checkTheme);

    return;
};


// when you click the dark or light mode button, then it runs changeTheme function.
document.getElementById('dark-light-mode').addEventListener('click', changeTheme)