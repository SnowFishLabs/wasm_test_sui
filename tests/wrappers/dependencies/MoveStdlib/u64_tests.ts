import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "u64_tests";

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

function test_bitwise_not() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bitwise_not", [], args);

}

function test_max() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_max", [], args);

}

function test_min() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_min", [], args);

}

function test_diff() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_diff", [], args);

}

function test_divide_and_round_up() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_divide_and_round_up", [], args);

}

function test_divide_and_round_up_error() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_divide_and_round_up_error", [], args);

}

function test_pow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_pow", [], args);

}

function test_pow_overflow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_pow_overflow", [], args);

}

function test_sqrt() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_sqrt", [], args);

}

function test_try_as_u8() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_try_as_u8", [], args);

}

function test_try_as_u16() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_try_as_u16", [], args);

}

function test_try_as_u32() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_try_as_u32", [], args);

}

function test_to_string() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_to_string", [], args);

}

function test_dos() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dos", [], args);

}

export const u64_tests = {
    unit_test_poison,
    test_bitwise_not,
    test_max,
    test_min,
    test_diff,
    test_divide_and_round_up,
    test_divide_and_round_up_error,
    test_pow,
    test_pow_overflow,
    test_sqrt,
    test_try_as_u8,
    test_try_as_u16,
    test_try_as_u32,
    test_to_string,
    test_dos
}