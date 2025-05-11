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
let MODULE_NAME: string = "token_config_tests";

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

/* ============================== Config1 =============================== */

export class Config1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Config1`;

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
        return Config1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Config1.from_bcs_vector(args)
    }

    get_bcs() {
        return Config1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Config1`
    }

    from(arg: Config1) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: u64_import
    }): Config1 {
        return new Config1(arg.value)
    }

    static from_bcs_vector(args: {
        value: u64_import
    } []): Config1[] {
        return args.map(function(arg) {
            return new Config1(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("Config1", {
            value: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Config1(val.value),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_create_and_use_rule_config() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_create_and_use_rule_config", [], args);

}

function test_add_config_not_authorized_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_add_config_not_authorized_fail", [], args);

}

function test_remove_config_not_authorized_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_config_not_authorized_fail", [], args);

}

function test_mutate_config_not_authorized_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_mutate_config_not_authorized_fail", [], args);

}

function test_rule_config_missing_config_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_rule_config_missing_config_fail", [], args);

}

function test_rule_config_mut_missing_config_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_rule_config_mut_missing_config_fail", [], args);

}

function test_remove_rule_config_missing_config_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_rule_config_missing_config_fail", [], args);

}

export const token_config_tests = {
    Rule1,
    Config1,
    unit_test_poison,
    test_create_and_use_rule_config,
    test_add_config_not_authorized_fail,
    test_remove_config_not_authorized_fail,
    test_mutate_config_not_authorized_fail,
    test_rule_config_missing_config_fail,
    test_rule_config_mut_missing_config_fail,
    test_remove_rule_config_missing_config_fail
}