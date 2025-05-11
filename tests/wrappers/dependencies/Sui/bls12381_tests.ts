import {
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "bls12381_tests";

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

function test_bls12381_min_sig_valid_sig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bls12381_min_sig_valid_sig", [], args);

}

function test_bls12381_min_sig_invalid_sig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bls12381_min_sig_invalid_sig", [], args);

}

function test_bls12381_min_sig_invalid_signature_key_length() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bls12381_min_sig_invalid_signature_key_length", [], args);

}

function test_bls12381_min_sig_invalid_public_key_length() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bls12381_min_sig_invalid_public_key_length", [], args);

}

function test_bls12381_min_pk_valid_and_invalid_sig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bls12381_min_pk_valid_and_invalid_sig", [], args);

}

function test_bls12381_min_pk_invalid_signature_key_length() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bls12381_min_pk_invalid_signature_key_length", [], args);

}

function test_bls12381_min_pk_invalid_public_key_length() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bls12381_min_pk_invalid_public_key_length", [], args);

}

function drand_message(arg0: number[], arg1: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "drand_message", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_drand_round(arg0: number[], arg1: number[], arg2: number[], arg3: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_drand_round", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function test_scalar_ops() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_scalar_ops", [], args);

}

function test_scalar_more_ops() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_scalar_more_ops", [], args);

}

function test_scalar_to_bytes_regression() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_scalar_to_bytes_regression", [], args);

}

function test_valid_scalar_from_bytes() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_valid_scalar_from_bytes", [], args);

}

function test_invalid_scalar_order() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_scalar_order", [], args);

}

function test_invalid_scalar_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_scalar_empty", [], args);

}

function test_invalid_scalar_too_short() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_scalar_too_short", [], args);

}

function test_invalid_scalar_too_long() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_scalar_too_long", [], args);

}

function test_invalid_scalar_div() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_scalar_div", [], args);

}

function test_invalid_scalar_inv() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_scalar_inv", [], args);

}

function test_g1_ops() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_g1_ops", [], args);

}

function test_g1_to_bytes_regression() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_g1_to_bytes_regression", [], args);

}

function test_valid_g1_from_bytes() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_valid_g1_from_bytes", [], args);

}

function test_invalid_g1_too_short() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g1_too_short", [], args);

}

function test_invalid_g1_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g1_empty", [], args);

}

function test_invalid_g1_too_long() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g1_too_long", [], args);

}

function test_invalid_g1_div() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g1_div", [], args);

}

function test_invalid_g1_empty_msg() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g1_empty_msg", [], args);

}

function test_to_from_uncompressed_g1(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_to_from_uncompressed_g1", [], args);

}

function test_uncompressed_g1_sum() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_uncompressed_g1_sum", [], args);

}

function test_uncompressed_g1_sum_too_long() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_uncompressed_g1_sum_too_long", [], args);

}

function test_g2_ops() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_g2_ops", [], args);

}

function test_g2_to_bytes_regression() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_g2_to_bytes_regression", [], args);

}

function test_valid_g2_from_bytes() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_valid_g2_from_bytes", [], args);

}

function test_invalid_g2_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g2_empty", [], args);

}

function test_invalid_g2_too_short() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g2_too_short", [], args);

}

function test_invalid_g2_too_long() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g2_too_long", [], args);

}

function test_invalid_g2_div() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g2_div", [], args);

}

function test_invalid_g2_empty_msg() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_g2_empty_msg", [], args);

}

function test_gt_ops() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_gt_ops", [], args);

}

function test_gt_to_bytes_regression() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_gt_to_bytes_regression", [], args);

}

function test_invalid_gt_div() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_gt_div", [], args);

}

function test_msm_g1() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_msm_g1", [], args);

}

function test_msm_g1_edge_cases() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_msm_g1_edge_cases", [], args);

}

function test_msm_g1_id() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_msm_g1_id", [], args);

}

function test_empty_g1_msm() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_empty_g1_msm", [], args);

}

function test_diff_length_g1_msm() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_diff_length_g1_msm", [], args);

}

function test_msm_g1_too_long() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_msm_g1_too_long", [], args);

}

function test_msm_g2() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_msm_g2", [], args);

}

function test_msm_g2_edge_cases() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_msm_g2_edge_cases", [], args);

}

function test_msm_g2_id() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_msm_g2_id", [], args);

}

function test_empty_g2_msm() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_empty_g2_msm", [], args);

}

function test_diff_length_g2_msm() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_diff_length_g2_msm", [], args);

}

function test_pairing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_pairing", [], args);

}

function test_group_ops_with_standard_signatures_min_sig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_group_ops_with_standard_signatures_min_sig", [], args);

}

function test_group_ops_with_standard_signatures_min_pk() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_group_ops_with_standard_signatures_min_pk", [], args);

}

export const bls12381_tests = {
    unit_test_poison,
    test_bls12381_min_sig_valid_sig,
    test_bls12381_min_sig_invalid_sig,
    test_bls12381_min_sig_invalid_signature_key_length,
    test_bls12381_min_sig_invalid_public_key_length,
    test_bls12381_min_pk_valid_and_invalid_sig,
    test_bls12381_min_pk_invalid_signature_key_length,
    test_bls12381_min_pk_invalid_public_key_length,
    drand_message,
    verify_drand_round,
    test_scalar_ops,
    test_scalar_more_ops,
    test_scalar_to_bytes_regression,
    test_valid_scalar_from_bytes,
    test_invalid_scalar_order,
    test_invalid_scalar_empty,
    test_invalid_scalar_too_short,
    test_invalid_scalar_too_long,
    test_invalid_scalar_div,
    test_invalid_scalar_inv,
    test_g1_ops,
    test_g1_to_bytes_regression,
    test_valid_g1_from_bytes,
    test_invalid_g1_too_short,
    test_invalid_g1_empty,
    test_invalid_g1_too_long,
    test_invalid_g1_div,
    test_invalid_g1_empty_msg,
    test_to_from_uncompressed_g1,
    test_uncompressed_g1_sum,
    test_uncompressed_g1_sum_too_long,
    test_g2_ops,
    test_g2_to_bytes_regression,
    test_valid_g2_from_bytes,
    test_invalid_g2_empty,
    test_invalid_g2_too_short,
    test_invalid_g2_too_long,
    test_invalid_g2_div,
    test_invalid_g2_empty_msg,
    test_gt_ops,
    test_gt_to_bytes_regression,
    test_invalid_gt_div,
    test_msm_g1,
    test_msm_g1_edge_cases,
    test_msm_g1_id,
    test_empty_g1_msm,
    test_diff_length_g1_msm,
    test_msm_g1_too_long,
    test_msm_g2,
    test_msm_g2_edge_cases,
    test_msm_g2_id,
    test_empty_g2_msm,
    test_diff_length_g2_msm,
    test_pairing,
    test_group_ops_with_standard_signatures_min_sig,
    test_group_ops_with_standard_signatures_min_pk
}