/// Module: wasm_test
module wasm_test::wasm_test {
    use sui::event::{emit};
    use std::string::{Self, String};
    use sui::url::{Self, Url};

    const EInvalidASCIICharacter: u64 = 0x10086;
    const EInvalidASCIICharacte2r: u64 = 0x100;

    // struct Agent<phantom CoinType> has key, store {
    //     balance: Balance<CoinType>
    // }

    public struct MyUrl has store, copy, drop {
        url: String,
    }

    public struct MyObject has key {
        id: UID,
        name: String,
        num: u16,
    }

    public struct MyStruct has drop {
        id: u8,
        name: String,
        urls: vector<MyUrl>
    }

    public struct MyStructT<T, phantom T1> {
        id: u8,
        name: String,
        x: Foo<T>,
        y: Foo3<T1>
    }

    public struct Foo3<phantom T> has drop {
    }

    public struct Foo<T> {
        x: T,
        `for`: T,
    }

    public struct Foo2<T0, T1> {
        num1: u16,
        x: T0,
        num2: u16,
        y: T0,
        z: T0,
        num3: bool,
        v: vector<vector<T1>>
    }

    public fun get(): u8 {
        10
    }

    public fun get_vec(): (address, String, u8, vector<u16>, MyUrl) {
        let mut v = vector::empty<u16>();
        vector::push_back(&mut v, 10);
        vector::push_back(&mut v, 20);
        // assert!(v.length() == 0,
        // 1);
        (@0x0000000000000000000000000000000089b9f9d1fadc027cf9532d6f99041522, string::utf8(b"JUSTIN_MFT"), 10, v, MyUrl {
            url: string::utf8(b"www.baidu.com")
        })
    }

    public fun get_str(): String {
        string::utf8(b"JUSTIN_NFT")
    }

    public fun set_int(num: u64): u64 {
        num
    }

    public fun get_struct(): MyStruct {
        MyStruct {
            id: 100,
            name: string::utf8(b"get_struct"),
            urls: vector[]
        }
    }

    public fun set_struct(v: MyStruct): vector<MyStruct> {
        let mut r = vector[];
        vector::push_back(&mut r, v);
        r
    }

    public fun set_struct_t<T>(id: T): vector<T> {
        let mut v = vector[];
        vector::push_back(&mut v, id);
        v
    }

    public fun set_struct_t2<T>(id: T): T {
        id
    }

    public fun set_foo2<T>(a: Foo<T>): Foo<T> {
        a
    }

    public fun set_foo_str(a: Foo<String>): Foo<String> {
        a
    }

    public fun set_foo(a: Foo<u16>): Foo<u16> {
        a
    }

    public fun set_foo_vector(a: vector<Foo<u16>>): vector<Foo<u16>> {
        a
    }

    public fun set_foo_vector2<T>(a: vector<Foo<T>>): vector<Foo<T>> {
        a
    }

    public fun set_foo_vector3<T>(): vector<Foo<T>> {
        vector[]
    }

    public fun set_foo_vector5<T>(_bytes: &vector<u8>, v: vector<vector<u64>>): (vector<Foo<T>>, vector<vector<u64>>) {
        (vector[], v)
    }

    public fun get_foo(): Foo<u16> {
        Foo<u16> {
            x: 100,
            `for`: 200
        }
    }

    public fun set_foo3(a: Foo2<u8, u16>): Foo2<u8, u16> {
        a
    }

    public fun set_foo5<T>(a: Foo2<T, u16>): Foo2<T, u16> {
        a
    }

    public fun set_foo6<T>(a: Foo2<Foo2<T, u16>, u8>): Foo2<Foo2<T, u16>, u8> {
        a
    }

    // public fun create_agent<T>(): Agent<T> {
    //     let agent = Agent<T> {
    //         balance: balance::zero()
    //     };
    //     agent
    // }

    fun get_sui_url(): Url {
        url::new_unsafe_from_bytes(b"www.baidu.com")
    }

    public fun set_myobject(obj: &mut MyObject): u16 {
        obj.num = 100;
        100
    }

    public fun get_online_val(): u64 {
        // error::incorrect_version()
        // 69
        1400
    }

    public fun set_mut_string(num: u8, str: &mut String): u8 {
        string::append(str, string::utf8(b"mut string"));
        num
    }

    public struct SetStringEvent has copy, drop {
        str: String,
    }

    public fun set_string(str: String): String {
        emit(SetStringEvent {
            str
        });
        str
    }

    public fun set_foo7<T0, T1>(a: &mut Foo2<T0, T1>){
        a.num1 = 100
    }

    public fun set_foo8<T0, T1>(a: &mut vector<Foo2<T0, T1>>){
        a[0].num1 = 100
    }

    public fun use_const(): u64 {
        let a = EInvalidASCIICharacter;
        let mut b: u64 = 100;
        let c = EInvalidASCIICharacte2r;
        let (_, _, r, _, u) = get_vec();
        std::debug::print(&u);
        let s = get_struct();
        b = b + (s.id as u64);
        // b = a;
        b = b + (r as u64);
        set_struct(s);
        b
    }

    public fun aaa() {

    }

    entry fun set_entry() {
        let a = EInvalidASCIICharacter;
        use_const();
    }

    fun set_entry2(): u64 {
        let a = use_const();
        if (a > 0) {
            a + 1
        } else {
            a
        }
    }

    fun loop2() {
        let mut i: u128 = 1;
        while (true) {
            let a = use_const();
            // let b = a + 1;
            // if (b > 10000) {
            //     return
            // }
            i = i + 1;
            if (i > 100) {
                break;
            } else {
                continue;
            }
        }
    }

    public struct S { f: u64 }

    public fun new(): S {
        S { f: 10 }
    }

    // should complain
    public fun leak_f(s: &mut S): &mut u64 {
        &mut s.f
    }

    fun get_u8(): u8 {
        0xFF
    }

    public fun overflow(): u8 {
        let mut a: u8 = 0xFF;
        a = a - 2;
        a + 3
    }

    fun precision_loss(a: u16, b: u16): u16 {
        let minimum_alive = (a / (a+10)) * (b * 100);
        minimum_alive
    }
}