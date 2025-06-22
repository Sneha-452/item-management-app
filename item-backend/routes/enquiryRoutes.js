const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { item_name, item_type, item_description } = req.body;

  if (!item_name || !item_type || !item_description) {
    return res.status(400).json({ error: 'Missing item details' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'your-static-email@example.com', // Change this to your email
    subject: `Enquiry about ${item_name}`,
    text: `Name: ${item_name}\nType: ${item_type}\nDescription: ${item_description}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: '✅ Enquiry email sent!' });
  } catch (error) {
    res.status(500).json({ error: '❌ Failed to send email' });
  }
});

module.exports = router;


// item-backend/routes/enquiryRoutes.js
// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');

// // POST /api/enquiry
// router.post('/', async (req, res) => {
//   const { item_name, item_type, item_description } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       }
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'yourreceiver@email.com', // 👈 Change to your desired static email
//       subject: `Enquiry: ${item_name}`,
//       text: `You have a new enquiry:\n\nName: ${item_name}\nType: ${item_type}\nDescription: ${item_description}`
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: '✅ Email sent successfully' });
//   } catch (error) {
//     console.error('❌ Email error:', error);
//     res.status(500).json({ error: '❌ Failed to send email' });
//   }
// });

// module.exports = router;




