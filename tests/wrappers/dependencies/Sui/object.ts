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
let MODULE_NAME: string = "object";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ID =============================== */

export class ID implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ID`;

    bytes: string;

    constructor(bytes: string) {
        this.bytes = bytes;
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
        return ID.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ID.from_bcs_vector(args)
    }

    get_bcs() {
        return ID.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ID`
    }

    from(arg: ID) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: string
    }): ID {
        return new ID(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: string
    } []): ID[] {
        return args.map(function(arg) {
            return new ID(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("ID", {
            bytes: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ID(val.bytes),
        });
    };
}

/* ============================== UID =============================== */

export class UID implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UID`;

    id: ID;

    constructor(id: ID) {
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
        return UID.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UID.from_bcs_vector(args)
    }

    get_bcs() {
        return UID.bcs
    }

    get_value() {
        return this
    }

    static from_id(id: string) {
        return new UID(new ID(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UID`
    }

    from(arg: UID) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: ID
    }): UID {
        return new UID(arg.id)
    }

    static from_bcs_vector(args: {
        id: ID
    } []): UID[] {
        return args.map(function(arg) {
            return new UID(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("UID", {
            id: ID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UID(val.id),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function new_(arg0: TxContext): [UID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function id_to_bytes(arg0: ID): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function id_to_address(arg0: ID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_to_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function id_from_bytes(arg0: number[]): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_from_bytes", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function id_from_address(arg0: string): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_from_address", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function sui_system_state(arg0: TxContext): [UID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sui_system_state", [], args);

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function clock(): [UID] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "clock", [], args);

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function authenticator_state(): [UID] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "authenticator_state", [], args);

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function randomness_state(): [UID] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "randomness_state", [], args);

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function sui_deny_list_object_id(): [UID] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sui_deny_list_object_id", [], args);

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function bridge(): [UID] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bridge", [], args);

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function uid_as_inner(arg0: UID): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "uid_as_inner", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function uid_to_inner(arg0: UID): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "uid_to_inner", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function uid_to_bytes(arg0: UID): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "uid_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function uid_to_address(arg0: UID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "uid_to_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function delete_(arg0: UID) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UID.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delete", [], args);

}

function id < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_id < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function id_bytes < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_bytes", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function id_address < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_uid < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_uid", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_uid_from_hash(arg0: string): [UID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_uid_from_hash", [], args);

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function delete_impl(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delete_impl", [], args);

}

function record_new_uid(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "record_new_uid", [], args);

}

function last_created(arg0: TxContext): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "last_created", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const object = {
    ID,
    UID,
    unit_test_poison,
    new_,
    id_to_bytes,
    id_to_address,
    id_from_bytes,
    id_from_address,
    sui_system_state,
    clock,
    authenticator_state,
    randomness_state,
    sui_deny_list_object_id,
    bridge,
    uid_as_inner,
    uid_to_inner,
    uid_to_bytes,
    uid_to_address,
    delete_,
    id,
    borrow_id,
    id_bytes,
    id_address,
    borrow_uid,
    new_uid_from_hash,
    delete_impl,
    record_new_uid,
    last_created
}