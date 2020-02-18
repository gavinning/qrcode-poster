const gm = require('gm')

module.exports = (qrcode, poster) => {
    return new Promise((resolve, reject) => {
        gm(poster.filepath)
            .draw(`image Over ${poster.x}, ${poster.y}, ${qrcode.width}, ${qrcode.height} "${qrcode.filepath}"`)
            .write(poster.dist, function (err) {
                err ? reject(err) : resolve()
            })
    })
}
