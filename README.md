# wasm_test_sui

this is test repo for `deepmove` wasm move vm

* install `deepmove` command line tools with `npm install -g @deepmove/deep`
* git clone this repo
* open your terminal and cd to this repo
* type `deepmove -c sui` to enter `deepmove` command env
* type `move build` to build move projects
* type `gen test` to generate typescript bindings
* type `test` to run typescript unit test

after all you will the following results:  

```
sui@deepmove>test

 RUN  v3.0.8 E:/projects/wasm_test

 ✓ tests/wasm_tests.test.ts 24 tests 69ms
    ✓ wasm_tests > test get function 40ms (gas 1)
    ✓ wasm_tests > test get_vec function 4ms (gas 1)
    ✓ wasm_tests > test get_str function 0ms (gas 1)
    ✓ wasm_tests > test set_int function 1ms (gas 1)
    ✓ wasm_tests > test get_struct function 1ms (gas 1)
    ✓ wasm_tests > test set_struct no urls function 1ms (gas 1)
    ✓ wasm_tests > test set_struct urls function 1ms (gas 1)
    ✓ wasm_tests > test set_struct_t function 2ms (gas 1)
    ✓ wasm_tests > test set_struct_t2 function 1ms (gas 1)
    ✓ wasm_tests > test set_foo2 function 1ms (gas 1)
    ✓ wasm_tests > test set_foo_str function 1ms (gas 1)
    ✓ wasm_tests > test set_foo function 0ms (gas 1)
    ✓ wasm_tests > test set_foo_vector function 1ms (gas 1)
    ✓ wasm_tests > test set_foo_vector2 function 1ms (gas 1)
    ✓ wasm_tests > test set_foo_vector3 function 0ms (gas 1)
    ✓ wasm_tests > test set_foo_vector5 function 1ms (gas 1)
    ✓ wasm_tests > test get_foo function 0ms (gas 1)
    ✓ wasm_tests > test set_foo3 function 1ms (gas 1)
    ✓ wasm_tests > test set_foo5 function 1ms (gas 1)
    ✓ wasm_tests > test set_foo6 function 1ms (gas 1)
    ✓ wasm_tests > test get_sui_url function 2ms (gas 3)
    ✓ wasm_tests > test get_online_val function 1ms (gas 1)
    ✓ wasm_tests > test set_mut_string function 1ms (gas 3)
    ✓ wasm_tests > test set_foo7 function 1ms (gas 1)
 ✓ tests/justin_coin_6.test.ts 2 tests 93ms
    ✓ justin_coin_6_test > test init coin 85ms (gas 11)
    ✓ justin_coin_6_test2 > test init coin 2 4ms (gas 11)

 Test Files  2 passed (2)
      Tests  26 passed (26)
   Start at  17:10:21
   Duration  1.69s (transform 197ms, setup 0ms, collect 2.24s, tests 162ms, environment 0ms, prepare 359ms)
```