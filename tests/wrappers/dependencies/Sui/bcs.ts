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
let MODULE_NAME: string = "bcs";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== BCS =============================== */

export class BCS implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BCS`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return BCS.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BCS.from_bcs_vector(args)
    }

    get_bcs() {
        return BCS.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BCS`
    }

    from(arg: BCS) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): BCS {
        return new BCS(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): BCS[] {
        return args.map(function(arg) {
            return new BCS(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("BCS", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BCS(val.bytes),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function to_bytes < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_bytes", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_(arg0: number[]): [BCS] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    return [
        BCS.from_bcs(BCS.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function into_remainder_bytes(arg0: BCS): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "into_remainder_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_address(arg0: BCS): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_address", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_bool(arg0: BCS): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_bool", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_u8(arg0: BCS): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_u8", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_u16(arg0: BCS): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_u16", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_u32(arg0: BCS): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_u32", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_u64(arg0: BCS): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_u64", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_u128(arg0: BCS): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_u128", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_u256(arg0: BCS): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_u256", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_length(arg0: BCS): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_length", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_address(arg0: BCS): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_address", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_bool(arg0: BCS): [boolean[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_bool", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.bool()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_u8(arg0: BCS): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_u8", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_vec_u8(arg0: BCS): [number[][]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_vec_u8", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_u16(arg0: BCS): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_u16", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u16()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_u32(arg0: BCS): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_u32", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u32()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_u64(arg0: BCS): [u64_import[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_u64", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u64()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_u128(arg0: BCS): [u64_import[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_u128", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u128()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_vec_u256(arg0: BCS): [u64_import[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_vec_u256", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.vector(bcs_import.u256()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_enum_tag(arg0: BCS): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_enum_tag", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function peel_option_address(arg0: BCS): [Option < string > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_address", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function peel_option_bool(arg0: BCS): [Option < boolean > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_bool", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.bool()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function peel_option_u8(arg0: BCS): [Option < number > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_u8", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function peel_option_u16(arg0: BCS): [Option < number > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_u16", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.u16()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function peel_option_u32(arg0: BCS): [Option < number > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_u32", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.u32()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function peel_option_u64(arg0: BCS): [Option < u64_import > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_u64", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.u64()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function peel_option_u128(arg0: BCS): [Option < u64_import > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_u128", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.u128()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function peel_option_u256(arg0: BCS): [Option < u64_import > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_option_u256", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.u256()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const bcs = {
    BCS,
    unit_test_poison,
    to_bytes,
    new_,
    into_remainder_bytes,
    peel_address,
    peel_bool,
    peel_u8,
    peel_u16,
    peel_u32,
    peel_u64,
    peel_u128,
    peel_u256,
    peel_vec_length,
    peel_vec_address,
    peel_vec_bool,
    peel_vec_u8,
    peel_vec_vec_u8,
    peel_vec_u16,
    peel_vec_u32,
    peel_vec_u64,
    peel_vec_u128,
    peel_vec_u256,
    peel_enum_tag,
    peel_option_address,
    peel_option_bool,
    peel_option_u8,
    peel_option_u16,
    peel_option_u32,
    peel_option_u64,
    peel_option_u128,
    peel_option_u256
}