const zeroPad = require('../helper/zeroPad')
const { qrisTags, merchantAccountInfoTags, additionalDataFieldTags } = require('./tags')
const crc = require('../helper/crc16ccitt')

class Qris {
    constructor() {
        return new Proxy(this, this);
    }

    get(target, prop) {
        return this[prop] || '';
    }

    set(target, prop, value) {
        if (value.length === 0)
            return true
        let tag = qrisTags.find(o => o.name === prop)?.tag;
        if (tag) {
            const length = zeroPad(value.length, 2)
            const tlv = tag + length + value
            return this[prop] = tlv
        }
    }
}

class MerchantAccountInfo {
    constructor() {
        return new Proxy(this, this);
    }

    get(target, prop) {
        return this[prop] || '';
    }

    set(target, prop, value) {
        if (value.length === 0)
            return true
        let tag = merchantAccountInfoTags.find(o => o.name === prop)?.tag;
        if (tag) {
            const length = zeroPad(value.length, 2)
            const tlv = tag + length + value
            return this[prop] = tlv
        }
    }
}

class AdditionalDataField {
    constructor() {
        return new Proxy(this, this);
    }

    get(target, prop) {
        return this[prop] || '';
    }

    set(target, prop, value) {
        if (value.length === 0)
            return true
        let tag = additionalDataFieldTags.find(o => o.name === prop)?.tag;
        if (tag) {
            const length = zeroPad(value.length, 2)
            const tlv = tag + length + value
            return this[prop] = tlv
        }

    }
}

const encode = (data) => {
    const values = Object.values(data)
    values.sort()
    let encodedData = values.join('')
    if (data instanceof Qris) {
        const c = crc(encodedData + '6304').toString(16).toUpperCase()
        encodedData += "6304" + c
    }
    return encodedData
}

module.exports = {
    Qris,
    MerchantAccountInfo,
    AdditionalDataField,
    encode
};