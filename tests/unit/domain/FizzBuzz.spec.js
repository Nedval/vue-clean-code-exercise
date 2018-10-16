import {
    FizzBuzz
} from '@/domain/FizzBuzz'

describe('FizzBuzz', () => {
    let fb = new FizzBuzz()
    describe('Echo', () => {
        describe('15x', () => {
            it('should return FizzBuzz when number is 15', () => {
                expect(fb.echo(15)).toEqual('FizzBuzz')
            })
            it('should return FizzBuzz when number is 30', () => {
                expect(fb.echo(30)).toEqual('FizzBuzz')
            })
        })
        describe('5x', () => {
            it('should return Buzz when number is 5', () => {
                expect(fb.echo(5)).toEqual('Buzz')
            })
            it('should return Buzz when number is 10', () => {
                expect(fb.echo(10)).toEqual('Buzz')
            })
        })
        describe('3x', () => {
            it('should return Fizz when number is 3', () => {
                expect(fb.echo(3)).toEqual('Fizz')
            })
            it('should return Fizz when number is 6', () => {
                expect(fb.echo(6)).toEqual('Fizz')
            })
        })
        describe('others', () => {
            it('should return number when number is not 3x or 5x', () => {
                expect(fb.echo(1)).toEqual('1')
            })
        })
    })
})