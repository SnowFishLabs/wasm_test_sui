import {
    Coin
} from "./coin";
import {
    TransferPolicy,
    TransferPolicyCap,
    TransferRequest
} from "./transfer_policy";
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
let MODULE_NAME: string = "fixed_commission";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
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

/* ============================== Commission =============================== */

export class Commission implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Commission`;

    amount: u64_import;

    constructor(amount: u64_import) {
        this.amount = amount;
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
        return Commission.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Commission.from_bcs_vector(args)
    }

    get_bcs() {
        return Commission.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Commission`
    }

    from(arg: Commission) {
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        amount: u64_import
    }): Commission {
        return new Commission(arg.amount)
    }

    static from_bcs_vector(args: {
        amount: u64_import
    } []): Commission[] {
        return args.map(function(arg) {
            return new Commission(arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Commission", {
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Commission(val.amount),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function set < T0 extends StructClass > (type_args: string[], arg0: TransferPolicy, arg1: TransferPolicyCap, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TransferPolicy);
}

function unset < T0 extends StructClass > (type_args: string[], arg0: TransferPolicy, arg1: TransferPolicyCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unset", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TransferPolicy);
}

function pay < T0 extends StructClass > (type_args: string[], arg0: TransferPolicy, arg1: TransferRequest, arg2: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pay", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TransferPolicy);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as TransferRequest);
}

export const fixed_commission = {
    Rule,
    Commission,
    unit_test_poison,
    set,
    unset,
    pay
}