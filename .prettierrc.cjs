module.exports = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  // sort-imports:
  importOrder: ['^react', '^next', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true, // Пустые строки между группами
  importOrderSortSpecifiers: true, // Сортировка внутри импортов
}
