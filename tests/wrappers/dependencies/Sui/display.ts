import {
    ID,
    UID
} from "./object";
import {
    Publisher
} from "./package";
import {
    TxContext
} from "./tx_context";
import {
    VecMap
} from "./vec_map";
import {
    StructClass,
    get_object_address,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    String as string_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "display";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Display =============================== */

export class Display implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Display`;

    id: UID;
    fields ? : VecMap < string,
    string > ;
    version ? : number;

    constructor(id: UID, fields ? : VecMap < string, string > , version ? : number) {
        this.id = id;
        this.fields = fields;
        this.version = version;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            fields: (this.fields as unknown as StructClass).into_value ? (this.fields as unknown as StructClass).into_value() : this.fields,
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
        return Display.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Display.from_bcs_vector(args)
    }

    get_bcs() {
        return Display.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Display(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Display(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Display`
    }

    from(arg: Display) {
        this.id = arg.id;
        this.fields = arg.fields;
        this.version = arg.version;
    }

    static from_bcs(arg: {
        id: UID,
        fields: VecMap < string,
        string > ,
        version: number
    }): Display {
        return new Display(arg.id, arg.fields, arg.version)
    }

    static from_bcs_vector(args: {
        id: UID,
        fields: VecMap < string,
        string > ,
        version: number
    } []): Display[] {
        return args.map(function(arg) {
            return new Display(arg.id, arg.fields, arg.version)
        })
    }

    static get bcs() {
        return bcs_import.struct("Display", {
            id: UID.bcs,
            fields: VecMap.bcs(bcs_import.string(), bcs_import.string()),
            version: bcs_import.u16(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Display(val.id, val.fields, val.version),
        });
    };
}

/* ============================== DisplayCreated =============================== */

export class DisplayCreated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DisplayCreated`;

    id: ID;

    constructor(id: ID) {
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
        return DisplayCreated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DisplayCreated.from_bcs_vector(args)
    }

    get_bcs() {
        return DisplayCreated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DisplayCreated`
    }

    from(arg: DisplayCreated) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: ID
    }): DisplayCreated {
        return new DisplayCreated(arg.id)
    }

    static from_bcs_vector(args: {
        id: ID
    } []): DisplayCreated[] {
        return args.map(function(arg) {
            return new DisplayCreated(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("DisplayCreated", {
            id: ID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DisplayCreated(val.id),
        });
    };
}

/* ============================== VersionUpdated =============================== */

export class VersionUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VersionUpdated`;

    id: ID;
    version: number;
    fields: VecMap < string,
    string > ;

    constructor(id: ID, version: number, fields: VecMap < string, string > ) {
        this.id = id;
        this.version = version;
        this.fields = fields;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            version: (this.version as unknown as StructClass).into_value ? (this.version as unknown as StructClass).into_value() : this.version,
            fields: (this.fields as unknown as StructClass).into_value ? (this.fields as unknown as StructClass).into_value() : this.fields
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
        return VersionUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VersionUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return VersionUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VersionUpdated`
    }

    from(arg: VersionUpdated) {
        this.id = arg.id;
        this.version = arg.version;
        this.fields = arg.fields;
    }

    static from_bcs(arg: {
        id: ID,
        version: number,
        fields: VecMap < string,
        string >
    }): VersionUpdated {
        return new VersionUpdated(arg.id, arg.version, arg.fields)
    }

    static from_bcs_vector(args: {
        id: ID,
        version: number,
        fields: VecMap < string,
        string >
    } []): VersionUpdated[] {
        return args.map(function(arg) {
            return new VersionUpdated(arg.id, arg.version, arg.fields)
        })
    }

    static get bcs() {
        return bcs_import.struct("VersionUpdated", {
            id: ID.bcs,
            version: bcs_import.u16(),
            fields: VecMap.bcs(bcs_import.string(), bcs_import.string()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VersionUpdated(val.id, val.version, val.fields),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function remove < T0 extends StructClass > (type_args: string[], arg0: Display, arg1: string_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Display);
}

function new_ < T0 extends StructClass > (type_args: string[], arg0: Publisher, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function version < T0 extends StructClass > (type_args: string[], arg0: Display): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "version", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function add < T0 extends StructClass > (type_args: string[], arg0: Display, arg1: string_import, arg2: string_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Display);
}

function new_with_fields < T0 extends StructClass > (type_args: string[], arg0: Publisher, arg1: string_import[], arg2: string_import[], arg3: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_with_fields", type_args, args);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_and_keep < T0 extends StructClass > (type_args: string[], arg0: Publisher, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_and_keep", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
}

function update_version < T0 extends StructClass > (type_args: string[], arg0: Display) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_version", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Display);
}

function add_multiple < T0 extends StructClass > (type_args: string[], arg0: Display, arg1: string_import[], arg2: string_import[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_multiple", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Display);
}

function edit < T0 extends StructClass > (type_args: string[], arg0: Display, arg1: string_import, arg2: string_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "edit", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Display);
}

function is_authorized < T0 extends StructClass > (type_args: string[], arg0: Publisher): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_authorized", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function fields < T0 extends StructClass > (type_args: string[], arg0: Display): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fields", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_internal < T0 extends StructClass > (type_args: string[], arg0: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_internal", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function add_internal < T0 extends StructClass > (type_args: string[], arg0: Display, arg1: string_import, arg2: string_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_internal", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Display);
}

export const display = {
    Display,
    DisplayCreated,
    VersionUpdated,
    unit_test_poison,
    remove,
    new_,
    version,
    add,
    new_with_fields,
    create_and_keep,
    update_version,
    add_multiple,
    edit,
    is_authorized,
    fields,
    create_internal,
    add_internal
}