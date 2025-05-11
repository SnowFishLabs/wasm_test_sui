import {
    UID
} from "./object";
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
let MODULE_NAME: string = "zklogin_verified_id";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== VerifiedID =============================== */

export class VerifiedID implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VerifiedID`;

    id: UID;
    owner ? : string;
    key_claim_name ? : string;
    key_claim_value ? : string;
    issuer ? : string;
    audience ? : string;

    constructor(id: UID, owner ? : string, key_claim_name ? : string, key_claim_value ? : string, issuer ? : string, audience ? : string) {
        this.id = id;
        this.owner = owner;
        this.key_claim_name = key_claim_name;
        this.key_claim_value = key_claim_value;
        this.issuer = issuer;
        this.audience = audience;
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
        return VerifiedID.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VerifiedID.from_bcs_vector(args)
    }

    get_bcs() {
        return VerifiedID.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new VerifiedID(UID.from_id(id));
    }

    static from_id(id: string) {
        return new VerifiedID(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VerifiedID`
    }

    from(arg: VerifiedID) {
        this.id = arg.id;
        this.owner = arg.owner;
        this.key_claim_name = arg.key_claim_name;
        this.key_claim_value = arg.key_claim_value;
        this.issuer = arg.issuer;
        this.audience = arg.audience;
    }

    static from_bcs(arg: {
        id: UID,
        owner: string,
        key_claim_name: string,
        key_claim_value: string,
        issuer: string,
        audience: string
    }): VerifiedID {
        return new VerifiedID(arg.id, arg.owner, arg.key_claim_name, arg.key_claim_value, arg.issuer, arg.audience)
    }

    static from_bcs_vector(args: {
        id: UID,
        owner: string,
        key_claim_name: string,
        key_claim_value: string,
        issuer: string,
        audience: string
    } []): VerifiedID[] {
        return args.map(function(arg) {
            return new VerifiedID(arg.id, arg.owner, arg.key_claim_name, arg.key_claim_value, arg.issuer, arg.audience)
        })
    }

    static get bcs() {
        return bcs_import.struct("VerifiedID", {
            id: UID.bcs,
            owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            key_claim_name: bcs_import.string(),
            key_claim_value: bcs_import.string(),
            issuer: bcs_import.string(),
            audience: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VerifiedID(val.id, val.owner, val.key_claim_name, val.key_claim_value, val.issuer, val.audience),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function delete_(arg0: VerifiedID) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedID.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delete", [], args);

}

function owner(arg0: VerifiedID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "owner", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function key_claim_name(arg0: VerifiedID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "key_claim_name", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function key_claim_value(arg0: VerifiedID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "key_claim_value", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function issuer(arg0: VerifiedID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "issuer", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function audience(arg0: VerifiedID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "audience", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_zklogin_id(arg0: string, arg1: string, arg2: string, arg3: string, arg4: u64_import, arg5: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u256().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg5).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_zklogin_id", [], args);

    arg5.from(arg5.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function check_zklogin_id(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u256().serialize(arg5).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_zklogin_id", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function check_zklogin_id_internal(arg0: string, arg1: number[], arg2: number[], arg3: number[], arg4: number[], arg5: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u256().serialize(arg5).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_zklogin_id_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const zklogin_verified_id = {
    VerifiedID,
    unit_test_poison,
    delete_,
    owner,
    key_claim_name,
    key_claim_value,
    issuer,
    audience,
    verify_zklogin_id,
    check_zklogin_id,
    check_zklogin_id_internal
}