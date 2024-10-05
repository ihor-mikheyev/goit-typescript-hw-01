// Завдання 7

// Створіть новий тип даних, який підходить для цих двох об'єктів.
// У вас є два об'єкти:

type TypeForBoth = {
    title: string,
    likes: number,
    accounts: Array<string>,
    status: string,
    details?: {
        createAt: Date,
        updateAt: Date,
    }

}

const page: TypeForBoth = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: TypeForBoth = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
