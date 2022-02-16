'use strict';
const changeCase = require('change-case');

// https://github.com/blakeembrey/change-case
module.exports = class Strings {
  static normalize(string) {
    return string
      .normalize('NFD') // remove diatrics
      .replace(/[\u0300-\u036f]/g, '') // remove spaces
      .replace(/ *\([^)]*\) */g, ''); // remove parentheses and its content
  }

  static toLowerCase(string) {
    return changeCase.camelCase(this.normalize(string));
  }

  static toDashCase(string) {
    return changeCase.paramCase(this.normalize(string));
  }

  static toCamelCase(string) {
    return changeCase.camelCase(this.normalize(string));
  }

  static toPascalCase(string) {
    return changeCase.pascalCase(this.normalize(string));
  }

  static toSnakeCase(string) {
    return changeCase.snakeCase(this.normalize(string));
  }
};