import {
    StructClass,
    get_package_address,
    get_wasm
} from "@deepmove/sui";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "url";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Url =============================== */

export class Url implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Url`;

    url: string;

    constructor(url: string) {
        this.url = url;
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
        return Url.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Url.from_bcs_vector(args)
    }

    get_bcs() {
        return Url.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Url`
    }

    from(arg: Url) {
        this.url = arg.url;
    }

    static from_bcs(arg: {
        url: string
    }): Url {
        return new Url(arg.url)
    }

    static from_bcs_vector(args: {
        url: string
    } []): Url[] {
        return args.map(function(arg) {
            return new Url(arg.url)
        })
    }

    static get bcs() {
        return bcs_import.struct("Url", {
            url: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Url(val.url),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function new_unsafe(arg0: string): [Url] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_unsafe", [], args);

    return [
        Url.from_bcs(Url.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_unsafe_from_bytes(arg0: number[]): [Url] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_unsafe_from_bytes", [], args);

    return [
        Url.from_bcs(Url.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function inner_url(arg0: Url): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Url.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "inner_url", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function update(arg0: Url, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Url.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

export const url = {
    Url,
    unit_test_poison,
    new_unsafe,
    new_unsafe_from_bytes,
    inner_url,
    update
}