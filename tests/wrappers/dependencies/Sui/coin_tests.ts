import {
    DenyList
} from "./deny_list";
import {
    TxContext
} from "./tx_context";
import {
    StructClass,
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "coin_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== COIN_TESTS =============================== */

export class COIN_TESTS implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::COIN_TESTS`;

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
        return COIN_TESTS.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return COIN_TESTS.from_bcs_vector(args)
    }

    get_bcs() {
        return COIN_TESTS.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::COIN_TESTS`
    }

    from(arg: COIN_TESTS) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): COIN_TESTS {
        return new COIN_TESTS(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): COIN_TESTS[] {
        return args.map(function(arg) {
            return new COIN_TESTS(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("COIN_TESTS", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new COIN_TESTS(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function migrate_regulated_currency_to_v2() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "migrate_regulated_currency_to_v2", [], args);

}

function assert_status(arg0: DenyList, arg1: string, arg2: boolean, arg3: boolean, arg4: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_status", [], args);

}

function assert_global(arg0: DenyList, arg1: boolean, arg2: boolean, arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_global", [], args);

}

function coin_tests_metadata() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "coin_tests_metadata", [], args);

}

function coin_tests_mint() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "coin_tests_mint", [], args);

}

function deny_list_v1() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v1", [], args);

}

function deny_list_v1_double_add() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v1_double_add", [], args);

}

function deny_list_v2() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v2", [], args);

}

function deny_list_v2_global_pause() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v2_global_pause", [], args);

}

function deny_list_v2_double_add() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v2_double_add", [], args);

}

function deny_list_v2_global_pause_not_allowed_enable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v2_global_pause_not_allowed_enable", [], args);

}

function deny_list_v2_global_pause_not_allowed_disable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v2_global_pause_not_allowed_disable", [], args);

}

function migrate_regulated_currency_to_v2_disallow_global_pause() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "migrate_regulated_currency_to_v2_disallow_global_pause", [], args);

}

function deny_list_v2_add_remove() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deny_list_v2_add_remove", [], args);

}

export const coin_tests = {
    COIN_TESTS,
    unit_test_poison,
    migrate_regulated_currency_to_v2,
    assert_status,
    assert_global,
    coin_tests_metadata,
    coin_tests_mint,
    deny_list_v1,
    deny_list_v1_double_add,
    deny_list_v2,
    deny_list_v2_global_pause,
    deny_list_v2_double_add,
    deny_list_v2_global_pause_not_allowed_enable,
    deny_list_v2_global_pause_not_allowed_disable,
    migrate_regulated_currency_to_v2_disallow_global_pause,
    deny_list_v2_add_remove
}