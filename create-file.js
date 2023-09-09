const fs = require('fs');

const content = 'Hello Node';

// Écriture du contenu dans le fichier welcome.txt
fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error('Erreur lors de la création du fichier welcome.txt :', err);
    } else {
        console.log('Le fichier welcome.txt a été créé avec succès.');
    }
});
