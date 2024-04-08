import React, { useState } from "react";
import { formValidate } from "./FormValidate";

function ComplaintForm() {
  const MAX_CHARS = 1000;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    complaintMessage: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = formValidate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Your complaint has been submitted: ${formData.complaintMessage}`);
      console.log(JSON.stringify(formData, null, 2));

      // Reset form fields
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        complaintMessage: "",
      });
    }
  };

  const remainingChars = MAX_CHARS - formData.complaintMessage.length;
  const isNearLimit = remainingChars < MAX_CHARS * 0.1;

  return (
    <div className="font-ubuntu w-[100%] h-[100%]">
      <h1 className="text-3xl leading-8 mt-8 text-primary-marineBlue  text-start font-[800] mb-2">
        Customer Complaint Form
      </h1>
      <p className="text-neutral-coolGray mb-6 text-start">
        Please provide your name, email address or phone number.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col text-start">
        <div className="flex flex-col relative">
          <label className="text-primary-marineBlue font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g. Steve Rogers"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`${
              errors.fullName
                ? "outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3`}
          />
          {errors.fullName && (
            <span
              className={`${
                errors.fullName ? "inline" : "hidden"
              } text-primary-strawberryRed font-medium absolute top-[8px] text-sm right-[10px]`}
            >
              {errors.fullName}
            </span>
          )}

          <label className="text-primary-marineBlue font-medium mb-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="e.g. steverogers@lorem.com"
            value={formData.email}
            onChange={handleInputChange}
            className={`${
              errors.email || errors.contactInfo
                ? "outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3`}
          />
          {errors.email && (
            <span
              className={`${
                errors.email ? "inline" : "hidden"
              } text-primary-strawberryRed font-medium text-sm absolute top-[110px] right-[5px]`}
            >
              {errors.email}
            </span>
          )}
          {errors.contactInfo && (
            <span
              className={`${
                errors.contactInfo ? "inline" : "hidden"
              } text-primary-strawberryRed font-medium text-sm absolute top-[110px] right-[5px]`}
            >
              {errors.contactInfo}
            </span>
          )}

          <label className="text-primary-marineBlue font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="e.g. +1 234 567 890"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`${
              errors.phoneNumber || errors.contactInfo
                ? "outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3`}
          />
          {errors.phoneNumber && (
            <span
              className={`${
                errors.phoneNumber ? "inline" : "hidden"
              } text-primary-strawberryRed font-medium text-sm absolute top-[215px] right-[5px]`}
            >
              {errors.phoneNumber}
            </span>
          )}

          {errors.contactInfo && (
            <span
              className={`${
                errors.contactInfo ? "inline" : "hidden"
              } text-primary-strawberryRed font-medium text-sm absolute top-[215px] right-[5px]`}
            >
              {errors.contactInfo}
            </span>
          )}

          <label className="text-primary-marineBlue  font-medium mb-2">
            Complaint Details
          </label>
          <div className="flex flex-col">
            <textarea
              name="complaintMessage"
              placeholder="Please provide any details..."
              value={formData.complaintMessage}
              onChange={handleInputChange}
              maxLength={MAX_CHARS}
              className={`${
                errors.complaintMessage
                  ? "outline-primary-strawberryRed"
                  : "focus:outline-primary-marineBlue"
              } outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 w-[100%]`}
            ></textarea>
            <span
              className="text-neutral-coolGray text-end mt-1 text-sm"
              style={{ color: isNearLimit ? "red" : null }}
            >
              {remainingChars === 0
                ? "Complaint message should not exceed 1000 characters"
                : `${remainingChars} characters remaining`}
            </span>
          </div>

          {errors.complaintMessage && (
            <span
              className={`${
                errors.complaintMessage ? "inline" : "hidden"
              } text-primary-strawberryRed font-medium text-sm absolute top-[318px] right-[5px]`}
            >
              {errors.complaintMessage}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transform hover:opacity-80 transition-all duration-300 mt-6 font-medium tracking-widest"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;
