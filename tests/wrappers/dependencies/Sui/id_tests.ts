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
let MODULE_NAME: string = "id_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Object =============================== */

export class Object_ implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Object`;

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
    }

    static from_bcs(arg: {
        id: UID
    }): Object_ {
        return new Object_(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): Object_[] {
        return args.map(function(arg) {
            return new Object_(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("Object_", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Object_(val.id),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_get_id() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_id", [], args);

}

export const id_tests = {
    Object_,
    unit_test_poison,
    test_get_id
}