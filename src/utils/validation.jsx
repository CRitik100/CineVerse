export const nameValidation = (name) => {
  const nameRegex = /^[A-Za-z\s\-']{2,50}$/;
  return !nameRegex.test(name) ? "Please enter a valid name." : null;
};

export const emailValidation = (emailId) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return !emailRegex.test(emailId)
    ? "Please enter a valid email/phone number."
    : null;
};

export const passwordValidation = (password) => {
  const passwordRegx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return !passwordRegx.test(password) ? "Please enter a valid password." : null;
};
