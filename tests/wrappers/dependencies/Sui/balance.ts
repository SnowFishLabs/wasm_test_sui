import {
    TxContext
} from "./tx_context";
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
let MODULE_NAME: string = "balance";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Supply =============================== */

export class Supply implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Supply`;

    value: u64_import;

    constructor(value: u64_import) {
        this.value = value;
    }

    into_value() {
        return {
            value: (this.value as unknown as StructClass).into_value ? (this.value as unknown as StructClass).into_value() : this.value
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
        return Supply.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Supply.from_bcs_vector(args)
    }

    get_bcs() {
        return Supply.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Supply`
    }

    from(arg: Supply) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: u64_import
    }): Supply {
        return new Supply(arg.value)
    }

    static from_bcs_vector(args: {
        value: u64_import
    } []): Supply[] {
        return args.map(function(arg) {
            return new Supply(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("Supply", {
            value: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Supply(val.value),
        });
    };
}

/* ============================== Balance =============================== */

export class Balance implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Balance`;

    value: u64_import;

    constructor(value: u64_import) {
        this.value = value;
    }

    into_value() {
        return {
            value: (this.value as unknown as StructClass).into_value ? (this.value as unknown as StructClass).into_value() : this.value
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
        return Balance.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Balance.from_bcs_vector(args)
    }

    get_bcs() {
        return Balance.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Balance`
    }

    from(arg: Balance) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: u64_import
    }): Balance {
        return new Balance(arg.value)
    }

    static from_bcs_vector(args: {
        value: u64_import
    } []): Balance[] {
        return args.map(function(arg) {
            return new Balance(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("Balance", {
            value: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Balance(val.value),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function value < T0 extends StructClass > (type_args: string[], arg0: Balance): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function supply_value < T0 extends StructClass > (type_args: string[], arg0: Supply): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "supply_value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_supply < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_supply", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function increase_supply < T0 extends StructClass > (type_args: string[], arg0: Supply, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increase_supply", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Supply);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function decrease_supply < T0 extends StructClass > (type_args: string[], arg0: Supply, arg1: Balance): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "decrease_supply", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Supply);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function zero < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zero", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function join < T0 extends StructClass > (type_args: string[], arg0: Balance, arg1: Balance): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "join", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Balance);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function split < T0 extends StructClass > (type_args: string[], arg0: Balance, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "split", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Balance);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function withdraw_all < T0 extends StructClass > (type_args: string[], arg0: Balance): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_all", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Balance);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_zero < T0 extends StructClass > (type_args: string[], arg0: Balance) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_zero", type_args, args);
}

function create_staking_rewards < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_staking_rewards", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_storage_rebates < T0 extends StructClass > (type_args: string[], arg0: Balance, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_storage_rebates", type_args, args);
}

function destroy_supply < T0 extends StructClass > (type_args: string[], arg0: Supply): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_supply", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_for_testing < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_for_testing", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_for_testing < T0 extends StructClass > (type_args: string[], arg0: Balance): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_for_testing", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_supply_for_testing < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_supply_for_testing", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const balance = {
    Supply,
    Balance,
    unit_test_poison,
    value,
    supply_value,
    create_supply,
    increase_supply,
    decrease_supply,
    zero,
    join,
    split,
    withdraw_all,
    destroy_zero,
    create_staking_rewards,
    destroy_storage_rebates,
    destroy_supply,
    create_for_testing,
    destroy_for_testing,
    create_supply_for_testing
}