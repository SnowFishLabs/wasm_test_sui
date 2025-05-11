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
let MODULE_NAME: string = "token_request_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Rule1 =============================== */

export class Rule1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Rule1`;

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
        return Rule1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Rule1.from_bcs_vector(args)
    }

    get_bcs() {
        return Rule1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Rule1`
    }

    from(arg: Rule1) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Rule1 {
        return new Rule1(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Rule1[] {
        return args.map(function(arg) {
            return new Rule1(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Rule1", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Rule1(val.dummy_field),
        });
    };
}

/* ============================== Rule2 =============================== */

export class Rule2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Rule2`;

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
        return Rule2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Rule2.from_bcs_vector(args)
    }

    get_bcs() {
        return Rule2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Rule2`
    }

    from(arg: Rule2) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Rule2 {
        return new Rule2(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Rule2[] {
        return args.map(function(arg) {
            return new Rule2(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Rule2", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Rule2(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_request_confirm() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_confirm", [], args);

}

function test_request_confirm_with_cap() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_confirm_with_cap", [], args);

}

function test_request_confirm_excessive_approvals_pass() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_confirm_excessive_approvals_pass", [], args);

}

function test_request_confirm_unknown_action_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_confirm_unknown_action_fail", [], args);

}

function test_request_confirm_not_approved_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_confirm_not_approved_fail", [], args);

}

function test_request_cant_consume_balance_with_cap() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_cant_consume_balance_with_cap", [], args);

}

function test_request_use_mutable_confirm_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_use_mutable_confirm_fail", [], args);

}

function test_request_use_mutable_action_not_allowed_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_request_use_mutable_action_not_allowed_fail", [], args);

}

export const token_request_tests = {
    Rule1,
    Rule2,
    unit_test_poison,
    test_request_confirm,
    test_request_confirm_with_cap,
    test_request_confirm_excessive_approvals_pass,
    test_request_confirm_unknown_action_fail,
    test_request_confirm_not_approved_fail,
    test_request_cant_consume_balance_with_cap,
    test_request_use_mutable_confirm_fail,
    test_request_use_mutable_action_not_allowed_fail
}