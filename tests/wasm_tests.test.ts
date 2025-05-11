import { setup, String, U16, U64, U8, new_wasm, beforeTest, afterTest, afterTestAll, get_wasm } from '@deepmove/sui';
import { afterEach, beforeEach, afterAll, describe, expect, it } from 'vitest';
import { Foo, Foo2, wasm_test } from './wrappers/dependencies/wasm_test/wasm_test';
import { bcs } from '@mysten/bcs';

let package_path = process.cwd();

setup(get_wasm(), package_path);
beforeEach(beforeTest)
afterEach(afterTest)
afterAll(afterTestAll);

describe('wasm_tests', () => {
    it('test get function', () => {
        let [r] = wasm_test.get();

        expect(r).toEqual(10)
    });

    it('test get_vec function', () => {
        let [r1, r2, r3, r4, r5] = wasm_test.get_vec();

        expect(r1).toEqual("0000000000000000000000000000000089b9f9d1fadc027cf9532d6f99041522")
        expect(r2).toEqual("JUSTIN_MFT")
        expect(r3).toEqual(10)
        expect(r4[0]).toEqual(10)
        expect(r4[1]).toEqual(20)
        expect(r5.url).toEqual("www.baidu.com")
    });

    it('test get_str function', () => {
        let [r1] = wasm_test.get_str();

        expect(r1).toEqual("JUSTIN_NFT")
    });

    it('test set_int function', () => {
        let [r1] = wasm_test.set_int(10086);

        expect(r1).toEqual('10086')
    });

    it('test get_struct function', () => {
        let [r1] = wasm_test.get_struct();

        expect(r1.id).toEqual(100)
        expect(r1.name).toEqual("get_struct")
        expect(r1.urls.length).toEqual(0)
    });

    it('test set_struct no urls function', () => {
        let [[r1]] = wasm_test.set_struct(new wasm_test.MyStruct(123, "bbb", []));

        expect(r1.id).toEqual(123)
        expect(r1.name).toEqual("bbb")
        expect(r1.urls.length).toEqual(0)
    });

    it('test set_struct urls function', () => {
        let [[r1]] = wasm_test.set_struct(new wasm_test.MyStruct(123, "bbb", [new wasm_test.MyUrl("www.163.com")]));

        expect(r1.id).toEqual(123)
        expect(r1.name).toEqual("bbb")
        expect(r1.urls.length).toEqual(1)
        expect(r1.urls[0].url).toEqual("www.163.com")
    });

    it('test set_struct_t function', () => {
        let v = new wasm_test.MyStruct(123, "bbb", [new wasm_test.MyUrl("www.163.com")]);
        let [r1_bcs] = wasm_test.set_struct_t([v.$type], v);

        let [r1] = bcs.vector(wasm_test.MyStruct.bcs).parse(r1_bcs);
        expect(r1.id).toEqual(123)
        expect(r1.name).toEqual("bbb")
        expect(r1.urls.length).toEqual(1)
        expect(r1.urls[0].url).toEqual("www.163.com")
    });

    it('test set_struct_t2 function', () => {
        let v = new wasm_test.MyStruct(123, "bbb", [new wasm_test.MyUrl("www.163.com")]);
        let [r1_bcs] = wasm_test.set_struct_t2([v.$type], v);

        let r1 = wasm_test.MyStruct.bcs.parse(r1_bcs);
        expect(r1.id).toEqual(123)
        expect(r1.name).toEqual("bbb")
        expect(r1.urls.length).toEqual(1)
        expect(r1.urls[0].url).toEqual("www.163.com")
    });

    it('test set_foo2 function', () => {
        let foo_x = new U8(16);
        let foo_y = new U8(32);
        let foo = new Foo(foo_x, foo_y);
        let [r1_bcs] = wasm_test.set_foo2([foo_x.$type], foo);

        let foo_r = foo.from_bcs_t(r1_bcs);
        expect(foo_r.x).toEqual(foo_x)
        expect(foo_r.for_).toEqual(foo_y)
    });

    it('test set_foo_str function', () => {
        let foo = new Foo<string>("foo_x", "foo_y");
        let [r1] = wasm_test.set_foo_str(foo);

        expect(r1.x).toEqual("foo_x")
        expect(r1.for_).toEqual("foo_y")
    });

    it('test set_foo function', () => {
        let foo = new Foo<number>(16, 32);
        let [r1] = wasm_test.set_foo(foo);

        expect(r1.x).toEqual(16)
        expect(r1.for_).toEqual(32)
    });

    it('test set_foo_vector function', () => {
        let foo = new Foo<number>(16, 32);
        let [[r1]] = wasm_test.set_foo_vector([foo]);

        expect(r1.x).toEqual(16)
        expect(r1.for_).toEqual(32)
    });

    it('test set_foo_vector2 function', () => {
        let foo_x = new U8(16);
        let foo_y = new U8(32);
        let foo = new Foo(foo_x, foo_y);
        let [r1_bcs] = wasm_test.set_foo_vector2([foo_x.$type], [foo]);

        let [r1] = foo.from_bcs_vector_t(r1_bcs);
        expect(r1.x).toEqual(foo_x)
        expect(r1.for_).toEqual(foo_y)
    });

    it('test set_foo_vector3 function', () => {
        let [r1_bcs] = wasm_test.set_foo_vector3([U8.$type()]);

        let r1 = bcs.vector(Foo.bcs(U8.bcs)).parse(r1_bcs)
        expect(r1.length).toEqual(0)
    });

    it('test set_foo_vector5 function', () => {
        let a = new U8(100);

        let b: U64[][] = [
            [],
            [new U64(BigInt(100n))]
        ];

        let [r1_bcs, r2_bcs] = wasm_test.set_foo_vector5([a.$type], [a], b);

        let r1 = bcs.vector(Foo.bcs(U8.bcs)).parse(r1_bcs)
        let r2 = bcs.vector(bcs.vector(U64.bcs)).parse(r2_bcs)
        expect(r1.length).toEqual(0)
        expect(r2[1][0]).toEqual(new U64(100))
    });

    it('test get_foo function', () => {
        let [r1] = wasm_test.get_foo();

        expect(r1.x).toEqual(100)
        expect(r1.for_).toEqual(200)
    });

    it('test set_foo3 function', () => {
        let foo = new Foo2<number, number>(16, 32, 33, 35, 36, false, [[100], [10, 20]]);

        let [r1] = wasm_test.set_foo3(foo);

        expect(r1.num1).toEqual(16)
        expect(r1.x).toEqual(32)
        expect(r1.num2).toEqual(33)
        expect(r1.y).toEqual(35)
        expect(r1.z).toEqual(36)
        expect(r1.num3).toEqual(false)
        expect(r1.v).toEqual([[100], [10, 20]])
    });

    it('test set_foo5 function', () => {
        let x = new String("hello foo5 x");
        let y = new String("hello foo5 y");
        let z = new String("hello foo5 z");
        let v = [[new U16(100)], [new U16(10), new U16(20)]]

        let foo = new Foo2<String, U16>(16, x, 33, y, z, false, v);
        let [r1_bcs] = wasm_test.set_foo5([String.$type()], foo);

        let r1 = foo.from_bcs_t(r1_bcs);
        expect(r1.num1).toEqual(16)
        expect(r1.x).toEqual(x)
        expect(r1.num2).toEqual(33)
        expect(r1.y).toEqual(y)
        expect(r1.z).toEqual(z)
        expect(r1.num3).toEqual(false)
        expect(r1.v).toEqual(v)
    });

    it('test set_foo6 function', () => {
        let x = new String("hello foo5 x");
        let y = new String("hello foo5 y");
        let z = new String("hello foo5 z");
        let v0 = [[new U16(100)], [new U16(10), new U16(20)]]
        let v1 = [[new U8(100)], [new U8(10), new U8(20)]]

        let foo = new Foo2<String, U16>(16, x, 33, y, z, false, v0);
        let foo2 = new Foo2<Foo2<String, U16>, U8>(11, foo, 12, foo, foo, true, v1);

        let [r1_bcs] = wasm_test.set_foo6([String.$type()], foo2);

        let r1 = foo2.from_bcs_t(r1_bcs);
        expect(r1.num1).toEqual(11)
        expect(r1.x).toEqual(foo)
        expect(r1.num2).toEqual(12)
        expect(r1.y).toEqual(foo)
        expect(r1.z).toEqual(foo)
        expect(r1.num3).toEqual(true)
        expect(r1.v).toEqual(v1)
    });

    it('test get_sui_url function', () => {
        let [r1] = wasm_test.get_sui_url();

        expect(r1.url).toEqual("www.baidu.com")
    });

    it('test get_online_val function', () => {
        let [r1] = wasm_test.get_online_val();

        expect(r1).toEqual('1400')
    });

    it('test set_mut_string function', () => {
        let a1 = new String("origin ")
        let [r1] = wasm_test.set_mut_string(10, a1);

        expect(r1).toEqual(10)
        expect(a1.value).toEqual("origin mut string")
    })

    it('test set_foo7 function', () => {
        let x = new String("hello foo5 x");
        let y = new String("hello foo5 y");
        let z = new String("hello foo5 z");
        let v0 = [[new U16(100)], [new U16(10), new U16(20)]]
        let foo = new Foo2<String, U16>(16, x, 33, y, z, false, v0);
        
        wasm_test.set_foo7([String.$type(), U16.$type()], foo);

        expect(foo.num1).toEqual(100)
    })
});
