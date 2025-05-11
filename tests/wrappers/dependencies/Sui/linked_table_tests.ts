import {
    LinkedTable
} from "./linked_table";
import {
    TxContext
} from "./tx_context";
import {
    Boolean,
    StructClass,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value
} from "@deepmove/sui";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "linked_table_tests";

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

function borrow_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_missing", [], args);

}

function borrow_mut_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_missing", [], args);

}

function remove_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_missing", [], args);

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

function front_back_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "front_back_empty", [], args);

}

function push_front_singleton() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_front_singleton", [], args);

}

function push_back_singleton() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_back_singleton", [], args);

}

function push_front_duplicate() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_front_duplicate", [], args);

}

function push_back_duplicate() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_back_duplicate", [], args);

}

function push_mixed_duplicate() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_mixed_duplicate", [], args);

}

function pop_front_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_front_empty", [], args);

}

function pop_back_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_back_empty", [], args);

}

function sanity_check_drop() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sanity_check_drop", [], args);

}

function test_all_orderings() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_all_orderings", [], args);

}

function build_up_and_tear_down < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0[], arg1: T1[], arg2: Boolean[], arg3: Boolean[], arg4: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg3) ? into_arr_bcs_vector(arg3).serialize(into_arr_value(arg3)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "build_up_and_tear_down", type_args, args);
    arg4.from(arg4.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
}

function check_ordering < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: LinkedTable < T0 > , arg1: T0[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_ordering", type_args, args);
}

export const linked_table_tests = {
    unit_test_poison,
    destroy_non_empty,
    simple_all_functions,
    borrow_missing,
    borrow_mut_missing,
    remove_missing,
    sanity_check_contains,
    sanity_check_size,
    front_back_empty,
    push_front_singleton,
    push_back_singleton,
    push_front_duplicate,
    push_back_duplicate,
    push_mixed_duplicate,
    pop_front_empty,
    pop_back_empty,
    sanity_check_drop,
    test_all_orderings,
    build_up_and_tear_down,
    check_ordering
}