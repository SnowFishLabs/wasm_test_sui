import {
    UID
} from "./object";
import {
    TxContext
} from "./tx_context";
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

let PACKAGE_NAME: string = "Sui";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000002";
let MODULE_NAME: string = "authenticator_state";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AuthenticatorState =============================== */

export class AuthenticatorState implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AuthenticatorState`;

    id: UID;
    version ? : u64_import;

    constructor(id: UID, version ? : u64_import) {
        this.id = id;
        this.version = version;
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
        return AuthenticatorState.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AuthenticatorState.from_bcs_vector(args)
    }

    get_bcs() {
        return AuthenticatorState.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new AuthenticatorState(UID.from_id(id));
    }

    static from_id(id: string) {
        return new AuthenticatorState(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AuthenticatorState`
    }

    from(arg: AuthenticatorState) {
        this.id = arg.id;
        this.version = arg.version;
    }

    static from_bcs(arg: {
        id: UID,
        version: u64_import
    }): AuthenticatorState {
        return new AuthenticatorState(arg.id, arg.version)
    }

    static from_bcs_vector(args: {
        id: UID,
        version: u64_import
    } []): AuthenticatorState[] {
        return args.map(function(arg) {
            return new AuthenticatorState(arg.id, arg.version)
        })
    }

    static get bcs() {
        return bcs_import.struct("AuthenticatorState", {
            id: UID.bcs,
            version: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AuthenticatorState(val.id, val.version),
        });
    };
}

/* ============================== AuthenticatorStateInner =============================== */

export class AuthenticatorStateInner implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AuthenticatorStateInner`;

    version: u64_import;
    active_jwks: ActiveJwk[];

    constructor(version: u64_import, active_jwks: ActiveJwk[]) {
        this.version = version;
        this.active_jwks = active_jwks;
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
        return AuthenticatorStateInner.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AuthenticatorStateInner.from_bcs_vector(args)
    }

    get_bcs() {
        return AuthenticatorStateInner.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AuthenticatorStateInner`
    }

    from(arg: AuthenticatorStateInner) {
        this.version = arg.version;
        this.active_jwks = arg.active_jwks;
    }

    static from_bcs(arg: {
        version: u64_import,
        active_jwks: ActiveJwk[]
    }): AuthenticatorStateInner {
        return new AuthenticatorStateInner(arg.version, arg.active_jwks)
    }

    static from_bcs_vector(args: {
        version: u64_import,
        active_jwks: ActiveJwk[]
    } []): AuthenticatorStateInner[] {
        return args.map(function(arg) {
            return new AuthenticatorStateInner(arg.version, arg.active_jwks)
        })
    }

    static get bcs() {
        return bcs_import.struct("AuthenticatorStateInner", {
            version: bcs_import.u64(),
            active_jwks: bcs_import.vector(ActiveJwk.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AuthenticatorStateInner(val.version, val.active_jwks),
        });
    };
}

/* ============================== JWK =============================== */

export class JWK implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::JWK`;

    kty: string;
    e: string;
    n: string;
    alg: string;

    constructor(kty: string, e: string, n: string, alg: string) {
        this.kty = kty;
        this.e = e;
        this.n = n;
        this.alg = alg;
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
        return JWK.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return JWK.from_bcs_vector(args)
    }

    get_bcs() {
        return JWK.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::JWK`
    }

    from(arg: JWK) {
        this.kty = arg.kty;
        this.e = arg.e;
        this.n = arg.n;
        this.alg = arg.alg;
    }

    static from_bcs(arg: {
        kty: string,
        e: string,
        n: string,
        alg: string
    }): JWK {
        return new JWK(arg.kty, arg.e, arg.n, arg.alg)
    }

    static from_bcs_vector(args: {
        kty: string,
        e: string,
        n: string,
        alg: string
    } []): JWK[] {
        return args.map(function(arg) {
            return new JWK(arg.kty, arg.e, arg.n, arg.alg)
        })
    }

    static get bcs() {
        return bcs_import.struct("JWK", {
            kty: bcs_import.string(),
            e: bcs_import.string(),
            n: bcs_import.string(),
            alg: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new JWK(val.kty, val.e, val.n, val.alg),
        });
    };
}

/* ============================== JwkId =============================== */

export class JwkId implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::JwkId`;

    iss: string;
    kid: string;

    constructor(iss: string, kid: string) {
        this.iss = iss;
        this.kid = kid;
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
        return JwkId.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return JwkId.from_bcs_vector(args)
    }

    get_bcs() {
        return JwkId.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::JwkId`
    }

    from(arg: JwkId) {
        this.iss = arg.iss;
        this.kid = arg.kid;
    }

    static from_bcs(arg: {
        iss: string,
        kid: string
    }): JwkId {
        return new JwkId(arg.iss, arg.kid)
    }

    static from_bcs_vector(args: {
        iss: string,
        kid: string
    } []): JwkId[] {
        return args.map(function(arg) {
            return new JwkId(arg.iss, arg.kid)
        })
    }

    static get bcs() {
        return bcs_import.struct("JwkId", {
            iss: bcs_import.string(),
            kid: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new JwkId(val.iss, val.kid),
        });
    };
}

/* ============================== ActiveJwk =============================== */

export class ActiveJwk implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ActiveJwk`;

    jwk_id: JwkId;
    jwk: JWK;
    epoch: u64_import;

    constructor(jwk_id: JwkId, jwk: JWK, epoch: u64_import) {
        this.jwk_id = jwk_id;
        this.jwk = jwk;
        this.epoch = epoch;
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
        return ActiveJwk.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ActiveJwk.from_bcs_vector(args)
    }

    get_bcs() {
        return ActiveJwk.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ActiveJwk`
    }

    from(arg: ActiveJwk) {
        this.jwk_id = arg.jwk_id;
        this.jwk = arg.jwk;
        this.epoch = arg.epoch;
    }

    static from_bcs(arg: {
        jwk_id: JwkId,
        jwk: JWK,
        epoch: u64_import
    }): ActiveJwk {
        return new ActiveJwk(arg.jwk_id, arg.jwk, arg.epoch)
    }

    static from_bcs_vector(args: {
        jwk_id: JwkId,
        jwk: JWK,
        epoch: u64_import
    } []): ActiveJwk[] {
        return args.map(function(arg) {
            return new ActiveJwk(arg.jwk_id, arg.jwk, arg.epoch)
        })
    }

    static get bcs() {
        return bcs_import.struct("ActiveJwk", {
            jwk_id: JwkId.bcs,
            jwk: JWK.bcs,
            epoch: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ActiveJwk(val.jwk_id, val.jwk, val.epoch),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function create(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", [], args);

}

function create_for_testing(arg0: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TxContext.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_for_testing", [], args);

}

function create_active_jwk(arg0: string, arg1: string, arg2: string, arg3: u64_import): [ActiveJwk] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_active_jwk", [], args);

    return [
        ActiveJwk.from_bcs(ActiveJwk.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function active_jwk_equal(arg0: ActiveJwk, arg1: ActiveJwk): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ActiveJwk.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ActiveJwk.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "active_jwk_equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function jwk_equal(arg0: JWK, arg1: JWK): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(JWK.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(JWK.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "jwk_equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function jwk_id_equal(arg0: JwkId, arg1: JwkId): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(JwkId.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(JwkId.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "jwk_id_equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function string_bytes_lt(arg0: string, arg1: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "string_bytes_lt", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function jwk_lt(arg0: ActiveJwk, arg1: ActiveJwk): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ActiveJwk.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ActiveJwk.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "jwk_lt", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function load_inner_mut(arg0: AuthenticatorState): [AuthenticatorStateInner] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_inner_mut", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        AuthenticatorStateInner.from_bcs(AuthenticatorStateInner.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function load_inner(arg0: AuthenticatorState): [AuthenticatorStateInner] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_inner", [], args);

    return [
        AuthenticatorStateInner.from_bcs(AuthenticatorStateInner.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function check_sorted(arg0: ActiveJwk[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(ActiveJwk.bcs).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_sorted", [], args);

}

function update_authenticator_state(arg0: AuthenticatorState, arg1: ActiveJwk[], arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(ActiveJwk.bcs).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_authenticator_state", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function deduplicate(arg0: ActiveJwk[]): [ActiveJwk[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(ActiveJwk.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deduplicate", [], args);

    return [
        ActiveJwk.from_bcs_vector(bcs_import.vector(ActiveJwk.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function expire_jwks(arg0: AuthenticatorState, arg1: u64_import, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "expire_jwks", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function get_active_jwks(arg0: AuthenticatorState, arg1: TxContext): [ActiveJwk[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_active_jwks", [], args);

    return [
        ActiveJwk.from_bcs_vector(bcs_import.vector(ActiveJwk.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function update_authenticator_state_for_testing(arg0: AuthenticatorState, arg1: ActiveJwk[], arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(ActiveJwk.bcs).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_authenticator_state_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function expire_jwks_for_testing(arg0: AuthenticatorState, arg1: u64_import, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "expire_jwks_for_testing", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function get_active_jwks_for_testing(arg0: AuthenticatorState, arg1: TxContext): [ActiveJwk[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AuthenticatorState.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_active_jwks_for_testing", [], args);

    return [
        ActiveJwk.from_bcs_vector(bcs_import.vector(ActiveJwk.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const authenticator_state = {
    AuthenticatorState,
    AuthenticatorStateInner,
    JWK,
    JwkId,
    ActiveJwk,
    unit_test_poison,
    create,
    create_for_testing,
    create_active_jwk,
    active_jwk_equal,
    jwk_equal,
    jwk_id_equal,
    string_bytes_lt,
    jwk_lt,
    load_inner_mut,
    load_inner,
    check_sorted,
    update_authenticator_state,
    deduplicate,
    expire_jwks,
    get_active_jwks,
    update_authenticator_state_for_testing,
    expire_jwks_for_testing,
    get_active_jwks_for_testing
}