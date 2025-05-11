import {
    Element
} from "./group_ops";
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
let MODULE_NAME: string = "bls12381";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Scalar =============================== */

export class Scalar implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Scalar`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
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
        return Scalar.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Scalar.from_bcs_vector(args)
    }

    get_bcs() {
        return Scalar.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Scalar`
    }

    from(arg: Scalar) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Scalar {
        return new Scalar(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Scalar[] {
        return args.map(function(arg) {
            return new Scalar(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Scalar", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Scalar(val.dummy_field),
        });
    };
}

/* ============================== G1 =============================== */

export class G1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::G1`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
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
        return G1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return G1.from_bcs_vector(args)
    }

    get_bcs() {
        return G1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::G1`
    }

    from(arg: G1) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): G1 {
        return new G1(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): G1[] {
        return args.map(function(arg) {
            return new G1(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("G1", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new G1(val.dummy_field),
        });
    };
}

/* ============================== G2 =============================== */

export class G2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::G2`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
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
        return G2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return G2.from_bcs_vector(args)
    }

    get_bcs() {
        return G2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::G2`
    }

    from(arg: G2) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): G2 {
        return new G2(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): G2[] {
        return args.map(function(arg) {
            return new G2(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("G2", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new G2(val.dummy_field),
        });
    };
}

/* ============================== GT =============================== */

export class GT implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GT`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
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
        return GT.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GT.from_bcs_vector(args)
    }

    get_bcs() {
        return GT.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GT`
    }

    from(arg: GT) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): GT {
        return new GT(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): GT[] {
        return args.map(function(arg) {
            return new GT(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("GT", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GT(val.dummy_field),
        });
    };
}

/* ============================== UncompressedG1 =============================== */

export class UncompressedG1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UncompressedG1`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
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
        return UncompressedG1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UncompressedG1.from_bcs_vector(args)
    }

    get_bcs() {
        return UncompressedG1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UncompressedG1`
    }

    from(arg: UncompressedG1) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): UncompressedG1 {
        return new UncompressedG1(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): UncompressedG1[] {
        return args.map(function(arg) {
            return new UncompressedG1(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("UncompressedG1", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UncompressedG1(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function pairing(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pairing", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function bls12381_min_sig_verify(arg0: number[], arg1: number[], arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bls12381_min_sig_verify", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function bls12381_min_pk_verify(arg0: number[], arg1: number[], arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bls12381_min_pk_verify", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_from_bytes(arg0: number[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_from_bytes", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_from_u64(arg0: u64_import): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_from_u64", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_zero(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_zero", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_one(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_one", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_add(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_add", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_sub(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_sub", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_mul(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_mul", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_div(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_div", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_neg(arg0: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_neg", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_inv(arg0: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_inv", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_from_bytes(arg0: number[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_from_bytes", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_identity(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_identity", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_generator(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_generator", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_add(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_add", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_sub(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_sub", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_mul(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_mul", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_div(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_div", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_neg(arg0: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_neg", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function hash_to_g1(arg0: number[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "hash_to_g1", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_multi_scalar_multiplication(arg0: Element[], arg1: Element[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Element.bcs).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(Element.bcs).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_multi_scalar_multiplication", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g1_to_uncompressed_g1(arg0: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g1_to_uncompressed_g1", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_from_bytes(arg0: number[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_from_bytes", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_identity(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_identity", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_generator(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_generator", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_add(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_add", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_sub(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_sub", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_mul(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_mul", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_div(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_div", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_neg(arg0: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_neg", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function hash_to_g2(arg0: number[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "hash_to_g2", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function g2_multi_scalar_multiplication(arg0: Element[], arg1: Element[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Element.bcs).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(Element.bcs).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "g2_multi_scalar_multiplication", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function gt_identity(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt_identity", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function gt_generator(): [Element] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt_generator", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function gt_add(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt_add", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function gt_sub(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt_sub", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function gt_mul(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt_mul", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function gt_div(arg0: Element, arg1: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Element.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt_div", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function gt_neg(arg0: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gt_neg", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function uncompressed_g1_to_g1(arg0: Element): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Element.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "uncompressed_g1_to_g1", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function uncompressed_g1_sum(arg0: Element[]): [Element] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Element.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "uncompressed_g1_sum", [], args);

    return [
        Element.from_bcs(Element.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const bls12381 = {
    Scalar,
    G1,
    G2,
    GT,
    UncompressedG1,
    unit_test_poison,
    pairing,
    bls12381_min_sig_verify,
    bls12381_min_pk_verify,
    scalar_from_bytes,
    scalar_from_u64,
    scalar_zero,
    scalar_one,
    scalar_add,
    scalar_sub,
    scalar_mul,
    scalar_div,
    scalar_neg,
    scalar_inv,
    g1_from_bytes,
    g1_identity,
    g1_generator,
    g1_add,
    g1_sub,
    g1_mul,
    g1_div,
    g1_neg,
    hash_to_g1,
    g1_multi_scalar_multiplication,
    g1_to_uncompressed_g1,
    g2_from_bytes,
    g2_identity,
    g2_generator,
    g2_add,
    g2_sub,
    g2_mul,
    g2_div,
    g2_neg,
    hash_to_g2,
    g2_multi_scalar_multiplication,
    gt_identity,
    gt_generator,
    gt_add,
    gt_sub,
    gt_mul,
    gt_div,
    gt_neg,
    uncompressed_g1_to_g1,
    uncompressed_g1_sum
}