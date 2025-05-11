import {
    get_package_address,
    get_wasm
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
let MODULE_NAME: string = "address_tests";

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

function from_bytes_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_bytes_ok", [], args);

}

function from_bytes_too_few_bytes() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_bytes_too_few_bytes", [], args);

}

function test_from_bytes_too_many_bytes() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_from_bytes_too_many_bytes", [], args);

}

function to_u256_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_u256_ok", [], args);

}

function from_u256_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_u256_ok", [], args);

}

function from_u256_tests_max_bytes(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_u256_tests_max_bytes", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function to_bytes_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_bytes_ok", [], args);

}

function to_ascii_string_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_ascii_string_ok", [], args);

}

function to_string_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_string_ok", [], args);

}

function from_ascii_string_ok() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_ascii_string_ok", [], args);

}

function from_ascii_string_too_short() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_ascii_string_too_short", [], args);

}

function from_ascii_string_too_long() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_ascii_string_too_long", [], args);

}

function from_ascii_string_non_hex_character() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_ascii_string_non_hex_character", [], args);

}

export const address_tests = {
    unit_test_poison,
    from_bytes_ok,
    from_bytes_too_few_bytes,
    test_from_bytes_too_many_bytes,
    to_u256_ok,
    from_u256_ok,
    from_u256_tests_max_bytes,
    to_bytes_ok,
    to_ascii_string_ok,
    to_string_ok,
    from_ascii_string_ok,
    from_ascii_string_too_short,
    from_ascii_string_too_long,
    from_ascii_string_non_hex_character
}