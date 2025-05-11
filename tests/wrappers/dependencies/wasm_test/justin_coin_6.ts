import {
    TxContext
} from "../Sui/tx_context";
import {
    StructClass,
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "wasm_test";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000000";
let MODULE_NAME: string = "justin_coin_6";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== JUSTIN_COIN_6 =============================== */

export class JUSTIN_COIN_6 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::JUSTIN_COIN_6`;

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
        return JUSTIN_COIN_6.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return JUSTIN_COIN_6.from_bcs_vector(args)
    }

    get_bcs() {
        return JUSTIN_COIN_6.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::JUSTIN_COIN_6`
    }

    from(arg: JUSTIN_COIN_6) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): JUSTIN_COIN_6 {
        return new JUSTIN_COIN_6(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): JUSTIN_COIN_6[] {
        return args.map(function(arg) {
            return new JUSTIN_COIN_6(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("JUSTIN_COIN_6", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new JUSTIN_COIN_6(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function init(arg0: JUSTIN_COIN_6, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(JUSTIN_COIN_6.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "init", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

export const justin_coin_6 = {
    JUSTIN_COIN_6,
    unit_test_poison,
    init
}