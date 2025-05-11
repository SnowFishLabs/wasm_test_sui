import {
    TreasuryCap
} from "./coin";
import {
    Token,
    TokenPolicy,
    TokenPolicyCap
} from "./token";
import {
    TxContext
} from "./tx_context";
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
let MODULE_NAME: string = "token_test_utils";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TEST =============================== */

export class TEST implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TEST`;

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
        return TEST.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TEST.from_bcs_vector(args)
    }

    get_bcs() {
        return TEST.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TEST`
    }

    from(arg: TEST) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): TEST {
        return new TEST(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): TEST[] {
        return args.map(function(arg) {
            return new TEST(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("TEST", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TEST(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function mint(arg0: u64_import, arg1: TxContext): [Token] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Token.from_bcs(Token.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function burn(arg0: Token) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Token.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", [], args);

}

function ctx(arg0: string): [TxContext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ctx", [], args);

    return [
        TxContext.from_bcs(TxContext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_policy(arg0: TxContext): [TokenPolicy, TokenPolicyCap] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_policy", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TokenPolicy.from_bcs(TokenPolicy.bcs.parse(new Uint8Array(r0.Raw[0]))),
        TokenPolicyCap.from_bcs(TokenPolicyCap.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function return_policy(arg0: TokenPolicy, arg1: TokenPolicyCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TokenPolicy.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TokenPolicyCap.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_policy", [], args);

}

function get_treasury_cap(arg0: TxContext): [TreasuryCap] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_treasury_cap", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        TreasuryCap.from_bcs(TreasuryCap.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function return_treasury_cap(arg0: TreasuryCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TreasuryCap.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_treasury_cap", [], args);

}

export const token_test_utils = {
    TEST,
    unit_test_poison,
    mint,
    burn,
    ctx,
    get_policy,
    return_policy,
    get_treasury_cap,
    return_treasury_cap
}