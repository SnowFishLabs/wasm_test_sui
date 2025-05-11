import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "fixed_point32_tests";

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

function create_div_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_div_zero", [], args);

}

function create_overflow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_overflow", [], args);

}

function create_underflow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_underflow", [], args);

}

function create_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_zero", [], args);

}

function divide_by_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "divide_by_zero", [], args);

}

function divide_overflow_small_divisore() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "divide_overflow_small_divisore", [], args);

}

function divide_overflow_large_numerator() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "divide_overflow_large_numerator", [], args);

}

function multiply_overflow_small_multiplier() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multiply_overflow_small_multiplier", [], args);

}

function multiply_overflow_large_multiplier() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multiply_overflow_large_multiplier", [], args);

}

function exact_multiply() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exact_multiply", [], args);

}

function exact_divide() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exact_divide", [], args);

}

function multiply_truncates() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multiply_truncates", [], args);

}

function create_from_rational_max_numerator_denominator() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_from_rational_max_numerator_denominator", [], args);

}

export const fixed_point32_tests = {
    unit_test_poison,
    create_div_zero,
    create_overflow,
    create_underflow,
    create_zero,
    divide_by_zero,
    divide_overflow_small_divisore,
    divide_overflow_large_numerator,
    multiply_overflow_small_multiplier,
    multiply_overflow_large_multiplier,
    exact_multiply,
    exact_divide,
    multiply_truncates,
    create_from_rational_max_numerator_denominator
}