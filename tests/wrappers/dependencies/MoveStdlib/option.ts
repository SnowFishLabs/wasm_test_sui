import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    into_arr_value,
    to_arr_value
} from "@deepmove/sui";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "option";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Option =============================== */

export class Option < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Option`;

    vec: T0[];

    T0_bcs: any;

    constructor(vec: T0[]) {
        this.vec = vec;
    }

    into_value() {
        return {
            vec: into_arr_value(this.vec)
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.vec) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.vec) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.vec) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.vec) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.vec) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Option.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Option.from_bcs_vector(args)
    }

    get_bcs() {
        return Option.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Option`
    }

    from(arg: Option < T0 > ) {
        this.vec = arg.vec;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        vec: T0[]
    }): Option < T0 > {
        return new Option(arg.vec)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        vec: T0[]
    } []): Option < T0 > [] {
        return args.map(function(arg) {
            return new Option(arg.vec)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Option<${T0.name}>`, {
                vec: bcs_import.vector(T0),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Option(val.vec),
            });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function borrow < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_mut < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Option < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function swap < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Option < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function none < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "none", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function some < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "some", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_none < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_none", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_some < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_some", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_with_default < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_with_default", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_with_default < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_with_default", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function fill < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > , arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fill", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Option < T0 > );
}

function extract < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extract", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Option < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function swap_or_fill < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_or_fill", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Option < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_with_default < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_with_default", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_some < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_some", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_none < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_none", type_args, args);
}

function to_vec < T0 extends StructClass > (type_args: string[], arg0: Option < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_vec", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const option = {
    Option,
    unit_test_poison,
    borrow,
    borrow_mut,
    swap,
    contains,
    none,
    some,
    is_none,
    is_some,
    borrow_with_default,
    get_with_default,
    fill,
    extract,
    swap_or_fill,
    destroy_with_default,
    destroy_some,
    destroy_none,
    to_vec
}