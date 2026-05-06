"use client";
import './home.css';
import React from 'react';
import  useLocalStorage  from '../../hooks/localStorage';
import usePublishedPage from '../../hooks/getPublisedPage';

export default function Home() {
  
const { data, isLoading, error } = usePublishedPage();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  alert(error)


    const handleTest = async () => {
      try {
        const response = await fetch("http://localhost:2050/test");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  return (
    <div className="activewear-landing">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">AURA</div>
          <ul className="nav-links">
          {/* <li><a href="#new">New Arrivals</a></li> */}
            <li><a href="/admin">Admin</a></li>
            <li><button onClick={handleTest}>testing</button></li>
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
      <section className="hero-banner" style={{backgroundImage: `url(${data[0]?.backgroundimageurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{data[0]?.mainheading}</h1>
          <p>{data[0]?.subheading}</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="flash-sale">
        <div className="flash-sale-content">
          <span className="sale-badge">{data[0]?.salebadge}</span>
          <h2>{data[0]?.saleheading}</h2>
          <p>{data[0]?.saledescription}</p>
          <a href="#sale" className="sale-button">Shop Sale</a>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections" id="collections">
        <h2>Featured Collections</h2>
        <div className="collection-grid">
          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${data[0]?.collectiononeimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{data[0]?.collectiononename}</span>
            </div>
            <h3>{data[0]?.collectiononenname}</h3>
            <p>{data[0]?.collectiononedescription}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${data[0]?.collectiontwoimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{data[0]?.collectiontwoname}</span>
            </div>
            <h3>{data[0]?.collectiontwoname}</h3>
            <p>{data[0]?.collectiontwodescription}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${data[0]?.collectionthreeimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{data[0]?.collection3name}</span>
            </div>
            <h3>{data[0]?.collection3threename}</h3>
            <p>{data[0]?.collectionthreedescription}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${data[0]?.collectionfourimgurl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{data[0]?.collectionfourname}</span>
            </div>
            <h3>{data[0]?.collectionfourname}</h3>
            <p>{data[0]?.collectionfourdescription}</p>
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


