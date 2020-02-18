const qrcode = require('qrcode')
const extend = require('extend')
const debug = require('./lib/debug')
const synthetic = require('./lib/synthetic')
const config = require('./config')

class Poster {
    constructor(options = {}) {
        this.options = options
    }

    /**
     * 
     * @param {String} text 必须 qrcode内容
     * @param {String} filepath 可选 海报生成路径，填写则覆盖options.dist()配置
     * @param {Object} options 可选 填写则合并到上游配置
     * @return {Promise<String>} 返回海报生成路径
     */
    async toFile(text, filepath, options) {
        if ('object' === typeof filepath) {
            options = filepath
            filepath = null
        }

        // 合并配置
        options = this.$createOptions(options)

        debug('options:', options)

        // 查询海报模板
        const template = options.templates[options.index]

        if (!template) {
            throw new Error('Template is Empty, Please check templates and index')
        }

        // 创建二维码
        const qrcode = await this.$qrcode(text, options)
        const poster = {
            ...template,
            dist: filepath || options.dist()
        }

        debug('qrcode:', qrcode)
        debug('poster:', poster)

        // 二维码 + 海报模板 = 合成海报
        return synthetic(qrcode, poster).then(() => poster.dist)
    }

    $qrcode(text, options) {
        const filepath = options.qrcode.dist()
        const template = options.templates[options.index]
        return qrcode.toFile(filepath, text, options.qrcode).then(() => ({
            width: template.qrWidth,
            height: template.qrHeight || template.qrWidth,
            filepath
        }))
    }

    $createOptions(options = {}) {
        return extend(true, {}, config, this.options, options)
    }
}

module.exports = Poster
