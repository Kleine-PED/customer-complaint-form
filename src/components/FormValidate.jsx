export const formValidate = (data) => {
  const errors = {};
  //**check number /^\d+$/
  const phoneNumber_pattern = /^\+?[1-9]\d{1,14}$/;
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.fullName.trim() === "") {
    errors.fullName = "Please enter your full name";
  }

  // Validate email or phone number (at least one required)
  const trimmedEmail = data.email.trim();
  const trimmedPhoneNumber = data.phoneNumber.trim();

  if (!trimmedEmail && !trimmedPhoneNumber) {
    errors.contactInfo = "Please enter either email or phone number";
  } else {
    // Validate email if provided
    if (trimmedEmail && !email_pattern.test(trimmedEmail)) {
      errors.email = "Invalid email address";
    }
    // Validate phone number if provided
    if (trimmedPhoneNumber && !phoneNumber_pattern.test(trimmedPhoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
  }

  if (data.complaintMessage.trim() === "") {
    errors.complaintMessage = "Please enter your complaint message";
  } else if (data.complaintMessage.length > 1000) {
    errors.complaintMessage =
      "Complaint message should not exceed 1000 characters";
  }

  return errors;
};
