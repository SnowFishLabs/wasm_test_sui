import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "vdf_tests";

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

function test_hash_to_input() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_hash_to_input", [], args);

}

function test_vdf_verify() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_vdf_verify", [], args);

}

function test_vdf_verify_with_invalid_input() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_vdf_verify_with_invalid_input", [], args);

}

function test_vdf_verify_with_invalid_output() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_vdf_verify_with_invalid_output", [], args);

}

function test_vdf_verify_with_invalid_proof() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_vdf_verify_with_invalid_proof", [], args);

}

export const vdf_tests = {
    unit_test_poison,
    test_hash_to_input,
    test_vdf_verify,
    test_vdf_verify_with_invalid_input,
    test_vdf_verify_with_invalid_output,
    test_vdf_verify_with_invalid_proof
}