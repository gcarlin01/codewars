import solution from './kata'

describe('solution', () => {
    it('returns true when the first argument passed in ends with the 2nd argument', () => {
    expect(solution('hello world','world')).toEqual(true)
})
it('returns false when the first argument passed in does not end with the 2nd argument', () => {
    expect(solution('hello world','abc')).toEqual(false)
})
})
