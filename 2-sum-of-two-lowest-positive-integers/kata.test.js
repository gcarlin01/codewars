import sumTwoSmallestNumbers from './kata'

describe('sumTwoSmallestNumbers', () => {
    it('returns the sum of two smallest numbers', () => {
        expect(sumTwoSmallestNumbers([19, 5, 42, 2, 77])).toBe(7)
        expect(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])).toBe(3453455)  
    })
})