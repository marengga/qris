const qrisTags = [
    {
        "tag": "00",
        "name": "payloadFormatIndicator"
    },
    {
        "tag": "01",
        "name": "pointOfInitiationMethod",
    },
    {
        "tag": "26",
        "name": "merchantAccountInformation",
    },
    {
        "tag": "51",
        "name": "merchantAccountInformation51",
    },
    {
        "tag": "52",
        "name": "merchantCategoryCode",
    },
    {
        "tag": "53",
        "name": "transactionCurrency",
    },
    {
        "tag": "54",
        "name": "transactionAmount",
    },
    {
        "tag": "55",
        "name": "tipOrConvenienceIndicator",
    },
    {
        "tag": "56",
        "name": "valueOfConvenienceFeeFixed",
    },
    {
        "tag": "57",
        "name": "valueOfConvenienceFeePercentage",
    },
    {
        "tag": "58",
        "name": "countryCode",
    },
    {
        "tag": "59",
        "name": "merchantName",
    },
    {
        "tag": "60",
        "name": "merchantCity",
    },
    {
        "tag": "61",
        "name": "postalCode",
    },
    {
        "tag": "62",
        "name": "additionalDataField",
    },
    {
        "tag": "63",
        "name": "crc",
    }
]

const merchantAccountInfoTags = [
    {
        "tag": "00",
        "name": "globallyUniqueIdentifier",
    },
    {
        "tag": "01",
        "name": "merchantPan",
    },
    {
        "tag": "02",
        "name": "merchantId",
    },
    {
        "tag": "03",
        "name": "merchantCriteria",
    }
]

const additionalDataFieldTags = [
    {
        "tag": "01",
        "name": "billNumber",
    },
    {
        "tag": "02",
        "name": "mobileNumber",
    },
    {
        "tag": "03",
        "name": "storeLabel",
    },
    {
        "tag": "04",
        "name": "loyaltyNumber",
    },
    {
        "tag": "05",
        "name": "referenceLabel",
    },
    {
        "tag": "06",
        "name": "customerLabel",
    },
    {
        "tag": "07",
        "name": "terminalLabel",
    },
    {
        "tag": "08",
        "name": "purposeOfTransaction",
    },
    {
        "tag": "09",
        "name": "additionalConsumerData",
    }
]

module.exports = {
    qrisTags,
    merchantAccountInfoTags,
    additionalDataFieldTags
}