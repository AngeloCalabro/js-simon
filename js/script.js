// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// aggiungere un tag HTML alla pagina per visualizzare i numeri
const btnGeneraNumHtml = document.getElementById('generaNumber')

// creo l'arrey per accogliere i 5 numeri randomici;
// randomNumber(min, max);

// mi metto i 5 numeri in una variabile
let arrayNum = 5

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
    console.log(numeri)

    // prendo il div dal HTML
    const viewNumber = document.getElementById('view-num');
    viewNumber.innerHTML = numeri;

    //Timer 5 secondi
    let counter = 1;
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

    let arrayNumberClient = [];

    // Funzione per chiedere i numeri all'utente
    function sendNumber() {
        //creare un altra array per numeri inseriti dall'utente
        if (arrayNumberClient.length < arrayNum) {
            let inputNumberClient = parseInt(inputNumberHtml.value);
            arrayNumberClient.push(inputNumberClient);
            console.log(inputNumberClient);
            if (numeri.includes(inputNumberClient)) {
                console.log('bravo')
            } else {
                console.log('riprova')
            }
        } else {
            btnSendHtml.removeEventListener('click', sendNumber)
        }
        console.log(arrayNumberClient)

        //creare un altra array per numeri inseriti dall'utente

        //funzione che controlla l'arrey creata dall'utente

    };

    //Clicca l'utente per inserire i numeri
    btnSendHtml.addEventListener('click', sendNumber);

}

//Clicca per generare i numeri
btnGeneraNumHtml.addEventListener('click', play);