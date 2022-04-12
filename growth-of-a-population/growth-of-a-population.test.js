import nbYear from "./growth-of-a-population";

describe('nbYear', () => {
    it('basic tests', () => {
        expect(nbYear(1500, 5, 100, 5000)).toEqual(15)
        expect(nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10)
        expect(nbYear(1500000, 0.25, 1000, 2000000)).toEqual(94)
    })
})
