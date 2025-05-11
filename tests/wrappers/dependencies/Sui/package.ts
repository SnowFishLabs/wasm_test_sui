import {
    ID,
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
let MODULE_NAME: string = "package";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Publisher =============================== */

export class Publisher implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Publisher`;

    id: UID;
    package_ ? : string;
    module_name ? : string;

    constructor(id: UID, package_ ? : string, module_name ? : string) {
        this.id = id;
        this.package_ = package_;
        this.module_name = module_name;
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
        return Publisher.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Publisher.from_bcs_vector(args)
    }

    get_bcs() {
        return Publisher.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new Publisher(UID.from_id(id));
    }

    static from_id(id: string) {
        return new Publisher(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Publisher`
    }

    from(arg: Publisher) {
        this.id = arg.id;
        this.package_ = arg.package_;
        this.module_name = arg.module_name;
    }

    static from_bcs(arg: {
        id: UID,
        package_: string,
        module_name: string
    }): Publisher {
        return new Publisher(arg.id, arg.package_, arg.module_name)
    }

    static from_bcs_vector(args: {
        id: UID,
        package_: string,
        module_name: string
    } []): Publisher[] {
        return args.map(function(arg) {
            return new Publisher(arg.id, arg.package_, arg.module_name)
        })
    }

    static get bcs() {
        return bcs_import.struct("Publisher", {
            id: UID.bcs,
            package_: bcs_import.string(),
            module_name: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Publisher(val.id, val.package_, val.module_name),
        });
    };
}

/* ============================== UpgradeCap =============================== */

export class UpgradeCap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpgradeCap`;

    id: UID;
    package_ ? : ID;
    version ? : u64_import;
    policy ? : number;

    constructor(id: UID, package_ ? : ID, version ? : u64_import, policy ? : number) {
        this.id = id;
        this.package_ = package_;
        this.version = version;
        this.policy = policy;
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
        return UpgradeCap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpgradeCap.from_bcs_vector(args)
    }

    get_bcs() {
        return UpgradeCap.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new UpgradeCap(UID.from_id(id));
    }

    static from_id(id: string) {
        return new UpgradeCap(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpgradeCap`
    }

    from(arg: UpgradeCap) {
        this.id = arg.id;
        this.package_ = arg.package_;
        this.version = arg.version;
        this.policy = arg.policy;
    }

    static from_bcs(arg: {
        id: UID,
        package_: ID,
        version: u64_import,
        policy: number
    }): UpgradeCap {
        return new UpgradeCap(arg.id, arg.package_, arg.version, arg.policy)
    }

    static from_bcs_vector(args: {
        id: UID,
        package_: ID,
        version: u64_import,
        policy: number
    } []): UpgradeCap[] {
        return args.map(function(arg) {
            return new UpgradeCap(arg.id, arg.package_, arg.version, arg.policy)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpgradeCap", {
            id: UID.bcs,
            package_: ID.bcs,
            version: bcs_import.u64(),
            policy: bcs_import.u8(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpgradeCap(val.id, val.package_, val.version, val.policy),
        });
    };
}

/* ============================== UpgradeTicket =============================== */

export class UpgradeTicket implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpgradeTicket`;

    cap: ID;
    package_: ID;
    policy: number;
    digest: number[];

    constructor(cap: ID, package_: ID, policy: number, digest: number[]) {
        this.cap = cap;
        this.package_ = package_;
        this.policy = policy;
        this.digest = digest;
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
        return UpgradeTicket.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpgradeTicket.from_bcs_vector(args)
    }

    get_bcs() {
        return UpgradeTicket.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpgradeTicket`
    }

    from(arg: UpgradeTicket) {
        this.cap = arg.cap;
        this.package_ = arg.package_;
        this.policy = arg.policy;
        this.digest = arg.digest;
    }

    static from_bcs(arg: {
        cap: ID,
        package_: ID,
        policy: number,
        digest: number[]
    }): UpgradeTicket {
        return new UpgradeTicket(arg.cap, arg.package_, arg.policy, arg.digest)
    }

    static from_bcs_vector(args: {
        cap: ID,
        package_: ID,
        policy: number,
        digest: number[]
    } []): UpgradeTicket[] {
        return args.map(function(arg) {
            return new UpgradeTicket(arg.cap, arg.package_, arg.policy, arg.digest)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpgradeTicket", {
            cap: ID.bcs,
            package_: ID.bcs,
            policy: bcs_import.u8(),
            digest: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpgradeTicket(val.cap, val.package_, val.policy, val.digest),
        });
    };
}

/* ============================== UpgradeReceipt =============================== */

export class UpgradeReceipt implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpgradeReceipt`;

    cap: ID;
    package_: ID;

    constructor(cap: ID, package_: ID) {
        this.cap = cap;
        this.package_ = package_;
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
        return UpgradeReceipt.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpgradeReceipt.from_bcs_vector(args)
    }

    get_bcs() {
        return UpgradeReceipt.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpgradeReceipt`
    }

    from(arg: UpgradeReceipt) {
        this.cap = arg.cap;
        this.package_ = arg.package_;
    }

    static from_bcs(arg: {
        cap: ID,
        package_: ID
    }): UpgradeReceipt {
        return new UpgradeReceipt(arg.cap, arg.package_)
    }

    static from_bcs_vector(args: {
        cap: ID,
        package_: ID
    } []): UpgradeReceipt[] {
        return args.map(function(arg) {
            return new UpgradeReceipt(arg.cap, arg.package_)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpgradeReceipt", {
            cap: ID.bcs,
            package_: ID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpgradeReceipt(val.cap, val.package_),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function version(arg0: UpgradeCap): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "version", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function claim < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "claim", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function claim_and_keep < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: TxContext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "claim_and_keep", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
}

function burn_publisher(arg0: Publisher) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Publisher.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_publisher", [], args);

}

function from_package < T0 extends StructClass > (type_args: string[], arg0: Publisher): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_package", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function from_module < T0 extends StructClass > (type_args: string[], arg0: Publisher): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_module", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function published_module(arg0: Publisher): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Publisher.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "published_module", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function published_package(arg0: Publisher): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Publisher.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "published_package", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function upgrade_package(arg0: UpgradeCap): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_package", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upgrade_policy(arg0: UpgradeCap): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_policy", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ticket_package(arg0: UpgradeTicket): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeTicket.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ticket_package", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ticket_policy(arg0: UpgradeTicket): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeTicket.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ticket_policy", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function receipt_cap(arg0: UpgradeReceipt): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeReceipt.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receipt_cap", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function receipt_package(arg0: UpgradeReceipt): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeReceipt.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "receipt_package", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ticket_digest(arg0: UpgradeTicket): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeTicket.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ticket_digest", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function compatible_policy(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "compatible_policy", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function additive_policy(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "additive_policy", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function dep_only_policy(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "dep_only_policy", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function only_additive_upgrades(arg0: UpgradeCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "only_additive_upgrades", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function only_dep_upgrades(arg0: UpgradeCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "only_dep_upgrades", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function make_immutable(arg0: UpgradeCap) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "make_immutable", [], args);

}

function authorize_upgrade(arg0: UpgradeCap, arg1: number, arg2: number[]): [UpgradeTicket] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "authorize_upgrade", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        UpgradeTicket.from_bcs(UpgradeTicket.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commit_upgrade(arg0: UpgradeCap, arg1: UpgradeReceipt) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UpgradeReceipt.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commit_upgrade", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function test_claim < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: TxContext): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_claim", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as TxContext);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function test_publish(arg0: ID, arg1: TxContext): [UpgradeCap] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TxContext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_publish", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        UpgradeCap.from_bcs(UpgradeCap.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function test_upgrade(arg0: UpgradeTicket): [UpgradeReceipt] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeTicket.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_upgrade", [], args);

    return [
        UpgradeReceipt.from_bcs(UpgradeReceipt.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function restrict(arg0: UpgradeCap, arg1: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradeCap.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "restrict", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

export const package_ = {
    Publisher,
    UpgradeCap,
    UpgradeTicket,
    UpgradeReceipt,
    unit_test_poison,
    version,
    claim,
    claim_and_keep,
    burn_publisher,
    from_package,
    from_module,
    published_module,
    published_package,
    upgrade_package,
    upgrade_policy,
    ticket_package,
    ticket_policy,
    receipt_cap,
    receipt_package,
    ticket_digest,
    compatible_policy,
    additive_policy,
    dep_only_policy,
    only_additive_upgrades,
    only_dep_upgrades,
    make_immutable,
    authorize_upgrade,
    commit_upgrade,
    test_claim,
    test_publish,
    test_upgrade,
    restrict
}