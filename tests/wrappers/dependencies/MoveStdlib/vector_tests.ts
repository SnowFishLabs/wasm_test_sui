import {
    StructClass,
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "vector_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== R =============================== */

export class R implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::R`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return this.get_value()
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs().parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    from_bcs(arg: any) {
        return R.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return R.from_bcs_vector(args)
    }

    get_bcs() {
        return R.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::R`
    }

    from(arg: R) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): R {
        return new R(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): R[] {
        return args.map(function(arg) {
            return new R(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("R", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new R(val.dummy_field),
        });
    };
}

/* ============================== Droppable =============================== */

export class Droppable implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Droppable`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return this.get_value()
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs().parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    from_bcs(arg: any) {
        return Droppable.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Droppable.from_bcs_vector(args)
    }

    get_bcs() {
        return Droppable.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Droppable`
    }

    from(arg: Droppable) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Droppable {
        return new Droppable(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Droppable[] {
        return args.map(function(arg) {
            return new Droppable(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Droppable", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Droppable(val.dummy_field),
        });
    };
}

/* ============================== NotDroppable =============================== */

export class NotDroppable implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::NotDroppable`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return this.get_value()
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs().parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    from_bcs(arg: any) {
        return NotDroppable.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return NotDroppable.from_bcs_vector(args)
    }

    get_bcs() {
        return NotDroppable.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::NotDroppable`
    }

    from(arg: NotDroppable) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): NotDroppable {
        return new NotDroppable(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): NotDroppable[] {
        return args.map(function(arg) {
            return new NotDroppable(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("NotDroppable", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new NotDroppable(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function length() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "length", [], args);

}

function destroy_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", [], args);

}

function test_insert() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_insert", [], args);

}

function test_singleton_contains() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_singleton_contains", [], args);

}

function test_singleton_len() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_singleton_len", [], args);

}

function test_empty_is_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_empty_is_empty", [], args);

}

function append_empties_is_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append_empties_is_empty", [], args);

}

function append_singletons() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append_singletons", [], args);

}

function append_respects_order_empty_lhs() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append_respects_order_empty_lhs", [], args);

}

function append_respects_order_empty_rhs() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append_respects_order_empty_rhs", [], args);

}

function append_respects_order_nonempty_rhs_lhs() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append_respects_order_nonempty_rhs_lhs", [], args);

}

function borrow_out_of_range() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_out_of_range", [], args);

}

function vector_contains() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vector_contains", [], args);

}

function destroy_empty_with_pops() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty_with_pops", [], args);

}

function destroy_non_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_non_empty", [], args);

}

function get_set_work() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_set_work", [], args);

}

function pop_out_of_range() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_out_of_range", [], args);

}

function swap_different_indices() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_different_indices", [], args);

}

function swap_same_index() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_same_index", [], args);

}

function remove_singleton_vector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_singleton_vector", [], args);

}

function remove_nonsingleton_vector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_nonsingleton_vector", [], args);

}

function remove_nonsingleton_vector_last_elem() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_nonsingleton_vector_last_elem", [], args);

}

function remove_empty_vector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_empty_vector", [], args);

}

function remove_out_of_bound_index() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_out_of_bound_index", [], args);

}

function reverse_vector_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reverse_vector_empty", [], args);

}

function reverse_singleton_vector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reverse_singleton_vector", [], args);

}

function reverse_vector_nonempty_even_length() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reverse_vector_nonempty_even_length", [], args);

}

function reverse_vector_nonempty_odd_length_non_singleton() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reverse_vector_nonempty_odd_length_non_singleton", [], args);

}

function swap_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_empty", [], args);

}

function swap_out_of_range() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_out_of_range", [], args);

}

function swap_remove_empty() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_remove_empty", [], args);

}

function swap_remove_singleton() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_remove_singleton", [], args);

}

function swap_remove_inside_vector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_remove_inside_vector", [], args);

}

function swap_remove_end_of_vector() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_remove_end_of_vector", [], args);

}

function swap_remove_out_of_range() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_remove_out_of_range", [], args);

}

function push_back_and_borrow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_back_and_borrow", [], args);

}

function index_of_empty_not_has() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "index_of_empty_not_has", [], args);

}

function index_of_nonempty_not_has() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "index_of_nonempty_not_has", [], args);

}

function index_of_nonempty_has() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "index_of_nonempty_has", [], args);

}

function index_of_nonempty_has_multiple_occurences() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "index_of_nonempty_has_multiple_occurences", [], args);

}

function pop_push_back() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_push_back", [], args);

}

function test_natives_with_type < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: T0): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_natives_with_type", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function test_natives_with_different_instantiations() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_natives_with_different_instantiations", [], args);

}

function insert_at_end() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "insert_at_end", [], args);

}

function insert_out_of_range() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "insert_out_of_range", [], args);

}

function size_limit_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "size_limit_ok", [], args);

}

function size_limit_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "size_limit_fail", [], args);

}

function test_string_aliases() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_string_aliases", [], args);

}

function test_destroy_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_destroy_macro", [], args);

}

function test_count_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_count_macro", [], args);

}

function test_tabulate_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_tabulate_macro", [], args);

}

function test_do_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_do_macro", [], args);

}

function test_map_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_map_macro", [], args);

}

function filter_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "filter_macro", [], args);

}

function partition_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "partition_macro", [], args);

}

function find_index_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "find_index_macro", [], args);

}

function fold_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fold_macro", [], args);

}

function test_flatten() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_flatten", [], args);

}

function any_all_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "any_all_macro", [], args);

}

function zip_do_macro_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_macro_fail", [], args);

}

function zip_do_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_macro", [], args);

}

function zip_do_undroppable_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_undroppable_macro", [], args);

}

function zip_do_reverse_macro_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_reverse_macro_fail", [], args);

}

function zip_do_reverse_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_reverse_macro", [], args);

}

function zip_do_ref_macro_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_ref_macro_fail", [], args);

}

function zip_do_ref_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_ref_macro", [], args);

}

function zip_do_mut_macro_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_mut_macro_fail", [], args);

}

function zip_do_mut_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_do_mut_macro", [], args);

}

function zip_map_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_map_macro", [], args);

}

function zip_map_ref_macro() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zip_map_ref_macro", [], args);

}

export const vector_tests = {
    R,
    Droppable,
    NotDroppable,
    unit_test_poison,
    length,
    destroy_empty,
    test_insert,
    test_singleton_contains,
    test_singleton_len,
    test_empty_is_empty,
    append_empties_is_empty,
    append_singletons,
    append_respects_order_empty_lhs,
    append_respects_order_empty_rhs,
    append_respects_order_nonempty_rhs_lhs,
    borrow_out_of_range,
    vector_contains,
    destroy_empty_with_pops,
    destroy_non_empty,
    get_set_work,
    pop_out_of_range,
    swap_different_indices,
    swap_same_index,
    remove_singleton_vector,
    remove_nonsingleton_vector,
    remove_nonsingleton_vector_last_elem,
    remove_empty_vector,
    remove_out_of_bound_index,
    reverse_vector_empty,
    reverse_singleton_vector,
    reverse_vector_nonempty_even_length,
    reverse_vector_nonempty_odd_length_non_singleton,
    swap_empty,
    swap_out_of_range,
    swap_remove_empty,
    swap_remove_singleton,
    swap_remove_inside_vector,
    swap_remove_end_of_vector,
    swap_remove_out_of_range,
    push_back_and_borrow,
    index_of_empty_not_has,
    index_of_nonempty_not_has,
    index_of_nonempty_has,
    index_of_nonempty_has_multiple_occurences,
    pop_push_back,
    test_natives_with_type,
    test_natives_with_different_instantiations,
    insert_at_end,
    insert_out_of_range,
    size_limit_ok,
    size_limit_fail,
    test_string_aliases,
    test_destroy_macro,
    test_count_macro,
    test_tabulate_macro,
    test_do_macro,
    test_map_macro,
    filter_macro,
    partition_macro,
    find_index_macro,
    fold_macro,
    test_flatten,
    any_all_macro,
    zip_do_macro_fail,
    zip_do_macro,
    zip_do_undroppable_macro,
    zip_do_reverse_macro_fail,
    zip_do_reverse_macro,
    zip_do_ref_macro_fail,
    zip_do_ref_macro,
    zip_do_mut_macro_fail,
    zip_do_mut_macro,
    zip_map_macro,
    zip_map_ref_macro
}