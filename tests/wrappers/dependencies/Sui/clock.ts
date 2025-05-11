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
let MODULE_NAME: string = "clock";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Clock =============================== */

export class Clock implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Clock`;

    id: UID;
    timestamp_ms ? : u64_import;

    constructor(id: UID, timestamp_ms ? : u64_import) {
        this.id = id;
        this.timestamp_ms = timestamp_ms;
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
        return Clock.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Clock.from_bcs_vector(args)
    }

    get_bcs() {
        return Clock.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Clock(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Clock(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Clock`
    }

    from(arg: Clock) {
        this.id = arg.id;
        this.timestamp_ms = arg.timestamp_ms;
    }

    static from_bcs(arg: {
        id: UID,
        timestamp_ms: u64_import
    }): Clock {
        return new Clock(arg.id, arg.timestamp_ms)
    }

    static from_bcs_vector(args: {
        id: UID,
        timestamp_ms: u64_import
    } []): Clock[] {
        return args.map(function(arg) {
            return new Clock(arg.id, arg.timestamp_ms)
        })
    }

    static get bcs() {
        return bcs_import.struct("Clock", {
            id: UID.bcs,
            timestamp_ms: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Clock(val.id, val.timestamp_ms),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function create(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", [], args);

}

function create_for_testing(arg0: TxContext): [Clock] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Clock.from_bcs(Clock.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function destroy_for_testing(arg0: Clock) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Clock.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_for_testing", [], args);

}

function timestamp_ms(arg0: Clock): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Clock.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "timestamp_ms", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function consensus_commit_prologue(arg0: Clock, arg1: u64_import, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Clock.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "consensus_commit_prologue", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function share_for_testing(arg0: Clock) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Clock.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "share_for_testing", [], args);

}

function increment_for_testing(arg0: Clock, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Clock.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increment_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function set_for_testing(arg0: Clock, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Clock.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

export const clock = {
    Clock,
    unit_test_poison,
    create,
    create_for_testing,
    destroy_for_testing,
    timestamp_ms,
    consensus_commit_prologue,
    share_for_testing,
    increment_for_testing,
    set_for_testing
}