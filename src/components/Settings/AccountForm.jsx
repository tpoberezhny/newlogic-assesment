import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles";
import "./AccountForm.css";

function AccountForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [focusedFields, setFocusedFields] = useState({});

  const handleFocus = (field) => {
    setFocusedFields({ ...focusedFields, [field]: true });
  };

  const handleBlur = (field) => {
    setFocusedFields({ ...focusedFields, [field]: false });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account-form">
      <section>
        <h2 style={styles.textLg}>Kontaktní údaje</h2>
        <div className="flex flex-col mt-8 w-full">
          <div className="flex flex-wrap gap-3 items-start w-full">
            {/* First Name Field */}
            <div
              className={`field-container ${
                focusedFields.firstName || errors.firstName ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border ${
                errors.firstName ? "border-red-600" : "border-blue-500"
              }`}
            >
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("firstName")}
                onBlur={() => handleBlur("firstName")}
                aria-required="true"
              />
              <span className="label-text">
                Jméno<span className="text-red-600">*</span>
              </span>
            </div>

            {/* Last Name Field */}
            <div
              className={`field-container ${
                focusedFields.lastName || errors.lastName ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border ${
                errors.lastName ? "border-red-600" : "border-blue-500"
              }`}
            >
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("lastName")}
                onBlur={() => handleBlur("lastName")}
                aria-required="true"
              />
              <span className="label-text">
                Příjmení<span className="text-red-600">*</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-start mt-3 w-full">
            {/* Phone Field */}
            <div
              className={`field-container flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border border-neutral-300 ${
                focusedFields.phone ? "focused" : ""
              }`}
            >
              <input
                type="tel"
                {...register("phone")}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("phone")}
                onBlur={() => handleBlur("phone")}
              />
              <span className="label-text">Telefon</span>
            </div>

            {/* Email Field */}
            <div
              className={`field-container ${
                focusedFields.email || errors.email ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border ${
                errors.email ? "border-red-600" : "border-blue-500"
              }`}
            >
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                aria-required="true"
              />
              <span className="label-text">
                E-mail<span className="text-red-600">*</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-8 w-full border-t border-gray-200" />

      <section>
        <h2 className="mt-8" style={styles.textLg}>
          Fakturační údaje
        </h2>
        <div className="flex flex-col mt-8 w-full">
          <div className="flex flex-wrap gap-3 items-start w-full">
            {/* Billing First Name */}
            <div
              className={`field-container ${
                focusedFields.billingFirstName || errors.billingFirstName
                  ? "focused"
                  : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border ${
                errors.billingFirstName ? "border-red-600" : "border-blue-500"
              }`}
            >
              <input
                type="text"
                {...register("billingFirstName", { required: true })}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("billingFirstName")}
                onBlur={() => handleBlur("billingFirstName")}
                aria-required="true"
              />
              <span className="label-text">
                Jméno<span className="text-red-600">*</span>
              </span>
            </div>

            {/* Billing Last Name */}
            <div
              className={`field-container ${
                focusedFields.billingLastName || errors.billingLastName
                  ? "focused"
                  : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border ${
                errors.billingLastName ? "border-red-600" : "border-blue-500"
              }`}
            >
              <input
                type="text"
                {...register("billingLastName", { required: true })}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("billingLastName")}
                onBlur={() => handleBlur("billingLastName")}
                aria-required="true"
              />
              <span className="label-text">
                Příjmení<span className="text-red-600">*</span>
              </span>
            </div>
          </div>

          {/* Company Name, IČ, DIČ */}
          <div className="flex flex-wrap gap-3 items-start mt-3 w-full">
            {/* Company Name */}
            <div
              className={`field-container ${
                focusedFields.companyName || errors.companyName ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border ${
                errors.companyName ? "border-red-600" : "border-blue-500"
              }`}
              style={{ flexBasis: "45.4%" }}
            >
              <input
                type="text"
                {...register("companyName", { required: true })}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("companyName")}
                onBlur={() => handleBlur("companyName")}
                aria-required="true"
              />
              <span className="label-text">
                Název firmy<span className="text-red-600">*</span>
              </span>
            </div>

            {/* Company IČ */}
            <div
              className={`field-container ${
                focusedFields.companyId || errors.companyId ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border ${
                errors.companyId ? "border-red-600" : "border-blue-500"
              }`}
              style={{ flexBasis: "20%" }}
            >
              <input
                type="text"
                {...register("companyId", { required: true })}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("companyId")}
                onBlur={() => handleBlur("companyId")}
                aria-required="true"
              />
              <span className="label-text">
                IČ<span className="text-red-600">*</span>
              </span>
            </div>

            {/* VAT ID */}
            <div
              className={`field-container ${
                focusedFields.vatId ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border border-neutral-300`}
              style={{ flexBasis: "20%" }}
            >
              <input
                type="text"
                {...register("vatId")}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("vatId")}
                onBlur={() => handleBlur("vatId")}
              />
              <span className="label-text">DIČ</span>
            </div>
          </div>

          {/* Street, City */}
          <div className="flex flex-wrap gap-3 items-start mt-3 w-full">
            {/* Street */}
            <div
              className={`field-container ${
                focusedFields.street ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border border-neutral-300`}
            >
              <input
                type="text"
                {...register("street")}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("street")}
                onBlur={() => handleBlur("street")}
              />
              <span className="label-text">Ulice a číslo popisné</span>
            </div>

            {/* City */}
            <div
              className={`field-container ${
                focusedFields.city ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border border-neutral-300`}
            >
              <input
                type="text"
                {...register("city")}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("city")}
                onBlur={() => handleBlur("city")}
              />
              <span className="label-text">Město</span>
            </div>
          </div>

          {/* Postal Code, Country */}
          <div className="flex flex-wrap gap-3 items-start mt-3 w-full">
            {/* Postal Code */}
            <div
              className={`field-container ${
                focusedFields.postalCode ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border border-neutral-300`}
            >
              <input
                type="text"
                {...register("postalCode")}
                placeholder=" "
                className="input-field"
                onFocus={() => handleFocus("postalCode")}
                onBlur={() => handleBlur("postalCode")}
              />
              <span className="label-text">PSČ</span>
            </div>

            {/* Country */}
            <div
              className={`field-container ${
                focusedFields.country ? "focused" : ""
              } flex flex-1 shrink items-center px-4 py-1.5 rounded-lg border border-neutral-300`}
            >
              <select
                {...register("country")}
                className="input-field"
                onFocus={() => handleFocus("country")}
                onBlur={() => handleBlur("country")}
              >
                <option value="Czech Republic">Czech Republic</option>
                <option value="Poland">Poland</option>
                <option value="Slovakia">Slovakia</option>
              </select>
              <span className="label-text">Země</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkboxes */}
      <section className="flex flex-col self-start mt-8 w-full">
        <div className="flex flex-wrap gap-3 items-start w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="survey-opt-out"
              {...register("surveyOptOut")}
              className="h-5 w-5 border border-neutral-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="survey-opt-out" className="ml-2 text-neutral-900">
              Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky
            </label>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-start mt-3 w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter-opt-in"
              {...register("newsletterOptIn")}
              className="h-5 w-5 border border-neutral-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="newsletter-opt-in" className="ml-2 text-neutral-900">
              Přeji si dostávat informace o novinkách a slevách nebo inspiraci
            </label>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full">
        <div className="flex gap-3 items-center">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-blue-500 rounded-lg"
            style={styles.uiBtnDefault}
          >
            Uložit změny
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-lg border border-blue-500 text-neutral-900"
            style={styles.uiBtnDefault}
          >
            Změnit heslo
          </button>
        </div>
        <button
          type="button"
          className="px-6 py-3 text-red-600 rounded-lg border border-red-600"
          style={styles.uiBtnDefault}
        >
          Zrušit účet
        </button>
      </div>
    </form>
  );
}

export default AccountForm;
