"use client";
import '../home/home.css';
import React from 'react';
import useFormStore from '../../hooks/useFormStore';
export default function Preview() {
    //const [formData, setFormData] = React.useState(null)
    const { formData } = useFormStore();
    console.log(formData)
    // React.useEffect(() => {
    //     const data = JSON.parse(
    //         localStorage.getItem("formData")
    //     );

    //     setFormData(data);
    // }, []);
    // console.log(formData)
  return (
    <div className="activewear-landing">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">AURA</div>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-icons">
            <span>🔍</span>
            <span>👤</span>
            <span>🛍️</span>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="hero-banner" style={{
        backgroundImage: `url(${formData?.backgroundimageurl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}
    >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{formData?.mainheading}</h1>
          <p>{formData?.subheading}</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="flash-sale">
        <div className="flash-sale-content">
          <span className="sale-badge">{formData?.salebadge}</span>
          <h2>{formData?.saleheading}</h2>
          <p>{formData?.saledescription}</p>
          <a href="#sale" className="sale-button">Shop Sale</a>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections" id="collections">
        <h2>{formData?.sectiontitle}</h2>
        <div className="collection-grid">
          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${formData?.collectiononeimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{formData?.collectiononename}</span>
            </div>
            <h3>{formData?.collectiononename}</h3>
            <p>{formData?.collectiononedescription}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${formData?.collectiontwoimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{formData?.collectiontwoname}</span>
            </div>
            <h3>{formData?.collectiontwoname}</h3>
            <p>{formData?.collectiontwodescription}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${formData?.collectionthreeimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{formData?.collectionthreename}</span>
            </div>
            <h3>{formData?.collectionthreename}</h3>
            <p>{formData?.collectionthreedescription}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${formData?.collectionfourimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{formData?.collectionfourname}</span>
            </div>
            <h3>{formData?.collectionfourname}</h3>
            <p>{formData?.collectionfourdescription}</p>
          </div>
        </div>
      </section>

      <div style={{display: 'flex', justifyContent: 'center', padding: '40px'}}>
        <button style={{
          padding: '16px 48px',
          fontSize: '14px',
          fontWeight: '600',
          letterSpacing: '1px',
          background: '#000',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => { e.target.style.background = '#333'; e.target.style.transform = 'scale(1.05)'; }}
          onMouseLeave={e => { e.target.style.background = '#000'; e.target.style.transform = 'scale(1)'; }}
        >Save Preview</button>
      </div>
    </div>
  );
}
