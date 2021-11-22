"use strict";
exports.__esModule = true;
exports.leftpad = exports.parseKey = exports.toSealed = exports.fromJose = exports.toJose = exports.stringToBytes = exports.bytesToHex = exports.decodeBase64url = exports.encodeBase64url = exports.hexToBytes = exports.bytesToMultibase = exports.bytesToBase58 = exports.base58ToBytes = exports.bytesToBase64 = exports.base64ToBytes = exports.bytesToBase64url = void 0;
var u8a = require("uint8arrays");
var basics_1 = require("multiformats/basics");
function bytesToBase64url(b) {
    return u8a.toString(b, 'base64url');
}
exports.bytesToBase64url = bytesToBase64url;
function base64ToBytes(s) {
    var inputBase64Url = s.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    return u8a.fromString(inputBase64Url, 'base64url');
}
exports.base64ToBytes = base64ToBytes;
function bytesToBase64(b) {
    return u8a.toString(b, 'base64pad');
}
exports.bytesToBase64 = bytesToBase64;
function base58ToBytes(s) {
    return u8a.fromString(s, 'base58btc');
}
exports.base58ToBytes = base58ToBytes;
function bytesToBase58(b) {
    return u8a.toString(b, 'base58btc');
}
exports.bytesToBase58 = bytesToBase58;
function bytesToMultibase(b, base) {
    return basics_1.bases[base].encode(b);
}
exports.bytesToMultibase = bytesToMultibase;
function hexToBytes(s) {
    var input = s.startsWith('0x') ? s.substring(2) : s;
    return u8a.fromString(input.toLowerCase(), 'base16');
}
exports.hexToBytes = hexToBytes;
/////#####
function encodeBase64url(s) {
    return bytesToBase64url(u8a.fromString(s));
}
exports.encodeBase64url = encodeBase64url;
function decodeBase64url(s) {
    return u8a.toString(base64ToBytes(s));
}
exports.decodeBase64url = decodeBase64url;
/////#####
function bytesToHex(b) {
    return u8a.toString(b, 'base16');
}
exports.bytesToHex = bytesToHex;
function stringToBytes(s) {
    return u8a.fromString(s);
}
exports.stringToBytes = stringToBytes;
function toJose(_a, recoverable) {
    var r = _a.r, s = _a.s, recoveryParam = _a.recoveryParam;
    var jose = new Uint8Array(recoverable ? 65 : 64);
    jose.set(u8a.fromString(r, 'base16'), 0);
    jose.set(u8a.fromString(s, 'base16'), 32);
    if (recoverable) {
        if (typeof recoveryParam === 'undefined') {
            throw new Error('Signer did not return a recoveryParam');
        }
        jose[64] = recoveryParam;
    }
    return bytesToBase64url(jose);
}
exports.toJose = toJose;
function fromJose(signature) {
    var signatureBytes = base64ToBytes(signature);
    if (signatureBytes.length < 64 || signatureBytes.length > 65) {
        throw new TypeError("Wrong size for signature. Expected 64 or 65 bytes, but got " + signatureBytes.length);
    }
    var r = bytesToHex(signatureBytes.slice(0, 32));
    var s = bytesToHex(signatureBytes.slice(32, 64));
    var recoveryParam = signatureBytes.length === 65 ? signatureBytes[64] : undefined;
    return { r: r, s: s, recoveryParam: recoveryParam };
}
exports.fromJose = fromJose;
function toSealed(ciphertext, tag) {
    return u8a.concat([base64ToBytes(ciphertext), base64ToBytes(tag)]);
}
exports.toSealed = toSealed;
var hexMatcher = /^(0x)?([a-fA-F0-9]{64}|[a-fA-F0-9]{128})$/;
var base58Matcher = /^([1-9A-HJ-NP-Za-km-z]{44}|[1-9A-HJ-NP-Za-km-z]{88})$/;
var base64Matcher = /^([0-9a-zA-Z=\-_+/]{43}|[0-9a-zA-Z=\-_+/]{86})(={0,2})$/;
/**
 * Parses a private key and returns the Uint8Array representation.
 * This method uses an heuristic to determine the key encoding to then be able to parse it into 32 or 64 bytes.
 *
 * @param input a 32 or 64 byte key presented either as a Uint8Array or as a hex, base64, or base58btc encoded string
 *
 * @throws TypeError('Invalid private key format') if the key doesn't match any of the accepted formats or length
 */
function parseKey(input) {
    if (typeof input === 'string') {
        if (hexMatcher.test(input)) {
            return hexToBytes(input);
        }
        else if (base58Matcher.test(input)) {
            return base58ToBytes(input);
        }
        else if (base64Matcher.test(input)) {
            return base64ToBytes(input);
        }
        else {
            throw TypeError('bad_key: Invalid private key format');
        }
    }
    else if (input instanceof Uint8Array) {
        return input;
    }
    else {
        throw TypeError('bad_key: Invalid private key format');
    }
}
exports.parseKey = parseKey;
function leftpad(data, size) {
    if (size === void 0) { size = 64; }
    if (data.length === size)
        return data;
    return '0'.repeat(size - data.length) + data;
}
exports.leftpad = leftpad;
