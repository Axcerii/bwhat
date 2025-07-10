import { describe, it, expect } from 'vitest'
import { 
  isValidEmail, 
  isValidPassword, 
  isValidPostalCode, 
  isValidPhoneNumber, 
  isValidPlainText 
} from './regexValidation'

describe('Email validation', () => {
  it('returns true for valid emails', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('user.name@domain.fr')).toBe(true)
    expect(isValidEmail('contact@site-web.org')).toBe(true)
  })

  it('returns false for invalid emails', () => {
    expect(isValidEmail('invalid-email')).toBe(false)
    expect(isValidEmail('test@.com')).toBe(false)
    expect(isValidEmail('test@site')).toBe(false)
    expect(isValidEmail('@example.com')).toBe(false)
    expect(isValidEmail('test@')).toBe(false)
    expect(isValidEmail('test with spaces@example.com')).toBe(false)
  })
})

describe('Password validation', () => {
  it('returns true for valid passwords', () => {
    expect(isValidPassword('Password123!')).toBe(true)
    expect(isValidPassword('MySecure@Pass2024')).toBe(true)
    expect(isValidPassword('Test123#')).toBe(true)
    expect(isValidPassword('Abcd1234_')).toBe(true)
  })

  it('returns false for invalid passwords', () => {
    expect(isValidPassword('password')).toBe(false) // pas de majuscule, chiffre, caractère spécial
    expect(isValidPassword('PASSWORD123!')).toBe(false) // pas de minuscule
    expect(isValidPassword('Password!')).toBe(false) // pas de chiffre
    expect(isValidPassword('Password123')).toBe(false) // pas de caractère spécial
    expect(isValidPassword('Pass1!')).toBe(false) // trop court (moins de 8 caractères)
    expect(isValidPassword('12345678')).toBe(false) // que des chiffres
  })
})

describe('Postal code validation', () => {
  it('returns true for valid postal codes', () => {
    expect(isValidPostalCode('75001')).toBe(true)
    expect(isValidPostalCode('13000')).toBe(true)
    expect(isValidPostalCode('69000')).toBe(true)
    expect(isValidPostalCode('01000')).toBe(true)
  })

  it('returns false for invalid postal codes', () => {
    expect(isValidPostalCode('7500')).toBe(false) // trop court
    expect(isValidPostalCode('750001')).toBe(false) // trop long
    expect(isValidPostalCode('75O01')).toBe(false) // contient une lettre
    expect(isValidPostalCode('75-001')).toBe(false) // contient un tiret
    expect(isValidPostalCode('')).toBe(false) // chaîne vide
    expect(isValidPostalCode('abcde')).toBe(false) // que des lettres
  })
})

describe('Phone number validation', () => {
  it('returns true for valid phone numbers', () => {
    expect(isValidPhoneNumber('0123456789')).toBe(true)
    expect(isValidPhoneNumber('01 23 45 67 89')).toBe(true)
    expect(isValidPhoneNumber('01.23.45.67.89')).toBe(true)
    expect(isValidPhoneNumber('01-23-45-67-89')).toBe(true)
    expect(isValidPhoneNumber('06 12 34 56 78')).toBe(true)
    expect(isValidPhoneNumber('09.87.65.43.21')).toBe(true)
  })

  it('returns false for invalid phone numbers', () => {
    expect(isValidPhoneNumber('00123456789')).toBe(false) // commence par 00
    expect(isValidPhoneNumber('123456789')).toBe(false) // pas de 0 au début
    expect(isValidPhoneNumber('0023456789')).toBe(false) // deuxième chiffre est 0
    expect(isValidPhoneNumber('01234567890')).toBe(false) // trop long
    expect(isValidPhoneNumber('012345678')).toBe(false) // trop court
    expect(isValidPhoneNumber('01 23 45 67')).toBe(false) // incomplet
    expect(isValidPhoneNumber('01a2345678')).toBe(false) // contient une lettre
  })
})

describe('Plain text validation', () => {
  it('returns true for valid plain text', () => {
    expect(isValidPlainText('Hello world')).toBe(true)
    expect(isValidPlainText('Bonjour tout le monde!')).toBe(true)
    expect(isValidPlainText('Text with numbers 123')).toBe(true)
    expect(isValidPlainText('Text with symbols: ()[]{}+-*/')).toBe(true)
    expect(isValidPlainText('')).toBe(true) // chaîne vide
    expect(isValidPlainText('Émojis 🎉 sont OK')).toBe(true)
  })

  it('returns false for text with dangerous characters', () => {
    expect(isValidPlainText('Hello <script>')).toBe(false) // contient <
    expect(isValidPlainText('Hello > world')).toBe(false) // contient >
    expect(isValidPlainText('It\'s a test')).toBe(false) // contient '
    expect(isValidPlainText('He said "hello"')).toBe(false) // contient "
    expect(isValidPlainText('Tom & Jerry')).toBe(false) // contient &
    expect(isValidPlainText('Template `string`')).toBe(false) // contient `
    expect(isValidPlainText('<div>content</div>')).toBe(false) // HTML
    expect(isValidPlainText('It\'s a test')).toBe(false) // contient '
  })
})