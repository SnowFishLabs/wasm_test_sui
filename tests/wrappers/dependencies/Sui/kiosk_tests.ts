import {
    UID
} from "./object";
import {
    StructClass,
    get_object_address,
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "kiosk_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== WrongAsset =============================== */

export class WrongAsset implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::WrongAsset`;

    id: UID;

    constructor(id: UID) {
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
        return WrongAsset.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return WrongAsset.from_bcs_vector(args)
    }

    get_bcs() {
        return WrongAsset.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new WrongAsset(UID.from_id(id));
    }

    static from_id(id: string) {
        return new WrongAsset(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::WrongAsset`
    }

    from(arg: WrongAsset) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: UID
    }): WrongAsset {
        return new WrongAsset(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): WrongAsset[] {
        return args.map(function(arg) {
            return new WrongAsset(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("WrongAsset", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new WrongAsset(val.id),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_set_owner_custom() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_set_owner_custom", [], args);

}

function test_place_and_take() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_place_and_take", [], args);

}

function test_taking_not_allowed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_taking_not_allowed", [], args);

}

function test_purchase() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_purchase", [], args);

}

function test_delist() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_delist", [], args);

}

function test_delist_not_listed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_delist_not_listed", [], args);

}

function test_delist_listed_exclusively() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_delist_listed_exclusively", [], args);

}

function test_delist_wrong_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_delist_wrong_type", [], args);

}

function test_delist_no_item() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_delist_no_item", [], args);

}

function test_purchase_wrong_amount() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_purchase_wrong_amount", [], args);

}

function test_purchase_cap() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_purchase_cap", [], args);

}

function test_purchase_cap_return() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_purchase_cap_return", [], args);

}

function test_list_no_item_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_list_no_item_fail", [], args);

}

function test_list_with_purchase_cap_no_item_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_list_with_purchase_cap_no_item_fail", [], args);

}

function test_purchase_cap_already_listed_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_purchase_cap_already_listed_fail", [], args);

}

function test_purchase_cap_issued_list_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_purchase_cap_issued_list_fail", [], args);

}

function test_kiosk_has_items() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_kiosk_has_items", [], args);

}

function test_withdraw_default() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_withdraw_default", [], args);

}

function test_withdraw_more_than_there_is() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_withdraw_more_than_there_is", [], args);

}

function test_disallow_extensions_access_as_owner() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_disallow_extensions_access_as_owner", [], args);

}

function test_uid_access() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_uid_access", [], args);

}

function test_disallow_extensions_uid_mut() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_disallow_extensions_uid_mut", [], args);

}

function test_disallow_extensions_uid_available() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_disallow_extensions_uid_available", [], args);

}

export const kiosk_tests = {
    WrongAsset,
    unit_test_poison,
    test_set_owner_custom,
    test_place_and_take,
    test_taking_not_allowed,
    test_purchase,
    test_delist,
    test_delist_not_listed,
    test_delist_listed_exclusively,
    test_delist_wrong_type,
    test_delist_no_item,
    test_purchase_wrong_amount,
    test_purchase_cap,
    test_purchase_cap_return,
    test_list_no_item_fail,
    test_list_with_purchase_cap_no_item_fail,
    test_purchase_cap_already_listed_fail,
    test_purchase_cap_issued_list_fail,
    test_kiosk_has_items,
    test_withdraw_default,
    test_withdraw_more_than_there_is,
    test_disallow_extensions_access_as_owner,
    test_uid_access,
    test_disallow_extensions_uid_mut,
    test_disallow_extensions_uid_available
}