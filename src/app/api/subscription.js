// pages/api/subscription.js
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, action } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    const sgRequest = {
      method: "PUT",
      url: `https://api.sendgrid.com/v3/marketing/contacts`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        contacts: [{ email }],
      }),
    };

    if (action === "opt-in") {
      // SendGrid automatically adds contacts to the list.
      await sendgrid.request(sgRequest);
    } else if (action === "opt-out") {
      // SendGrid uses suppression groups for unsubscribes.
      await sendgrid.request({
        method: "POST",
        url: `https://api.sendgrid.com/v3/marketing/contacts`,
        body: { recipient_emails: [email] },
      });
    } else {
      return res.status(400).json({ error: "Invalid action" });
    }

    res.status(200).json({ message: `Successfully processed ${action}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
}
