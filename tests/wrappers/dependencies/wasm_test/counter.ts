import {
    UID
} from "../Sui/object";
import {
    TxContext
} from "../Sui/tx_context";
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

let PACKAGE_NAME: string = "wasm_test";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000000";
let MODULE_NAME: string = "counter";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== IdCounter =============================== */

export class IdCounter implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::IdCounter`;

    id: UID;

    constructor(id: UID) {
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
        return IdCounter.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return IdCounter.from_bcs_vector(args)
    }

    get_bcs() {
        return IdCounter.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new IdCounter(UID.from_id(id));
    }

    static from_id(id: string) {
        return new IdCounter(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::IdCounter`
    }

    from(arg: IdCounter) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: UID
    }): IdCounter {
        return new IdCounter(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): IdCounter[] {
        return args.map(function(arg) {
            return new IdCounter(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("IdCounter", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new IdCounter(val.id),
        });
    };
}

/* ============================== Counter =============================== */

export class Counter implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Counter`;

    id: UID;
    count ? : u64_import;

    constructor(id: UID, count ? : u64_import) {
        this.id = id;
        this.count = count;
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
        return Counter.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Counter.from_bcs_vector(args)
    }

    get_bcs() {
        return Counter.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Counter(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Counter(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Counter`
    }

    from(arg: Counter) {
        this.id = arg.id;
        this.count = arg.count;
    }

    static from_bcs(arg: {
        id: UID,
        count: u64_import
    }): Counter {
        return new Counter(arg.id, arg.count)
    }

    static from_bcs_vector(args: {
        id: UID,
        count: u64_import
    } []): Counter[] {
        return args.map(function(arg) {
            return new Counter(arg.id, arg.count)
        })
    }

    static get bcs() {
        return bcs_import.struct("Counter", {
            id: UID.bcs,
            count: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Counter(val.id, val.count),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function borrow_mut(arg0: IdCounter): [Counter] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(IdCounter.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Counter.from_bcs(Counter.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_counter(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_counter", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function bump(arg0: Counter): [Counter] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Counter.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bump", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Counter.from_bcs(Counter.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const counter = {
    IdCounter,
    Counter,
    unit_test_poison,
    borrow_mut,
    new_counter,
    bump
}