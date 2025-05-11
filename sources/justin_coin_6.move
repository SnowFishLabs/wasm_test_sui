module wasm_test::justin_coin_6 {
    use sui::coin::{Self};

    public struct JUSTIN_COIN_6 has drop {}

    fun init(coin_witness: JUSTIN_COIN_6, ctx: &mut TxContext) {
        let (
            treasury_cap,
            coin_metadata
        ) =
            coin::create_currency(
                coin_witness,
                6,
                b"DEC6",
                b"Decimals 6",
                b"Coin with 6 decimals for testing purposes.",
                option::none(),
                ctx
            );

        transfer::public_share_object(coin_metadata);

        transfer::public_share_object(treasury_cap);
    }
}
