import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "vec_map_tests";

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

function destroy_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", [], args);

}

function destroy_non_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_non_empty", [], args);

}

function remove_entry_by_idx() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_entry_by_idx", [], args);

}

function duplicate_key_abort() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "duplicate_key_abort", [], args);

}

function nonexistent_key_get() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "nonexistent_key_get", [], args);

}

function nonexistent_key_get_idx_or_abort() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "nonexistent_key_get_idx_or_abort", [], args);

}

function out_of_bounds_get_entry_by_idx() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "out_of_bounds_get_entry_by_idx", [], args);

}

function out_of_bounds_remove_entry_by_idx() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "out_of_bounds_remove_entry_by_idx", [], args);

}

function smoke() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "smoke", [], args);

}

function return_list_of_keys() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_list_of_keys", [], args);

}

function round_trip() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "round_trip", [], args);

}

function mismatched_key_values_1() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mismatched_key_values_1", [], args);

}

function mismatched_key_values_2() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mismatched_key_values_2", [], args);

}

function mismatched_key_values_3() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mismatched_key_values_3", [], args);

}

function from_keys_values_duplicate_key_abort() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_keys_values_duplicate_key_abort", [], args);

}

export const vec_map_tests = {
    unit_test_poison,
    destroy_empty,
    destroy_non_empty,
    remove_entry_by_idx,
    duplicate_key_abort,
    nonexistent_key_get,
    nonexistent_key_get_idx_or_abort,
    out_of_bounds_get_entry_by_idx,
    out_of_bounds_remove_entry_by_idx,
    smoke,
    return_list_of_keys,
    round_trip,
    mismatched_key_values_1,
    mismatched_key_values_2,
    mismatched_key_values_3,
    from_keys_values_duplicate_key_abort
}