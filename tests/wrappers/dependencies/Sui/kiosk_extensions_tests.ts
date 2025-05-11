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
let MODULE_NAME: string = "kiosk_extensions_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Extension =============================== */

export class Extension implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Extension`;

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
        return Extension.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Extension.from_bcs_vector(args)
    }

    get_bcs() {
        return Extension.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Extension`
    }

    from(arg: Extension) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Extension {
        return new Extension(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Extension[] {
        return args.map(function(arg) {
            return new Extension(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Extension", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Extension(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_default_behavior() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_default_behavior", [], args);

}

function test_lock_not_allowed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_lock_not_allowed", [], args);

}

function test_lock_not_allowed_but_place() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_lock_not_allowed_but_place", [], args);

}

function test_place_not_allowed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_place_not_allowed", [], args);

}

function test_place_allowed_with_lock() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_place_allowed_with_lock", [], args);

}

function test_enable_not_installed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_enable_not_installed", [], args);

}

function test_disable_not_installed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_disable_not_installed", [], args);

}

function test_remove_not_installed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_not_installed", [], args);

}

function test_storage_not_installed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_storage_not_installed", [], args);

}

function test_storage_mut_not_installed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_storage_mut_not_installed", [], args);

}

function test_lock_not_installed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_lock_not_installed", [], args);

}

function test_place_not_installed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_place_not_installed", [], args);

}

export const kiosk_extensions_tests = {
    Extension,
    unit_test_poison,
    test_default_behavior,
    test_lock_not_allowed,
    test_lock_not_allowed_but_place,
    test_place_not_allowed,
    test_place_allowed_with_lock,
    test_enable_not_installed,
    test_disable_not_installed,
    test_remove_not_installed,
    test_storage_not_installed,
    test_storage_mut_not_installed,
    test_lock_not_installed,
    test_place_not_installed
}