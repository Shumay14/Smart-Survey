"use strict";
exports.__esModule = true;
exports.createVP = exports.createVC = void 0;

// convert data into canonical(standard or normal) format
var canonicalize_1 = require("canonicalize");
var util_1 = require("./util");
var defaultAlg = 'X25519_XSalsa20_Poly1305';


// create jwt-did-vc
// return aaaa.bbbb
function createVC(header, payload) {
    if (!header.alg)
        header.alg = defaultAlg;
    // encodeSection == Base64 Encode Function, 사용자 정의 함수
    var endcodedHeader = encodeSection(header);
    var encodedPayload = encodeSection(payload);
    return [endcodedHeader, encodedPayload].join('.');
}
exports.createVC = createVC;


// create jwt-did-vp
// return aaaa.bbbb.cccc
function createVP(header, payload, signature) {
    return [header, payload, signature].join('.');
}
exports.createVP = createVP;


function encodeSection(data, shouldCanonicalize) {
    if (shouldCanonicalize === void 0) { shouldCanonicalize = false; }
    if (shouldCanonicalize) {
        return (0, util_1.encodeBase64url)((0, canonicalize_1["default"])(data));
    }
    else {
        return (0, util_1.encodeBase64url)(JSON.stringify(data));
    }
}
