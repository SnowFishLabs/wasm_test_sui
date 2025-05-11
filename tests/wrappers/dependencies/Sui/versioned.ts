import {
    ID,
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
let MODULE_NAME: string = "versioned";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Versioned =============================== */

export class Versioned implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Versioned`;

    id: UID;
    version ? : u64_import;

    constructor(id: UID, version ? : u64_import) {
        this.id = id;
        this.version = version;
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
        return Versioned.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Versioned.from_bcs_vector(args)
    }

    get_bcs() {
        return Versioned.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Versioned(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Versioned(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Versioned`
    }

    from(arg: Versioned) {
        this.id = arg.id;
        this.version = arg.version;
    }

    static from_bcs(arg: {
        id: UID,
        version: u64_import
    }): Versioned {
        return new Versioned(arg.id, arg.version)
    }

    static from_bcs_vector(args: {
        id: UID,
        version: u64_import
    } []): Versioned[] {
        return args.map(function(arg) {
            return new Versioned(arg.id, arg.version)
        })
    }

    static get bcs() {
        return bcs_import.struct("Versioned", {
            id: UID.bcs,
            version: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Versioned(val.id, val.version),
        });
    };
}

/* ============================== VersionChangeCap =============================== */

export class VersionChangeCap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VersionChangeCap`;

    versioned_id: ID;
    old_version: u64_import;

    constructor(versioned_id: ID, old_version: u64_import) {
        this.versioned_id = versioned_id;
        this.old_version = old_version;
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
        return VersionChangeCap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VersionChangeCap.from_bcs_vector(args)
    }

    get_bcs() {
        return VersionChangeCap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VersionChangeCap`
    }

    from(arg: VersionChangeCap) {
        this.versioned_id = arg.versioned_id;
        this.old_version = arg.old_version;
    }

    static from_bcs(arg: {
        versioned_id: ID,
        old_version: u64_import
    }): VersionChangeCap {
        return new VersionChangeCap(arg.versioned_id, arg.old_version)
    }

    static from_bcs_vector(args: {
        versioned_id: ID,
        old_version: u64_import
    } []): VersionChangeCap[] {
        return args.map(function(arg) {
            return new VersionChangeCap(arg.versioned_id, arg.old_version)
        })
    }

    static get bcs() {
        return bcs_import.struct("VersionChangeCap", {
            versioned_id: ID.bcs,
            old_version: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VersionChangeCap(val.versioned_id, val.old_version),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function version(arg0: Versioned): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Versioned.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "version", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: T0, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", type_args, args);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy < T0 extends StructClass > (type_args: string[], arg0: Versioned): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function load_value < T0 extends StructClass > (type_args: string[], arg0: Versioned): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function load_value_mut < T0 extends StructClass > (type_args: string[], arg0: Versioned): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_value_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Versioned);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove_value_for_upgrade < T0 extends StructClass > (type_args: string[], arg0: Versioned): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_value_for_upgrade", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Versioned);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function upgrade < T0 extends StructClass > (type_args: string[], arg0: Versioned, arg1: u64_import, arg2: T0, arg3: VersionChangeCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Versioned);
}

export const versioned = {
    Versioned,
    VersionChangeCap,
    unit_test_poison,
    version,
    create,
    destroy,
    load_value,
    load_value_mut,
    remove_value_for_upgrade,
    upgrade
}