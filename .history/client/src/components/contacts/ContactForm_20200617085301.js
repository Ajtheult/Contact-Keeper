import React from "react";

const ContactForm = () => {
  const [state, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { id, name, email, phone, type } = contact;
  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactForm;
