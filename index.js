'use strict';

const { qris, validate, decode } = require('./mpm');

qris.payloadFormatIndicator = "01"
qris.pointOfInitiationMethod = "12"
qris.merchantCategoryCode = "5499"
qris.transactionCurrency = "360"
qris.transactionAmount = "25250"
qris.countryCode = "ID"
qris.merchantName = "Warteg Bahari"
qris.postalCode = "15414"
qris.merchantCity = "Tangerang Selatan"

console.log(qris.data);

// console.log(validate('testtt'))
// console.log(decode('testttdecode'))