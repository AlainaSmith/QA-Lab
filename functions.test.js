const {returnTwo, greeting, add} = require('./functions.js')


test('should run', () => expect(2).toBe(2))


test('testing greeting', () => {
    expect(greeting('James')).toBe('Hello, James')
    expect(greeting('Jill')).toBe('Hello, Jill')
})

test('testing add', () => {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
})



// describe("make sure james greeting = james and jill greeting = ", () => {
//     test('greeting james should return hello james', () => {
//         expect(greeting('James').toEqual('Hello, James')) 
//     },
//     test('greeting jill should return hello jill', () => {
//         expect(greeting('Jill').toEqual('Hello, Jill'))
//     } ))
// })






// it('first name should be patten', () => expect(testData.firstName).toBe('Patten'))

//   describe('formatTitle tests', ()=> {
//     test('formatTitle should return a string', () => {
//       let formattedTitle = formatTitle(testData.title)
//       expect(typeof formattedTitle).toBe('string')
//     } )