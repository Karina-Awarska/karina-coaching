"use client";

import styles from "@/styles/components/contactForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/utils/contactForm";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      program: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = async (data) => {
    setLoading(true);
    try {
      await sendContactForm(data);
      reset();
      setLoading(false);
    } catch (error) {
      reset();
      console.log("error message", error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendEmail)} className={styles.form}>
        <label className={styles.label} htmlFor="program">
          Programy
          <select {...register("program")} name="program" id="program">
            <option disabled value="">
              -- Wybierz program --
            </option>

            <option>Transformacja zawodowa CSR</option>
            <option>PWW</option>
            <option>MEC</option>
            <option>CSR plus pole informacyjne</option>
          </select>
        </label>

        <label className={styles.label} htmlFor="subject">
          Temat
          <input
            {...register("subject")}
            type="text"
            id="subject"
            name="subject"
          />
        </label>
        <label className={styles.label} htmlFor="message">
          Wiadomość
          <textarea
            type="text"
            {...register("message")}
            name="message"
            id="message"
          />
        </label>
        <button type="submit">{loading ? "Loading..." : "Wyślij"}</button>
      </form>
    </div>
  );
};
