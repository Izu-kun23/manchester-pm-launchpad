// API endpoint for quiz automation follow-up
// This file shows the structure for backend integration

export interface QuizLeadData {
  firstName: string;
  email: string;
  whatsapp: string;
  backgroundType: 'support-worker' | 'graduate' | 'career-switcher' | 'other';
  resultType: 'A' | 'B' | 'C';
  timestamp: string;
}

export interface EmailData {
  to: string;
  firstName: string;
  backgroundType: string;
  type: string;
  sequence: string;
  timestamp: string;
}

export interface WhatsAppData {
  to: string;
  message: string;
  type: string;
}

// Example API endpoints you would create:

/*
// /api/send-email-sequence
export async function POST(request: Request) {
  const emailData: EmailData = await request.json();
  
  // Integration with email service (Mailchimp, ConvertKit, etc.)
  // Example with Mailchimp:
  const response = await fetch(`https://us1.api.mailchimp.com/3.0/automations/${AUTOMATION_ID}/emails`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: emailData.to,
      merge_fields: {
        FNAME: emailData.firstName,
        BACKGROUND: emailData.backgroundType
      }
    })
  });
  
  return Response.json({ success: true });
}

// /api/send-open-day-invite
export async function POST(request: Request) {
  const inviteData: EmailData = await request.json();
  
  // Send open day invite email
  // Integration with your email service
  
  return Response.json({ success: true });
}

// /api/send-whatsapp-message
export async function POST(request: Request) {
  const whatsappData: WhatsAppData = await request.json();
  
  // Integration with WhatsApp Business API
  // Example with Twilio WhatsApp API:
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${ACCOUNT_SID}/Messages.json`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${ACCOUNT_SID}:${AUTH_TOKEN}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      From: 'whatsapp:+14155238886', // Your WhatsApp Business number
      To: `whatsapp:${whatsappData.to}`,
      Body: whatsappData.message
    })
  });
  
  return Response.json({ success: true });
}
*/

// Email templates for different result types
export const emailTemplates = {
  typeB: {
    subject: "You're Ready for Project Management - Join Our November Bootcamp",
    body: `
Hi {{firstName}},

Based on your quiz results, you've got the potential to excel in project management! 

Our 4-Week Project Management Bootcamp starting November 15th is perfect for someone with your background and motivation.

What you'll get:
✅ Real-world projects to build your portfolio
✅ One-to-one mentoring from experienced PMs
✅ Job support after completion
✅ Interview preparation with real examples

Ready to make the move? Book your Fit Call to secure your spot:

https://calendly.com/captainjon/projectcareer-cohort

Only 20 seats available for November cohort.

Best regards,
The ProjectCareer Team
    `
  },
  typeC: {
    subject: "Discover Project Management at Our Open Day",
    body: `
Hi {{firstName}},

You're exploring project management - and that's a great place to start!

Come to our Open Day and see what it looks like firsthand. You'll meet past learners, see real portfolios, and get a feel for whether PM is right for you.

Open Day Details:
📅 Date: [Insert Date]
🕐 Time: [Insert Time]
📍 Location: [Insert Location/Online]

Reserve your free spot:
https://projectcareer.co.uk/open-day

No commitment required - just come and explore!

Best regards,
The ProjectCareer Team
    `
  }
};

// WhatsApp message templates
export const whatsappTemplates = {
  typeA: "Hey {{firstName}}, based on your quiz results, you're a strong fit for our Project Management Program. Let's confirm your spot — book your Fit Call here: https://calendly.com/captainjon/projectcareer-cohort"
};
