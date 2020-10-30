// change ice cream cone photo to match flavour
const submitButton = document.querySelector('#submit');
const submit = document.querySelector('#submitt');


function changeCone() {
    if (document.getElementById('Chocolate').checked == true) {  
        document.body.style.backgroundImage = "url('choc.jpg')";

    } else if (document.getElementById('Vanilla').checked == true) {  
            document.body.style.backgroundImage = "url('vanilla.jpg')";
    } else {
        document.body.style.backgroundImage = "url('icecream.jpg')";
    }
};


submit.addEventListener('click', e => {
        e.preventDefault();
        let name = document.querySelector('#user').value;

        if (document.querySelector('#Chocolate').checked == true) {
        flavour = document.querySelector('#Chocolate').value
        } else if (document.querySelector('#Vanilla').checked == true){
            flavour = document.querySelector('#Vanilla').value
        } else if (document.querySelector('#Strawberry').checked == true){
            flavour = document.querySelector('#Strawberry').value
        } else { alert('Please choose a flavour!')};
        if (name == '') {name= 'Anoymous'};
        generatePerson(flavour, name);
        document.getElementById("form").reset();
    });

const generatePerson = (flav, name) => {
    const html = `<li><span >${flav},</span><span> ${name}</span></li>`;
    document.querySelector('#list').innerHTML += html; 
    };



// function changeCone() {
//     if (document.getElementById('Chocolate').checked == true) {  
//         document.body.style.backgroundImage = "url('choc.jpg')";

//     } else { 
//         document.getElementById('heading').style.backgroundColor = 'blue'

//     }
// };

// function changeCone() {
//     if (document.getElementById('Chocolate').checked == true) {
//         document.getElementById('heading').style.backgroundColor = 'red'
//     } else { 
//         document.getElementById('heading').style.backgroundColor = 'blue'

//     }
// };


// radiobuttonchoc.addEventListener('click', changeCone(){
//     if (Document.getElementById('#Chocolate').checked === true) {
//         document.getElementById('heading').style.backgroundColor = 'red'
//     } else { 
//         document.getElementById('heading').style.backgroundColor = 'blue'

//     }
// })
