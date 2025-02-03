import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuration de Nodemailer pour Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Votre adresse Gmail
        pass: process.env.GMAIL_PASSWORD, // Votre mot de passe d'application
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Votre adresse Gmail
      subject: `Nouveau message de ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail envoyé avec succès !' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}