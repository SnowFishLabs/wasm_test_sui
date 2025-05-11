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
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "prover_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Obj =============================== */

export class Obj implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Obj`;

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
        return Obj.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Obj.from_bcs_vector(args)
    }

    get_bcs() {
        return Obj.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Obj(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Obj(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Obj`
    }

    from(arg: Obj) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: UID
    }): Obj {
        return new Obj(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): Obj[] {
        return args.map(function(arg) {
            return new Obj(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("Obj", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Obj(val.id),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function simple_transfer(arg0: Obj, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Obj.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_transfer", [], args);

}

function simple_share(arg0: Obj) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Obj.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_share", [], args);

}

function simple_freeze(arg0: Obj) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Obj.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_freeze", [], args);

}

function simple_delete(arg0: Obj) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Obj.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_delete", [], args);

}

function simple_field_add(arg0: Obj, arg1: u64_import, arg2: number, arg3: number, arg4: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Obj.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_field_add", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function simple_field_remove(arg0: Obj, arg1: u64_import, arg2: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Obj.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "simple_field_remove", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

export const prover_tests = {
    Obj,
    unit_test_poison,
    simple_transfer,
    simple_share,
    simple_freeze,
    simple_delete,
    simple_field_add,
    simple_field_remove
}