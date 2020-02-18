const QRCode = require('qrcode')

QRCode.toFile('./output/test.png', 'qrcode string', {
    margin: 1,
    width: 300,
})
.then(res => {
    console.log(res, 123)
})
.catch(console.error)