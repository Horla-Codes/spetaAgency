import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "75a0593b-5f20-4e02-a9d0-7cfefb0c18c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit}>
      Name: <input type="text" name="name" required/><br />
      Email: <input type="email" name="email" required/><br />
      Message: <textarea name="message" required></textarea><br></br>
      <button type="submit">Submit</button>
      <p>{result}</p>
    </form>
  );
}