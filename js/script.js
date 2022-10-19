// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// aggiungere un tag HTML alla pagina per visualizzare i numeri
const btnSendHtml = document.getElementById('btnSend')
const btnGeneraNumHtml = document.getElementById('generaNumber')

// creo l'arrey per accogliere i 5 numeri randomici;
// randomNumber(min, max);

// mi metto i 5 numeri in una variabile
let arrayNum = 5

//preparare arrey
let numeri = [];

function play() {
    const inputNumberHtml = document.getElementById('inputNumber');
    btnGeneraNumHtml.classList.add('d-none')
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
        console.log(counter);
        if (counter === 0) {
            clearInterval(countdown)
            num.innerHTML = 'Inserisci i numeri che ricordi uno alla volta';
            // Funzione per nascondere i numeri
            viewNumber.innerHTML = '';
            inputNumberHtml.classList.remove("d-none")
            btnSendHtml.classList.remove("d-none")

        } else {
            num.innerHTML = counter;
            counter--;
        }
    }, 1000);

    // Funzione per chiedere i numeri all'utente
    function sendNumber() {

        let inputNumberClient = parseInt(inputNumberHtml.value);
        console.log(inputNumberClient);

        //creare un altra array per numeri inseriti dall'utente
        let arrayNumberClient = [];

        arrayNumberClient.push(inputNumberClient);
        // inputNumberClient++;

        console.log(arrayNumberClient.length);

        //funzione che controlla l'arrey creata dall'utente

    };

    //Clicca l'utente per inserire i numeri
    btnSendHtml.addEventListener('click', sendNumber);

}

//Clicca per generare i numeri
btnGeneraNumHtml.addEventListener('click', play);