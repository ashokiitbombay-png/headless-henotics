"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // HERE: Connect to Email API (Resend, SendGrid) or Database
  console.log("New Lead:", { name, phone, message });

  return { success: true, message: "Request received!" };
}
