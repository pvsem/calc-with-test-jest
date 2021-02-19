import {Calculator} from '../calculator'

let calc = new Calculator
describe('calculator.js', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(calc.add(1,2)).toBe(3)
    });
    it('multuply 5 *4 => 20', () => {
        expect(calc.multiply(5,4)).toBe(20)
    });
    it('multuply 5 *4 * -6 => 20', () => {
        expect(calc.multiply(5,4,-6)).toBe(-120)
    });
    it('multuply 4.5 * 2 => 9', () => {
        expect(calc.multiply(4.5,2)).toBe(9)
    });
})