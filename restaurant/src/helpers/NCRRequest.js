const CryptoJS = require("crypto-js");

let environment = {
    "cors-anywhere": "https://cors-anywhere.herokuapp.com/",
    "site-service": "https://gateway-staging.ncrcloud.com/site",
    "security-service": "https://gateway-staging.ncrcloud.com/security",
    "order-service": "https://gateway-staging.ncrcloud.com/order/3/orders/1",
    "tdm-service": "https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents",
    "cdm-service": "https://gateway-staging.ncrcloud.com/cdm",
    "catalog-items-service": "https://gateway-staging.ncrcloud.com/catalog/items",
    "selling-service":"https://gateway-staging.ncrcloud.com/emerald/selling-service/v1/carts",
    "selling-configuration-service":"https://gateway-staging.ncrcloud.com/emerald/selling-service/c1",
    "catalog-service":"https://gateway-staging.ncrcloud.com/catalog/2",
    "bsp-organization": "f67a5f37952346ed8f72995919b687e3",
    "bsp-site-id": "766adbd7a7e549938e28c6ac5ac66565",
    "bsp-shared-key": "1fc0b35e4ce7470db0af5de63aa780ae",
    "bsp-secret-key": "b6e472097ba34186afd9c11d7ca24c0b",
    "version-num": "3",
};

// Ensures any content has variables substituted; supports recursive
// resolution (environment variable that references environment/global variables)
const convertVariables = function(templateContent) {
    const regexPattern = /({{(.*?)}})/g;
    let convertedContent = templateContent;
    let matchedVar = new RegExp(regexPattern).exec(convertedContent);
    while (matchedVar !== null) {
        const variableReplacement = matchedVar[1];
        const variableName = matchedVar[2];
        const variableValue = environment[variableName];
        convertedContent = convertedContent.replace(variableReplacement, variableValue);
        matchedVar = new RegExp(regexPattern).exec(convertedContent);
    }
    return convertedContent;
}

// Extracts the signable content from the request
const signableContent = function(request) {
    const requestPath = convertVariables(request.url.trim()).replace(/^https?:\/\/[^\/]+\//, '/');
    const params = [
        request.method,
        requestPath,
        request.headers['content-type'],
        request.headers['content-md5'],
        convertVariables(request.headers['nep-organization'])
    ];
    return params.filter(p => p && p.length > 0).join('\n');
}

// Generates a unique date-based signing key
const uniqueKey = function(date) {
    const nonce = date.toISOString().slice(0, 19) + '.000Z';
    return environment['bsp-secret-key'] + nonce;
};

// Calculates the HMAC signature
const calculateSignature = function(req) {
    const date = new Date();
    environment['date'] = date.toGMTString();
    const key = uniqueKey(date);
    const sc = signableContent(req);
    const hmac = CryptoJS.HmacSHA512(sc, key);
    return CryptoJS.enc.Base64.stringify(hmac);
};

function NCRRequest(path, body, headers, method) {
    const date = new Date();
    const varpath = convertVariables(path);
    headers.append("Date", date.toGMTString());
    headers.append("Origin", varpath);

    let requestOptions = {
        method: method,
        headers: headers,
        body: convertVariables(body),
        redirect: 'follow',
        url: varpath,
        mode: 'cors',
    };

    let req = new Request(requestOptions.url, requestOptions);

    // Stores the generated HMAC signature under the access key
    const signature = calculateSignature(req);
    const sharedKey = environment['bsp-shared-key'];
    environment['bsp-access-key'] = `AccessKey ${sharedKey}:${signature}`;

    console.log(environment['bsp-access-key']);
    requestOptions.headers.append("Authorization", environment['bsp-access-key']);

    return new Promise((resolve, reject) => {
        fetch(req)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });

}

export default NCRRequest;
