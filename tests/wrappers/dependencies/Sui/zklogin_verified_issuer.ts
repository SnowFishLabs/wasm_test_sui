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
let MODULE_NAME: string = "zklogin_verified_issuer";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== VerifiedIssuer =============================== */

export class VerifiedIssuer implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VerifiedIssuer`;

    id: UID;
    owner ? : string;
    issuer ? : string;

    constructor(id: UID, owner ? : string, issuer ? : string) {
        this.id = id;
        this.owner = owner;
        this.issuer = issuer;
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
        return VerifiedIssuer.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VerifiedIssuer.from_bcs_vector(args)
    }

    get_bcs() {
        return VerifiedIssuer.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new VerifiedIssuer(UID.from_id(id));
    }

    static from_id(id: string) {
        return new VerifiedIssuer(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VerifiedIssuer`
    }

    from(arg: VerifiedIssuer) {
        this.id = arg.id;
        this.owner = arg.owner;
        this.issuer = arg.issuer;
    }

    static from_bcs(arg: {
        id: UID,
        owner: string,
        issuer: string
    }): VerifiedIssuer {
        return new VerifiedIssuer(arg.id, arg.owner, arg.issuer)
    }

    static from_bcs_vector(args: {
        id: UID,
        owner: string,
        issuer: string
    } []): VerifiedIssuer[] {
        return args.map(function(arg) {
            return new VerifiedIssuer(arg.id, arg.owner, arg.issuer)
        })
    }

    static get bcs() {
        return bcs_import.struct("VerifiedIssuer", {
            id: UID.bcs,
            owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            issuer: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VerifiedIssuer(val.id, val.owner, val.issuer),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function delete_(arg0: VerifiedIssuer) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedIssuer.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delete", [], args);

}

function owner(arg0: VerifiedIssuer): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedIssuer.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "owner", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function issuer(arg0: VerifiedIssuer): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VerifiedIssuer.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "issuer", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_zklogin_issuer(arg0: u64_import, arg1: string, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u256().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_zklogin_issuer", [], args);

    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function check_zklogin_issuer(arg0: string, arg1: u64_import, arg2: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u256().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_zklogin_issuer", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function check_zklogin_issuer_internal(arg0: string, arg1: u64_import, arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u256().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_zklogin_issuer_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const zklogin_verified_issuer = {
    VerifiedIssuer,
    unit_test_poison,
    delete_,
    owner,
    issuer,
    verify_zklogin_issuer,
    check_zklogin_issuer,
    check_zklogin_issuer_internal
}