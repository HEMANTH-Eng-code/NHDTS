const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection when the server starts
transporter.verify((error, success) => {
  if (error) {
    console.log("====================================");
    console.log("VERIFY ERROR:");
    console.log(error);
    console.log("====================================");
  } else {
    console.log("====================================");
    console.log("✅ Server is ready to send emails");
    console.log("====================================");
  }
});

const sendContact = async (req, res) => {
  try {
    console.log("📨 New Contact Request Received");

    const { name, email, message } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    console.log("✅ Email Sent Successfully");

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.log("====================================");
    console.log("❌ EMAIL ERROR");
    console.log(error);
    console.log("====================================");

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
};

module.exports = { sendContact };