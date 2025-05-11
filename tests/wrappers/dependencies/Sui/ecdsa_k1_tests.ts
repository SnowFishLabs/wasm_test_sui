import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "ecdsa_k1_tests";

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

function test_ecrecover_pubkey() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_ecrecover_pubkey", [], args);

}

function test_ecrecover_pubkey_fail_to_recover() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_ecrecover_pubkey_fail_to_recover", [], args);

}

function test_ecrecover_pubkey_invalid_sig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_ecrecover_pubkey_invalid_sig", [], args);

}

function test_secp256k1_verify_fails_with_recoverable_sig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_secp256k1_verify_fails_with_recoverable_sig", [], args);

}

function test_secp256k1_verify_success_with_nonrecoverable_sig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_secp256k1_verify_success_with_nonrecoverable_sig", [], args);

}

function test_secp256k1_invalid() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_secp256k1_invalid", [], args);

}

function test_ecrecover_eth_address() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_ecrecover_eth_address", [], args);

}

function ecrecover_eth_address(arg0: number[], arg1: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ecrecover_eth_address", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function test_sign() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_sign", [], args);

}

function test_sign_recoverable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_sign_recoverable", [], args);

}

function test_sign_invalid_hash() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_sign_invalid_hash", [], args);

}

function test_sign_invalid_private_key() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_sign_invalid_private_key", [], args);

}

function test_generate_keypair() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_generate_keypair", [], args);

}

function test_generate_keypair_invalid_seed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_generate_keypair_invalid_seed", [], args);

}

export const ecdsa_k1_tests = {
    unit_test_poison,
    test_ecrecover_pubkey,
    test_ecrecover_pubkey_fail_to_recover,
    test_ecrecover_pubkey_invalid_sig,
    test_secp256k1_verify_fails_with_recoverable_sig,
    test_secp256k1_verify_success_with_nonrecoverable_sig,
    test_secp256k1_invalid,
    test_ecrecover_eth_address,
    ecrecover_eth_address,
    test_sign,
    test_sign_recoverable,
    test_sign_invalid_hash,
    test_sign_invalid_private_key,
    test_generate_keypair,
    test_generate_keypair_invalid_seed
}