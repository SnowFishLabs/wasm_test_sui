import {
    UID
} from "./object";
import {
    TxContext
} from "./tx_context";
import {
    Versioned
} from "./versioned";
import {
    StructClass,
    copy_arr_value,
    get_object_address,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "random";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Random =============================== */

export class Random implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Random`;

    id: UID;
    inner ? : Versioned;

    constructor(id: UID, inner ? : Versioned) {
        this.id = id;
        this.inner = inner;
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
        return Random.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Random.from_bcs_vector(args)
    }

    get_bcs() {
        return Random.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Random(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Random(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Random`
    }

    from(arg: Random) {
        this.id = arg.id;
        this.inner = arg.inner;
    }

    static from_bcs(arg: {
        id: UID,
        inner: Versioned
    }): Random {
        return new Random(arg.id, arg.inner)
    }

    static from_bcs_vector(args: {
        id: UID,
        inner: Versioned
    } []): Random[] {
        return args.map(function(arg) {
            return new Random(arg.id, arg.inner)
        })
    }

    static get bcs() {
        return bcs_import.struct("Random", {
            id: UID.bcs,
            inner: Versioned.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Random(val.id, val.inner),
        });
    };
}

/* ============================== RandomInner =============================== */

export class RandomInner implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RandomInner`;

    version: u64_import;
    epoch: u64_import;
    randomness_round: u64_import;
    random_bytes: number[];

    constructor(version: u64_import, epoch: u64_import, randomness_round: u64_import, random_bytes: number[]) {
        this.version = version;
        this.epoch = epoch;
        this.randomness_round = randomness_round;
        this.random_bytes = random_bytes;
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
        return RandomInner.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RandomInner.from_bcs_vector(args)
    }

    get_bcs() {
        return RandomInner.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RandomInner`
    }

    from(arg: RandomInner) {
        this.version = arg.version;
        this.epoch = arg.epoch;
        this.randomness_round = arg.randomness_round;
        this.random_bytes = arg.random_bytes;
    }

    static from_bcs(arg: {
        version: u64_import,
        epoch: u64_import,
        randomness_round: u64_import,
        random_bytes: number[]
    }): RandomInner {
        return new RandomInner(arg.version, arg.epoch, arg.randomness_round, arg.random_bytes)
    }

    static from_bcs_vector(args: {
        version: u64_import,
        epoch: u64_import,
        randomness_round: u64_import,
        random_bytes: number[]
    } []): RandomInner[] {
        return args.map(function(arg) {
            return new RandomInner(arg.version, arg.epoch, arg.randomness_round, arg.random_bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("RandomInner", {
            version: bcs_import.u64(),
            epoch: bcs_import.u64(),
            randomness_round: bcs_import.u64(),
            random_bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RandomInner(val.version, val.epoch, val.randomness_round, val.random_bytes),
        });
    };
}

/* ============================== RandomGenerator =============================== */

export class RandomGenerator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RandomGenerator`;

    seed: number[];
    counter: number;
    buffer: number[];

    constructor(seed: number[], counter: number, buffer: number[]) {
        this.seed = seed;
        this.counter = counter;
        this.buffer = buffer;
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
        return RandomGenerator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RandomGenerator.from_bcs_vector(args)
    }

    get_bcs() {
        return RandomGenerator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RandomGenerator`
    }

    from(arg: RandomGenerator) {
        this.seed = arg.seed;
        this.counter = arg.counter;
        this.buffer = arg.buffer;
    }

    static from_bcs(arg: {
        seed: number[],
        counter: number,
        buffer: number[]
    }): RandomGenerator {
        return new RandomGenerator(arg.seed, arg.counter, arg.buffer)
    }

    static from_bcs_vector(args: {
        seed: number[],
        counter: number,
        buffer: number[]
    } []): RandomGenerator[] {
        return args.map(function(arg) {
            return new RandomGenerator(arg.seed, arg.counter, arg.buffer)
        })
    }

    static get bcs() {
        return bcs_import.struct("RandomGenerator", {
            seed: bcs_import.vector(bcs_import.u8()),
            counter: bcs_import.u16(),
            buffer: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RandomGenerator(val.seed, val.counter, val.buffer),
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

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function create_for_testing(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function load_inner_mut(arg0: Random): [RandomInner] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_inner_mut", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        RandomInner.from_bcs(RandomInner.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function load_inner(arg0: Random): [RandomInner] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_inner", [], args);

    return [
        RandomInner.from_bcs(RandomInner.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function update_randomness_state(arg0: Random, arg1: u64_import, arg2: number[], arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_randomness_state", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function update_randomness_state_for_testing(arg0: Random, arg1: u64_import, arg2: number[], arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_randomness_state_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function new_generator(arg0: Random, arg1: TxContext): [RandomGenerator] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_generator", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        RandomGenerator.from_bcs(RandomGenerator.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function derive_next_block(arg0: RandomGenerator): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "derive_next_block", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function fill_buffer(arg0: RandomGenerator) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fill_buffer", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function generate_bytes(arg0: RandomGenerator, arg1: number): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_bytes", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u256_from_bytes(arg0: RandomGenerator, arg1: number): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u256_from_bytes", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u256(arg0: RandomGenerator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u256", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u128(arg0: RandomGenerator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u128", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u64(arg0: RandomGenerator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u64", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u32(arg0: RandomGenerator): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u32", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u16(arg0: RandomGenerator): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u16", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u8(arg0: RandomGenerator): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u8", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_bool(arg0: RandomGenerator): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_bool", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u128_in_range(arg0: RandomGenerator, arg1: u64_import, arg2: u64_import, arg3: number): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u128_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u128_in_range(arg0: RandomGenerator, arg1: u64_import, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u128_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u64_in_range(arg0: RandomGenerator, arg1: u64_import, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u64_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u32_in_range(arg0: RandomGenerator, arg1: number, arg2: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u32().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u32().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u32_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u16_in_range(arg0: RandomGenerator, arg1: number, arg2: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u16_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_u8_in_range(arg0: RandomGenerator, arg1: number, arg2: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_u8_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function shuffle < T0 extends StructClass > (type_args: string[], arg0: RandomGenerator, arg1: T0[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shuffle", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as RandomGenerator);
    copy_arr_value(into_arr_bcs_vector(arg1).parse(new Uint8Array(a1.Raw[0])), arg1);
}

function generator_seed(arg0: RandomGenerator): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generator_seed", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generator_counter(arg0: RandomGenerator): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generator_counter", [], args);

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generator_buffer(arg0: RandomGenerator): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RandomGenerator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generator_buffer", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_generator_for_testing(): [RandomGenerator] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_generator_for_testing", [], args);

    return [
        RandomGenerator.from_bcs(RandomGenerator.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_generator_from_seed_for_testing(arg0: number[]): [RandomGenerator] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_generator_from_seed_for_testing", [], args);

    return [
        RandomGenerator.from_bcs(RandomGenerator.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_rand_seed_for_testing(): [number[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_rand_seed_for_testing", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const random = {
    Random,
    RandomInner,
    RandomGenerator,
    unit_test_poison,
    create,
    create_for_testing,
    load_inner_mut,
    load_inner,
    update_randomness_state,
    update_randomness_state_for_testing,
    new_generator,
    derive_next_block,
    fill_buffer,
    generate_bytes,
    u256_from_bytes,
    generate_u256,
    generate_u128,
    generate_u64,
    generate_u32,
    generate_u16,
    generate_u8,
    generate_bool,
    u128_in_range,
    generate_u128_in_range,
    generate_u64_in_range,
    generate_u32_in_range,
    generate_u16_in_range,
    generate_u8_in_range,
    shuffle,
    generator_seed,
    generator_counter,
    generator_buffer,
    new_generator_for_testing,
    new_generator_from_seed_for_testing,
    generate_rand_seed_for_testing
}