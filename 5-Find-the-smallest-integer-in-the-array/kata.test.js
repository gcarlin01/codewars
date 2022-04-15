import SmallestIntegerFinder from "./kata";

describe('SmallestIntegerFinder', () => {
    let smallIntegerFinder = new SmallestIntegerFinder();
    it('returns the smallest integer in the array', () => {
        expect(smallIntegerFinder.findSmallestInt([9, 10, 1, 0])).toBe(0)
        expect(smallIntegerFinder.findSmallestInt([-100, 0, -1, 1, 100])).toBe(-100)
    })


})