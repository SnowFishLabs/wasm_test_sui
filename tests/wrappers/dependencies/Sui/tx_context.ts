import {
    Option
} from "../MoveStdlib/option";
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
let MODULE_NAME: string = "tx_context";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TxContext =============================== */

export class TxContext implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TxContext`;

    sender: string;
    tx_hash: number[];
    epoch: u64_import;
    epoch_timestamp_ms: u64_import;
    ids_created: u64_import;

    constructor(sender: string, tx_hash: number[], epoch: u64_import, epoch_timestamp_ms: u64_import, ids_created: u64_import) {
        this.sender = sender;
        this.tx_hash = tx_hash;
        this.epoch = epoch;
        this.epoch_timestamp_ms = epoch_timestamp_ms;
        this.ids_created = ids_created;
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
        return TxContext.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TxContext.from_bcs_vector(args)
    }

    get_bcs() {
        return TxContext.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TxContext`
    }

    from(arg: TxContext) {
        this.sender = arg.sender;
        this.tx_hash = arg.tx_hash;
        this.epoch = arg.epoch;
        this.epoch_timestamp_ms = arg.epoch_timestamp_ms;
        this.ids_created = arg.ids_created;
    }

    static from_bcs(arg: {
        sender: string,
        tx_hash: number[],
        epoch: u64_import,
        epoch_timestamp_ms: u64_import,
        ids_created: u64_import
    }): TxContext {
        return new TxContext(arg.sender, arg.tx_hash, arg.epoch, arg.epoch_timestamp_ms, arg.ids_created)
    }

    static from_bcs_vector(args: {
        sender: string,
        tx_hash: number[],
        epoch: u64_import,
        epoch_timestamp_ms: u64_import,
        ids_created: u64_import
    } []): TxContext[] {
        return args.map(function(arg) {
            return new TxContext(arg.sender, arg.tx_hash, arg.epoch, arg.epoch_timestamp_ms, arg.ids_created)
        })
    }

    static get bcs() {
        return bcs_import.struct("TxContext", {
            sender: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            tx_hash: bcs_import.vector(bcs_import.u8()),
            epoch: bcs_import.u64(),
            epoch_timestamp_ms: bcs_import.u64(),
            ids_created: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TxContext(val.sender, val.tx_hash, val.epoch, val.epoch_timestamp_ms, val.ids_created),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function sender(arg0: TxContext): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sender", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function native_sender(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_sender", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function digest(arg0: TxContext): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "digest", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function epoch(arg0: TxContext): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "epoch", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function native_epoch(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_epoch", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function epoch_timestamp_ms(arg0: TxContext): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "epoch_timestamp_ms", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function native_epoch_timestamp_ms(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_epoch_timestamp_ms", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function sponsor(arg0: TxContext): [Option < string > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sponsor", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function fresh_object_address(arg0: TxContext): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fresh_object_address", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function fresh_id(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fresh_id", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ids_created(arg0: TxContext): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ids_created", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function native_ids_created(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_ids_created", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function native_gas_price(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_gas_price", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function native_gas_budget(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_gas_budget", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_(arg0: string, arg1: number[], arg2: u64_import, arg3: u64_import, arg4: u64_import): [TxContext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    return [
        TxContext.from_bcs(TxContext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_from_hint(arg0: string, arg1: u64_import, arg2: u64_import, arg3: u64_import, arg4: u64_import): [TxContext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_from_hint", [], args);

    return [
        TxContext.from_bcs(TxContext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function dummy(): [TxContext] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "dummy", [], args);

    return [
        TxContext.from_bcs(TxContext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function dummy_tx_hash_with_hint(arg0: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "dummy_tx_hash_with_hint", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_ids_created(arg0: TxContext): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_ids_created", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function last_created_object_id(arg0: TxContext): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "last_created_object_id", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function last_created_id(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "last_created_id", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function increment_epoch_number(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increment_epoch_number", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function increment_epoch_timestamp(arg0: TxContext, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increment_epoch_timestamp", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function option_sponsor(): [Option < string > ] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "option_sponsor", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function native_sponsor(): [string[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_sponsor", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function replace(arg0: string, arg1: number[], arg2: u64_import, arg3: u64_import, arg4: u64_import, arg5: u64_import, arg6: u64_import, arg7: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg7).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "replace", [], args);

}

function derive_id(arg0: number[], arg1: u64_import): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "derive_id", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const tx_context = {
    TxContext,
    unit_test_poison,
    sender,
    native_sender,
    digest,
    epoch,
    native_epoch,
    epoch_timestamp_ms,
    native_epoch_timestamp_ms,
    sponsor,
    fresh_object_address,
    fresh_id,
    ids_created,
    native_ids_created,
    native_gas_price,
    native_gas_budget,
    new_,
    new_from_hint,
    dummy,
    dummy_tx_hash_with_hint,
    get_ids_created,
    last_created_object_id,
    last_created_id,
    increment_epoch_number,
    increment_epoch_timestamp,
    option_sponsor,
    native_sponsor,
    replace,
    derive_id
}