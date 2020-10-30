// change ice cream cone photo to match flavour
const radiobuttonchoc = document.querySelector('#chocolate');



function changeCone() {
    if (document.getElementById('Chocolate').checked == true) {
        document.body.style.backgroundImage = "url('conechoc.jpeg')"
    } else { 
        document.getElementById('heading').style.backgroundColor = 'blue'

    }
};

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
