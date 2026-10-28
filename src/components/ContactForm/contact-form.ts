export interface FormFields {
  name: string | null;
  email: string | null;
  message: string | null;
}

// Calculations

export function writeValue(
  trackingObject: FormFields,
  inputName: string,
  value: string
) {
  const copy = { ...trackingObject };

  if (inputName in trackingObject) {
    copy[inputName as keyof FormFields] = value;
  }

  return copy;
}

export function missingFormFields(trackingObject: FormFields) {
  return Object.entries(trackingObject)
    .filter(([field, value]) => value !== null && !value) // we know a field has been "touched" if its value is an empty string instead of null
    .map(([field]) => field);
}

export function allInputsPopulated(trackingObject: FormFields) {
  return formValues(trackingObject).every((value) => !!value);
}

export function formValues(trackingObject: FormFields) {
  return Object.values(trackingObject);
}

function isPopulated(value: string) {
  // being populated is only validation rule at the moment
  return !!value;
}

function warningText(missingFields: string[]) {
  if (missingFields.length === 1) {
    return `${missingFields[0]} is required`;
  } else if (missingFields.length === 2) {
    return `${missingFields[0]} and ${missingFields[1]} are required`;
  } else {
    const lastElement = missingFields.pop();
    return `${missingFields.join(", ")}, and ${lastElement} are required`;
  }
}

// DOM Utilities

export function updateInputValidity(element: HTMLElement, value: string) {
  if (!isPopulated(value)) {
    element.style.outline = "1px solid red";
  } else {
    element.style.outline = "0";
  }
}

export function updateWarningVisibility(
  formFields: FormFields,
  warning: HTMLElement
) {
  // console.log("populated?", allInputsPopulated(formFields));
  if (allInputsPopulated(formFields)) {
    warning.textContent = "";
    warning.classList.remove("show");
  } else {
    const missingFields = missingFormFields(formFields);

    if (!missingFields.length) {
      // we should never arrive here
      return;
    }

    warning.classList.add("show");
    warning.textContent = warningText(missingFields);
  }
}

export function updateDisabledState(
  formFields: FormFields,
  sendBtn: HTMLButtonElement
) {
  if (allInputsPopulated(formFields)) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}
