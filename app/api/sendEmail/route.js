import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Parse the request body
    const {
      formType,
      name,
      email,
      phone,
      selectedOption,
      message,
      projectType,
      description,
    } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Create a transporter using Mailtrap's SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email template for Start a Project form
    const startProjectTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4CAF50;">New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${
          projectType?.name || "Not specified"
        }</p>
        <p><strong>Description:</strong></p>
        <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${description}</p>
        <p style="margin-top: 20px; font-size: 0.9em; color: #777;">
          This email was sent from the "Start a Project" form on your portfolio website.
        </p>
      </div>
    `;

    // Email template for Contact form
    const contactTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4CAF50;">New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not specified"}</p>
        <p><strong>Purpose:</strong> ${selectedOption || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
        <p style="margin-top: 20px; font-size: 0.9em; color: #777;">
          This email was sent from the "Contact" form on your portfolio website.
        </p>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: '"Portfolio Form" <no-reply@yourdomain.com>',
      to: "your-email@example.com",
      subject:
        formType === "startProject"
          ? "Area50: New Project Inquiry"
          : "Area50: New Contact Inquiry",
      html:
        formType === "startProject" ? startProjectTemplate : contactTemplate,
    });

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // Return an error response
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
