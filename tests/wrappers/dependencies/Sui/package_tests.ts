import {
    UpgradeCap,
    UpgradeTicket
} from "./package";
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
let MODULE_NAME: string = "package_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TEST_OTW =============================== */

export class TEST_OTW implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TEST_OTW`;

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
        return TEST_OTW.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TEST_OTW.from_bcs_vector(args)
    }

    get_bcs() {
        return TEST_OTW.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TEST_OTW`
    }

    from(arg: TEST_OTW) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): TEST_OTW {
        return new TEST_OTW(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): TEST_OTW[] {
        return args.map(function(arg) {
            return new TEST_OTW(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("TEST_OTW", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TEST_OTW(val.dummy_field),
        });
    };
}

/* ============================== CustomType =============================== */

export class CustomType implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CustomType`;

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
        return CustomType.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CustomType.from_bcs_vector(args)
    }

    get_bcs() {
        return CustomType.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CustomType`
    }

    from(arg: CustomType) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): CustomType {
        return new CustomType(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): CustomType[] {
        return args.map(function(arg) {
            return new CustomType(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("CustomType", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CustomType(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_from_package() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_from_package", [], args);

}

function test_from_module() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_from_module", [], args);

}

function test_restrict_upgrade_policy() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_restrict_upgrade_policy", [], args);

}

function check_ticket(arg0: UpgradeCap, arg1: number, arg2: number[]): [UpgradeTicket] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_ticket", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        UpgradeTicket.from_bcs(UpgradeTicket.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function test_upgrade_policy_reflected_in_ticket() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_upgrade_policy_reflected_in_ticket", [], args);

}

function test_full_upgrade_flow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_full_upgrade_flow", [], args);

}

function test_failure_to_widen_upgrade_policy() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_failure_to_widen_upgrade_policy", [], args);

}

function test_failure_to_authorize_overly_permissive_upgrade() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_failure_to_authorize_overly_permissive_upgrade", [], args);

}

function test_failure_to_authorize_multiple_upgrades() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_failure_to_authorize_multiple_upgrades", [], args);

}

function test_failure_to_commit_upgrade_to_wrong_cap() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_failure_to_commit_upgrade_to_wrong_cap", [], args);

}

export const package_tests = {
    TEST_OTW,
    CustomType,
    unit_test_poison,
    test_from_package,
    test_from_module,
    test_restrict_upgrade_policy,
    check_ticket,
    test_upgrade_policy_reflected_in_ticket,
    test_full_upgrade_flow,
    test_failure_to_widen_upgrade_policy,
    test_failure_to_authorize_overly_permissive_upgrade,
    test_failure_to_authorize_multiple_upgrades,
    test_failure_to_commit_upgrade_to_wrong_cap
}