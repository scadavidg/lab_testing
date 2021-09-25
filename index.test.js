const { suma, producto, resta, division } = require('./index')

test('suma', () => {
  expect(suma(1, 1)).toBe(2)
})
test('producto', () => {
  expect(producto(1, 1)).toBe(1)
})
test('resta', () => {
  expect(resta(1, 1)).toBe(0)
})
test('division', () => {
  expect(division(1, 1)).toBe(1)
})