
export const validateFormData = (userInput) => {
  const { name, email, message } = userInput;

  if (!name || !email || !message) {
    return false;
  }

  return true;
}
