// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Tests for is Strong Password
test('Password Bigger than 15', () => { 
  expect(isStrongPassword('Hithenam545sedf1')).toBe(false);
});
test('Password smaller than 3', () => {
  expect(isStrongPassword("Te")).toBe(false)
});
test('Correct Password with no underscore' , () => {
  expect(isStrongPassword("Tafe4242")).toBe(true)
});
test('Correct with Underscore', () => {
  expect(isStrongPassword("Tafe424_2")).toBe(true)
});

// Tests for isDate
test('Incorrect date 1', () => { 
  expect(isDate('1/1/1')).toBe(false);
});
test('Incorrect date 2', () => {
  expect(isDate("112/4.43")).toBe(false)
});
test('correct april 14 2002' , () => {
  expect(isDate("4/14/2002")).toBe(true)
});
test('corret may 5 2001 ' , () => {
  expect(isDate("5/5/2001)")).toBe(true)
});
