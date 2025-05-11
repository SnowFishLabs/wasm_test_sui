import {
    Coin
} from "./coin";
import {
    TransferPolicy,
    TransferPolicyCap,
    TransferRequest
} from "./transfer_policy";
import {
    TxContext
} from "./tx_context";
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
let MODULE_NAME: string = "royalty_policy";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Config =============================== */

export class Config implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Config`;

    amount_bp: number;

    constructor(amount_bp: number) {
        this.amount_bp = amount_bp;
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
        return Config.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Config.from_bcs_vector(args)
    }

    get_bcs() {
        return Config.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Config`
    }

    from(arg: Config) {
        this.amount_bp = arg.amount_bp;
    }

    static from_bcs(arg: {
        amount_bp: number
    }): Config {
        return new Config(arg.amount_bp)
    }

    static from_bcs_vector(args: {
        amount_bp: number
    } []): Config[] {
        return args.map(function(arg) {
            return new Config(arg.amount_bp)
        })
    }

    static get bcs() {
        return bcs_import.struct("Config", {
            amount_bp: bcs_import.u16(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Config(val.amount_bp),
        });
    };
}

/* ============================== Rule =============================== */

export class Rule implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Rule`;

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
        return Rule.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Rule.from_bcs_vector(args)
    }

    get_bcs() {
        return Rule.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Rule`
    }

    from(arg: Rule) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Rule {
        return new Rule(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Rule[] {
        return args.map(function(arg) {
            return new Rule(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Rule", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Rule(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function set < T0 extends StructClass > (type_args: string[], arg0: TransferPolicy, arg1: TransferPolicyCap, arg2: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TransferPolicy);
}

function pay < T0 extends StructClass > (type_args: string[], arg0: TransferPolicy, arg1: TransferRequest, arg2: Coin, arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0, a1, a2, a3] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pay", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TransferPolicy);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as TransferRequest);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a2.Raw[0])) as Coin);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a3.Raw[0])) as TxContext);
}

export const royalty_policy = {
    Config,
    Rule,
    unit_test_poison,
    set,
    pay
}