import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "bag_tests";

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

function destroy_non_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_non_empty", [], args);

}

function simple_all_functions() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_all_functions", [], args);

}

function add_duplicate() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_duplicate", [], args);

}

function add_duplicate_mismatched_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_duplicate_mismatched_type", [], args);

}

function borrow_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_missing", [], args);

}

function borrow_wrong_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_wrong_type", [], args);

}

function borrow_mut_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_missing", [], args);

}

function borrow_mut_wrong_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_wrong_type", [], args);

}

function remove_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_missing", [], args);

}

function remove_wrong_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_wrong_type", [], args);

}

function sanity_check_contains() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sanity_check_contains", [], args);

}

function sanity_check_size() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sanity_check_size", [], args);

}

export const bag_tests = {
    unit_test_poison,
    destroy_non_empty,
    simple_all_functions,
    add_duplicate,
    add_duplicate_mismatched_type,
    borrow_missing,
    borrow_wrong_type,
    borrow_mut_missing,
    borrow_mut_wrong_type,
    remove_missing,
    remove_wrong_type,
    sanity_check_contains,
    sanity_check_size
}