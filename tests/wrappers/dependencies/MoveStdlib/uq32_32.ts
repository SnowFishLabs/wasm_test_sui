import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "uq32_32";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== UQ32_32 =============================== */

export class UQ32_32 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UQ32_32`;

    pos0: u64_import;

    constructor(pos0: u64_import) {
        this.pos0 = pos0;
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
        return UQ32_32.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UQ32_32.from_bcs_vector(args)
    }

    get_bcs() {
        return UQ32_32.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UQ32_32`
    }

    from(arg: UQ32_32) {
        this.pos0 = arg.pos0;
    }

    static from_bcs(arg: {
        pos0: u64_import
    }): UQ32_32 {
        return new UQ32_32(arg.pos0)
    }

    static from_bcs_vector(args: {
        pos0: u64_import
    } []): UQ32_32[] {
        return args.map(function(arg) {
            return new UQ32_32(arg.pos0)
        })
    }

    static get bcs() {
        return bcs_import.struct("UQ32_32", {
            pos0: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UQ32_32(val.pos0),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function add(arg0: UQ32_32, arg1: UQ32_32): [UQ32_32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", [], args);

    return [
        UQ32_32.from_bcs(UQ32_32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function from_quotient(arg0: u64_import, arg1: u64_import): [UQ32_32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_quotient", [], args);

    return [
        UQ32_32.from_bcs(UQ32_32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function from_int(arg0: number): [UQ32_32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u32().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_int", [], args);

    return [
        UQ32_32.from_bcs(UQ32_32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function sub(arg0: UQ32_32, arg1: UQ32_32): [UQ32_32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub", [], args);

    return [
        UQ32_32.from_bcs(UQ32_32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function mul(arg0: UQ32_32, arg1: UQ32_32): [UQ32_32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mul", [], args);

    return [
        UQ32_32.from_bcs(UQ32_32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function div(arg0: UQ32_32, arg1: UQ32_32): [UQ32_32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "div", [], args);

    return [
        UQ32_32.from_bcs(UQ32_32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function to_int(arg0: UQ32_32): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_int", [], args);

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function int_mul(arg0: u64_import, arg1: UQ32_32): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_mul", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function int_div(arg0: u64_import, arg1: UQ32_32): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "int_div", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function le(arg0: UQ32_32, arg1: UQ32_32): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "le", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function lt(arg0: UQ32_32, arg1: UQ32_32): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "lt", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ge(arg0: UQ32_32, arg1: UQ32_32): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ge", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function gt(arg0: UQ32_32, arg1: UQ32_32): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UQ32_32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function to_raw(arg0: UQ32_32): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UQ32_32.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_raw", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function from_raw(arg0: u64_import): [UQ32_32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_raw", [], args);

    return [
        UQ32_32.from_bcs(UQ32_32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const uq32_32 = {
    UQ32_32,
    unit_test_poison,
    add,
    from_quotient,
    from_int,
    sub,
    mul,
    div,
    to_int,
    int_mul,
    int_div,
    le,
    lt,
    ge,
    gt,
    to_raw,
    from_raw
}