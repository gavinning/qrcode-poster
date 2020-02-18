const path = require('path')
const Poster = require('../')

/**
 * options默认值参考 '../config/index.js'
 */
const poster = new Poster({
    qrcode: {
        color: {
            dark: '#cb3837'
        },
        dist() {
            return path.join(__dirname, '../output/qrcode.png')
        }
    },
    index: 0,
    templates: [
        {
            x: 567,
            y: 32,
            qrWidth: 200,
            qrHeight: 200,
            filepath: path.join(__dirname, '1.jpg')
        },
        {
            x: 480,
            y: 822,
            qrWidth: 260,
            qrHeight: 260,
            filepath: path.join(__dirname, '1.jpg')
        },
    ],
    dist() {
        return path.join(__dirname, '../output/poster.jpg')
    }
})

// poster.toFile('qrcode')
poster.toFile('qrcode', { index: 0 }).then(console.log)
