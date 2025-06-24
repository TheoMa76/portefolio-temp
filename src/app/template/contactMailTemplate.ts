export function buildContactMail({ name, email, message }: { name: string, email: string, message: string }) {
  const html = `
  <html>
    <head>
      <style>
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #1b1b2f;
            color: #f1f2f6;
          }
          .container {
            background-color: #2a2a40;
            border-color: #758bfd;
            box-shadow: 0 0 12px rgba(117, 139, 253, 0.3);
          }
          .header {
            background-color: #758bfd;
            color: #f1f2f6;
          }
          .footer {
            color: #aaa;
          }
        }
      </style>
    </head>
    <body style="margin: 0; padding: 20px; font-family: Arial, Helvetica, sans-serif; background-color: #f1f2f6; color: #27187e;">
      <div class="container" style="max-width: 600px; margin: auto; background-color: white; border: 1px solid #aeb8fe; border-radius: 12px; box-shadow: 0 0 12px rgba(117, 139, 253, 0.2); overflow: hidden;">
        
        <div class="header" style="background-color: #758bfd; color: #f1f2f6; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">📬 Nouveau message de contact</h2>
          <p style="margin: 5px 0 0;">Quelqu’un a rempli le formulaire sur ton site 🌐</p>
        </div>
        
        <div style="padding: 20px;">
          <p style="margin: 0 0 10px;">
            <span style="font-weight: bold;">👤 Nom :</span> ${name}
          </p>
          <p style="margin: 0 0 10px;">
            <span style="font-weight: bold;">📧 Email :</span> <a href="mailto:${email}" style="color: #758bfd; text-decoration: none;">${email}</a>
          </p>
          <div style="margin: 20px 0; border-top: 1px dashed #ccc;"></div>
          <p style="margin: 0 0 8px;"><strong>💬 Message :</strong></p>
          <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          
          <div style="margin-top: 30px; text-align: center;">
            <span style="font-size: 28px;">✨</span>
            <p style="font-size: 14px; color: #888; margin-top: 10px;">Prends le temps de répondre si nécessaire</p>
          </div>
        </div>

        <div class="footer" style="background-color: #f9f9f9; padding: 10px 20px; font-size: 12px; color: #999; text-align: center;">
          Ce message a été envoyé depuis le site – <a href="${process.env.SITE_URL}" style="color: #758bfd;">Voir le site</a>
        </div>
      </div>
    </body>
  </html>
  `

  return html
}