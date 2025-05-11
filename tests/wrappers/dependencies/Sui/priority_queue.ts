import {
    StructClass,
    TypeArgument,
    U64,
    copy_arr_value,
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
let MODULE_NAME: string = "priority_queue";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Entry =============================== */

export class Entry < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Entry`;

    priority: u64_import;
    value: T0;

    T0_bcs: any;

    constructor(priority: u64_import, value: T0) {
        this.priority = priority;
        this.value = value;
    }

    into_value() {
        return {
            priority: (this.priority as unknown as StructClass).into_value ? (this.priority as unknown as StructClass).into_value() : this.priority,
            value: (this.value as StructClass).into_value ? (this.value as StructClass).into_value() : this.value
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.value) as StructClass).get_bcs())
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

    from(arg: Entry < T0 > ) {
        this.priority = arg.priority;
        this.value = arg.value;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        priority: u64_import,
        value: T0
    }): Entry < T0 > {
        return new Entry(arg.priority, arg.value)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        priority: u64_import,
        value: T0
    } []): Entry < T0 > [] {
        return args.map(function(arg) {
            return new Entry(arg.priority, arg.value)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Entry<${T0.name}>`, {
                priority: bcs_import.u64(),
                value: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Entry(val.priority, val.value),
            });
    };
}

/* ============================== PriorityQueue =============================== */

export class PriorityQueue < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PriorityQueue`;

    entries: Entry < T0 > [];

    T0_bcs: any;

    constructor(entries: Entry < T0 > []) {
        this.entries = entries;
    }

    into_value() {
        return {
            entries: into_arr_value(this.entries)
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.entries) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.entries) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.entries) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.entries) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.entries) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return PriorityQueue.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PriorityQueue.from_bcs_vector(args)
    }

    get_bcs() {
        return PriorityQueue.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PriorityQueue`
    }

    from(arg: PriorityQueue < T0 > ) {
        this.entries = arg.entries;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        entries: Entry < T0 > []
    }): PriorityQueue < T0 > {
        return new PriorityQueue(arg.entries)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        entries: Entry < T0 > []
    } []): PriorityQueue < T0 > [] {
        return args.map(function(arg) {
            return new PriorityQueue(arg.entries)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`PriorityQueue<${T0.name}>`, {
                entries: bcs_import.vector(Entry.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new PriorityQueue(val.entries),
            });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function insert < T0 extends StructClass > (type_args: string[], arg0: PriorityQueue < T0 > , arg1: u64_import, arg2: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "insert", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as PriorityQueue < T0 > );
}

function new_ < T0 extends StructClass > (type_args: string[], arg0: Entry < T0 > []): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function pop_max < T0 extends StructClass > (type_args: string[], arg0: PriorityQueue < T0 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_max", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as PriorityQueue < T0 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function new_entry < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_entry", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_entries < T0 extends StructClass > (type_args: string[], arg0: U64[], arg1: T0[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_entries", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function restore_heap_recursive < T0 extends StructClass > (type_args: string[], arg0: Entry < T0 > [], arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "restore_heap_recursive", type_args, args);
    copy_arr_value(into_arr_bcs_vector(arg0).parse(new Uint8Array(a0.Raw[0])), arg0);
}

function max_heapify_recursive < T0 extends StructClass > (type_args: string[], arg0: Entry < T0 > [], arg1: u64_import, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "max_heapify_recursive", type_args, args);
    copy_arr_value(into_arr_bcs_vector(arg0).parse(new Uint8Array(a0.Raw[0])), arg0);
}

function priorities < T0 extends StructClass > (type_args: string[], arg0: PriorityQueue < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "priorities", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function test_pq() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_pq", [], args);

}

function test_swap_remove_edge_case() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_swap_remove_edge_case", [], args);

}

function check_pop_max(arg0: PriorityQueue < u64_import > , arg1: u64_import, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PriorityQueue.bcs(bcs_import.u64()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_pop_max", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

export const priority_queue = {
    Entry,
    PriorityQueue,
    unit_test_poison,
    insert,
    new_,
    pop_max,
    new_entry,
    create_entries,
    restore_heap_recursive,
    max_heapify_recursive,
    priorities,
    test_pq,
    test_swap_remove_edge_case,
    check_pop_max
}