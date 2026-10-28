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

function formValues(trackingObject: FormFields) {
  return Object.values(trackingObject);
}

function allInputsPopulated(trackingObject: FormFields) {
  return formValues(trackingObject).every(isPopulated);
}

function allTouchedInputsPopulated(trackingObject: FormFields) {
  return formValues(trackingObject).filter(isTouched).every(isPopulated);
}

function missingFormFields(trackingObject: FormFields) {
  return Object.entries(trackingObject)
    .filter(([field, value]) => touchedInputIsEmpty(value))
    .map(([field]) => field);
}

function touchedInputIsEmpty(value: string) {
  return isTouched(value) && !isPopulated(value);
}

function isTouched(value: string) {
  // we know a field has been "touched" if its value is an empty string instead of null
  return value !== null;
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
  if (touchedInputIsEmpty(value)) {
    element.style.outline = "1px solid red";
  } else {
    element.style.outline = "0";
  }
}

export function toggleWarningMessage(
  formFields: FormFields,
  warning: HTMLElement
) {
  if (allTouchedInputsPopulated(formFields)) {
    warning.textContent = "";
    warning.classList.remove("visible");
  } else {
    const missingFields = missingFormFields(formFields);

    // we should never arrive here, in theory
    if (!missingFields.length) {
      // warning.classList.remove("visible");
      return;
    }

    warning.classList.add("visible");
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
