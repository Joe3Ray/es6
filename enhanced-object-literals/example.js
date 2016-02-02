var obj = {
    __proto__: theProtoObj,
    handler,
    toString() {
        return "d " + super.toString();
    },
    [ 'prop_' + (() => 42)() ]: 42
};
