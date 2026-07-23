const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../dokumen_adto/Corporate Handbook - PT Adto Cipta Usaha Mandiri.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('../dokumen_adto/handbook_text.txt', data.text);
    console.log('Extracted pages: ' + data.numpages);
}).catch(console.error);
