import transporter from "./nodemailer.js";

export const sendMail = async (req,res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.json({ success: false, message: "Details missing" });
        }
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_MAIL,
            subject: "Mail from portfolio",
            text: message
        };
        await transporter.sendMail(mailOptions);
        return res.json({ success: true, message: "Mail sent" });
    } catch(error) {
        return res.json({ success: false, message: error.message });
    }
}