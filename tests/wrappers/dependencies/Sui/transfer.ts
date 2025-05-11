import {
    ID,
    UID
} from "./object";
import {
    StructClass,
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
let MODULE_NAME: string = "transfer";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Receiving =============================== */

export class Receiving implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Receiving`;

    id: ID;
    version: u64_import;

    constructor(id: ID, version: u64_import) {
        this.id = id;
        this.version = version;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            version: (this.version as unknown as StructClass).into_value ? (this.version as unknown as StructClass).into_value() : this.version
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
        return Receiving.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Receiving.from_bcs_vector(args)
    }

    get_bcs() {
        return Receiving.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Receiving`
    }

    from(arg: Receiving) {
        this.id = arg.id;
        this.version = arg.version;
    }

    static from_bcs(arg: {
        id: ID,
        version: u64_import
    }): Receiving {
        return new Receiving(arg.id, arg.version)
    }

    static from_bcs_vector(args: {
        id: ID,
        version: u64_import
    } []): Receiving[] {
        return args.map(function(arg) {
            return new Receiving(arg.id, arg.version)
        })
    }

    static get bcs() {
        return bcs_import.struct("Receiving", {
            id: ID.bcs,
            version: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Receiving(val.id, val.version),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function transfer < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer", type_args, args);
}

function public_transfer < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_transfer", type_args, args);
}

function freeze_object < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "freeze_object", type_args, args);
}

function public_freeze_object < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_freeze_object", type_args, args);
}

function share_object < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "share_object", type_args, args);
}

function public_share_object < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_share_object", type_args, args);
}

function receive < T0 extends StructClass > (type_args: string[], arg0: UID, arg1: Receiving): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receive", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as UID);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function public_receive < T0 extends StructClass > (type_args: string[], arg0: UID, arg1: Receiving): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_receive", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as UID);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function receiving_object_id < T0 extends StructClass > (type_args: string[], arg0: Receiving): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receiving_object_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function freeze_object_impl < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "freeze_object_impl", type_args, args);
}

function share_object_impl < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "share_object_impl", type_args, args);
}

function transfer_impl < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_impl", type_args, args);
}

function receive_impl < T0 extends StructClass > (type_args: string[], arg0: string, arg1: ID, arg2: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receive_impl", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function make_receiver < T0 extends StructClass > (type_args: string[], arg0: ID, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "make_receiver", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function receiving_id < T0 extends StructClass > (type_args: string[], arg0: Receiving): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receiving_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const transfer_ = {
    Receiving,
    unit_test_poison,
    transfer,
    public_transfer,
    freeze_object,
    public_freeze_object,
    share_object,
    public_share_object,
    receive,
    public_receive,
    receiving_object_id,
    freeze_object_impl,
    share_object_impl,
    transfer_impl,
    receive_impl,
    make_receiver,
    receiving_id
}