const functionToTest = (arg) => `🐿${arg}`

it('добавляет белочку в начале слова', () => {
  expect(functionToTest(' любит орешки')).toBe('🐿 любит орешки')
})
