import {
    ID,
    UID
} from "./object";
import {
    TransferPolicy,
    TransferPolicyCap
} from "./transfer_policy";
import {
    TxContext
} from "./tx_context";
import {
    StructClass,
    get_object_address,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "transfer_policy_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== OTW =============================== */

export class OTW implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OTW`;

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
        return OTW.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return OTW.from_bcs_vector(args)
    }

    get_bcs() {
        return OTW.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::OTW`
    }

    from(arg: OTW) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): OTW {
        return new OTW(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): OTW[] {
        return args.map(function(arg) {
            return new OTW(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("OTW", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OTW(val.dummy_field),
        });
    };
}

/* ============================== Asset =============================== */

export class Asset implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Asset`;

    id: UID;

    constructor(id: UID) {
        this.id = id;
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
        return Asset.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Asset.from_bcs_vector(args)
    }

    get_bcs() {
        return Asset.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Asset(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Asset(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Asset`
    }

    from(arg: Asset) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: UID
    }): Asset {
        return new Asset(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): Asset[] {
        return args.map(function(arg) {
            return new Asset(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("Asset", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Asset(val.id),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function fresh_id(arg0: TxContext): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fresh_id", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function test_default_flow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_default_flow", [], args);

}

function test_rule_completed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_rule_completed", [], args);

}

function test_remove_rule_completed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_rule_completed", [], args);

}

function test_rule_ignored() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_rule_ignored", [], args);

}

function test_rule_exists() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_rule_exists", [], args);

}

function test_rule_swap() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_rule_swap", [], args);

}

function prepare(arg0: TxContext): [TransferPolicy, TransferPolicyCap] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "prepare", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TransferPolicy.from_bcs(TransferPolicy.bcs.parse(new Uint8Array(r0.Raw[0]))),
        TransferPolicyCap.from_bcs(TransferPolicyCap.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function wrapup(arg0: TransferPolicy, arg1: TransferPolicyCap, arg2: TxContext): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferPolicy.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TransferPolicyCap.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "wrapup", [], args);

    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const transfer_policy_tests = {
    OTW,
    Asset,
    unit_test_poison,
    fresh_id,
    test_default_flow,
    test_rule_completed,
    test_remove_rule_completed,
    test_rule_ignored,
    test_rule_exists,
    test_rule_swap,
    prepare,
    wrapup
}