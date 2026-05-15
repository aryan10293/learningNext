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

      {/* Category Section */}
      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-grid">
          <div className="category-item">
            <div className="category-box">Leggings</div>
          </div>
          <div className="category-item">
            <div className="category-box">Pants</div>
          </div>
          <div className="category-item">
            <div className="category-box">Tops</div>
          </div>
          <div className="category-item">
            <div className="category-box">Shorts</div>
          </div>
          <div className="category-item">
            <div className="category-box">Jackets</div>
          </div>
          <div className="category-item">
            <div className="category-box">Shoes</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials">
        <h2>What Our Customers Love</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>{'"The quality is unmatched. I feel confident in every workout."'}</p>
            <span className="author">- Sarah M.</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>{'"Finally found activewear that\'s both stylish and functional."'}</p>
            <span className="author">- James T.</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>{'"The fit is incredible. Customer service is top-notch too!"'}</p>
            <span className="author">- Emma R.</span>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay In The Loop</h2>
          <p>Get exclusive offers and wellness tips delivered to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About AURA</h4>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
              <a href="#facebook">Facebook</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 AURA Activewear. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
