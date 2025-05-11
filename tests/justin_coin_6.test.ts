import { describe, expect, beforeEach, afterEach, it, afterAll } from 'vitest';
import { Address, setup, String, U16, U64, U8, new_wasm, get_wasm, beforeTest, afterTest, afterTestAll } from '@deepmove/sui';
import { test_scenario } from './wrappers/dependencies/Sui/test_scenario';
import { justin_coin_6 } from './wrappers/dependencies/wasm_test/justin_coin_6';
import { CoinMetadata, TreasuryCap } from './wrappers/dependencies/Sui/coin';

let package_path = process.cwd();

setup(get_wasm(), package_path);

beforeEach(beforeTest)
afterEach(afterTest)
afterAll(afterTestAll);

describe('justin_coin_6_test', () => {
    it('test init coin', (ctx) => {
        let caller = "0x0000000000000000000000000000000000000000000000000000000000000032";
        let [scenario] = test_scenario.begin(caller);

        let [tx_context] = test_scenario.ctx(scenario);
        justin_coin_6.init(new justin_coin_6.JUSTIN_COIN_6(true), tx_context);
        let [effects] = test_scenario.next_tx(scenario, caller);
        expect(effects.created.length).toEqual(2)

        let coin_metadata_type = CoinMetadata.$type() + `<${justin_coin_6.JUSTIN_COIN_6.$type()}>`
        let [r1_bcs] = test_scenario.take_shared([coin_metadata_type], scenario);

        let r = CoinMetadata.bcs.parse(r1_bcs);
        expect(r.decimals).toEqual(6);
        expect(r.name).toEqual("Decimals 6");
        expect(r.symbol).toEqual("DEC6");
        expect(r.description).toEqual("Coin with 6 decimals for testing purposes.")
        test_scenario.end(scenario);
    });
})

describe('justin_coin_6_test2', () => {
    it('test init coin 2', (ctx) => {
        let caller = "0x0000000000000000000000000000000000000000000000000000000000000032";
        let [scenario] = test_scenario.begin(caller);

        let [tx_context] = test_scenario.ctx(scenario);
        justin_coin_6.init(new justin_coin_6.JUSTIN_COIN_6(true), tx_context);
        let [effects] = test_scenario.next_tx(scenario, caller);
        expect(effects.created.length).toEqual(2)

        let coin_metadata_type = CoinMetadata.$type() + `<${justin_coin_6.JUSTIN_COIN_6.$type()}>`
        let [r1_bcs] = test_scenario.take_shared([coin_metadata_type], scenario);

        let r = CoinMetadata.bcs.parse(r1_bcs);
        expect(r.decimals).toEqual(6);
        expect(r.name).toEqual("Decimals 6");
        expect(r.symbol).toEqual("DEC6");
        expect(r.description).toEqual("Coin with 6 decimals for testing purposes.")
        test_scenario.end(scenario);
    });
})