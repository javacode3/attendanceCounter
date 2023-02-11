let asistencia = document.createElement('h1');
asistencia.textContent = 'Reunion Sacramental';
document.body.appendChild(asistencia);

let numero = document.createElement('h2');
numero.textContent = 0;
document.body.appendChild(numero);

let button = document.createElement('button'); 
button.textContent = 'Asistentes';
document.body.appendChild(button);

let buttonDos = document.createElement('button');
buttonDos.textContent = 'Guardar';
document.body.appendChild(buttonDos);

let restartButton = document.createElement('button');
restartButton.textContent = 'Reiniciar'; 
document.body.appendChild(restartButton);

let entries = document.createElement('p');
entries.textContent = 'Entradas previas: ';
document.body.appendChild(entries);

let clickCount = 0; 

button.addEventListener('click', () => {
    if(button.textContent === 'Asistentes'){
        clickCount += 1
        numero.textContent = clickCount
    } 
});

buttonDos.addEventListener('click', () => {
    let countStr = clickCount + '-';
    entries.textContent += countStr;
    numero.textContent = 0; 
    clickCount = 0; 
});

restartButton.addEventListener('click', () => {
    clickCount = 0; 
    numero.textContent = 0; 
    entries.textContent = 'Entradas previas: ';
    alert('Te equivocaste?' + ' ' + 'No te preocupes' + ' 😉')
})