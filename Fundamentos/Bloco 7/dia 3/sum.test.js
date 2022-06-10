const { expect, it } = require("@jest/globals")

it('O resultado deve ser igual a 9', () => {
    expect(sum(5,9)).toEqual(9);
});