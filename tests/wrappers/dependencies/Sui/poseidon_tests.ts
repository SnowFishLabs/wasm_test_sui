import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "poseidon_tests";

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

function test_poseidon_bn254_hash() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_poseidon_bn254_hash", [], args);

}

function test_poseidon_bn254_canonical_input() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_poseidon_bn254_canonical_input", [], args);

}

function test_poseidon_bn254_non_canonical_input() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_poseidon_bn254_non_canonical_input", [], args);

}

function test_poseidon_bn254_empty_input() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_poseidon_bn254_empty_input", [], args);

}

export const poseidon_tests = {
    unit_test_poison,
    test_poseidon_bn254_hash,
    test_poseidon_bn254_canonical_input,
    test_poseidon_bn254_non_canonical_input,
    test_poseidon_bn254_empty_input
}