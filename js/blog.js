function renderEverthing() {
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        const div = document.createElement('div');
        const parentElement = document.getElementById('body');
        document.body.appendChild(div);
        div.classList.add('divClass');
    })
}

renderEverything();