const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "NHDTS <contact@nhdts.com>",
      to: "contact@nhdts.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
};

module.exports = { sendContact };