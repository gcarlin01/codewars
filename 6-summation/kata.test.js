import summation from "./kata";

describe ('summation', function (){
    it('returns the summation of every number from 1 to num', function (){
        expect(summation([4])).toBe(10)
        expect(summation([1])).toBe(1)
       
    })
})