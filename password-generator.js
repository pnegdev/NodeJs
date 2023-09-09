const generate = require('generate-password');

const password = generate.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true,
});

console.log("Votre mot de passe est : ", password);
