var principal = document.querySelector('.abrir');
var aparece = document.querySelector('.escondido');
principal.addEventListener('click', function() {
    if(aparece.style.display === 'block') {
        aparece.style.display = 'none';
    }
    else{
        aparece.style.display = 'block'
    }

});
