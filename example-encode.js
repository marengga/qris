'use strict';
const { Qris, MerchantAccountInfo, AdditionalDataField, encode } = require('./mpm');

let mai = new MerchantAccountInfo()
mai.globallyUniqueIdentifier = "COM.NOBUBANK.WWW"
mai.merchantPan = "936005030000080819"
mai.merchantId = "08040000679159"
mai.merchantCriteria = "UME"

let mai51 = new MerchantAccountInfo()
mai51.globallyUniqueIdentifier = "ID.CO.QRIS.WWW"
mai51.merchantPan = ""
mai51.merchantId = "ID2021084066657"
mai51.merchantCriteria = "UME"

let adf = new AdditionalDataField()
adf.billNumber = "08270002043020"
adf.mobileNumber = ""
adf.storeLabel = ""
adf.loyaltyNumber = ""
adf.referenceLabel = "PN2UQIR0M4YRPFIBYAAE"
adf.customerLabel = "PN2UQIR0M4YRPFIBYAAE"
adf.terminalLabel = "A01"
adf.purposeOfTransaction = ""
adf.additionalConsumerData = ""

let qris = new Qris()
qris.payloadFormatIndicator = "01"
qris.pointOfInitiationMethod = "12"
qris.merchantCategoryCode = "5499"
qris.transactionCurrency = "360"
qris.transactionAmount = "52750"
qris.countryCode = "ID"
qris.tipOrConvenienceIndicator = ""
qris.merchantName = "TOKO MARENGGA"
qris.postalCode = "15810"
qris.merchantCity = "Tangerang"
qris.merchantAccountInformation = encode(mai)
qris.merchantAccountInformation51 = encode(mai51)
qris.additionalDataField = encode(adf)

const qrData = encode(qris)
console.log(qrData)