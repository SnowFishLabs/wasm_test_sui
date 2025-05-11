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
let MODULE_NAME: string = "bit_vector_tests";

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

function test_bitvector_set_unset_of_size(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bitvector_set_unset_of_size", [], args);

}

function set_bit_out_of_bounds() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_bit_out_of_bounds", [], args);

}

function unset_bit_out_of_bounds() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unset_bit_out_of_bounds", [], args);

}

function index_bit_out_of_bounds() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "index_bit_out_of_bounds", [], args);

}

function test_set_bit_and_index_basic() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_set_bit_and_index_basic", [], args);

}

function test_set_bit_and_index_odd_size() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_set_bit_and_index_odd_size", [], args);

}

function longest_sequence_no_set_zero_index() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "longest_sequence_no_set_zero_index", [], args);

}

function longest_sequence_one_set_zero_index() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "longest_sequence_one_set_zero_index", [], args);

}

function longest_sequence_no_set_nonzero_index() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "longest_sequence_no_set_nonzero_index", [], args);

}

function longest_sequence_two_set_nonzero_index() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "longest_sequence_two_set_nonzero_index", [], args);

}

function longest_sequence_with_break() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "longest_sequence_with_break", [], args);

}

function test_shift_left() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_shift_left", [], args);

}

function test_shift_left_specific_amount() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_shift_left_specific_amount", [], args);

}

function test_shift_left_specific_amount_to_unset_bit() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_shift_left_specific_amount_to_unset_bit", [], args);

}

function shift_left_at_size() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shift_left_at_size", [], args);

}

function shift_left_more_than_size() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shift_left_more_than_size", [], args);

}

function empty_bitvector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "empty_bitvector", [], args);

}

function single_bit_bitvector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "single_bit_bitvector", [], args);

}

export const bit_vector_tests = {
    unit_test_poison,
    test_bitvector_set_unset_of_size,
    set_bit_out_of_bounds,
    unset_bit_out_of_bounds,
    index_bit_out_of_bounds,
    test_set_bit_and_index_basic,
    test_set_bit_and_index_odd_size,
    longest_sequence_no_set_zero_index,
    longest_sequence_one_set_zero_index,
    longest_sequence_no_set_nonzero_index,
    longest_sequence_two_set_nonzero_index,
    longest_sequence_with_break,
    test_shift_left,
    test_shift_left_specific_amount,
    test_shift_left_specific_amount_to_unset_bit,
    shift_left_at_size,
    shift_left_more_than_size,
    empty_bitvector,
    single_bit_bitvector
}