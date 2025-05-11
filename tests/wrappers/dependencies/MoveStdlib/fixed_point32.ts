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
let MODULE_NAME: string = "fixed_point32";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== FixedPoint32 =============================== */

export class FixedPoint32 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FixedPoint32`;

    value: u64_import;

    constructor(value: u64_import) {
        this.value = value;
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
        return FixedPoint32.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FixedPoint32.from_bcs_vector(args)
    }

    get_bcs() {
        return FixedPoint32.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FixedPoint32`
    }

    from(arg: FixedPoint32) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: u64_import
    }): FixedPoint32 {
        return new FixedPoint32(arg.value)
    }

    static from_bcs_vector(args: {
        value: u64_import
    } []): FixedPoint32[] {
        return args.map(function(arg) {
            return new FixedPoint32(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("FixedPoint32", {
            value: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FixedPoint32(val.value),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function multiply_u64(arg0: u64_import, arg1: FixedPoint32): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multiply_u64", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function divide_u64(arg0: u64_import, arg1: FixedPoint32): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint32.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "divide_u64", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_from_rational(arg0: u64_import, arg1: u64_import): [FixedPoint32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_from_rational", [], args);

    return [
        FixedPoint32.from_bcs(FixedPoint32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_from_raw_value(arg0: u64_import): [FixedPoint32] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_from_raw_value", [], args);

    return [
        FixedPoint32.from_bcs(FixedPoint32.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_raw_value(arg0: FixedPoint32): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint32.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_raw_value", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_zero(arg0: FixedPoint32): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint32.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_zero", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const fixed_point32 = {
    FixedPoint32,
    unit_test_poison,
    multiply_u64,
    divide_u64,
    create_from_rational,
    create_from_raw_value,
    get_raw_value,
    is_zero
}