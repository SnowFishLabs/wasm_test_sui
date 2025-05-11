import {
    StructClass,
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x000000000000000000000000000000000000000000000000000000000000000a";
let MODULE_NAME: string = "type_name_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TestStruct =============================== */

export class TestStruct implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TestStruct`;

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
        return TestStruct.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TestStruct.from_bcs_vector(args)
    }

    get_bcs() {
        return TestStruct.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TestStruct`
    }

    from(arg: TestStruct) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): TestStruct {
        return new TestStruct(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): TestStruct[] {
        return args.map(function(arg) {
            return new TestStruct(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("TestStruct", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TestStruct(val.dummy_field),
        });
    };
}

/* ============================== TestGenerics =============================== */

export class TestGenerics implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TestGenerics`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
        }
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
        return TestGenerics.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TestGenerics.from_bcs_vector(args)
    }

    get_bcs() {
        return TestGenerics.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TestGenerics`
    }

    from(arg: TestGenerics) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): TestGenerics {
        return new TestGenerics(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): TestGenerics[] {
        return args.map(function(arg) {
            return new TestGenerics(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("TestGenerics", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TestGenerics(val.dummy_field),
        });
    };
}

/* ============================== TestMultiGenerics =============================== */

export class TestMultiGenerics implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TestMultiGenerics`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
        }
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
        return TestMultiGenerics.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TestMultiGenerics.from_bcs_vector(args)
    }

    get_bcs() {
        return TestMultiGenerics.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TestMultiGenerics`
    }

    from(arg: TestMultiGenerics) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): TestMultiGenerics {
        return new TestMultiGenerics(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): TestMultiGenerics[] {
        return args.map(function(arg) {
            return new TestMultiGenerics(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("TestMultiGenerics", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TestMultiGenerics(val.dummy_field),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function test_primitive_types() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_primitive_types", [], args);

}

function test_is_primitive() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_is_primitive", [], args);

}

function test_structs() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_structs", [], args);

}

function test_generics() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_generics", [], args);

}

function test_multi_generics() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_multi_generics", [], args);

}

function test_get_address() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_address", [], args);

}

function test_get_module() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_module", [], args);

}

function test_get_address_aborts_with_primitive() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_address_aborts_with_primitive", [], args);

}

function test_get_module_aborts_with_primitive() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_module_aborts_with_primitive", [], args);

}

function test_get_address_aborts_with_primitive_generic() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_address_aborts_with_primitive_generic", [], args);

}

function test_get_module_aborts_with_primitive_generic() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_get_module_aborts_with_primitive_generic", [], args);

}

export const type_name_tests = {
    TestStruct,
    TestGenerics,
    TestMultiGenerics,
    unit_test_poison,
    test_primitive_types,
    test_is_primitive,
    test_structs,
    test_generics,
    test_multi_generics,
    test_get_address,
    test_get_module,
    test_get_address_aborts_with_primitive,
    test_get_module_aborts_with_primitive,
    test_get_address_aborts_with_primitive_generic,
    test_get_module_aborts_with_primitive_generic
}