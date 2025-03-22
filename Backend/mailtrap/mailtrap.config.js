// // filepath: /d:/Medicare/Backend/mailtrap/mailtrap.config.js
// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";

// dotenv.config();

// export const mailtrapClient = new MailtrapClient({
//   token: "1aa0befaee8de997507fdfaa1ab88022",
// });

// export const sender = {
//   email: "hello@example.com",
//   name: "Mailtrap Test",
// };


// import { MailerSend } from "mailersend";


// // Initialize MailerSend with your API key
// export const mailersend = new MailerSend({
//   apiKey: "mlsn.672f9d4c54cdaed9288420053e1c24b485e70afb425eae422e12a64947fd7695", // Replace with your actual API key
// });

// export const sender = {
//     email: "trial-z3m5jgr36qmgdpyo.mlsender.net",
//     name: "Medicare",
//   };

import { Resend } from 'resend';
import dotenv from "dotenv";

dotenv.config();

// Initialize Resend instance
export const resend = new Resend('re_nXNa5iHs_HZ99jkt9J4wGTPJbGtKFL7a3'); // Replace with process.env.RESEND_API_KEY later

// Sender format - as a string
export const sender = "Medicare <onboarding@resend.dev>";




 
