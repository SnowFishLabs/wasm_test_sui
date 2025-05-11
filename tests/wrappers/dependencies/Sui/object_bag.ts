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

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "object_bag";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ObjectBag =============================== */

export class ObjectBag implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ObjectBag`;

    id: UID;
    size ? : u64_import;

    constructor(id: UID, size ? : u64_import) {
        this.id = id;
        this.size = size;
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
        return ObjectBag.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ObjectBag.from_bcs_vector(args)
    }

    get_bcs() {
        return ObjectBag.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new ObjectBag(UID.from_id(id));
    }

    static from_id(id: string) {
        return new ObjectBag(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ObjectBag`
    }

    from(arg: ObjectBag) {
        this.id = arg.id;
        this.size = arg.size;
    }

    static from_bcs(arg: {
        id: UID,
        size: u64_import
    }): ObjectBag {
        return new ObjectBag(arg.id, arg.size)
    }

    static from_bcs_vector(args: {
        id: UID,
        size: u64_import
    } []): ObjectBag[] {
        return args.map(function(arg) {
            return new ObjectBag(arg.id, arg.size)
        })
    }

    static get bcs() {
        return bcs_import.struct("ObjectBag", {
            id: UID.bcs,
            size: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ObjectBag(val.id, val.size),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function length(arg0: ObjectBag): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ObjectBag.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "length", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function borrow < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: ObjectBag, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: ObjectBag, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as ObjectBag);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_empty(arg0: ObjectBag) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ObjectBag.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", [], args);

}

function is_empty(arg0: ObjectBag): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ObjectBag.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_empty", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function contains < T0 extends StructClass > (type_args: string[], arg0: ObjectBag, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: ObjectBag, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as ObjectBag);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_(arg0: TxContext): [ObjectBag] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        ObjectBag.from_bcs(ObjectBag.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function add < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: ObjectBag, arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as ObjectBag);
}

function contains_with_type < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: ObjectBag, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains_with_type", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function value_id < T0 extends StructClass > (type_args: string[], arg0: ObjectBag, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "value_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const object_bag = {
    ObjectBag,
    unit_test_poison,
    length,
    borrow,
    borrow_mut,
    destroy_empty,
    is_empty,
    contains,
    remove,
    new_,
    add,
    contains_with_type,
    value_id
}