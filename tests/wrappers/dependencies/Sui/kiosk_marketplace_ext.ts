import {
    Coin
} from "./coin";
import {
    Kiosk,
    KioskOwnerCap,
    PurchaseCap
} from "./kiosk";
import {
    ID
} from "./object";
import {
    TransferPolicy
} from "./transfer_policy";
import {
    TxContext
} from "./tx_context";
import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "kiosk_marketplace_ext";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Ext =============================== */

export class Ext implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Ext`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
        }
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
        return Ext.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Ext.from_bcs_vector(args)
    }

    get_bcs() {
        return Ext.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Ext`
    }

    from(arg: Ext) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Ext {
        return new Ext(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Ext[] {
        return args.map(function(arg) {
            return new Ext(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Ext", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Ext(val.dummy_field),
        });
    };
}

/* ============================== Bid =============================== */

export class Bid implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Bid`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
        }
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
        return Bid.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Bid.from_bcs_vector(args)
    }

    get_bcs() {
        return Bid.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Bid`
    }

    from(arg: Bid) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Bid {
        return new Bid(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Bid[] {
        return args.map(function(arg) {
            return new Bid(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Bid", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Bid(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function add < T0 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: KioskOwnerCap, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function list < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: KioskOwnerCap, arg2: ID, arg3: u64_import, arg4: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "list", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
    arg4.from(arg4.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function delist < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: KioskOwnerCap, arg2: ID) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delist", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
}

function purchase < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: ID, arg2: Coin): [Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, r1, r2, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "purchase", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0])
    ];
}

function bid < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: KioskOwnerCap, arg2: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bid", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
}

function accept_bid < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: Kiosk, arg2: PurchaseCap, arg3: TransferPolicy, arg4: boolean): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    let [r0, r1, a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "accept_bid", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as Kiosk);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

export const kiosk_marketplace_ext = {
    Ext,
    Bid,
    unit_test_poison,
    add,
    list,
    delist,
    purchase,
    bid,
    accept_bid
}