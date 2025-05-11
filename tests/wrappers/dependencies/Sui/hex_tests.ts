import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "hex_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_hex_encode_string_literal() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_encode_string_literal", [], args);

}

function test_hex_encode_hex_literal() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_encode_hex_literal", [], args);

}

function test_hex_decode_string_literal() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_decode_string_literal", [], args);

}

function test_hex_decode_string_literal__lowercase_and_uppercase() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_decode_string_literal__lowercase_and_uppercase", [], args);

}

function test_hex_decode_string_literal__long_hex() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_decode_string_literal__long_hex", [], args);

}

function test_hex_decode__invalid_length() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_decode__invalid_length", [], args);

}

function test_hex_decode__hex_literal() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_decode__hex_literal", [], args);

}

function test_hex_decode__invalid_string_literal() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hex_decode__invalid_string_literal", [], args);

}

export const hex_tests = {
    unit_test_poison,
    test_hex_encode_string_literal,
    test_hex_encode_hex_literal,
    test_hex_decode_string_literal,
    test_hex_decode_string_literal__lowercase_and_uppercase,
    test_hex_decode_string_literal__long_hex,
    test_hex_decode__invalid_length,
    test_hex_decode__hex_literal,
    test_hex_decode__invalid_string_literal
}