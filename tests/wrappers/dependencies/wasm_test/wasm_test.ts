import {
    UID
} from "../Sui/object";
import {
    Url
} from "../Sui/url";
import {
    StructClass,
    TypeArgument,
    U16,
    U64,
    U8,
    copy_arr_value,
    get_object_address,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    to_arr_value,
    String as string_import,
    u64 as u64_import
} from "@deepmove/sui";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "wasm_test";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000000";
let MODULE_NAME: string = "wasm_test";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== MyUrl =============================== */

export class MyUrl implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MyUrl`;

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
        return MyUrl.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MyUrl.from_bcs_vector(args)
    }

    get_bcs() {
        return MyUrl.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MyUrl`
    }

    from(arg: MyUrl) {
        this.url = arg.url;
    }

    static from_bcs(arg: {
        url: string
    }): MyUrl {
        return new MyUrl(arg.url)
    }

    static from_bcs_vector(args: {
        url: string
    } []): MyUrl[] {
        return args.map(function(arg) {
            return new MyUrl(arg.url)
        })
    }

    static get bcs() {
        return bcs_import.struct("MyUrl", {
            url: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MyUrl(val.url),
        });
    };
}

/* ============================== MyObject =============================== */

export class MyObject implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MyObject`;

    id: UID;
    name ? : string;
    num ? : number;

    constructor(id: UID, name ? : string, num ? : number) {
        this.id = id;
        this.name = name;
        this.num = num;
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
        return MyObject.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MyObject.from_bcs_vector(args)
    }

    get_bcs() {
        return MyObject.bcs
    }

    get_value() {
        return this
    }

    $id() {
        return this.id.id.bytes;
    }

    static from_key(key: string) {
        let id = get_object_address(key);
        return new MyObject(UID.from_id(id));
    }

    static from_id(id: string) {
        return new MyObject(UID.from_id(id));
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MyObject`
    }

    from(arg: MyObject) {
        this.id = arg.id;
        this.name = arg.name;
        this.num = arg.num;
    }

    static from_bcs(arg: {
        id: UID,
        name: string,
        num: number
    }): MyObject {
        return new MyObject(arg.id, arg.name, arg.num)
    }

    static from_bcs_vector(args: {
        id: UID,
        name: string,
        num: number
    } []): MyObject[] {
        return args.map(function(arg) {
            return new MyObject(arg.id, arg.name, arg.num)
        })
    }

    static get bcs() {
        return bcs_import.struct("MyObject", {
            id: UID.bcs,
            name: bcs_import.string(),
            num: bcs_import.u16(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MyObject(val.id, val.name, val.num),
        });
    };
}

/* ============================== MyStruct =============================== */

export class MyStruct implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MyStruct`;

    id: number;
    name: string;
    urls: MyUrl[];

    constructor(id: number, name: string, urls: MyUrl[]) {
        this.id = id;
        this.name = name;
        this.urls = urls;
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
        return MyStruct.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MyStruct.from_bcs_vector(args)
    }

    get_bcs() {
        return MyStruct.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MyStruct`
    }

    from(arg: MyStruct) {
        this.id = arg.id;
        this.name = arg.name;
        this.urls = arg.urls;
    }

    static from_bcs(arg: {
        id: number,
        name: string,
        urls: MyUrl[]
    }): MyStruct {
        return new MyStruct(arg.id, arg.name, arg.urls)
    }

    static from_bcs_vector(args: {
        id: number,
        name: string,
        urls: MyUrl[]
    } []): MyStruct[] {
        return args.map(function(arg) {
            return new MyStruct(arg.id, arg.name, arg.urls)
        })
    }

    static get bcs() {
        return bcs_import.struct("MyStruct", {
            id: bcs_import.u8(),
            name: bcs_import.string(),
            urls: bcs_import.vector(MyUrl.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MyStruct(val.id, val.name, val.urls),
        });
    };
}

/* ============================== MyStructT =============================== */

export class MyStructT < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MyStructT`;

    id: number;
    name: string;
    x: Foo < T0 > ;
    y: Foo3;

    T0_bcs: any;

    constructor(id: number, name: string, x: Foo < T0 > , y: Foo3) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }

    into_value() {
        return {
            id: (this.id as unknown as StructClass).into_value ? (this.id as unknown as StructClass).into_value() : this.id,
            name: (this.name as unknown as StructClass).into_value ? (this.name as unknown as StructClass).into_value() : this.name,
            x: (this.x as unknown as StructClass).into_value ? (this.x as unknown as StructClass).into_value() : this.x,
            y: (this.y as unknown as StructClass).into_value ? (this.y as unknown as StructClass).into_value() : this.y
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
        return MyStructT.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MyStructT.from_bcs_vector(args)
    }

    get_bcs() {
        return MyStructT.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MyStructT`
    }

    from(arg: MyStructT < T0 > ) {
        this.id = arg.id;
        this.name = arg.name;
        this.x = arg.x;
        this.y = arg.y;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        id: number,
        name: string,
        x: Foo < T0 > ,
        y: Foo3
    }): MyStructT < T0 > {
        return new MyStructT(arg.id, arg.name, arg.x, arg.y)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        id: number,
        name: string,
        x: Foo < T0 > ,
        y: Foo3
    } []): MyStructT < T0 > [] {
        return args.map(function(arg) {
            return new MyStructT(arg.id, arg.name, arg.x, arg.y)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`MyStructT<${T0.name}>`, {
                id: bcs_import.u8(),
                name: bcs_import.string(),
                x: Foo.bcs(T0),
                y: Foo3.bcs,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new MyStructT(val.id, val.name, val.x, val.y),
            });
    };
}

/* ============================== Foo3 =============================== */

export class Foo3 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Foo3`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
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
        return Foo3.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Foo3.from_bcs_vector(args)
    }

    get_bcs() {
        return Foo3.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Foo3`
    }

    from(arg: Foo3) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Foo3 {
        return new Foo3(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Foo3[] {
        return args.map(function(arg) {
            return new Foo3(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Foo3", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Foo3(val.dummy_field),
        });
    };
}

/* ============================== Foo =============================== */

export class Foo < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Foo`;

    x: T0;
    for_: T0;

    T0_bcs: any;

    constructor(x: T0, for_: T0) {
        this.x = x;
        this.for_ = for_;
    }

    into_value() {
        return {
            x: (this.x as StructClass).into_value ? (this.x as StructClass).into_value() : this.x,
            for_: (this.for_ as StructClass).into_value ? (this.for_ as StructClass).into_value() : this.for_
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
        return Foo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Foo.from_bcs_vector(args)
    }

    get_bcs() {
        return Foo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Foo`
    }

    from(arg: Foo < T0 > ) {
        this.x = arg.x;
        this.for_ = arg.for_;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        x: T0,
        for_: T0
    }): Foo < T0 > {
        return new Foo(arg.x, arg.for_)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        x: T0,
        for_: T0
    } []): Foo < T0 > [] {
        return args.map(function(arg) {
            return new Foo(arg.x, arg.for_)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Foo<${T0.name}>`, {
                x: T0,
                for_: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Foo(val.x, val.for_),
            });
    };
}

/* ============================== Foo2 =============================== */

export class Foo2 < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Foo2`;

    num1: number;
    x: T0;
    num2: number;
    y: T0;
    z: T0;
    num3: boolean;
    v: T1[][];

    T0_bcs: any;
    T1_bcs: any;

    constructor(num1: number, x: T0, num2: number, y: T0, z: T0, num3: boolean, v: T1[][]) {
        this.num1 = num1;
        this.x = x;
        this.num2 = num2;
        this.y = y;
        this.z = z;
        this.num3 = num3;
        this.v = v;
    }

    into_value() {
        return {
            num1: (this.num1 as unknown as StructClass).into_value ? (this.num1 as unknown as StructClass).into_value() : this.num1,
            x: (this.x as StructClass).into_value ? (this.x as StructClass).into_value() : this.x,
            num2: (this.num2 as unknown as StructClass).into_value ? (this.num2 as unknown as StructClass).into_value() : this.num2,
            y: (this.y as StructClass).into_value ? (this.y as StructClass).into_value() : this.y,
            z: (this.z as StructClass).into_value ? (this.z as StructClass).into_value() : this.z,
            num3: (this.num3 as unknown as StructClass).into_value ? (this.num3 as unknown as StructClass).into_value() : this.num3,
            v: into_arr_value(this.v)
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.v) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.v) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.v) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.x) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.v) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.x) as StructClass).get_bcs(), (to_arr_value(this.v) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Foo2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Foo2.from_bcs_vector(args)
    }

    get_bcs() {
        return Foo2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Foo2`
    }

    from(arg: Foo2 < T0, T1 > ) {
        this.num1 = arg.num1;
        this.x = arg.x;
        this.num2 = arg.num2;
        this.y = arg.y;
        this.z = arg.z;
        this.num3 = arg.num3;
        this.v = arg.v;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        num1: number,
        x: T0,
        num2: number,
        y: T0,
        z: T0,
        num3: boolean,
        v: T1[][]
    }): Foo2 < T0,
    T1 > {
        return new Foo2(arg.num1, arg.x, arg.num2, arg.y, arg.z, arg.num3, arg.v)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        num1: number,
        x: T0,
        num2: number,
        y: T0,
        z: T0,
        num3: boolean,
        v: T1[][]
    } []): Foo2 < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new Foo2(arg.num1, arg.x, arg.num2, arg.y, arg.z, arg.num3, arg.v)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`Foo2<${T0.name}, ${T1.name}>`, {
                num1: bcs_import.u16(),
                x: T0,
                num2: bcs_import.u16(),
                y: T0,
                z: T0,
                num3: bcs_import.bool(),
                v: bcs_import.vector(bcs_import.vector(T1)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Foo2(val.num1, val.x, val.num2, val.y, val.z, val.num3, val.v),
            });
    };
}

/* ============================== SetStringEvent =============================== */

export class SetStringEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SetStringEvent`;

    str: string;

    constructor(str: string) {
        this.str = str;
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
        return SetStringEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SetStringEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return SetStringEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SetStringEvent`
    }

    from(arg: SetStringEvent) {
        this.str = arg.str;
    }

    static from_bcs(arg: {
        str: string
    }): SetStringEvent {
        return new SetStringEvent(arg.str)
    }

    static from_bcs_vector(args: {
        str: string
    } []): SetStringEvent[] {
        return args.map(function(arg) {
            return new SetStringEvent(arg.str)
        })
    }

    static get bcs() {
        return bcs_import.struct("SetStringEvent", {
            str: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SetStringEvent(val.str),
        });
    };
}

/* ============================== S =============================== */

export class S implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::S`;

    f: u64_import;

    constructor(f: u64_import) {
        this.f = f;
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
        return S.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return S.from_bcs_vector(args)
    }

    get_bcs() {
        return S.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::S`
    }

    from(arg: S) {
        this.f = arg.f;
    }

    static from_bcs(arg: {
        f: u64_import
    }): S {
        return new S(arg.f)
    }

    static from_bcs_vector(args: {
        f: u64_import
    } []): S[] {
        return args.map(function(arg) {
            return new S(arg.f)
        })
    }

    static get bcs() {
        return bcs_import.struct("S", {
            f: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new S(val.f),
        });
    };
}

function unit_test_poison() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unit_test_poison", [], args);

}

function new_(): [S] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    return [
        S.from_bcs(S.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_vec(): [string, string, number, number[], MyUrl] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0, r1, r2, r3, r4] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_vec", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        bcs_import.string().parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u8().parse(new Uint8Array(r2.Raw[0])),
        bcs_import.vector(bcs_import.u16()).parse(new Uint8Array(r3.Raw[0])),
        MyUrl.from_bcs(MyUrl.bcs.parse(new Uint8Array(r4.Raw[0])))
    ];
}

function get_str(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_str", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_int(arg0: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_int", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_struct(): [MyStruct] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_struct", [], args);

    return [
        MyStruct.from_bcs(MyStruct.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_struct(arg0: MyStruct): [MyStruct[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MyStruct.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_struct", [], args);

    return [
        MyStruct.from_bcs_vector(bcs_import.vector(MyStruct.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_struct_t < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_struct_t", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_struct_t2 < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_struct_t2", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_foo2 < T0 extends StructClass > (type_args: string[], arg0: Foo < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo2", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_foo_str(arg0: Foo < string > ): [Foo < string > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Foo.bcs(bcs_import.string()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo_str", [], args);

    return [
        Foo.from_bcs(Foo.bcs(bcs_import.string()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_foo(arg0: Foo < number > ): [Foo < number > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Foo.bcs(bcs_import.u16()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo", [], args);

    return [
        Foo.from_bcs(Foo.bcs(bcs_import.u16()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_foo_vector(arg0: Foo < number > []): [Foo < number > []] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Foo.bcs(bcs_import.u16())).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo_vector", [], args);

    return [
        Foo.from_bcs_vector < number > (bcs_import.vector(Foo.bcs(bcs_import.u16())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_foo_vector2 < T0 extends StructClass > (type_args: string[], arg0: Foo < T0 > []): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo_vector2", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_foo_vector3 < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo_vector3", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_foo_vector5 < T0 extends StructClass > (type_args: string[], arg0: U8[], arg1: U64[][]): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo_vector5", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function get_foo(): [Foo < number > ] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_foo", [], args);

    return [
        Foo.from_bcs(Foo.bcs(bcs_import.u16()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_foo3(arg0: Foo2 < number, number > ): [Foo2 < number, number > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Foo2.bcs(bcs_import.u8(), bcs_import.u16()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo3", [], args);

    return [
        Foo2.from_bcs(Foo2.bcs(bcs_import.u8(), bcs_import.u16()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_foo5 < T0 extends StructClass > (type_args: string[], arg0: Foo2 < T0, U16 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo5", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_foo6 < T0 extends StructClass > (type_args: string[], arg0: Foo2 < Foo2 < T0, U16 > , U8 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo6", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_sui_url(): [Url] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_sui_url", [], args);

    return [
        Url.from_bcs(Url.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_myobject(arg0: MyObject): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MyObject.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_myobject", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_online_val(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_online_val", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_mut_string(arg0: number, arg1: string_import): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u8().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_mut_string", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_string(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_string", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_foo7 < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Foo2 < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo7", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Foo2 < T0, T1 > );
}

function set_foo8 < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Foo2 < T0, T1 > []) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_foo8", type_args, args);
    copy_arr_value(into_arr_bcs_vector(arg0).parse(new Uint8Array(a0.Raw[0])), arg0);
}

function use_const(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "use_const", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function aaa() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aaa", [], args);

}

function set_entry() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_entry", [], args);

}

function set_entry2(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_entry2", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function loop2() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "loop2", [], args);

}

function leak_f(arg0: S): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(S.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "leak_f", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_u8(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_u8", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function overflow(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "overflow", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function precision_loss(arg0: number, arg1: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u16().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "precision_loss", [], args);

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const wasm_test = {
    MyUrl,
    MyObject,
    MyStruct,
    MyStructT,
    Foo3,
    Foo,
    Foo2,
    SetStringEvent,
    S,
    unit_test_poison,
    new_,
    get,
    get_vec,
    get_str,
    set_int,
    get_struct,
    set_struct,
    set_struct_t,
    set_struct_t2,
    set_foo2,
    set_foo_str,
    set_foo,
    set_foo_vector,
    set_foo_vector2,
    set_foo_vector3,
    set_foo_vector5,
    get_foo,
    set_foo3,
    set_foo5,
    set_foo6,
    get_sui_url,
    set_myobject,
    get_online_val,
    set_mut_string,
    set_string,
    set_foo7,
    set_foo8,
    use_const,
    aaa,
    set_entry,
    set_entry2,
    loop2,
    leak_f,
    get_u8,
    overflow,
    precision_loss
}