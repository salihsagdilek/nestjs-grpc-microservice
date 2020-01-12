const OPTIONS = {
  language: 'tr'
}

export class NumberToWord {
  constructor (number = 0, options = {}) {
    this.number = number
    this.options = Object.assign({}, OPTIONS, options)
    this.checkType()
    this.parseNumber()
  }

  checkType () {
    if (typeof this.number !== 'number') {
      throw Error(`Number must be number`)
    }
  }

  parseNumber () {
    const [base, reminder] = this.number.toString().split('.')
    this.base = base
    this.reminder = reminder || '00'
  }

  toWord (language) {
    language = language || this.options.language
    this.checkLanguageExist(language)
    const base = this.i18n.drivers[language].call(this.i18n.locales[language], this.base)
    const reminder = this.i18n.drivers[language].call(this.i18n.locales[language], this.reminder)
    return { base, reminder }
  }

  checkLanguageExist (language) {
    if (!this.i18n.locales.hasOwnProperty(language)) {
      throw Error(`${language} language is not registered.`)
    }
  }
}

NumberToWord.i18n = NumberToWord.prototype.i18n = {
  register: ({ key, locale, driver }) => {
    NumberToWord.prototype.i18n.locales[key] = locale
    NumberToWord.prototype.i18n.drivers[key] = driver
  },
  locales: {},
  drivers: {},
}
