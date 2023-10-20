/**
 *
 * @param {string} email - the email to be tested against
 * @return {boolean} test - if the email passed the validation or not
 */
function validateEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
}

export default validateEmail;
