module wasm_test::counter {
    use sui::dynamic_object_field as dof;

    public struct IdCounter has key, store {
        id: UID,
    }

    public struct Counter has key, store {
        id: UID,
        count: u64,
    }

    public fun new_counter(ctx: &mut TxContext) {
        let mut id_counter = IdCounter {
            id: object::new(ctx)
        };

        let counter = Counter {
            id: object::new(ctx),
            count: 0
        };

        dof::add(&mut id_counter.id, 0, counter);
        transfer::public_share_object(id_counter);
    }

    public fun borrow_mut(id_counter: &mut IdCounter): &mut Counter {
        dof::borrow_mut(&mut id_counter.id, 0)
    }

    public fun bump(counter: &mut Counter): &mut Counter {
        counter.count = counter.count + 1;
        counter
    }
}