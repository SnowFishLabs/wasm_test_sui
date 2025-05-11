import {
    Coin
} from "./coin";
import {
    TxContext
} from "./tx_context";
import {
    StructClass,
    U64,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
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
let MODULE_NAME: string = "pay";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function join < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "join", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
}

function split < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: u64_import, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "split", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function keep < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "keep", type_args, args);
}

function split_vec < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: U64[], arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "split_vec", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function split_and_transfer < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: u64_import, arg2: string, arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "split_and_transfer", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function divide_and_keep < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: u64_import, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "divide_and_keep", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function join_vec < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: Coin[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "join_vec", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
}

function join_vec_and_transfer < T0 extends StructClass > (type_args: string[], arg0: Coin[], arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "join_vec_and_transfer", type_args, args);
}

export const pay = {
    unit_test_poison,
    join,
    split,
    keep,
    split_vec,
    split_and_transfer,
    divide_and_keep,
    join_vec,
    join_vec_and_transfer
}