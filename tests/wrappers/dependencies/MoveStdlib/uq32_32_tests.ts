import {
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "uq32_32_tests";

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

function from_quotient_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_quotient_zero", [], args);

}

function from_quotient_max_numerator_denominator() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_quotient_max_numerator_denominator", [], args);

}

function from_quotient_div_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_quotient_div_zero", [], args);

}

function from_quotient_ratio_too_large() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_quotient_ratio_too_large", [], args);

}

function from_quotient_ratio_too_small() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_quotient_ratio_too_small", [], args);

}

function test_from_int() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_from_int", [], args);

}

function test_add() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_add", [], args);

}

function test_add_overflow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_add_overflow", [], args);

}

function test_sub() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_sub", [], args);

}

function test_sub_underflow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_sub_underflow", [], args);

}

function test_mul() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_mul", [], args);

}

function test_mul_overflow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_mul_overflow", [], args);

}

function test_div() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_div", [], args);

}

function test_div_by_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_div_by_zero", [], args);

}

function test_div_overflow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_div_overflow", [], args);

}

function exact_int_div() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exact_int_div", [], args);

}

function int_div_by_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_div_by_zero", [], args);

}

function int_div_overflow_small_divisor() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_div_overflow_small_divisor", [], args);

}

function int_div_overflow_large_numerator() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_div_overflow_large_numerator", [], args);

}

function exact_int_mul() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exact_int_mul", [], args);

}

function int_mul_truncates() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_mul_truncates", [], args);

}

function int_mul_overflow_small_multiplier() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_mul_overflow_small_multiplier", [], args);

}

function int_mul_overflow_large_multiplier() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_mul_overflow_large_multiplier", [], args);

}

function test_comparison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_comparison", [], args);

}

function test_raw(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_raw", [], args);

}

function test_int_roundtrip(arg0: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u32().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_int_roundtrip", [], args);

}

function test_mul_rand(arg0: number, arg1: number, arg2: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u16().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_mul_rand", [], args);

}

function test_div_rand(arg0: number, arg1: number, arg2: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u16().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_div_rand", [], args);

}

export const uq32_32_tests = {
    unit_test_poison,
    from_quotient_zero,
    from_quotient_max_numerator_denominator,
    from_quotient_div_zero,
    from_quotient_ratio_too_large,
    from_quotient_ratio_too_small,
    test_from_int,
    test_add,
    test_add_overflow,
    test_sub,
    test_sub_underflow,
    test_mul,
    test_mul_overflow,
    test_div,
    test_div_by_zero,
    test_div_overflow,
    exact_int_div,
    int_div_by_zero,
    int_div_overflow_small_divisor,
    int_div_overflow_large_numerator,
    exact_int_mul,
    int_mul_truncates,
    int_mul_overflow_small_multiplier,
    int_mul_overflow_large_multiplier,
    test_comparison,
    test_raw,
    test_int_roundtrip,
    test_mul_rand,
    test_div_rand
}