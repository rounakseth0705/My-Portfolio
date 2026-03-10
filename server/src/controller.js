export const sendMail = async (req,res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.json({ success: false, message: "Details missing" });
        }
        
    } catch(error) {
        return res.json({ success: false, message: error.message });
    }
}