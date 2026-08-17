import React, { useRef } from "react";

const Gallery = () => {
  const galleryRef = useRef();

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left:400, behavior: "smooth" });
  };

  return (
    <div>
      <h2>Horizontal Image Gallery !Slide To See Image</h2>
      <div
        ref={galleryRef}
        style={{
          display: "flex", overflowX: "scroll", width: "400px",
          border: "2px solid #bb0808",
          padding: "10px",
        }}
      >
        <div style={{ minWidth: "400px", height: "200px", background: "red" }} />
        <div style={{ minWidth: "400px", height: "200px", background: "blue" }} />
        <div style={{ minWidth: "400px", height: "200px", background: "green" }} />
        <div style={{ minWidth: "400px", height: "200px", background: "orange" }} />
        <div style={{ minWidth: "400px", height: "200px", background: "purple" }} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <button onClick={scrollLeft}>Scroll Left</button>
        <button onClick={scrollRight} style={{ marginLeft: "10px" }}>
          Scroll Right
        </button>
      </div>
    </div>
  );
};

export default Gallery;
