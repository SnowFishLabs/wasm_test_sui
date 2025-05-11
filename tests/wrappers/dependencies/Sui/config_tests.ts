import {
    TxContext
} from "./tx_context";
import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    to_arr_value
} from "@deepmove/sui";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "config_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== WriteCap =============================== */

export class WriteCap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::WriteCap`;

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
        return WriteCap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return WriteCap.from_bcs_vector(args)
    }

    get_bcs() {
        return WriteCap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::WriteCap`
    }

    from(arg: WriteCap) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): WriteCap {
        return new WriteCap(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): WriteCap[] {
        return args.map(function(arg) {
            return new WriteCap(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("WriteCap", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new WriteCap(val.dummy_field),
        });
    };
}

/* ============================== Wrapped =============================== */

export class Wrapped < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Wrapped`;

    pos0: T0;

    T0_bcs: any;

    constructor(pos0: T0) {
        this.pos0 = pos0;
    }

    into_value() {
        return {
            pos0: (this.pos0 as StructClass).into_value ? (this.pos0 as StructClass).into_value() : this.pos0
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.pos0) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.pos0) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.pos0) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.pos0) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.pos0) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Wrapped.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Wrapped.from_bcs_vector(args)
    }

    get_bcs() {
        return Wrapped.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Wrapped`
    }

    from(arg: Wrapped < T0 > ) {
        this.pos0 = arg.pos0;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        pos0: T0
    }): Wrapped < T0 > {
        return new Wrapped(arg.pos0)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        pos0: T0
    } []): Wrapped < T0 > [] {
        return args.map(function(arg) {
            return new Wrapped(arg.pos0)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Wrapped<${T0.name}>`, {
                pos0: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Wrapped(val.pos0),
            });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function config_create < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "config_create", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as T0);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function test_all() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_all", [], args);

}

function add_for_next_epoch_aborts_in_same_epoch() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_for_next_epoch_aborts_in_same_epoch", [], args);

}

function borrow_for_next_epoch_mut_aborts_in_new_epoch() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_for_next_epoch_mut_aborts_in_new_epoch", [], args);

}

function read_setting_none() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read_setting_none", [], args);

}

function test_remove_doesnt_fail_on_duplicate() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_doesnt_fail_on_duplicate", [], args);

}

function test_remove_fail_on_type_mismatch() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_fail_on_type_mismatch", [], args);

}

function test_add_fail_on_type_mismatch() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_add_fail_on_type_mismatch", [], args);

}

function test_removed_value() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_removed_value", [], args);

}

function add_remove_cache() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_remove_cache", [], args);

}

export const config_tests = {
    WriteCap,
    Wrapped,
    unit_test_poison,
    config_create,
    test_all,
    add_for_next_epoch_aborts_in_same_epoch,
    borrow_for_next_epoch_mut_aborts_in_new_epoch,
    read_setting_none,
    test_remove_doesnt_fail_on_duplicate,
    test_remove_fail_on_type_mismatch,
    test_add_fail_on_type_mismatch,
    test_removed_value,
    add_remove_cache
}