// matches valid phone numbers
export function isPhoneNumber(phoneNumber) {
  const phoneRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
  return phoneRegex.test(phoneNumber);
}

// matches valid emails
export function isEmail(email) {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
export function isStrongPassword(password) {
  const pwRegex = /^[a-zA-Z]\w{3,14}$/;
  return pwRegex.test(password);
}

// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
export function isDate(date) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return dateRegex.test(date);
}

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
export function isHexColor(color) {
  const colorRegex = /^\#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
  return colorRegex.test(color);
}

//test for phone number
test('619-817-9524 is valid phone number', () =>{
  expect(isPhoneNumber("619-817-9524")).toBe(true);
})
test('(619)-447-9524 is valid phone number', () =>{
  expect(isPhoneNumber("(619)-447-9524")).toBe(true);
})
test('619-87-9524 is not valid phone number', () =>{
  expect(isPhoneNumber("619-87-9524")).toBe(false);
})
test('619-817- is not valid phone number', () =>{
  expect(isPhoneNumber("619-817-")).toBe(false);
})

//test for email
test('Check jtang487@gmail.com is valid email', () =>{
  expect(isEmail("jtang487@gmail.com")).toBe(true);
})
test('Check jvtang@ucsd.edu is valid email', () =>{
  expect(isEmail("jvtang@ucsd.edu")).toBe(true);
})
test('Check jtang487@gmai is not a valid email', () =>{
  expect(isEmail("jtang487@gmai")).toBe(false);
})
test('Check jtang4gmail.com is not a valid email', () =>{
  expect(isEmail("jtang4gmail.com")).toBe(false);
})

//test for hexcolor
test('Check #000000 is valid hexcolor', () =>{
  expect(isHexColor("#D88A79")).toBe(true);
})
test('Check 210400 is valid hexcolor', () =>{
  expect(isHexColor("D88A79")).toBe(true);
})
test('Check abcdfeff is not a valid hexcolor', () =>{
  expect(isHexColor("abcdfeff")).toBe(false);
})
test('Check #abcdfeff is not a valid hexcolor', () =>{
  expect(isHexColor("abcdfeff")).toBe(false);
})

