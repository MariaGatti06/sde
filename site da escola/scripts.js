// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const updateLink = document.getElementById('update-link');
    
    if (updateLink) {
        updateLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Por favor, entre em contato com a administração para atualizar os dados.');
        });
    }
});