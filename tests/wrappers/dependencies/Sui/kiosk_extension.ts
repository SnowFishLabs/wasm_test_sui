import {
    Bag
} from "./bag";
import {
    Kiosk,
    KioskOwnerCap
} from "./kiosk";
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
let MODULE_NAME: string = "kiosk_extension";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Extension =============================== */

export class Extension implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Extension`;

    storage: Bag;
    permissions: u64_import;
    is_enabled: boolean;

    constructor(storage: Bag, permissions: u64_import, is_enabled: boolean) {
        this.storage = storage;
        this.permissions = permissions;
        this.is_enabled = is_enabled;
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
        return Extension.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Extension.from_bcs_vector(args)
    }

    get_bcs() {
        return Extension.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Extension`
    }

    from(arg: Extension) {
        this.storage = arg.storage;
        this.permissions = arg.permissions;
        this.is_enabled = arg.is_enabled;
    }

    static from_bcs(arg: {
        storage: Bag,
        permissions: u64_import,
        is_enabled: boolean
    }): Extension {
        return new Extension(arg.storage, arg.permissions, arg.is_enabled)
    }

    static from_bcs_vector(args: {
        storage: Bag,
        permissions: u64_import,
        is_enabled: boolean
    } []): Extension[] {
        return args.map(function(arg) {
            return new Extension(arg.storage, arg.permissions, arg.is_enabled)
        })
    }

    static get bcs() {
        return bcs_import.struct("Extension", {
            storage: Bag.bcs,
            permissions: bcs_import.u128(),
            is_enabled: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Extension(val.storage, val.permissions, val.is_enabled),
        });
    };
}

/* ============================== ExtensionKey =============================== */

export class ExtensionKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ExtensionKey`;

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
        return ExtensionKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ExtensionKey.from_bcs_vector(args)
    }

    get_bcs() {
        return ExtensionKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ExtensionKey`
    }

    from(arg: ExtensionKey) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): ExtensionKey {
        return new ExtensionKey(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): ExtensionKey[] {
        return args.map(function(arg) {
            return new ExtensionKey(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("ExtensionKey", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ExtensionKey(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function remove < T0 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: KioskOwnerCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
}

function add < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: Kiosk, arg2: KioskOwnerCap, arg3: u64_import, arg4: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
    arg4.from(arg4.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function place < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0, arg1: Kiosk, arg2: T1, arg3: TransferPolicy) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "place", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
}

function lock < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0, arg1: Kiosk, arg2: T1, arg3: TransferPolicy) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "lock", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
}

function disable < T0 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: KioskOwnerCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "disable", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
}

function enable < T0 extends StructClass > (type_args: string[], arg0: Kiosk, arg1: KioskOwnerCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "enable", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
}

function storage < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "storage", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function storage_mut < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "storage_mut", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_installed < T0 extends StructClass > (type_args: string[], arg0: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_installed", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_enabled < T0 extends StructClass > (type_args: string[], arg0: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_enabled", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function can_place < T0 extends StructClass > (type_args: string[], arg0: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_place", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function can_lock < T0 extends StructClass > (type_args: string[], arg0: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_lock", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function extension < T0 extends StructClass > (type_args: string[], arg0: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extension", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function extension_mut < T0 extends StructClass > (type_args: string[], arg0: Kiosk): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extension_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Kiosk);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const kiosk_extension = {
    Extension,
    ExtensionKey,
    unit_test_poison,
    remove,
    add,
    place,
    lock,
    disable,
    enable,
    storage,
    storage_mut,
    is_installed,
    is_enabled,
    can_place,
    can_lock,
    extension,
    extension_mut
}