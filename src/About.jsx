// src/pages/About.jsx
import { useRef } from 'react';

export default function About() {
  // 1. Create the sticky note for the video
  const videoRef = useRef(null);

  return (
    <div>
      <h1>About Our Agency</h1>
      
      {/* 2. Attach the ref to the video element */}
      <video 
        ref={videoRef} 
        width="400" 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
      />
      
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        {/* 3. Use the ref to trigger native HTML methods! */}
        <button onClick={() => videoRef.current.play()}>Play Showcase</button>
        <button onClick={() => videoRef.current.pause()}>Pause Showcase</button>
      </div>
    </div>
  );
}