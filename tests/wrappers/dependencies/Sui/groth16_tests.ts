import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "groth16_tests";

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

function test_prepare_verifying_key_bls12381() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_prepare_verifying_key_bls12381", [], args);

}

function test_prepare_verifying_key_invalid_bls12381() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_prepare_verifying_key_invalid_bls12381", [], args);

}

function test_invalid_public_inputs() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_public_inputs", [], args);

}

function test_verify_groth_16_proof_bls12381() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_verify_groth_16_proof_bls12381", [], args);

}

function test_too_many_public_inputs() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_too_many_public_inputs", [], args);

}

function test_prepare_verifying_key_bn254() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_prepare_verifying_key_bn254", [], args);

}

function test_prepare_verifying_key_invalid_bn254() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_prepare_verifying_key_invalid_bn254", [], args);

}

function test_invalid_public_inputs_bn254() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_public_inputs_bn254", [], args);

}

function test_verify_groth_16_proof_bn254() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_verify_groth_16_proof_bn254", [], args);

}

export const groth16_tests = {
    unit_test_poison,
    test_prepare_verifying_key_bls12381,
    test_prepare_verifying_key_invalid_bls12381,
    test_invalid_public_inputs,
    test_verify_groth_16_proof_bls12381,
    test_too_many_public_inputs,
    test_prepare_verifying_key_bn254,
    test_prepare_verifying_key_invalid_bn254,
    test_invalid_public_inputs_bn254,
    test_verify_groth_16_proof_bn254
}