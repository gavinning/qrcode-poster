qrcode-poster
---
创建带二维码的海报，在图片指定位置创建二维码  
[gm](https://www.npmjs.com/package/gm)  
[qrcode](https://www.npmjs.com/package/qrcode)  


## 安装依赖
首先需要安装 ``gm`` 模块依赖 ``graphicsmagick`` or ``imagemagick``
```sh
# Centos
yum install GraphicsMagick -y

# Mac os x
brew install graphicsmagick
```

## 安装使用
```sh
npm i qrcode-poster
```
```js
// @filepath /example/index.js

const path = require('path')
const Poster = require('qrcode-poster')

/**
 * options默认值参考「默认配置」
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
poster.toFile('qrcode', { index: 1 }).then(console.log)
```

### 默认配置 Options
```js
module.exports = {
    qrcode: { // 详情可参考qrcode模块toFile.options配置
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
```

### 示例演示
```sh
git clone https://github.com/gavinning/qrcode-poster.git
cd qrcode-poster && npm i
node example # or DEBUG=* node example
```

> Preview
![](output/poster.jpg)
