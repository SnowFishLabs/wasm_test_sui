import {
    ID,
    UID
} from "./object";
import {
    Receiving
} from "./transfer";
import {
    TxContext
} from "./tx_context";
import {
    VecMap
} from "./vec_map";
import {
    StructClass,
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
let MODULE_NAME: string = "test_scenario";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Scenario =============================== */

export class Scenario implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Scenario`;

    txn_number: u64_import;
    ctx: TxContext;

    constructor(txn_number: u64_import, ctx: TxContext) {
        this.txn_number = txn_number;
        this.ctx = ctx;
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
        return Scenario.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Scenario.from_bcs_vector(args)
    }

    get_bcs() {
        return Scenario.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Scenario`
    }

    from(arg: Scenario) {
        this.txn_number = arg.txn_number;
        this.ctx = arg.ctx;
    }

    static from_bcs(arg: {
        txn_number: u64_import,
        ctx: TxContext
    }): Scenario {
        return new Scenario(arg.txn_number, arg.ctx)
    }

    static from_bcs_vector(args: {
        txn_number: u64_import,
        ctx: TxContext
    } []): Scenario[] {
        return args.map(function(arg) {
            return new Scenario(arg.txn_number, arg.ctx)
        })
    }

    static get bcs() {
        return bcs_import.struct("Scenario", {
            txn_number: bcs_import.u64(),
            ctx: TxContext.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Scenario(val.txn_number, val.ctx),
        });
    };
}

/* ============================== TransactionEffects =============================== */

export class TransactionEffects implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransactionEffects`;

    created: ID[];
    written: ID[];
    deleted: ID[];
    transferred_to_account: VecMap < ID,
    string > ;
    transferred_to_object: VecMap < ID,
    ID > ;
    shared: ID[];
    frozen: ID[];
    num_user_events: u64_import;

    constructor(created: ID[], written: ID[], deleted: ID[], transferred_to_account: VecMap < ID, string > , transferred_to_object: VecMap < ID, ID > , shared: ID[], frozen: ID[], num_user_events: u64_import) {
        this.created = created;
        this.written = written;
        this.deleted = deleted;
        this.transferred_to_account = transferred_to_account;
        this.transferred_to_object = transferred_to_object;
        this.shared = shared;
        this.frozen = frozen;
        this.num_user_events = num_user_events;
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
        return TransactionEffects.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransactionEffects.from_bcs_vector(args)
    }

    get_bcs() {
        return TransactionEffects.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransactionEffects`
    }

    from(arg: TransactionEffects) {
        this.created = arg.created;
        this.written = arg.written;
        this.deleted = arg.deleted;
        this.transferred_to_account = arg.transferred_to_account;
        this.transferred_to_object = arg.transferred_to_object;
        this.shared = arg.shared;
        this.frozen = arg.frozen;
        this.num_user_events = arg.num_user_events;
    }

    static from_bcs(arg: {
        created: ID[],
        written: ID[],
        deleted: ID[],
        transferred_to_account: VecMap < ID,
        string > ,
        transferred_to_object: VecMap < ID,
        ID > ,
        shared: ID[],
        frozen: ID[],
        num_user_events: u64_import
    }): TransactionEffects {
        return new TransactionEffects(arg.created, arg.written, arg.deleted, arg.transferred_to_account, arg.transferred_to_object, arg.shared, arg.frozen, arg.num_user_events)
    }

    static from_bcs_vector(args: {
        created: ID[],
        written: ID[],
        deleted: ID[],
        transferred_to_account: VecMap < ID,
        string > ,
        transferred_to_object: VecMap < ID,
        ID > ,
        shared: ID[],
        frozen: ID[],
        num_user_events: u64_import
    } []): TransactionEffects[] {
        return args.map(function(arg) {
            return new TransactionEffects(arg.created, arg.written, arg.deleted, arg.transferred_to_account, arg.transferred_to_object, arg.shared, arg.frozen, arg.num_user_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransactionEffects", {
            created: bcs_import.vector(ID.bcs),
            written: bcs_import.vector(ID.bcs),
            deleted: bcs_import.vector(ID.bcs),
            transferred_to_account: VecMap.bcs(ID.bcs, bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            transferred_to_object: VecMap.bcs(ID.bcs, ID.bcs),
            shared: bcs_import.vector(ID.bcs),
            frozen: bcs_import.vector(ID.bcs),
            num_user_events: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransactionEffects(val.created, val.written, val.deleted, val.transferred_to_account, val.transferred_to_object, val.shared, val.frozen, val.num_user_events),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function sender(arg0: Scenario): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sender", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function begin(arg0: string): [Scenario] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "begin", [], args);

    return [
        Scenario.from_bcs(Scenario.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function next_tx(arg0: Scenario, arg1: string): [TransactionEffects] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_tx", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TransactionEffects.from_bcs(TransactionEffects.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function next_epoch(arg0: Scenario, arg1: string): [TransactionEffects] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_epoch", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TransactionEffects.from_bcs(TransactionEffects.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function later_epoch(arg0: Scenario, arg1: u64_import, arg2: string): [TransactionEffects] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "later_epoch", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TransactionEffects.from_bcs(TransactionEffects.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function end(arg0: Scenario): [TransactionEffects] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "end", [], args);

    return [
        TransactionEffects.from_bcs(TransactionEffects.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ctx(arg0: Scenario): [TxContext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ctx", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TxContext.from_bcs(TxContext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_object(arg0: Scenario): [UID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_object", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        UID.from_bcs(UID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function num_concluded_txes(arg0: Scenario): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "num_concluded_txes", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function created(arg0: TransactionEffects): [ID[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "created", [], args);

    return [
        ID.from_bcs_vector(bcs_import.vector(ID.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function written(arg0: TransactionEffects): [ID[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "written", [], args);

    return [
        ID.from_bcs_vector(bcs_import.vector(ID.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function deleted(arg0: TransactionEffects): [ID[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deleted", [], args);

    return [
        ID.from_bcs_vector(bcs_import.vector(ID.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function transferred_to_account(arg0: TransactionEffects): [VecMap < ID, string > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transferred_to_account", [], args);

    return [
        VecMap.from_bcs(VecMap.bcs(ID.bcs, bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function transferred_to_object(arg0: TransactionEffects): [VecMap < ID, ID > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transferred_to_object", [], args);

    return [
        VecMap.from_bcs(VecMap.bcs(ID.bcs, ID.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function shared(arg0: TransactionEffects): [ID[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shared", [], args);

    return [
        ID.from_bcs_vector(bcs_import.vector(ID.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function frozen(arg0: TransactionEffects): [ID[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "frozen", [], args);

    return [
        ID.from_bcs_vector(bcs_import.vector(ID.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function num_user_events(arg0: TransactionEffects): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransactionEffects.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "num_user_events", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function take_from_address_by_id < T0 extends StructClass > (type_args: string[], arg0: Scenario, arg1: string, arg2: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_from_address_by_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function most_recent_id_for_address < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "most_recent_id_for_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function ids_for_address < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ids_for_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function has_most_recent_for_address < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_most_recent_for_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function take_from_address < T0 extends StructClass > (type_args: string[], arg0: Scenario, arg1: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_from_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function return_to_address < T0 extends StructClass > (type_args: string[], arg0: string, arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_to_address", type_args, args);
}

function was_taken_from_address(arg0: string, arg1: ID): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ID.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "was_taken_from_address", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function take_from_sender_by_id < T0 extends StructClass > (type_args: string[], arg0: Scenario, arg1: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_from_sender_by_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function most_recent_id_for_sender < T0 extends StructClass > (type_args: string[], arg0: Scenario): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "most_recent_id_for_sender", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function has_most_recent_for_sender < T0 extends StructClass > (type_args: string[], arg0: Scenario): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_most_recent_for_sender", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function take_from_sender < T0 extends StructClass > (type_args: string[], arg0: Scenario): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_from_sender", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function return_to_sender < T0 extends StructClass > (type_args: string[], arg0: Scenario, arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_to_sender", type_args, args);
}

function was_taken_from_sender(arg0: Scenario, arg1: ID): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scenario.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ID.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "was_taken_from_sender", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ids_for_sender < T0 extends StructClass > (type_args: string[], arg0: Scenario): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ids_for_sender", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function take_immutable_by_id < T0 extends StructClass > (type_args: string[], arg0: Scenario, arg1: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_immutable_by_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function most_recent_immutable_id < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "most_recent_immutable_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function has_most_recent_immutable < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_most_recent_immutable", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function take_immutable < T0 extends StructClass > (type_args: string[], arg0: Scenario): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_immutable", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function return_immutable < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_immutable", type_args, args);
}

function was_taken_immutable(arg0: ID): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "was_taken_immutable", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function take_shared_by_id < T0 extends StructClass > (type_args: string[], arg0: Scenario, arg1: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_shared_by_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function most_recent_id_shared < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "most_recent_id_shared", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function has_most_recent_shared < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_most_recent_shared", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function take_shared < T0 extends StructClass > (type_args: string[], arg0: Scenario): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "take_shared", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function return_shared < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_shared", type_args, args);
}

function receivable_object_ids_for_owner_id < T0 extends StructClass > (type_args: string[], arg0: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receivable_object_ids_for_owner_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function most_recent_receiving_ticket < T0 extends StructClass > (type_args: string[], arg0: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "most_recent_receiving_ticket", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function receiving_ticket_by_id < T0 extends StructClass > (type_args: string[], arg0: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receiving_ticket_by_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function return_receiving_ticket < T0 extends StructClass > (type_args: string[], arg0: Receiving) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_receiving_ticket", type_args, args);
}

function was_taken_shared(arg0: ID): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "was_taken_shared", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function allocate_receiving_ticket_for_object < T0 extends StructClass > (type_args: string[], arg0: ID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "allocate_receiving_ticket_for_object", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function deallocate_receiving_ticket_for_object(arg0: ID) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deallocate_receiving_ticket_for_object", [], args);

}

function end_transaction(): [TransactionEffects] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "end_transaction", [], args);

    return [
        TransactionEffects.from_bcs(TransactionEffects.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const test_scenario = {
    Scenario,
    TransactionEffects,
    unit_test_poison,
    sender,
    begin,
    next_tx,
    next_epoch,
    later_epoch,
    end,
    ctx,
    new_object,
    num_concluded_txes,
    created,
    written,
    deleted,
    transferred_to_account,
    transferred_to_object,
    shared,
    frozen,
    num_user_events,
    take_from_address_by_id,
    most_recent_id_for_address,
    ids_for_address,
    has_most_recent_for_address,
    take_from_address,
    return_to_address,
    was_taken_from_address,
    take_from_sender_by_id,
    most_recent_id_for_sender,
    has_most_recent_for_sender,
    take_from_sender,
    return_to_sender,
    was_taken_from_sender,
    ids_for_sender,
    take_immutable_by_id,
    most_recent_immutable_id,
    has_most_recent_immutable,
    take_immutable,
    return_immutable,
    was_taken_immutable,
    take_shared_by_id,
    most_recent_id_shared,
    has_most_recent_shared,
    take_shared,
    return_shared,
    receivable_object_ids_for_owner_id,
    most_recent_receiving_ticket,
    receiving_ticket_by_id,
    return_receiving_ticket,
    was_taken_shared,
    allocate_receiving_ticket_for_object,
    deallocate_receiving_ticket_for_object,
    end_transaction
}