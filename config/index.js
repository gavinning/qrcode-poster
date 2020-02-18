// Poster默认配置

const path = require('path')
const sid = require('shortid')

module.exports = {
    qrcode: { // 参考qrcode模块toFile.options配置
        scale: 10, // 像素放大倍数
        margin: 1, // 二维码外间距
        color: {   // 二维码颜色配置
            dark: '#000',
            light: '#fff'
        },
        dist() { // 二维码默认生成路径，默认生成在系统临时目录
            return path.join(os.tmpDir(), sid.generate())
        }
    },
    index: 0, // 当前生效海报模板的索引
    templates: [
        {
            x: 567, // 二维码在海报模板上的横向位置 x轴坐标
            y: 32,  // 二维码在海报模板上的纵向位置 y轴坐标
            qrWidth: 200,  // 二维码宽度
            qrHeight: 200, // 二维码高度，默认为二维码宽度
            filepath: path.join(__dirname, '../example/1.jpg') // 海报模板位置
        }
    ],
    dist() { // 海报默认生成路径，默认生成在系统临时目录
        return path.join(os.tmpDir(), sid.generate())
    }
}
