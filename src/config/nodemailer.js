import nodemailer from "nodemailer";

const email = process.env.EMAIL_FROM;
const pass = process.env.EMAIL_PASS;
const host = process.env.EMAIL_HOST;
const prot = process.env.EMAIL_PORT;

export const transporter = nodemailer.createTransport({
  host: host,
  port: prot,
  secure: true,
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});
