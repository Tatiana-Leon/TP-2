// API à utiliser pour le travail: https://randomuser.me/api/?results=5

const container = document.getElementById('container');

window.addEventListener('load', () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        data.results.forEach(({ picture, name, email }) => {
          const ficheDiv = document.createElement('div');
          ficheDiv.className = 'fiche';

          ficheDiv.innerHTML = `
            <img class="photo" src="${picture.large}">
            <p class="nom">Nom: ${name.first} ${name.last}</p>
            <p class="courriel">Courriel: ${email}</p>
          `;

          container.appendChild(ficheDiv);
        });
      } else {
        console.log('Aucune donnée de fiche disponible.');
      }
    })
    .catch(error => {
        console.log('Une erreur sest produite:', error);
      });
});