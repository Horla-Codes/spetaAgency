// src/pages/Contact.jsx
import { useRef, useEffect } from 'react';

export default function Contact() {
  // 1. Create the sticky note
  const nameInputRef = useRef(null);

  useEffect(() => {
    // 3. When the component loads, directly access the HTML and focus it!
    nameInputRef.current.focus();
  }, []); // Empty array means this only runs once on load

  return (
    <div>
      <h1>Contact Us</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        {/* 2. Attach the sticky note to this specific input */}
        <input ref={nameInputRef} type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}