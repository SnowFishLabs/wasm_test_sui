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
let MODULE_NAME: string = "ecdsa_k1";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== KeyPair =============================== */

export class KeyPair implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::KeyPair`;

    private_key: number[];
    public_key: number[];

    constructor(private_key: number[], public_key: number[]) {
        this.private_key = private_key;
        this.public_key = public_key;
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
        return KeyPair.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return KeyPair.from_bcs_vector(args)
    }

    get_bcs() {
        return KeyPair.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::KeyPair`
    }

    from(arg: KeyPair) {
        this.private_key = arg.private_key;
        this.public_key = arg.public_key;
    }

    static from_bcs(arg: {
        private_key: number[],
        public_key: number[]
    }): KeyPair {
        return new KeyPair(arg.private_key, arg.public_key)
    }

    static from_bcs_vector(args: {
        private_key: number[],
        public_key: number[]
    } []): KeyPair[] {
        return args.map(function(arg) {
            return new KeyPair(arg.private_key, arg.public_key)
        })
    }

    static get bcs() {
        return bcs_import.struct("KeyPair", {
            private_key: bcs_import.vector(bcs_import.u8()),
            public_key: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new KeyPair(val.private_key, val.public_key),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function secp256k1_ecrecover(arg0: number[], arg1: number[], arg2: number): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "secp256k1_ecrecover", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function decompress_pubkey(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "decompress_pubkey", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function secp256k1_verify(arg0: number[], arg1: number[], arg2: number[], arg3: number): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "secp256k1_verify", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function secp256k1_sign(arg0: number[], arg1: number[], arg2: number, arg3: boolean): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "secp256k1_sign", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function private_key(arg0: KeyPair): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(KeyPair.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "private_key", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function public_key(arg0: KeyPair): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(KeyPair.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function secp256k1_keypair_from_seed(arg0: number[]): [KeyPair] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "secp256k1_keypair_from_seed", [], args);

    return [
        KeyPair.from_bcs(KeyPair.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const ecdsa_k1 = {
    KeyPair,
    unit_test_poison,
    secp256k1_ecrecover,
    decompress_pubkey,
    secp256k1_verify,
    secp256k1_sign,
    private_key,
    public_key,
    secp256k1_keypair_from_seed
}