const functionToTest = (arg) => `🐿${arg}`

it('добавляет белочку в конце слова', () => {
  expect(functionToTest(' любит орешки')).toBe('🐿 любит орешки')
})
