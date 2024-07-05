import { maxOf, maxBy, max } from "../src/"
const { objectContaining } = expect;


describe('maxBy', () => {

    test('Element with maximum value of a property in an array of objects', () => {
        const testData = [
            { aValue: 1 },
            { aValue: 3 },
            { aValue: 2 }
        ]

        const res = testData.reduce(maxBy(x => x.aValue), undefined)

        expect(res).toEqual(objectContaining({ aValue: 3 }))
    })

})


describe('maxOf', () => {

    test('Maximum value of a property in an array of objects', () => {
        const testData = [
            { aValue: 1 },
            { aValue: 2 },
            { aValue: 3 }
        ]

        const res = testData.reduce(maxOf(x => x.aValue), undefined)

        expect(res).toEqual(3)
    })


    test('Maximum value of a property in an empty array of objects', () => {
        const testData: Array<{ aValue: number }> = []

        const res = testData.reduce(maxOf(x => x.aValue), undefined)

        expect(res).toEqual(undefined)
    })


    test('Maximum value of an array of numbers', () => {
        const testData = [30, 20, 10]

        const res = testData.reduce(maxOf(x => x), undefined)

        expect(res).toEqual(30)
    })


    test('Maximum value of an empty array of numbers', () => {
        const testData: Array<number> = []

        const res = testData.reduce(maxOf(x => x), null)

        expect(res).toEqual(null)
    })


    test('Maximum value of an array of strings', () => {
        const testData = ["b", "a", "d", "c"]

        const res = testData.reduce(maxOf(x => x), null)

        expect(res).toEqual("d")
    })
    
})


describe('max', () => {

    test('Maximum of an array of numbers', () => {
        const testData = [200, 100, 300]

        const res = testData.reduce(max(), null)

        expect(res).toEqual(300)
    })

})