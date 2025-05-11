import {
    UID
} from "./object";
import {
    Scenario
} from "./test_scenario";
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
let MODULE_NAME: string = "dynamic_object_field_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
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

/* ============================== Fake =============================== */

export class Fake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Fake`;

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
        return Fake.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Fake.from_bcs_vector(args)
    }

    get_bcs() {
        return Fake.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Fake(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Fake(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Fake`
    }

    from(arg: Fake) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: UID
    }): Fake {
        return new Fake(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): Fake[] {
        return args.map(function(arg) {
            return new Fake(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("Fake", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Fake(val.id),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function new_(arg0: Scenario): [Counter] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Counter.from_bcs(Counter.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
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

function count(arg0: Counter): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Counter.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "count", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function simple_all_functions() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_all_functions", [], args);

}

function add_duplicate() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_duplicate", [], args);

}

function add_duplicate_mismatched_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_duplicate_mismatched_type", [], args);

}

function borrow_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_missing", [], args);

}

function borrow_wrong_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_wrong_type", [], args);

}

function borrow_mut_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_missing", [], args);

}

function borrow_mut_wrong_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_wrong_type", [], args);

}

function remove_missing() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_missing", [], args);

}

function remove_wrong_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_wrong_type", [], args);

}

function destroy(arg0: Counter): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Counter.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function sanity_check_exists() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sanity_check_exists", [], args);

}

function delete_uid_with_fields() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delete_uid_with_fields", [], args);

}

function sanity_check_exists_with_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sanity_check_exists_with_type", [], args);

}

function transfer_object() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_object", [], args);

}

export const dynamic_object_field_tests = {
    Counter,
    Fake,
    unit_test_poison,
    new_,
    bump,
    count,
    simple_all_functions,
    add_duplicate,
    add_duplicate_mismatched_type,
    borrow_missing,
    borrow_wrong_type,
    borrow_mut_missing,
    borrow_mut_wrong_type,
    remove_missing,
    remove_wrong_type,
    destroy,
    sanity_check_exists,
    delete_uid_with_fields,
    sanity_check_exists_with_type,
    transfer_object
}