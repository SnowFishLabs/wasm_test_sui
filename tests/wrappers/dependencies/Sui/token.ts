import {
    Option
} from "../MoveStdlib/option";
import {
    TypeName
} from "../MoveStdlib/type_name";
import {
    Balance
} from "./balance";
import {
    Coin,
    TreasuryCap
} from "./coin";
import {
    ID,
    UID
} from "./object";
import {
    TxContext
} from "./tx_context";
import {
    VecMap
} from "./vec_map";
import {
    VecSet
} from "./vec_set";
import {
    Address,
    StructClass,
    get_object_address,
    get_package_address,
    get_wasm,
    String as string_import,
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
let MODULE_NAME: string = "token";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== RuleKey =============================== */

export class RuleKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RuleKey`;

    is_protected: boolean;

    constructor(is_protected: boolean) {
        this.is_protected = is_protected;
    }

    into_value() {
        return {
            is_protected: (this.is_protected as unknown as StructClass).into_value ? (this.is_protected as unknown as StructClass).into_value() : this.is_protected
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
        return RuleKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RuleKey.from_bcs_vector(args)
    }

    get_bcs() {
        return RuleKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RuleKey`
    }

    from(arg: RuleKey) {
        this.is_protected = arg.is_protected;
    }

    static from_bcs(arg: {
        is_protected: boolean
    }): RuleKey {
        return new RuleKey(arg.is_protected)
    }

    static from_bcs_vector(args: {
        is_protected: boolean
    } []): RuleKey[] {
        return args.map(function(arg) {
            return new RuleKey(arg.is_protected)
        })
    }

    static get bcs() {
        return bcs_import.struct("RuleKey", {
            is_protected: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RuleKey(val.is_protected),
        });
    };
}

/* ============================== Token =============================== */

export class Token implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Token`;

    id: UID;
    balance ? : Balance;

    constructor(id: UID, balance ? : Balance) {
        this.id = id;
        this.balance = balance;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            balance: (this.balance as unknown as StructClass).into_value ? (this.balance as unknown as StructClass).into_value() : this.balance
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
        return Token.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Token.from_bcs_vector(args)
    }

    get_bcs() {
        return Token.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Token(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Token(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Token`
    }

    from(arg: Token) {
        this.id = arg.id;
        this.balance = arg.balance;
    }

    static from_bcs(arg: {
        id: UID,
        balance: Balance
    }): Token {
        return new Token(arg.id, arg.balance)
    }

    static from_bcs_vector(args: {
        id: UID,
        balance: Balance
    } []): Token[] {
        return args.map(function(arg) {
            return new Token(arg.id, arg.balance)
        })
    }

    static get bcs() {
        return bcs_import.struct("Token", {
            id: UID.bcs,
            balance: Balance.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Token(val.id, val.balance),
        });
    };
}

/* ============================== TokenPolicyCap =============================== */

export class TokenPolicyCap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TokenPolicyCap`;

    id: UID;
    for_ ? : ID;

    constructor(id: UID, for_ ? : ID) {
        this.id = id;
        this.for_ = for_;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            for_: (this.for_ as unknown as StructClass).into_value ? (this.for_ as unknown as StructClass).into_value() : this.for_
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
        return TokenPolicyCap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TokenPolicyCap.from_bcs_vector(args)
    }

    get_bcs() {
        return TokenPolicyCap.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new TokenPolicyCap(UID.from_id(id));
    }

    static from_id(id: string) {
        return new TokenPolicyCap(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TokenPolicyCap`
    }

    from(arg: TokenPolicyCap) {
        this.id = arg.id;
        this.for_ = arg.for_;
    }

    static from_bcs(arg: {
        id: UID,
        for_: ID
    }): TokenPolicyCap {
        return new TokenPolicyCap(arg.id, arg.for_)
    }

    static from_bcs_vector(args: {
        id: UID,
        for_: ID
    } []): TokenPolicyCap[] {
        return args.map(function(arg) {
            return new TokenPolicyCap(arg.id, arg.for_)
        })
    }

    static get bcs() {
        return bcs_import.struct("TokenPolicyCap", {
            id: UID.bcs,
            for_: ID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TokenPolicyCap(val.id, val.for_),
        });
    };
}

/* ============================== TokenPolicy =============================== */

export class TokenPolicy implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TokenPolicy`;

    id: UID;
    spent_balance ? : Balance;
    rules ? : VecMap < string,
    VecSet < TypeName >> ;

    constructor(id: UID, spent_balance ? : Balance, rules ? : VecMap < string, VecSet < TypeName >> ) {
        this.id = id;
        this.spent_balance = spent_balance;
        this.rules = rules;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            spent_balance: (this.spent_balance as unknown as StructClass).into_value ? (this.spent_balance as unknown as StructClass).into_value() : this.spent_balance,
            rules: (this.rules as unknown as StructClass).into_value ? (this.rules as unknown as StructClass).into_value() : this.rules
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
        return TokenPolicy.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TokenPolicy.from_bcs_vector(args)
    }

    get_bcs() {
        return TokenPolicy.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new TokenPolicy(UID.from_id(id));
    }

    static from_id(id: string) {
        return new TokenPolicy(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TokenPolicy`
    }

    from(arg: TokenPolicy) {
        this.id = arg.id;
        this.spent_balance = arg.spent_balance;
        this.rules = arg.rules;
    }

    static from_bcs(arg: {
        id: UID,
        spent_balance: Balance,
        rules: VecMap < string,
        VecSet < TypeName >>
    }): TokenPolicy {
        return new TokenPolicy(arg.id, arg.spent_balance, arg.rules)
    }

    static from_bcs_vector(args: {
        id: UID,
        spent_balance: Balance,
        rules: VecMap < string,
        VecSet < TypeName >>
    } []): TokenPolicy[] {
        return args.map(function(arg) {
            return new TokenPolicy(arg.id, arg.spent_balance, arg.rules)
        })
    }

    static get bcs() {
        return bcs_import.struct("TokenPolicy", {
            id: UID.bcs,
            spent_balance: Balance.bcs,
            rules: VecMap.bcs(bcs_import.string(), VecSet.bcs(TypeName.bcs)),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TokenPolicy(val.id, val.spent_balance, val.rules),
        });
    };
}

/* ============================== ActionRequest =============================== */

export class ActionRequest implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ActionRequest`;

    name: string;
    amount: u64_import;
    sender: string;
    recipient: Option < string > ;
    spent_balance: Option < Balance > ;
    approvals: VecSet < TypeName > ;

    constructor(name: string, amount: u64_import, sender: string, recipient: Option < string > , spent_balance: Option < Balance > , approvals: VecSet < TypeName > ) {
        this.name = name;
        this.amount = amount;
        this.sender = sender;
        this.recipient = recipient;
        this.spent_balance = spent_balance;
        this.approvals = approvals;
    }

    into_value() {
        return {
            name: (this.name as unknown as StructClass).into_value ? (this.name as unknown as StructClass).into_value() : this.name,
            amount: (this.amount as unknown as StructClass).into_value ? (this.amount as unknown as StructClass).into_value() : this.amount,
            sender: (this.sender as unknown as StructClass).into_value ? (this.sender as unknown as StructClass).into_value() : this.sender,
            recipient: (this.recipient as unknown as StructClass).into_value ? (this.recipient as unknown as StructClass).into_value() : this.recipient,
            spent_balance: (this.spent_balance as unknown as StructClass).into_value ? (this.spent_balance as unknown as StructClass).into_value() : this.spent_balance,
            approvals: (this.approvals as unknown as StructClass).into_value ? (this.approvals as unknown as StructClass).into_value() : this.approvals
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
        return ActionRequest.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ActionRequest.from_bcs_vector(args)
    }

    get_bcs() {
        return ActionRequest.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ActionRequest`
    }

    from(arg: ActionRequest) {
        this.name = arg.name;
        this.amount = arg.amount;
        this.sender = arg.sender;
        this.recipient = arg.recipient;
        this.spent_balance = arg.spent_balance;
        this.approvals = arg.approvals;
    }

    static from_bcs(arg: {
        name: string,
        amount: u64_import,
        sender: string,
        recipient: Option < string > ,
        spent_balance: Option < Balance > ,
        approvals: VecSet < TypeName >
    }): ActionRequest {
        return new ActionRequest(arg.name, arg.amount, arg.sender, arg.recipient, arg.spent_balance, arg.approvals)
    }

    static from_bcs_vector(args: {
        name: string,
        amount: u64_import,
        sender: string,
        recipient: Option < string > ,
        spent_balance: Option < Balance > ,
        approvals: VecSet < TypeName >
    } []): ActionRequest[] {
        return args.map(function(arg) {
            return new ActionRequest(arg.name, arg.amount, arg.sender, arg.recipient, arg.spent_balance, arg.approvals)
        })
    }

    static get bcs() {
        return bcs_import.struct("ActionRequest", {
            name: bcs_import.string(),
            amount: bcs_import.u64(),
            sender: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient: Option.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            spent_balance: Option.bcs(Balance.bcs),
            approvals: VecSet.bcs(TypeName.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ActionRequest(val.name, val.amount, val.sender, val.recipient, val.spent_balance, val.approvals),
        });
    };
}

/* ============================== TokenPolicyCreated =============================== */

export class TokenPolicyCreated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TokenPolicyCreated`;

    id: ID;
    is_mutable: boolean;

    constructor(id: ID, is_mutable: boolean) {
        this.id = id;
        this.is_mutable = is_mutable;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            is_mutable: (this.is_mutable as unknown as StructClass).into_value ? (this.is_mutable as unknown as StructClass).into_value() : this.is_mutable
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
        return TokenPolicyCreated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TokenPolicyCreated.from_bcs_vector(args)
    }

    get_bcs() {
        return TokenPolicyCreated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TokenPolicyCreated`
    }

    from(arg: TokenPolicyCreated) {
        this.id = arg.id;
        this.is_mutable = arg.is_mutable;
    }

    static from_bcs(arg: {
        id: ID,
        is_mutable: boolean
    }): TokenPolicyCreated {
        return new TokenPolicyCreated(arg.id, arg.is_mutable)
    }

    static from_bcs_vector(args: {
        id: ID,
        is_mutable: boolean
    } []): TokenPolicyCreated[] {
        return args.map(function(arg) {
            return new TokenPolicyCreated(arg.id, arg.is_mutable)
        })
    }

    static get bcs() {
        return bcs_import.struct("TokenPolicyCreated", {
            id: ID.bcs,
            is_mutable: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TokenPolicyCreated(val.id, val.is_mutable),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function sender < T0 extends StructClass > (type_args: string[], arg0: ActionRequest): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sender", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function transfer < T0 extends StructClass > (type_args: string[], arg0: Token, arg1: string, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer", type_args, args);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function value < T0 extends StructClass > (type_args: string[], arg0: Token): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function key < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "key", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function zero < T0 extends StructClass > (type_args: string[], arg0: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zero", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function join < T0 extends StructClass > (type_args: string[], arg0: Token, arg1: Token) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "join", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Token);
}

function split < T0 extends StructClass > (type_args: string[], arg0: Token, arg1: u64_import, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "split", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Token);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_zero < T0 extends StructClass > (type_args: string[], arg0: Token) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_zero", type_args, args);
}

function mint < T0 extends StructClass > (type_args: string[], arg0: TreasuryCap, arg1: u64_import, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TreasuryCap);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function burn < T0 extends StructClass > (type_args: string[], arg0: TreasuryCap, arg1: Token) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TreasuryCap);
}

function mint_for_testing < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_for_testing", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function burn_for_testing < T0 extends StructClass > (type_args: string[], arg0: Token) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_for_testing", type_args, args);
}

function keep < T0 extends StructClass > (type_args: string[], arg0: Token, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "keep", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
}

function new_request < T0 extends StructClass > (type_args: string[], arg0: string_import, arg1: u64_import, arg2: Option < Address > , arg3: Option < Balance > , arg4: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_request", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function confirm_request < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: ActionRequest, arg2: TxContext): [Uint8Array, Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, r1, r2, r3, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "confirm_request", type_args, args);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0]),
        new Uint8Array(r3.Raw[0])
    ];
}

function rules < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: string_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rules", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function amount < T0 extends StructClass > (type_args: string[], arg0: ActionRequest): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "amount", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_policy < T0 extends StructClass > (type_args: string[], arg0: TreasuryCap, arg1: TxContext): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_policy", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function share_policy < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "share_policy", type_args, args);
}

function spend < T0 extends StructClass > (type_args: string[], arg0: Token, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "spend", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function to_coin < T0 extends StructClass > (type_args: string[], arg0: Token, arg1: TxContext): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_coin", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function from_coin < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: TxContext): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_coin", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function confirm_request_mut < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: ActionRequest, arg2: TxContext): [Uint8Array, Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, r1, r2, r3, a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "confirm_request_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0]),
        new Uint8Array(r3.Raw[0])
    ];
}

function confirm_with_policy_cap < T0 extends StructClass > (type_args: string[], arg0: TokenPolicyCap, arg1: ActionRequest, arg2: TxContext): [Uint8Array, Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, r1, r2, r3, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "confirm_with_policy_cap", type_args, args);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0]),
        new Uint8Array(r3.Raw[0])
    ];
}

function confirm_with_treasury_cap < T0 extends StructClass > (type_args: string[], arg0: TreasuryCap, arg1: ActionRequest, arg2: TxContext): [Uint8Array, Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, r1, r2, r3, a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "confirm_with_treasury_cap", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TreasuryCap);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0]),
        new Uint8Array(r3.Raw[0])
    ];
}

function add_approval < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T1, arg1: ActionRequest, arg2: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_approval", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as ActionRequest);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function add_rule_config < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: T1, arg1: TokenPolicy, arg2: TokenPolicyCap, arg3: T2, arg4: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_rule_config", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg4.from(arg4.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function rule_config < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: T1, arg1: TokenPolicy): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rule_config", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function rule_config_mut < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: T1, arg1: TokenPolicy, arg2: TokenPolicyCap): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rule_config_mut", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove_rule_config < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: TokenPolicyCap, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_rule_config", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function has_rule_config < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TokenPolicy): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_rule_config", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function has_rule_config_with_type < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: TokenPolicy): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_rule_config_with_type", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function allow < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: TokenPolicyCap, arg2: string_import, arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "allow", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function disallow < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: TokenPolicyCap, arg2: string_import, arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "disallow", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function add_rule_for_action < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: TokenPolicyCap, arg2: string_import, arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_rule_for_action", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function remove_rule_for_action < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: TokenPolicyCap, arg2: string_import, arg3: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_rule_for_action", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])) as TxContext);
}

function flush < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: TreasuryCap, arg2: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0, a1, a2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "flush", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TokenPolicy);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as TreasuryCap);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a2.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_allowed < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: string_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_allowed", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function spent_balance < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "spent_balance", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function transfer_action(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_action", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function spend_action(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "spend_action", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function to_coin_action(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_coin_action", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function from_coin_action(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_coin_action", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function action < T0 extends StructClass > (type_args: string[], arg0: ActionRequest): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "action", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function recipient < T0 extends StructClass > (type_args: string[], arg0: ActionRequest): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "recipient", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function approvals < T0 extends StructClass > (type_args: string[], arg0: ActionRequest): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "approvals", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function spent < T0 extends StructClass > (type_args: string[], arg0: ActionRequest): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "spent", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_policy_for_testing < T0 extends StructClass > (type_args: string[], arg0: TxContext): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_policy_for_testing", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function burn_policy_for_testing < T0 extends StructClass > (type_args: string[], arg0: TokenPolicy, arg1: TokenPolicyCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_policy_for_testing", type_args, args);
}

export const token = {
    RuleKey,
    Token,
    TokenPolicyCap,
    TokenPolicy,
    ActionRequest,
    TokenPolicyCreated,
    unit_test_poison,
    sender,
    transfer,
    value,
    key,
    zero,
    join,
    split,
    destroy_zero,
    mint,
    burn,
    mint_for_testing,
    burn_for_testing,
    keep,
    new_request,
    confirm_request,
    rules,
    amount,
    new_policy,
    share_policy,
    spend,
    to_coin,
    from_coin,
    confirm_request_mut,
    confirm_with_policy_cap,
    confirm_with_treasury_cap,
    add_approval,
    add_rule_config,
    rule_config,
    rule_config_mut,
    remove_rule_config,
    has_rule_config,
    has_rule_config_with_type,
    allow,
    disallow,
    add_rule_for_action,
    remove_rule_for_action,
    flush,
    is_allowed,
    spent_balance,
    transfer_action,
    spend_action,
    to_coin_action,
    from_coin_action,
    action,
    recipient,
    approvals,
    spent,
    new_policy_for_testing,
    burn_policy_for_testing
}