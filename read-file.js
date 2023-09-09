const fs = require('fs');

// Lecture du contenu dans le fichier welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
