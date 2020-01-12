export const tr = {
  key: 'tr',
  locale: {
    units: ['', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'],
    tens: ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'atmış', 'yetmiş', 'seksen', 'doksan'],
    scales: ['yüz', 'bin', 'milyon', 'milyar', 'trilyon'],
  },
  driver: function (number) {
    const keys = ['units', 'tens', 'units']
    let numbers = number.split(/(?=(?:...)*$)/).reverse()

    return numbers
      .map((number, key) => {
        let splitted = number.split('').reverse()
        let arr = splitted.map((number, index) => {
          if (index === 2) {
            return `${this[keys[index]][number]} ${this.scales[0]}`
          }
          return this[keys[index]][number]
        })
        let word = arr.reverse().join(' ')
        if (key > 0) {
          if (key === 1 && word === 'bir') {
            return this.scales[key]
          } else {
            word = `${word} ${this.scales[key]}`
          }
        }
        return word
      })
      .reverse()
      .join(' ')
      .trim()
  }
}
