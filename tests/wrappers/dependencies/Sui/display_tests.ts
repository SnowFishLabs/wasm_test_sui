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
let MODULE_NAME: string = "display_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Capy =============================== */

export class Capy implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Capy`;

    id: UID;
    name ? : string;

    constructor(id: UID, name ? : string) {
        this.id = id;
        this.name = name;
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
        return Capy.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Capy.from_bcs_vector(args)
    }

    get_bcs() {
        return Capy.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Capy(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Capy(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Capy`
    }

    from(arg: Capy) {
        this.id = arg.id;
        this.name = arg.name;
    }

    static from_bcs(arg: {
        id: UID,
        name: string
    }): Capy {
        return new Capy(arg.id, arg.name)
    }

    static from_bcs_vector(args: {
        id: UID,
        name: string
    } []): Capy[] {
        return args.map(function(arg) {
            return new Capy(arg.id, arg.name)
        })
    }

    static get bcs() {
        return bcs_import.struct("Capy", {
            id: UID.bcs,
            name: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Capy(val.id, val.name),
        });
    };
}

/* ============================== CAPY =============================== */

export class CAPY implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CAPY`;

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
        return CAPY.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CAPY.from_bcs_vector(args)
    }

    get_bcs() {
        return CAPY.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CAPY`
    }

    from(arg: CAPY) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): CAPY {
        return new CAPY(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): CAPY[] {
        return args.map(function(arg) {
            return new CAPY(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("CAPY", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CAPY(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function capy_init() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "capy_init", [], args);

}

export const display_tests = {
    Capy,
    CAPY,
    unit_test_poison,
    capy_init
}