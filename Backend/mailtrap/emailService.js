import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpEmail = async (email, otp) => {
  try {
    const response = await resend.emails.send({
      from: "no-reply@resend.dev", // Must be a @resend.dev email
      to: email,
      subject: "Your OTP Code",
      html: `<h2>Your OTP Code: <strong>${verificationToken}</strong></h2><p>It expires in 10 minutes.</p>`,
    });

    return { success: true, message: "OTP sent successfully", id: response.id };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { success: false, message: "Failed to send OTP" };
  }
};