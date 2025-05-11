import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "kiosk_borrow_tests";

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

function test_borrow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow", [], args);

}

function test_borrow_fail_not_owner() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_fail_not_owner", [], args);

}

function test_borrow_fail_item_not_found() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_fail_item_not_found", [], args);

}

function test_borrow_mut() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_mut", [], args);

}

function test_borrow_mut_fail_not_owner() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_mut_fail_not_owner", [], args);

}

function test_borrow_mut_fail_item_not_found() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_mut_fail_item_not_found", [], args);

}

function test_borrow_mut_fail_item_is_listed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_mut_fail_item_is_listed", [], args);

}

function test_borrow_val() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_val", [], args);

}

function test_borrow_val_fail_not_owner() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_val_fail_not_owner", [], args);

}

function test_borrow_val_fail_item_not_found() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_val_fail_item_not_found", [], args);

}

function test_borrow_val_fail_item_is_listed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_val_fail_item_is_listed", [], args);

}

function test_borrow_val_fail_wrong_kiosk() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_val_fail_wrong_kiosk", [], args);

}

function test_borrow_val_fail_item_mismatch() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_val_fail_item_mismatch", [], args);

}

export const kiosk_borrow_tests = {
    unit_test_poison,
    test_borrow,
    test_borrow_fail_not_owner,
    test_borrow_fail_item_not_found,
    test_borrow_mut,
    test_borrow_mut_fail_not_owner,
    test_borrow_mut_fail_item_not_found,
    test_borrow_mut_fail_item_is_listed,
    test_borrow_val,
    test_borrow_val_fail_not_owner,
    test_borrow_val_fail_item_not_found,
    test_borrow_val_fail_item_is_listed,
    test_borrow_val_fail_wrong_kiosk,
    test_borrow_val_fail_item_mismatch
}