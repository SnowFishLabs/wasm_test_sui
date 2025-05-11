import {
    Bag
} from "./bag";
import {
    Config
} from "./config";
import {
    ID,
    UID
} from "./object";
import {
    Table
} from "./table";
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
let MODULE_NAME: string = "deny_list";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== DenyList =============================== */

export class DenyList implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DenyList`;

    id: UID;
    lists ? : Bag;

    constructor(id: UID, lists ? : Bag) {
        this.id = id;
        this.lists = lists;
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
        return DenyList.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DenyList.from_bcs_vector(args)
    }

    get_bcs() {
        return DenyList.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new DenyList(UID.from_id(id));
    }

    static from_id(id: string) {
        return new DenyList(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DenyList`
    }

    from(arg: DenyList) {
        this.id = arg.id;
        this.lists = arg.lists;
    }

    static from_bcs(arg: {
        id: UID,
        lists: Bag
    }): DenyList {
        return new DenyList(arg.id, arg.lists)
    }

    static from_bcs_vector(args: {
        id: UID,
        lists: Bag
    } []): DenyList[] {
        return args.map(function(arg) {
            return new DenyList(arg.id, arg.lists)
        })
    }

    static get bcs() {
        return bcs_import.struct("DenyList", {
            id: UID.bcs,
            lists: Bag.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DenyList(val.id, val.lists),
        });
    };
}

/* ============================== ConfigWriteCap =============================== */

export class ConfigWriteCap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConfigWriteCap`;

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
        return ConfigWriteCap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConfigWriteCap.from_bcs_vector(args)
    }

    get_bcs() {
        return ConfigWriteCap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConfigWriteCap`
    }

    from(arg: ConfigWriteCap) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): ConfigWriteCap {
        return new ConfigWriteCap(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): ConfigWriteCap[] {
        return args.map(function(arg) {
            return new ConfigWriteCap(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConfigWriteCap", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConfigWriteCap(val.dummy_field),
        });
    };
}

/* ============================== ConfigKey =============================== */

export class ConfigKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConfigKey`;

    per_type_index: u64_import;
    per_type_key: number[];

    constructor(per_type_index: u64_import, per_type_key: number[]) {
        this.per_type_index = per_type_index;
        this.per_type_key = per_type_key;
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
        return ConfigKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConfigKey.from_bcs_vector(args)
    }

    get_bcs() {
        return ConfigKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConfigKey`
    }

    from(arg: ConfigKey) {
        this.per_type_index = arg.per_type_index;
        this.per_type_key = arg.per_type_key;
    }

    static from_bcs(arg: {
        per_type_index: u64_import,
        per_type_key: number[]
    }): ConfigKey {
        return new ConfigKey(arg.per_type_index, arg.per_type_key)
    }

    static from_bcs_vector(args: {
        per_type_index: u64_import,
        per_type_key: number[]
    } []): ConfigKey[] {
        return args.map(function(arg) {
            return new ConfigKey(arg.per_type_index, arg.per_type_key)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConfigKey", {
            per_type_index: bcs_import.u64(),
            per_type_key: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConfigKey(val.per_type_index, val.per_type_key),
        });
    };
}

/* ============================== AddressKey =============================== */

export class AddressKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddressKey`;

    pos0: string;

    constructor(pos0: string) {
        this.pos0 = pos0;
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
        return AddressKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddressKey.from_bcs_vector(args)
    }

    get_bcs() {
        return AddressKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddressKey`
    }

    from(arg: AddressKey) {
        this.pos0 = arg.pos0;
    }

    static from_bcs(arg: {
        pos0: string
    }): AddressKey {
        return new AddressKey(arg.pos0)
    }

    static from_bcs_vector(args: {
        pos0: string
    } []): AddressKey[] {
        return args.map(function(arg) {
            return new AddressKey(arg.pos0)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddressKey", {
            pos0: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddressKey(val.pos0),
        });
    };
}

/* ============================== GlobalPauseKey =============================== */

export class GlobalPauseKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GlobalPauseKey`;

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
        return GlobalPauseKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GlobalPauseKey.from_bcs_vector(args)
    }

    get_bcs() {
        return GlobalPauseKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GlobalPauseKey`
    }

    from(arg: GlobalPauseKey) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): GlobalPauseKey {
        return new GlobalPauseKey(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): GlobalPauseKey[] {
        return args.map(function(arg) {
            return new GlobalPauseKey(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("GlobalPauseKey", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GlobalPauseKey(val.dummy_field),
        });
    };
}

/* ============================== PerTypeConfigCreated =============================== */

export class PerTypeConfigCreated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PerTypeConfigCreated`;

    key: ConfigKey;
    config_id: ID;

    constructor(key: ConfigKey, config_id: ID) {
        this.key = key;
        this.config_id = config_id;
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
        return PerTypeConfigCreated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PerTypeConfigCreated.from_bcs_vector(args)
    }

    get_bcs() {
        return PerTypeConfigCreated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PerTypeConfigCreated`
    }

    from(arg: PerTypeConfigCreated) {
        this.key = arg.key;
        this.config_id = arg.config_id;
    }

    static from_bcs(arg: {
        key: ConfigKey,
        config_id: ID
    }): PerTypeConfigCreated {
        return new PerTypeConfigCreated(arg.key, arg.config_id)
    }

    static from_bcs_vector(args: {
        key: ConfigKey,
        config_id: ID
    } []): PerTypeConfigCreated[] {
        return args.map(function(arg) {
            return new PerTypeConfigCreated(arg.key, arg.config_id)
        })
    }

    static get bcs() {
        return bcs_import.struct("PerTypeConfigCreated", {
            key: ConfigKey.bcs,
            config_id: ID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PerTypeConfigCreated(val.key, val.config_id),
        });
    };
}

/* ============================== PerTypeList =============================== */

export class PerTypeList implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PerTypeList`;

    id: UID;
    denied_count ? : Table;
    denied_addresses ? : Table;

    constructor(id: UID, denied_count ? : Table, denied_addresses ? : Table) {
        this.id = id;
        this.denied_count = denied_count;
        this.denied_addresses = denied_addresses;
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
        return PerTypeList.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PerTypeList.from_bcs_vector(args)
    }

    get_bcs() {
        return PerTypeList.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new PerTypeList(UID.from_id(id));
    }

    static from_id(id: string) {
        return new PerTypeList(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PerTypeList`
    }

    from(arg: PerTypeList) {
        this.id = arg.id;
        this.denied_count = arg.denied_count;
        this.denied_addresses = arg.denied_addresses;
    }

    static from_bcs(arg: {
        id: UID,
        denied_count: Table,
        denied_addresses: Table
    }): PerTypeList {
        return new PerTypeList(arg.id, arg.denied_count, arg.denied_addresses)
    }

    static from_bcs_vector(args: {
        id: UID,
        denied_count: Table,
        denied_addresses: Table
    } []): PerTypeList[] {
        return args.map(function(arg) {
            return new PerTypeList(arg.id, arg.denied_count, arg.denied_addresses)
        })
    }

    static get bcs() {
        return bcs_import.struct("PerTypeList", {
            id: UID.bcs,
            denied_count: Table.bcs,
            denied_addresses: Table.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PerTypeList(val.id, val.denied_count, val.denied_addresses),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function v2_add(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: string, arg4: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg4).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_add", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg4.from(arg4.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function v2_remove(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: string, arg4: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg4).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_remove", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg4.from(arg4.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function v2_contains_current_epoch(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: string, arg4: TxContext): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_contains_current_epoch", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function v2_contains_next_epoch(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_contains_next_epoch", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function v2_enable_global_pause(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_enable_global_pause", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function v2_disable_global_pause(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_disable_global_pause", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function v2_is_global_pause_enabled_current_epoch(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: TxContext): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_is_global_pause_enabled_current_epoch", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function v2_is_global_pause_enabled_next_epoch(arg0: DenyList, arg1: u64_import, arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v2_is_global_pause_enabled_next_epoch", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function migrate_v1_to_v2(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "migrate_v1_to_v2", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function add_per_type_config(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_per_type_config", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function borrow_per_type_config_mut(arg0: DenyList, arg1: u64_import, arg2: number[]): [Config] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_per_type_config_mut", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Config.from_bcs(Config.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function borrow_per_type_config(arg0: DenyList, arg1: u64_import, arg2: number[]): [Config] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_per_type_config", [], args);

    return [
        Config.from_bcs(Config.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function per_type_exists(arg0: DenyList, arg1: u64_import, arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "per_type_exists", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function v1_add(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v1_add", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function v1_per_type_list_add(arg0: PerTypeList, arg1: number[], arg2: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PerTypeList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v1_per_type_list_add", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function v1_remove(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v1_remove", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function v1_per_type_list_remove(arg0: PerTypeList, arg1: number[], arg2: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PerTypeList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v1_per_type_list_remove", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function v1_contains(arg0: DenyList, arg1: u64_import, arg2: number[], arg3: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DenyList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v1_contains", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function v1_per_type_list_contains(arg0: PerTypeList, arg1: number[], arg2: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PerTypeList.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "v1_per_type_list_contains", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function per_type_list(arg0: TxContext): [PerTypeList] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "per_type_list", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        PerTypeList.from_bcs(PerTypeList.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function reserved_addresses(): [string[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reserved_addresses", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_for_test(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_for_test", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function new_for_testing(arg0: TxContext): [DenyList] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        DenyList.from_bcs(DenyList.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const deny_list = {
    DenyList,
    ConfigWriteCap,
    ConfigKey,
    AddressKey,
    GlobalPauseKey,
    PerTypeConfigCreated,
    PerTypeList,
    unit_test_poison,
    v2_add,
    v2_remove,
    v2_contains_current_epoch,
    v2_contains_next_epoch,
    v2_enable_global_pause,
    v2_disable_global_pause,
    v2_is_global_pause_enabled_current_epoch,
    v2_is_global_pause_enabled_next_epoch,
    migrate_v1_to_v2,
    add_per_type_config,
    borrow_per_type_config_mut,
    borrow_per_type_config,
    per_type_exists,
    v1_add,
    v1_per_type_list_add,
    v1_remove,
    v1_per_type_list_remove,
    v1_contains,
    v1_per_type_list_contains,
    create,
    per_type_list,
    reserved_addresses,
    create_for_test,
    new_for_testing
}