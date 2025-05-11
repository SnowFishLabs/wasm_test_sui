import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    to_arr_value
} from "@deepmove/sui";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "bcs_tests";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Box =============================== */

export class Box < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box`;

    x: T0;

    T0_bcs: any;

    constructor(x: T0) {
        this.x = x;
    }

    into_value() {
        return {
            x: (this.x as StructClass).into_value ? (this.x as StructClass).into_value() : this.x
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box.from_bcs_vector(args)
    }

    get_bcs() {
        return Box.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box`
    }

    from(arg: Box < T0 > ) {
        this.x = arg.x;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: T0
    }): Box < T0 > {
        return new Box(arg.x)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: T0
    } []): Box < T0 > [] {
        return args.map(function(arg) {
            return new Box(arg.x)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box<${T0.name}>`, {
                x: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box(val.x),
            });
    };
}

/* ============================== Box3 =============================== */

export class Box3 < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box3`;

    x: Box < Box < T0 >> ;

    T0_bcs: any;

    constructor(x: Box < Box < T0 >> ) {
        this.x = x;
    }

    into_value() {
        return {
            x: (this.x as unknown as StructClass).into_value ? (this.x as unknown as StructClass).into_value() : this.x
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box3.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box3.from_bcs_vector(args)
    }

    get_bcs() {
        return Box3.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box3`
    }

    from(arg: Box3 < T0 > ) {
        this.x = arg.x;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: Box < Box < T0 >>
    }): Box3 < T0 > {
        return new Box3(arg.x)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: Box < Box < T0 >>
    } []): Box3 < T0 > [] {
        return args.map(function(arg) {
            return new Box3(arg.x)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box3<${T0.name}>`, {
                x: Box.bcs(Box.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box3(val.x),
            });
    };
}

/* ============================== Box7 =============================== */

export class Box7 < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box7`;

    x: Box3 < Box3 < T0 >> ;

    T0_bcs: any;

    constructor(x: Box3 < Box3 < T0 >> ) {
        this.x = x;
    }

    into_value() {
        return {
            x: (this.x as unknown as StructClass).into_value ? (this.x as unknown as StructClass).into_value() : this.x
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box7.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box7.from_bcs_vector(args)
    }

    get_bcs() {
        return Box7.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box7`
    }

    from(arg: Box7 < T0 > ) {
        this.x = arg.x;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: Box3 < Box3 < T0 >>
    }): Box7 < T0 > {
        return new Box7(arg.x)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: Box3 < Box3 < T0 >>
    } []): Box7 < T0 > [] {
        return args.map(function(arg) {
            return new Box7(arg.x)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box7<${T0.name}>`, {
                x: Box3.bcs(Box3.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box7(val.x),
            });
    };
}

/* ============================== Box15 =============================== */

export class Box15 < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box15`;

    x: Box7 < Box7 < T0 >> ;

    T0_bcs: any;

    constructor(x: Box7 < Box7 < T0 >> ) {
        this.x = x;
    }

    into_value() {
        return {
            x: (this.x as unknown as StructClass).into_value ? (this.x as unknown as StructClass).into_value() : this.x
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box15.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box15.from_bcs_vector(args)
    }

    get_bcs() {
        return Box15.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box15`
    }

    from(arg: Box15 < T0 > ) {
        this.x = arg.x;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: Box7 < Box7 < T0 >>
    }): Box15 < T0 > {
        return new Box15(arg.x)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: Box7 < Box7 < T0 >>
    } []): Box15 < T0 > [] {
        return args.map(function(arg) {
            return new Box15(arg.x)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box15<${T0.name}>`, {
                x: Box7.bcs(Box7.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box15(val.x),
            });
    };
}

/* ============================== Box31 =============================== */

export class Box31 < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box31`;

    x: Box15 < Box15 < T0 >> ;

    T0_bcs: any;

    constructor(x: Box15 < Box15 < T0 >> ) {
        this.x = x;
    }

    into_value() {
        return {
            x: (this.x as unknown as StructClass).into_value ? (this.x as unknown as StructClass).into_value() : this.x
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box31.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box31.from_bcs_vector(args)
    }

    get_bcs() {
        return Box31.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box31`
    }

    from(arg: Box31 < T0 > ) {
        this.x = arg.x;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: Box15 < Box15 < T0 >>
    }): Box31 < T0 > {
        return new Box31(arg.x)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: Box15 < Box15 < T0 >>
    } []): Box31 < T0 > [] {
        return args.map(function(arg) {
            return new Box31(arg.x)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box31<${T0.name}>`, {
                x: Box15.bcs(Box15.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box31(val.x),
            });
    };
}

/* ============================== Box63 =============================== */

export class Box63 < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box63`;

    x: Box31 < Box31 < T0 >> ;

    T0_bcs: any;

    constructor(x: Box31 < Box31 < T0 >> ) {
        this.x = x;
    }

    into_value() {
        return {
            x: (this.x as unknown as StructClass).into_value ? (this.x as unknown as StructClass).into_value() : this.x
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box63.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box63.from_bcs_vector(args)
    }

    get_bcs() {
        return Box63.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box63`
    }

    from(arg: Box63 < T0 > ) {
        this.x = arg.x;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: Box31 < Box31 < T0 >>
    }): Box63 < T0 > {
        return new Box63(arg.x)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: Box31 < Box31 < T0 >>
    } []): Box63 < T0 > [] {
        return args.map(function(arg) {
            return new Box63(arg.x)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box63<${T0.name}>`, {
                x: Box31.bcs(Box31.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box63(val.x),
            });
    };
}

/* ============================== Box127 =============================== */

export class Box127 < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box127`;

    x: Box63 < Box63 < T0 >> ;

    T0_bcs: any;

    constructor(x: Box63 < Box63 < T0 >> ) {
        this.x = x;
    }

    into_value() {
        return {
            x: (this.x as unknown as StructClass).into_value ? (this.x as unknown as StructClass).into_value() : this.x
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box127.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box127.from_bcs_vector(args)
    }

    get_bcs() {
        return Box127.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box127`
    }

    from(arg: Box127 < T0 > ) {
        this.x = arg.x;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: Box63 < Box63 < T0 >>
    }): Box127 < T0 > {
        return new Box127(arg.x)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: Box63 < Box63 < T0 >>
    } []): Box127 < T0 > [] {
        return args.map(function(arg) {
            return new Box127(arg.x)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box127<${T0.name}>`, {
                x: Box63.bcs(Box63.bcs(T0)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box127(val.x),
            });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function bcs_address() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_address", [], args);

}

function bcs_bool() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_bool", [], args);

}

function bcs_u8() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_u8", [], args);

}

function bcs_u16() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_u16", [], args);

}

function bcs_u32() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_u32", [], args);

}

function bcs_u64() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_u64", [], args);

}

function bcs_u128() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_u128", [], args);

}

function bcs_u256() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_u256", [], args);

}

function bcs_vec_u8() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bcs_vec_u8", [], args);

}

function box3 < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "box3", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function box7 < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "box7", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function box15 < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "box15", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function box31 < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "box31", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function box63 < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "box63", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function box127 < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "box127", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function encode_128() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "encode_128", [], args);

}

function encode_129() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "encode_129", [], args);

}

export const bcs_tests = {
    Box,
    Box3,
    Box7,
    Box15,
    Box31,
    Box63,
    Box127,
    unit_test_poison,
    bcs_address,
    bcs_bool,
    bcs_u8,
    bcs_u16,
    bcs_u32,
    bcs_u64,
    bcs_u128,
    bcs_u256,
    bcs_vec_u8,
    box3,
    box7,
    box15,
    box31,
    box63,
    box127,
    encode_128,
    encode_129
}