import {useRef} from "react";

export default function Home() {
    // create the sticky note
    const bottomSectionRef = useRef(null);

    const scrollToBottom = () => {
        //3. Use native DOM methods to scroll to the element!
        bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

     return (
    <div>
      <h1>Welcome to Speta Agency</h1>
      <button onClick={scrollToBottom}>Jump to Call to Action</button>
      
      {/* Creating artificial empty space to force scrolling */}
      <div style={{ height: '150vh', background: 'linear-gradient(#fff, #ccc)' }}></div>
      
      {/* 2. Attach the ref to the HTML element we want to target */}
      <div ref={bottomSectionRef} style={{ padding: '50px', background: '#4caf50', color: 'white' }}>
        <h2>Ready to start your project?</h2>
        <p>Head over to our Contact page.</p>
      </div>
    </div>
  );
}