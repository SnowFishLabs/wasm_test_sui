import {
    UID
} from "./object";
import {
    StructClass,
    get_object_address,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "test_scenario_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Wrapper =============================== */

export class Wrapper implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Wrapper`;

    id: UID;
    child ? : Object_;

    constructor(id: UID, child ? : Object_) {
        this.id = id;
        this.child = child;
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
        return Wrapper.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Wrapper.from_bcs_vector(args)
    }

    get_bcs() {
        return Wrapper.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Wrapper(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Wrapper(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Wrapper`
    }

    from(arg: Wrapper) {
        this.id = arg.id;
        this.child = arg.child;
    }

    static from_bcs(arg: {
        id: UID,
        child: Object_
    }): Wrapper {
        return new Wrapper(arg.id, arg.child)
    }

    static from_bcs_vector(args: {
        id: UID,
        child: Object_
    } []): Wrapper[] {
        return args.map(function(arg) {
            return new Wrapper(arg.id, arg.child)
        })
    }

    static get bcs() {
        return bcs_import.struct("Wrapper", {
            id: UID.bcs,
            child: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Wrapper(val.id, val.child),
        });
    };
}

/* ============================== Object =============================== */

export class Object_ implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Object`;

    id: UID;
    value ? : u64_import;

    constructor(id: UID, value ? : u64_import) {
        this.id = id;
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
        return Object_.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Object_.from_bcs_vector(args)
    }

    get_bcs() {
        return Object_.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Object_(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Object_(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Object`
    }

    from(arg: Object_) {
        this.id = arg.id;
        this.value = arg.value;
    }

    static from_bcs(arg: {
        id: UID,
        value: u64_import
    }): Object_ {
        return new Object_(arg.id, arg.value)
    }

    static from_bcs_vector(args: {
        id: UID,
        value: u64_import
    } []): Object_[] {
        return args.map(function(arg) {
            return new Object_(arg.id, arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("Object_", {
            id: UID.bcs,
            value: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Object_(val.id, val.value),
        });
    };
}

/* ============================== E1 =============================== */

export class E1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::E1`;

    pos0: u64_import;

    constructor(pos0: u64_import) {
        this.pos0 = pos0;
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
        return E1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return E1.from_bcs_vector(args)
    }

    get_bcs() {
        return E1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::E1`
    }

    from(arg: E1) {
        this.pos0 = arg.pos0;
    }

    static from_bcs(arg: {
        pos0: u64_import
    }): E1 {
        return new E1(arg.pos0)
    }

    static from_bcs_vector(args: {
        pos0: u64_import
    } []): E1[] {
        return args.map(function(arg) {
            return new E1(arg.pos0)
        })
    }

    static get bcs() {
        return bcs_import.struct("E1", {
            pos0: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new E1(val.pos0),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_wrap_unwrap() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_wrap_unwrap", [], args);

}

function test_remove_then_return() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_then_return", [], args);

}

function test_return_and_update() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_return_and_update", [], args);

}

function test_remove_during_tx() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_remove_during_tx", [], args);

}

function test_double_remove() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_double_remove", [], args);

}

function test_three_owners() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_three_owners", [], args);

}

function test_transfer_then_delete() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_transfer_then_delete", [], args);

}

function test_get_owned_obj_ids() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_owned_obj_ids", [], args);

}

function test_take_owned_by_id() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_take_owned_by_id", [], args);

}

function test_get_last_created_object_id() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_last_created_object_id", [], args);

}

function test_take_shared_by_id() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_take_shared_by_id", [], args);

}

function test_take_shared() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_take_shared", [], args);

}

function test_delete_shared() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_delete_shared", [], args);

}

function test_take_immutable_by_id() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_take_immutable_by_id", [], args);

}

function test_take_immutable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_take_immutable", [], args);

}

function test_receive_object() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_object", [], args);

}

function test_receive_for_object() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_for_object", [], args);

}

function test_receive_object_multiple_in_row() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_object_multiple_in_row", [], args);

}

function test_no_receive_object_then_use_next_tx() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_no_receive_object_then_use_next_tx", [], args);

}

function test_receive_object_shared() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_object_shared", [], args);

}

function test_receive_object_double_allocate_ticket() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_object_double_allocate_ticket", [], args);

}

function test_receive_double_allocate_ticket_return_between() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_double_allocate_ticket_return_between", [], args);

}

function test_receive_double_allocate_ticket_return_between_then_use() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_double_allocate_ticket_return_between_then_use", [], args);

}

function test_receive_double_allocate_ticket_return_between_then_use_then_check() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_receive_double_allocate_ticket_return_between_then_use_then_check", [], args);

}

function test_unused_receive_ticket() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_unused_receive_ticket", [], args);

}

function test_unreturned_objects() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_unreturned_objects", [], args);

}

function test_later_epoch() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_later_epoch", [], args);

}

function test_invalid_shared_usage() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_shared_usage", [], args);

}

function test_invalid_immutable_usage() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_immutable_usage", [], args);

}

function test_modify_immutable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_modify_immutable", [], args);

}

function test_invalid_address_return() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_address_return", [], args);

}

function test_invalid_shared_return() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_shared_return", [], args);

}

function test_invalid_immutable_return() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_invalid_immutable_return", [], args);

}

function test_empty_inventory() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_empty_inventory", [], args);

}

function test_empty_inventory_shared() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_empty_inventory_shared", [], args);

}

function test_empty_inventory_immutable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_empty_inventory_immutable", [], args);

}

function test_object_not_found() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_object_not_found", [], args);

}

function test_object_not_found_shared() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_object_not_found_shared", [], args);

}

function test_object_not_found_immutable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_object_not_found_immutable", [], args);

}

function test_wrong_object_type() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_wrong_object_type", [], args);

}

function test_wrong_object_type_shared() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_wrong_object_type_shared", [], args);

}

function test_wrong_object_type_immutable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_wrong_object_type_immutable", [], args);

}

function test_dynamic_field_still_borrowed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dynamic_field_still_borrowed", [], args);

}

function test_dynamic_object_field_still_borrowed() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dynamic_object_field_still_borrowed", [], args);

}

function test_dynamic_object_field_not_retrievable() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dynamic_object_field_not_retrievable", [], args);

}

function test_dynamic_field_shared_misuse() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dynamic_field_shared_misuse", [], args);

}

function test_dynamic_field_immutable_misuse() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dynamic_field_immutable_misuse", [], args);

}

function test_dynamic_object_field_shared_misuse() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dynamic_object_field_shared_misuse", [], args);

}

function test_dynamic_object_field_immutable_misuse() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_dynamic_object_field_immutable_misuse", [], args);

}

function test_events() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_events", [], args);

}

export const test_scenario_tests = {
    Wrapper,
    Object_,
    E1,
    unit_test_poison,
    test_wrap_unwrap,
    test_remove_then_return,
    test_return_and_update,
    test_remove_during_tx,
    test_double_remove,
    test_three_owners,
    test_transfer_then_delete,
    test_get_owned_obj_ids,
    test_take_owned_by_id,
    test_get_last_created_object_id,
    test_take_shared_by_id,
    test_take_shared,
    test_delete_shared,
    test_take_immutable_by_id,
    test_take_immutable,
    test_receive_object,
    test_receive_for_object,
    test_receive_object_multiple_in_row,
    test_no_receive_object_then_use_next_tx,
    test_receive_object_shared,
    test_receive_object_double_allocate_ticket,
    test_receive_double_allocate_ticket_return_between,
    test_receive_double_allocate_ticket_return_between_then_use,
    test_receive_double_allocate_ticket_return_between_then_use_then_check,
    test_unused_receive_ticket,
    test_unreturned_objects,
    test_later_epoch,
    test_invalid_shared_usage,
    test_invalid_immutable_usage,
    test_modify_immutable,
    test_invalid_address_return,
    test_invalid_shared_return,
    test_invalid_immutable_return,
    test_empty_inventory,
    test_empty_inventory_shared,
    test_empty_inventory_immutable,
    test_object_not_found,
    test_object_not_found_shared,
    test_object_not_found_immutable,
    test_wrong_object_type,
    test_wrong_object_type_shared,
    test_wrong_object_type_immutable,
    test_dynamic_field_still_borrowed,
    test_dynamic_object_field_still_borrowed,
    test_dynamic_object_field_not_retrievable,
    test_dynamic_field_shared_misuse,
    test_dynamic_field_immutable_misuse,
    test_dynamic_object_field_shared_misuse,
    test_dynamic_object_field_immutable_misuse,
    test_events
}