import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "table_vec_tests";

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

function simple_all_functions() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_all_functions", [], args);

}

function destroy_non_empty_aborts() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_non_empty_aborts", [], args);

}

function pop_back_empty_aborts() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_back_empty_aborts", [], args);

}

function borrow_out_of_bounds_aborts() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_out_of_bounds_aborts", [], args);

}

function borrow_mut_out_of_bounds_aborts() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_out_of_bounds_aborts", [], args);

}

function swap_out_of_bounds_aborts() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_out_of_bounds_aborts", [], args);

}

function swap_same_index_succeeds() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_same_index_succeeds", [], args);

}

function swap_same_index_out_of_bounds_aborts() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_same_index_out_of_bounds_aborts", [], args);

}

export const table_vec_tests = {
    unit_test_poison,
    simple_all_functions,
    destroy_non_empty_aborts,
    pop_back_empty_aborts,
    borrow_out_of_bounds_aborts,
    borrow_mut_out_of_bounds_aborts,
    swap_out_of_bounds_aborts,
    swap_same_index_succeeds,
    swap_same_index_out_of_bounds_aborts
}