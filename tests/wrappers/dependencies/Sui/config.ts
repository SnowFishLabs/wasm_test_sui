import {
    Option
} from "../MoveStdlib/option";
import {
    ID,
    UID
} from "./object";
import {
    TxContext
} from "./tx_context";
import {
    StructClass,
    TypeArgument,
    get_object_address,
    get_package_address,
    get_wasm,
    to_arr_value,
    u64 as u64_import
} from "@deepmove/sui";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "config";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Config =============================== */

export class Config implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Config`;

    id: UID;

    constructor(id: UID) {
        this.id = id;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id
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
        return Config.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Config.from_bcs_vector(args)
    }

    get_bcs() {
        return Config.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Config(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Config(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Config`
    }

    from(arg: Config) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: UID
    }): Config {
        return new Config(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): Config[] {
        return args.map(function(arg) {
            return new Config(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("Config", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Config(val.id),
        });
    };
}

/* ============================== Setting =============================== */

export class Setting < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Setting`;

    data: Option < SettingData < T0 >> ;

    T0_bcs: any;

    constructor(data: Option < SettingData < T0 >> ) {
        this.data = data;
    }

    into_value() {
        return {
            data: (this.data as unknown as StructClass).into_value ? (this.data as unknown as StructClass).into_value() : this.data
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.data) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Setting.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Setting.from_bcs_vector(args)
    }

    get_bcs() {
        return Setting.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Setting`
    }

    from(arg: Setting < T0 > ) {
        this.data = arg.data;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        data: Option < SettingData < T0 >>
    }): Setting < T0 > {
        return new Setting(arg.data)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        data: Option < SettingData < T0 >>
    } []): Setting < T0 > [] {
        return args.map(function(arg) {
            return new Setting(arg.data)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Setting<${T0.name}>`, {
                data: Option.bcs(SettingData.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Setting(val.data),
            });
    };
}

/* ============================== SettingData =============================== */

export class SettingData < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SettingData`;

    newer_value_epoch: u64_import;
    newer_value: Option < T0 > ;
    older_value_opt: Option < T0 > ;

    T0_bcs: any;

    constructor(newer_value_epoch: u64_import, newer_value: Option < T0 > , older_value_opt: Option < T0 > ) {
        this.newer_value_epoch = newer_value_epoch;
        this.newer_value = newer_value;
        this.older_value_opt = older_value_opt;
    }

    into_value() {
        return {
            newer_value_epoch: (this.newer_value_epoch as unknown as StructClass).into_value ? (this.newer_value_epoch as unknown as StructClass).into_value() : this.newer_value_epoch,
            newer_value: (this.newer_value as unknown as StructClass).into_value ? (this.newer_value as unknown as StructClass).into_value() : this.newer_value,
            older_value_opt: (this.older_value_opt as unknown as StructClass).into_value ? (this.older_value_opt as unknown as StructClass).into_value() : this.older_value_opt
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.newer_value) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.newer_value) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.newer_value) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.newer_value) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.newer_value) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return SettingData.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SettingData.from_bcs_vector(args)
    }

    get_bcs() {
        return SettingData.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SettingData`
    }

    from(arg: SettingData < T0 > ) {
        this.newer_value_epoch = arg.newer_value_epoch;
        this.newer_value = arg.newer_value;
        this.older_value_opt = arg.older_value_opt;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        newer_value_epoch: u64_import,
        newer_value: Option < T0 > ,
        older_value_opt: Option < T0 >
    }): SettingData < T0 > {
        return new SettingData(arg.newer_value_epoch, arg.newer_value, arg.older_value_opt)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        newer_value_epoch: u64_import,
        newer_value: Option < T0 > ,
        older_value_opt: Option < T0 >
    } []): SettingData < T0 > [] {
        return args.map(function(arg) {
            return new SettingData(arg.newer_value_epoch, arg.newer_value, arg.older_value_opt)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`SettingData<${T0.name}>`, {
                newer_value_epoch: bcs_import.u64(),
                newer_value: Option.bcs(T0),
                older_value_opt: Option.bcs(T0),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new SettingData(val.newer_value_epoch, val.newer_value, val.older_value_opt),
            });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function new_ < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as T0);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function transfer < T0 extends StructClass > (type_args: string[], arg0: Config, arg1: string) {
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

function exists_with_type < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Config, arg1: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exists_with_type", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function share < T0 extends StructClass > (type_args: string[], arg0: Config) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "share", type_args, args);
}

function add_for_next_epoch < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Config, arg1: T0, arg2: T1, arg3: T2, arg4: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1, a2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_for_next_epoch", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Config);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as T0);
    arg4.from(arg4.from_bcs_t(new Uint8Array(a2.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove_for_next_epoch < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Config, arg1: T0, arg2: T1, arg3: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1, a2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_for_next_epoch", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Config);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as T0);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a2.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function exists_with_type_for_next_epoch < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Config, arg1: T1, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exists_with_type_for_next_epoch", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_for_next_epoch_mut < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Config, arg1: T0, arg2: T1, arg3: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1, a2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_for_next_epoch_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Config);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as T0);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a2.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function read_setting_for_next_epoch < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Config, arg1: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read_setting_for_next_epoch", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function read_setting < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: ID, arg1: T0, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read_setting", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function read_setting_impl < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass, T3 extends StructClass > (type_args: string[], arg0: string, arg1: string, arg2: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read_setting_impl", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const config = {
    Config,
    Setting,
    SettingData,
    unit_test_poison,
    new_,
    transfer,
    exists_with_type,
    share,
    add_for_next_epoch,
    remove_for_next_epoch,
    exists_with_type_for_next_epoch,
    borrow_for_next_epoch_mut,
    read_setting_for_next_epoch,
    read_setting,
    read_setting_impl
}