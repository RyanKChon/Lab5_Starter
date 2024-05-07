// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('Password Bigger than 15', () => { 
  expect(isStrongPassword('Hithenam545sedf1')).toBe(false);
});
test('Password smaller than 3', () => {
  expect("Te").toBe(false)
});
test('Correct Password with no underscore' , () => {

});
test('Correct with Underscore', () => {
});
