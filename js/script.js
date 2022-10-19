// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// aggiungere un tag HTML alla pagina per visualizzare i numeri
const btnGeneraNumHtml = document.getElementById('generaNumber');

// mi metto i 5 numeri in una variabile
let arrayNum = 5;

//preparare arrey
let numeri = [];

function play() {
    const inputNumberHtml = document.getElementById('inputNumber');
    const btnSendHtml = document.getElementById('btnSend')
    // Rimuovere classe display none
    timer.classList.remove("d-none");

    btnGeneraNumHtml.classList.add('d-none');
    // uso un ciclo per generare i numeri e popolare l'arrey
    while (numeri.length < arrayNum) {
        let numeroGen = randomNumber(1, 100);
        if (!numeri.includes(numeroGen)) {
            numeri.push(numeroGen);
        }
    };
    console.log(numeri);

    //Timer in secondi
    let counter = 2;
    let num = document.getElementById('timer')
    const countdown = setInterval(() => {
        if (counter === 0) {
            clearInterval(countdown)
            num.innerHTML = 'Inserisci i numeri che ricordi uno alla volta';
            // Funzione per nascondere i numeri
            viewNumber.innerHTML = '';
            // Rimuovere classe display none
            inputNumberHtml.classList.remove("d-none")
            btnSendHtml.classList.remove("d-none")
        } else {
            num.innerHTML = counter;
            counter--;
        }
    }, 1000);

    // Array dei numeri inseriti dal cliente
    let arrayNumberClient = [];

    // prendo il div dall HTML
    const viewNumber = document.getElementById('view-num');
    viewNumber.innerHTML = `Ricordati questi numeri:<br>${numeri.join(' - ')}`;

    // Funzione per chiedere i numeri all'utente
    function sendNumber() {
        // ciclo per controllo numeri
        // let perdita = false;
        // for (let i = 0; i < arrayNum; i++) {
        // if(arrayNumberClient[i] != arrayNum; i++){
        // perdita = true;
        // }
        // }

        // creare un altra array per numeri inseriti dall'utente
        if (arrayNumberClient.length < arrayNum) {
            let inputNumberClient = parseInt(inputNumberHtml.value);
            arrayNumberClient.push(inputNumberClient);
            inputNumberHtml.value = '';

            console.log(inputNumberClient);

            // se il numero è incluso nell'arrey, se no continuo
            if (!numeri.includes(inputNumberClient)) {
                console.log('riprova');

            } else {
                console.log('bravo');
            }
        } else {
            btnSendHtml.removeEventListener('click', sendNumber);
            console.log('Finito di inserire i numeri')
            arrayNum--;
            viewNumber.innerHTML = `I numeri da te inseriti sono: ${arrayNumberClient.join(' - ')}`
        }

        // checkNumber();
        console.log(arrayNumberClient);



    };

    //Clicca l'utente per inserire i numeri
    btnSendHtml.addEventListener('click', sendNumber);

    // Funzione che controlla l'arrey creata dall'utente
    // function checkNumber() {

    // }

};

//Clicca per generare i numeri
btnGeneraNumHtml.addEventListener('click', play);