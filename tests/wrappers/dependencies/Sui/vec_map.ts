import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    to_arr_value,
    u64 as u64_import
} from "@deepmove/sui";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "vec_map";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== VecMap =============================== */

export class VecMap < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VecMap`;

    contents: Entry < T0,
    T1 > [];

    T0_bcs: any;
    T1_bcs: any;

    constructor(contents: Entry < T0, T1 > []) {
        this.contents = contents;
    }

    into_value() {
        return {
            contents: into_arr_value(this.contents)
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.contents) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.contents) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.contents) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.contents) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.contents) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.contents) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.contents) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.contents) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.contents) as StructClass).get_bcs(), (to_arr_value(this.contents) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return VecMap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VecMap.from_bcs_vector(args)
    }

    get_bcs() {
        return VecMap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VecMap`
    }

    from(arg: VecMap < T0, T1 > ) {
        this.contents = arg.contents;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        contents: Entry < T0,
        T1 > []
    }): VecMap < T0,
    T1 > {
        return new VecMap(arg.contents)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        contents: Entry < T0,
        T1 > []
    } []): VecMap < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new VecMap(arg.contents)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`VecMap<${T0.name}, ${T1.name}>`, {
                contents: bcs_import.vector(Entry.bcs(T0, T1)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new VecMap(val.contents),
            });
    };
}

/* ============================== Entry =============================== */

export class Entry < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Entry`;

    key: T0;
    value: T1;

    T0_bcs: any;
    T1_bcs: any;

    constructor(key: T0, value: T1) {
        this.key = key;
        this.value = value;
    }

    into_value() {
        return {
            key: (this.key as StructClass).into_value ? (this.key as StructClass).into_value() : this.key,
            value: (this.value as StructClass).into_value ? (this.value as StructClass).into_value() : this.value
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.key) as StructClass).get_bcs(), (to_arr_value(this.value) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Entry.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Entry.from_bcs_vector(args)
    }

    get_bcs() {
        return Entry.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Entry`
    }

    from(arg: Entry < T0, T1 > ) {
        this.key = arg.key;
        this.value = arg.value;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        key: T0,
        value: T1
    }): Entry < T0,
    T1 > {
        return new Entry(arg.key, arg.value)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        key: T0,
        value: T1
    } []): Entry < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new Entry(arg.key, arg.value)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`Entry<${T0.name}, ${T1.name}>`, {
                key: T0,
                value: T1,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Entry(val.key, val.value),
            });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function empty < T0 extends StructClass, T1 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "empty", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_empty < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", type_args, args);
}

function is_empty < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_empty", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0): [Uint8Array] {
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

function remove < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as VecMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function insert < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "insert", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as VecMap < T0, T1 > );
}

function size < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "size", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function keys < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "keys", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_idx_opt < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_idx_opt", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_idx < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_idx", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function pop < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as VecMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function get_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as VecMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function try_get < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "try_get", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function into_keys_values < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "into_keys_values", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function from_keys_values < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0[], arg1: T1[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_keys_values", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_entry_by_idx < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: u64_import): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_entry_by_idx", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function get_entry_by_idx_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: u64_import): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_entry_by_idx_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as VecMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function remove_entry_by_idx < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: VecMap < T0, T1 > , arg1: u64_import): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_entry_by_idx", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as VecMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

export const vec_map = {
    VecMap,
    Entry,
    unit_test_poison,
    empty,
    destroy_empty,
    is_empty,
    contains,
    remove,
    insert,
    size,
    keys,
    get_idx_opt,
    get_idx,
    get,
    pop,
    get_mut,
    try_get,
    into_keys_values,
    from_keys_values,
    get_entry_by_idx,
    get_entry_by_idx_mut,
    remove_entry_by_idx
}