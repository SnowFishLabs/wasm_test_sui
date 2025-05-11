import {
    StructClass,
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "groth16";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Curve =============================== */

export class Curve implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Curve`;

    id: number;

    constructor(id: number) {
        this.id = id;
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
        return Curve.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Curve.from_bcs_vector(args)
    }

    get_bcs() {
        return Curve.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Curve`
    }

    from(arg: Curve) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: number
    }): Curve {
        return new Curve(arg.id)
    }

    static from_bcs_vector(args: {
        id: number
    } []): Curve[] {
        return args.map(function(arg) {
            return new Curve(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("Curve", {
            id: bcs_import.u8(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Curve(val.id),
        });
    };
}

/* ============================== PreparedVerifyingKey =============================== */

export class PreparedVerifyingKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PreparedVerifyingKey`;

    vk_gamma_abc_g1_bytes: number[];
    alpha_g1_beta_g2_bytes: number[];
    gamma_g2_neg_pc_bytes: number[];
    delta_g2_neg_pc_bytes: number[];

    constructor(vk_gamma_abc_g1_bytes: number[], alpha_g1_beta_g2_bytes: number[], gamma_g2_neg_pc_bytes: number[], delta_g2_neg_pc_bytes: number[]) {
        this.vk_gamma_abc_g1_bytes = vk_gamma_abc_g1_bytes;
        this.alpha_g1_beta_g2_bytes = alpha_g1_beta_g2_bytes;
        this.gamma_g2_neg_pc_bytes = gamma_g2_neg_pc_bytes;
        this.delta_g2_neg_pc_bytes = delta_g2_neg_pc_bytes;
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
        return PreparedVerifyingKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PreparedVerifyingKey.from_bcs_vector(args)
    }

    get_bcs() {
        return PreparedVerifyingKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PreparedVerifyingKey`
    }

    from(arg: PreparedVerifyingKey) {
        this.vk_gamma_abc_g1_bytes = arg.vk_gamma_abc_g1_bytes;
        this.alpha_g1_beta_g2_bytes = arg.alpha_g1_beta_g2_bytes;
        this.gamma_g2_neg_pc_bytes = arg.gamma_g2_neg_pc_bytes;
        this.delta_g2_neg_pc_bytes = arg.delta_g2_neg_pc_bytes;
    }

    static from_bcs(arg: {
        vk_gamma_abc_g1_bytes: number[],
        alpha_g1_beta_g2_bytes: number[],
        gamma_g2_neg_pc_bytes: number[],
        delta_g2_neg_pc_bytes: number[]
    }): PreparedVerifyingKey {
        return new PreparedVerifyingKey(arg.vk_gamma_abc_g1_bytes, arg.alpha_g1_beta_g2_bytes, arg.gamma_g2_neg_pc_bytes, arg.delta_g2_neg_pc_bytes)
    }

    static from_bcs_vector(args: {
        vk_gamma_abc_g1_bytes: number[],
        alpha_g1_beta_g2_bytes: number[],
        gamma_g2_neg_pc_bytes: number[],
        delta_g2_neg_pc_bytes: number[]
    } []): PreparedVerifyingKey[] {
        return args.map(function(arg) {
            return new PreparedVerifyingKey(arg.vk_gamma_abc_g1_bytes, arg.alpha_g1_beta_g2_bytes, arg.gamma_g2_neg_pc_bytes, arg.delta_g2_neg_pc_bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("PreparedVerifyingKey", {
            vk_gamma_abc_g1_bytes: bcs_import.vector(bcs_import.u8()),
            alpha_g1_beta_g2_bytes: bcs_import.vector(bcs_import.u8()),
            gamma_g2_neg_pc_bytes: bcs_import.vector(bcs_import.u8()),
            delta_g2_neg_pc_bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PreparedVerifyingKey(val.vk_gamma_abc_g1_bytes, val.alpha_g1_beta_g2_bytes, val.gamma_g2_neg_pc_bytes, val.delta_g2_neg_pc_bytes),
        });
    };
}

/* ============================== PublicProofInputs =============================== */

export class PublicProofInputs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PublicProofInputs`;

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
        return PublicProofInputs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PublicProofInputs.from_bcs_vector(args)
    }

    get_bcs() {
        return PublicProofInputs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PublicProofInputs`
    }

    from(arg: PublicProofInputs) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): PublicProofInputs {
        return new PublicProofInputs(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): PublicProofInputs[] {
        return args.map(function(arg) {
            return new PublicProofInputs(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("PublicProofInputs", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PublicProofInputs(val.bytes),
        });
    };
}

/* ============================== ProofPoints =============================== */

export class ProofPoints implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ProofPoints`;

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
        return ProofPoints.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ProofPoints.from_bcs_vector(args)
    }

    get_bcs() {
        return ProofPoints.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ProofPoints`
    }

    from(arg: ProofPoints) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): ProofPoints {
        return new ProofPoints(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): ProofPoints[] {
        return args.map(function(arg) {
            return new ProofPoints(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("ProofPoints", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ProofPoints(val.bytes),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function bls12381(): [Curve] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bls12381", [], args);

    return [
        Curve.from_bcs(Curve.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function bn254(): [Curve] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bn254", [], args);

    return [
        Curve.from_bcs(Curve.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pvk_from_bytes(arg0: number[], arg1: number[], arg2: number[], arg3: number[]): [PreparedVerifyingKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pvk_from_bytes", [], args);

    return [
        PreparedVerifyingKey.from_bcs(PreparedVerifyingKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pvk_to_bytes(arg0: PreparedVerifyingKey): [number[][]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PreparedVerifyingKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pvk_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function public_proof_inputs_from_bytes(arg0: number[]): [PublicProofInputs] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_proof_inputs_from_bytes", [], args);

    return [
        PublicProofInputs.from_bcs(PublicProofInputs.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function proof_points_from_bytes(arg0: number[]): [ProofPoints] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "proof_points_from_bytes", [], args);

    return [
        ProofPoints.from_bcs(ProofPoints.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function prepare_verifying_key(arg0: Curve, arg1: number[]): [PreparedVerifyingKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Curve.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "prepare_verifying_key", [], args);

    return [
        PreparedVerifyingKey.from_bcs(PreparedVerifyingKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function prepare_verifying_key_internal(arg0: number, arg1: number[]): [PreparedVerifyingKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u8().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "prepare_verifying_key_internal", [], args);

    return [
        PreparedVerifyingKey.from_bcs(PreparedVerifyingKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function verify_groth16_proof(arg0: Curve, arg1: PreparedVerifyingKey, arg2: PublicProofInputs, arg3: ProofPoints): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Curve.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(PreparedVerifyingKey.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(PublicProofInputs.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(ProofPoints.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_groth16_proof", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_groth16_proof_internal(arg0: number, arg1: number[], arg2: number[], arg3: number[], arg4: number[], arg5: number[], arg6: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u8().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg6).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_groth16_proof_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const groth16 = {
    Curve,
    PreparedVerifyingKey,
    PublicProofInputs,
    ProofPoints,
    unit_test_poison,
    bls12381,
    bn254,
    pvk_from_bytes,
    pvk_to_bytes,
    public_proof_inputs_from_bytes,
    proof_points_from_bytes,
    prepare_verifying_key,
    prepare_verifying_key_internal,
    verify_groth16_proof,
    verify_groth16_proof_internal
}