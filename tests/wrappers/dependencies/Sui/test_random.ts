import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "test_random";

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

    state: number[];

    constructor(state: number[]) {
        this.state = state;
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

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Random`
    }

    from(arg: Random) {
        this.state = arg.state;
    }

    static from_bcs(arg: {
        state: number[]
    }): Random {
        return new Random(arg.state)
    }

    static from_bcs_vector(args: {
        state: number[]
    } []): Random[] {
        return args.map(function(arg) {
            return new Random(arg.state)
        })
    }

    static get bcs() {
        return bcs_import.struct("Random", {
            state: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Random(val.state),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function new_(arg0: number[]): [Random] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    return [
        Random.from_bcs(Random.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function next_digest(arg0: Random): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_digest", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_bytes(arg0: Random, arg1: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_bytes", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u256(arg0: Random): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u256", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u256_in_range(arg0: Random, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u256().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u256_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u128(arg0: Random): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u128", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u128_in_range(arg0: Random, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u128_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u64(arg0: Random): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u64", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u64_in_range(arg0: Random, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u64_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u32(arg0: Random): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u32", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u32_in_range(arg0: Random, arg1: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u32().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u32_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u16(arg0: Random): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u16", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u16_in_range(arg0: Random, arg1: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u16_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u8(arg0: Random): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u8", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_u8_in_range(arg0: Random, arg1: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_u8_in_range", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_bool(arg0: Random): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Random.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_bool", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const test_random = {
    Random,
    unit_test_poison,
    new_,
    next_digest,
    next_bytes,
    next_u256,
    next_u256_in_range,
    next_u128,
    next_u128_in_range,
    next_u64,
    next_u64_in_range,
    next_u32,
    next_u32_in_range,
    next_u16,
    next_u16_in_range,
    next_u8,
    next_u8_in_range,
    next_bool
}