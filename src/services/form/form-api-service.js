import { encode } from '../encoding-service';

export const submitContactRequest = (formName, userInput) => {
  return fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encode({
      'form-name': formName,
      ...userInput
    })
  });
}
