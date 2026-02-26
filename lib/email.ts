import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendPasswordResetEmail(email: string, token: string) {
  let appUrl = "";

  // Priorité : APP_URL explicite > Vercel production > Vercel preview > NEXTAUTH_URL > localhost
  if (process.env.APP_URL) {
    appUrl = process.env.APP_URL;
  } else if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    appUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  } else if (process.env.VERCEL_URL) {
    appUrl = `https://${process.env.VERCEL_URL}`;
  } else if (process.env.NEXTAUTH_URL) {
    appUrl = process.env.NEXTAUTH_URL;
  } else {
    appUrl = "http://localhost:3000";
  }

  const resetUrl = `${appUrl}/auth/reset-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: email,
    subject: "Réinitialisation de votre mot de passe - Word Menu",
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="font-size: 28px; font-weight: 900; margin: 0;">
            <span style="color: #111827;">Word</span>
            <span style="color: #0d9488;"> Menu</span>
          </h1>
        </div>
        
        <div style="background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #e5e7eb;">
          <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin-top: 0;">
            Réinitialisation de mot de passe
          </h2>
          
          <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
            Vous avez demandé la réinitialisation de votre mot de passe. 
            Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" 
               style="display: inline-block; background: linear-gradient(to right, #4f46e5, #2563eb); color: white; font-weight: 700; font-size: 14px; padding: 14px 32px; border-radius: 12px; text-decoration: none;">
              Réinitialiser mon mot de passe
            </a>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.5;">
            Ce lien expire dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, 
            vous pouvez ignorer cet email en toute sécurité.
          </p>
          
          <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;" />
          
          <p style="color: #d1d5db; font-size: 11px;">
            Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :<br/>
            <a href="${resetUrl}" style="color: #6366f1; word-break: break-all;">${resetUrl}</a>
          </p>
        </div>
      </div>
    `,
  });
}
