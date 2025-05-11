import {
    BCS
} from "./bcs";
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
let MODULE_NAME: string = "bcs_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Info =============================== */

export class Info implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Info`;

    a: boolean;
    b: number;
    c: u64_import;
    d: u64_import;
    k: boolean[];
    s: string;

    constructor(a: boolean, b: number, c: u64_import, d: u64_import, k: boolean[], s: string) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.k = k;
        this.s = s;
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
        return Info.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Info.from_bcs_vector(args)
    }

    get_bcs() {
        return Info.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Info`
    }

    from(arg: Info) {
        this.a = arg.a;
        this.b = arg.b;
        this.c = arg.c;
        this.d = arg.d;
        this.k = arg.k;
        this.s = arg.s;
    }

    static from_bcs(arg: {
        a: boolean,
        b: number,
        c: u64_import,
        d: u64_import,
        k: boolean[],
        s: string
    }): Info {
        return new Info(arg.a, arg.b, arg.c, arg.d, arg.k, arg.s)
    }

    static from_bcs_vector(args: {
        a: boolean,
        b: number,
        c: u64_import,
        d: u64_import,
        k: boolean[],
        s: string
    } []): Info[] {
        return args.map(function(arg) {
            return new Info(arg.a, arg.b, arg.c, arg.d, arg.k, arg.s)
        })
    }

    static get bcs() {
        return bcs_import.struct("Info", {
            a: bcs_import.bool(),
            b: bcs_import.u8(),
            c: bcs_import.u64(),
            d: bcs_import.u128(),
            k: bcs_import.vector(bcs_import.bool()),
            s: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Info(val.a, val.b, val.c, val.d, val.k, val.s),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_uleb_len_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_uleb_len_fail", [], args);

}

function test_bool_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bool_fail", [], args);

}

function test_bool() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_bool", [], args);

}

function test_u8() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_u8", [], args);

}

function test_u16() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_u16", [], args);

}

function test_u32() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_u32", [], args);

}

function test_u64() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_u64", [], args);

}

function test_u128() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_u128", [], args);

}

function test_u256() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_u256", [], args);

}

function test_address() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_address", [], args);

}

function test_vec() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_vec", [], args);

}

function test_option() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_option", [], args);

}

function test_enum() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_enum", [], args);

}

function peel_test_enum(arg0: BCS): [] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_test_enum", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        .parse(new Uint8Array(r0.Raw[0]))
    ];
}

function test_complex() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_complex", [], args);

}

function peel_info(arg0: BCS): [Info] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BCS.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "peel_info", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Info.from_bcs(Info.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function test_struct(arg0: boolean, arg1: number, arg2: u64_import, arg3: u64_import, arg4: boolean[], arg5: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bool().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bool()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_struct", [], args);

}

export const bcs_tests = {
    Info,
    unit_test_poison,
    test_uleb_len_fail,
    test_bool_fail,
    test_bool,
    test_u8,
    test_u16,
    test_u32,
    test_u64,
    test_u128,
    test_u256,
    test_address,
    test_vec,
    test_option,
    test_enum,
    peel_test_enum,
    test_complex,
    peel_info,
    test_struct
}