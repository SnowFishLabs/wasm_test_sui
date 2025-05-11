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

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "verifier_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== VERIFIER_TESTS =============================== */

export class VERIFIER_TESTS implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VERIFIER_TESTS`;

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
        return VERIFIER_TESTS.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VERIFIER_TESTS.from_bcs_vector(args)
    }

    get_bcs() {
        return VERIFIER_TESTS.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VERIFIER_TESTS`
    }

    from(arg: VERIFIER_TESTS) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): VERIFIER_TESTS {
        return new VERIFIER_TESTS(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): VERIFIER_TESTS[] {
        return args.map(function(arg) {
            return new VERIFIER_TESTS(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("VERIFIER_TESTS", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VERIFIER_TESTS(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function init(arg0: VERIFIER_TESTS, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VERIFIER_TESTS.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "init", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function test_init() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_init", [], args);

}

function is_otw(arg0: VERIFIER_TESTS): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VERIFIER_TESTS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_otw", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function test_otw() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_otw", [], args);

}

export const verifier_tests = {
    VERIFIER_TESTS,
    unit_test_poison,
    init,
    test_init,
    is_otw,
    test_otw
}