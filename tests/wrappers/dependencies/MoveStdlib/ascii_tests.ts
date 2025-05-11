import {
    get_package_address,
    get_wasm
} from "@deepmove/sui";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "ascii_tests";

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

function test_ascii_chars() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_ascii_chars", [], args);

}

function test_ascii_push_chars() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_ascii_push_chars", [], args);

}

function test_ascii_push_char_pop_char() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_ascii_push_char_pop_char", [], args);

}

function test_printable_chars() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_printable_chars", [], args);

}

function printable_chars_dont_allow_tab() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "printable_chars_dont_allow_tab", [], args);

}

function printable_chars_dont_allow_newline() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "printable_chars_dont_allow_newline", [], args);

}

function test_invalid_ascii_characters() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_ascii_characters", [], args);

}

function test_nonvisible_chars() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_nonvisible_chars", [], args);

}

function test_append() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_append", [], args);

}

function test_to_uppercase() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_to_uppercase", [], args);

}

function test_to_lowercase() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_to_lowercase", [], args);

}

function test_substring() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_substring", [], args);

}

function test_substring_len_one() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_substring_len_one", [], args);

}

function test_substring_len_zero() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_substring_len_zero", [], args);

}

function test_index_of() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_index_of", [], args);

}

function test_substring_i_out_of_bounds_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_substring_i_out_of_bounds_fail", [], args);

}

function test_substring_j_lt_i_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_substring_j_lt_i_fail", [], args);

}

function test_substring_j_out_of_bounds_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_substring_j_out_of_bounds_fail", [], args);

}

function test_insert() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_insert", [], args);

}

function test_insert_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_insert_empty", [], args);

}

function test_insert_out_of_bounds_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_insert_out_of_bounds_fail", [], args);

}

export const ascii_tests = {
    unit_test_poison,
    test_ascii_chars,
    test_ascii_push_chars,
    test_ascii_push_char_pop_char,
    test_printable_chars,
    printable_chars_dont_allow_tab,
    printable_chars_dont_allow_newline,
    test_invalid_ascii_characters,
    test_nonvisible_chars,
    test_append,
    test_to_uppercase,
    test_to_lowercase,
    test_substring,
    test_substring_len_one,
    test_substring_len_zero,
    test_index_of,
    test_substring_i_out_of_bounds_fail,
    test_substring_j_lt_i_fail,
    test_substring_j_out_of_bounds_fail,
    test_insert,
    test_insert_empty,
    test_insert_out_of_bounds_fail
}