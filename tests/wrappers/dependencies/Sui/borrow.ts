import {
    Option
} from "../MoveStdlib/option";
import {
    ID,
    UID
} from "./object";
import {
    TxContext
} from "./tx_context";
import {
    StructClass,
    TypeArgument,
    get_object_address,
    get_package_address,
    get_wasm,
    to_arr_value
} from "@deepmove/sui";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "borrow";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Referent =============================== */

export class Referent < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Referent`;

    id: string;
    value: Option < T0 > ;

    T0_bcs: any;

    constructor(id: string, value: Option < T0 > ) {
        this.id = id;
        this.value = value;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            value: (this.value as unknown as StructClass).into_value ? (this.value as unknown as StructClass).into_value() : this.value
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.value) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Referent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Referent.from_bcs_vector(args)
    }

    get_bcs() {
        return Referent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Referent`
    }

    from(arg: Referent < T0 > ) {
        this.id = arg.id;
        this.value = arg.value;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        id: string,
        value: Option < T0 >
    }): Referent < T0 > {
        return new Referent(arg.id, arg.value)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        id: string,
        value: Option < T0 >
    } []): Referent < T0 > [] {
        return args.map(function(arg) {
            return new Referent(arg.id, arg.value)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Referent<${T0.name}>`, {
                id: bcs_import.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                }),
                value: Option.bcs(T0),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Referent(val.id, val.value),
            });
    };
}

/* ============================== Borrow =============================== */

export class Borrow implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Borrow`;

    ref: string;
    obj: ID;

    constructor(ref: string, obj: ID) {
        this.ref = ref;
        this.obj = obj;
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
        return Borrow.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Borrow.from_bcs_vector(args)
    }

    get_bcs() {
        return Borrow.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Borrow`
    }

    from(arg: Borrow) {
        this.ref = arg.ref;
        this.obj = arg.obj;
    }

    static from_bcs(arg: {
        ref: string,
        obj: ID
    }): Borrow {
        return new Borrow(arg.ref, arg.obj)
    }

    static from_bcs_vector(args: {
        ref: string,
        obj: ID
    } []): Borrow[] {
        return args.map(function(arg) {
            return new Borrow(arg.ref, arg.obj)
        })
    }

    static get bcs() {
        return bcs_import.struct("Borrow", {
            ref: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            obj: ID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Borrow(val.ref, val.obj),
        });
    };
}

/* ============================== Test =============================== */

export class Test implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Test`;

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
        return Test.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Test.from_bcs_vector(args)
    }

    get_bcs() {
        return Test.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Test(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Test(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Test`
    }

    from(arg: Test) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: UID
    }): Test {
        return new Test(arg.id)
    }

    static from_bcs_vector(args: {
        id: UID
    } []): Test[] {
        return args.map(function(arg) {
            return new Test(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("Test", {
            id: UID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Test(val.id),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function borrow < T0 extends StructClass > (type_args: string[], arg0: Referent < T0 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Referent < T0 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function new_ < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy < T0 extends StructClass > (type_args: string[], arg0: Referent < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function put_back < T0 extends StructClass > (type_args: string[], arg0: Referent < T0 > , arg1: T0, arg2: Borrow) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "put_back", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Referent < T0 > );
}

function test_borrow() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow", [], args);

}

function test_object_swap() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_object_swap", [], args);

}

function test_borrow_fail() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_borrow_fail", [], args);

}

export const borrow_ = {
    Referent,
    Borrow,
    Test,
    unit_test_poison,
    borrow,
    new_,
    destroy,
    put_back,
    test_borrow,
    test_object_swap,
    test_borrow_fail
}