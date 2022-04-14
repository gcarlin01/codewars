import arithmetic from './kata'

describe('arithmetic', () => {
    it('adds two numbers when "add" is passed in', () => {
        const result = arithmetic(1, 1, "add") 
        expect(result).toEqual(2) 
    })

    it('subtracts two numbers when "subtract" is passed in', () => {
        const result = arithmetic(2, 1, "subtract") 
        expect(result).toEqual(1) 
    })

    it('multiplies two numbers when "multiply" is passed in', () => {
        const result = arithmetic(-10, 4, "multiply") 
        expect(result).toEqual(-40) 
    })

    it('divides two numbers when "divide" is passed in', () => {
        const result = arithmetic(20, 4, "divide") 
        expect(result).toEqual(5) 
    })

    it('return "unsupported" when operator is unknown', () => {
        const result = arithmetic(20, 4, "luis") 
        expect(result).toEqual("unsupported") 
    })
})