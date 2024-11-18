import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SG_KEY);

const immunizationSchedule = [
  {
    age: "Birth",
    vaccines: ["Hepatitis B (HepB): 1st dose", "Bacille Calmette-Guérin (BCG): 1st dose"],
  },
  {
    age: "1-2 Months",
    vaccines: ["Hepatitis B (HepB): 2nd dose"],
  },
  {
    age: "2 Months",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 1st dose",
      "Haemophilus influenzae type b (Hib): 1st dose",
      "Inactivated Poliovirus (IPV): 1st dose",
      "Pneumococcal Conjugate (PCV13): 1st dose",
      "Rotavirus (RV): 1st dose",
    ],
  },
  {
    age: "4 Months",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 2nd dose",
      "Haemophilus influenzae type b (Hib): 2nd dose",
      "Inactivated Poliovirus (IPV): 2nd dose",
      "Pneumococcal Conjugate (PCV13): 2nd dose",
      "Rotavirus (RV): 2nd dose",
    ],
  },
  {
    age: "6 Months",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 3rd dose",
      "Haemophilus influenzae type b (Hib): 3rd dose (if needed, depending on the brand of vaccine)",
      "Inactivated Poliovirus (IPV): 3rd dose",
      "Pneumococcal Conjugate (PCV13): 3rd dose",
      "Rotavirus (RV): 3rd dose (if needed, depending on the brand of vaccine)",
      "Hepatitis B (HepB): 3rd dose (between 6-18 months)",
      "Influenza (Flu): Annual vaccination starting at 6 months",
    ],
  },
  {
    age: "12-15 Months",
    vaccines: [
      "Haemophilus influenzae type b (Hib): 3rd or 4th dose (depending on brand)",
      "Pneumococcal Conjugate (PCV13): 4th dose",
      "Measles, Mumps, and Rubella (MMR): 1st dose",
      "Varicella (VAR): 1st dose",
      "Hepatitis A (HepA): 1st dose (2 doses spaced at least 6 months apart)",
    ],
  },
  {
    age: "15-18 Months",
    vaccines: ["Diphtheria, Tetanus, and acellular Pertussis (DTaP): 4th dose"],
  },
  {
    age: "4-6 Years",
    vaccines: [
      "Diphtheria, Tetanus, and acellular Pertussis (DTaP): 5th dose",
      "Inactivated Poliovirus (IPV): 4th dose",
      "Measles, Mumps, and Rubella (MMR): 2nd dose",
      "Varicella (VAR): 2nd dose",
    ],
  },
];

const handler = async (req, res) => {
  const { email, dueDate, age, vaccines } = req.body;

  const message = `
    <p>Dear Parent,</p>
    <p>Your child's immunization is due soon. Here are the details:</p>
    <h3>${age}</h3>
    <ul>
      ${vaccines.map((vaccine) => `<li>${vaccine}</li>`).join("")}
    </ul>
    <p>Due Date: ${new Date(dueDate).toLocaleDateString()}</p>
  `;

  const msg = {
    to: email,
    from: "watchbump@gmail.com",
    subject: "Your Child's Upcoming Immunization",
    html: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Immunization reminder email sent successfully." });
  } catch (error) {
    console.error("Error sending immunization reminder email:", error);
    res.status(500).json({ message: "Error sending immunization reminder email." });
  }
};

export default handler;
