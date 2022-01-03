const fs = require("fs"); //acedemos  a files sistem
const qrcode = require("qrcode"); //modulo para generar QR

const urlCv = "wwww";
const  run = async() => {
    const QR= await qrcode.toDataURL(urlCv)
    const htmlContent= `
    <img src="${QR}">
    `;
    fs.writeFileSync('./index-prueba.html', `${htmlContent}`)    
}
run()