import {
    Coin
} from "./coin";
import {
    Kiosk,
    KioskOwnerCap
} from "./kiosk";
import {
    ID,
    UID
} from "./object";
import {
    Publisher
} from "./package";
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
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "kiosk_test_utils";

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

function ctx(): [TxContext] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ctx", [], args);

    return [
        TxContext.from_bcs(TxContext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function folks(): [string, string, string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "folks", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r1.Raw[0])),
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r2.Raw[0]))
    ];
}

function get_publisher(arg0: TxContext): [Publisher] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_publisher", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Publisher.from_bcs(Publisher.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_policy(arg0: TxContext): [TransferPolicy, TransferPolicyCap] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_policy", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TransferPolicy.from_bcs(TransferPolicy.bcs.parse(new Uint8Array(r0.Raw[0]))),
        TransferPolicyCap.from_bcs(TransferPolicyCap.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function get_sui(arg0: u64_import, arg1: TxContext): [Coin] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_sui", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Coin.from_bcs(Coin.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_asset(arg0: TxContext): [Asset, ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_asset", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Asset.from_bcs(Asset.bcs.parse(new Uint8Array(r0.Raw[0]))),
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function get_kiosk(arg0: TxContext): [Kiosk, KioskOwnerCap] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_kiosk", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Kiosk.from_bcs(Kiosk.bcs.parse(new Uint8Array(r0.Raw[0]))),
        KioskOwnerCap.from_bcs(KioskOwnerCap.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function return_publisher(arg0: Publisher) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Publisher.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_publisher", [], args);

}

function return_policy(arg0: TransferPolicy, arg1: TransferPolicyCap, arg2: TxContext): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferPolicy.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TransferPolicyCap.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_policy", [], args);

    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function return_kiosk(arg0: Kiosk, arg1: KioskOwnerCap, arg2: TxContext): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Kiosk.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(KioskOwnerCap.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_kiosk", [], args);

    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function return_assets(arg0: Asset[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Asset.bcs).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_assets", [], args);

}

export const kiosk_test_utils = {
    OTW,
    Asset,
    unit_test_poison,
    ctx,
    folks,
    get_publisher,
    get_policy,
    get_sui,
    get_asset,
    get_kiosk,
    return_publisher,
    return_policy,
    return_kiosk,
    return_assets
}