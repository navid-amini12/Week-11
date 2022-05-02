let functions  = require('./function')

test("Returning the value 2 ", () => {
    expect(functions.returnTwo()).toBe(2)
})

test("Returning Greetings", () => {
    expect(functions.greeting('James')).toBe('Hello James.')
})

test("Adding two numbers t", () => {
    expect(functions.add(1, 99)).toBe(100)
})


