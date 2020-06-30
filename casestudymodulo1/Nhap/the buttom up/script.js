// Get DOM Elements
let arrMayquat = [{ img: 'image/hinhnho/anhnho1.jpg', description: '1231241123123' }, { img: 'image/hinhnho/anhnho1.jpg', description: '1231241123123' }];
arrMayquat.push({
    img: 'image/hinhnho/anhnho1.jpg',
    description: '1231241123123',
});
arrMayquat.push({

    img: 'image/hinhnho/anhnho2.jpg',
    description: 'sạhgdsadgjashgdjsa',

});


const closeBtn = document.querySelector('.close');


// Events

window.addEventListener('click', outsideClick);

// Open
let modal = document.getElementById('my-modal');

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
changeModal = function (str, description) {
    document.getElementById('my-modal').style.display = 'block';
    document.getElementById("anh").src = str;
    document.getElementById("description").innerHTML = description;
}