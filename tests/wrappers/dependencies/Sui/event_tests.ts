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
let MODULE_NAME: string = "event_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== S1 =============================== */

export class S1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::S1`;

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
        return S1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return S1.from_bcs_vector(args)
    }

    get_bcs() {
        return S1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::S1`
    }

    from(arg: S1) {
        this.pos0 = arg.pos0;
    }

    static from_bcs(arg: {
        pos0: u64_import
    }): S1 {
        return new S1(arg.pos0)
    }

    static from_bcs_vector(args: {
        pos0: u64_import
    } []): S1[] {
        return args.map(function(arg) {
            return new S1(arg.pos0)
        })
    }

    static get bcs() {
        return bcs_import.struct("S1", {
            pos0: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new S1(val.pos0),
        });
    };
}

/* ============================== S2 =============================== */

export class S2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::S2`;

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
        return S2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return S2.from_bcs_vector(args)
    }

    get_bcs() {
        return S2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::S2`
    }

    from(arg: S2) {
        this.pos0 = arg.pos0;
    }

    static from_bcs(arg: {
        pos0: u64_import
    }): S2 {
        return new S2(arg.pos0)
    }

    static from_bcs_vector(args: {
        pos0: u64_import
    } []): S2[] {
        return args.map(function(arg) {
            return new S2(arg.pos0)
        })
    }

    static get bcs() {
        return bcs_import.struct("S2", {
            pos0: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new S2(val.pos0),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_no_emit() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_no_emit", [], args);

}

function test_emit_homogenous() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_emit_homogenous", [], args);

}

function test_emit_duplicate() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_emit_duplicate", [], args);

}

function test_emit_heterogenous() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_emit_heterogenous", [], args);

}

export const event_tests = {
    S1,
    S2,
    unit_test_poison,
    test_no_emit,
    test_emit_homogenous,
    test_emit_duplicate,
    test_emit_heterogenous
}