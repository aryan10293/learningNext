"use client";
import './home.css';
import React from 'react';
import  useLocalStorage  from '../../hooks/localStorage';

export default function Home() {
  const [mainHeader, setMainHeader] = useLocalStorage("mainHeader","Move With Purpose");
  const [subHeader, setSubHeader] = useLocalStorage("subHeader","Premium activewear designed for your lifestyle");
  const [heroBackground, setHeroBackground] = useLocalStorage("heroBackground","https://cdn.mos.cms.futurecdn.net/ufy8gy6x2tRtG4jYZLtVeF-1920-80.jpg.webp");
  const [saleBadge, setSaleBadge] = useLocalStorage("saleBadge","FLASH SALE");
  const [saleHeading, setSaleHeading] = useLocalStorage("saleHeading","Up to 40% Off");
  const [saleDescription, setSaleDescription] = useLocalStorage("saleDescription","Limited time offer on select collections");
  const [collectionsTitle, setCollectionsTitle] = useLocalStorage("collectionsTitle","Featured Collections");
  const [collection1Name, setCollection1Name] = useLocalStorage("collection1Name","Women's Essentials");
  const [collection1Desc, setCollection1Desc] = useLocalStorage("collection1Desc","Timeless basics for every day");
  const [collection2Name, setCollection2Name] = useLocalStorage("collection2Name","Men's Performance");
  const [collection2Desc, setCollection2Desc] = useLocalStorage("collection2Desc","High-performance gear for athletes");
  const [collection3Name, setCollection3Name] = useLocalStorage("collection3Name","Sustainable Styles");
  const [collection3Desc, setCollection3Desc] = useLocalStorage("collection3Desc","Eco-friendly activewear made from recycled materials");
  const [collection4Name, setCollection4Name] = useLocalStorage("collection4Name","Limited Edition");
  const [collection4Desc, setCollection4Desc] = useLocalStorage("collection4Desc","Exclusive drops and collaborations");
  const [collection1Image, setCollection1Image] = useLocalStorage("collection1Image","https://comfrt.com/fast-image/comfrt/files/1_b6d483fd-43ed-4e9e-b456-8f916457862a.jpg?v=1761764267");
  const [collection2Image, setCollection2Image] = useLocalStorage("collection2Image","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop");
  const [collection3Image, setCollection3Image] = useLocalStorage("collection3Image","https://alignwithglow.com/wp-content/uploads/2024/09/yoga-wellness-mindfulness-syracuse-ny.jpg");
  const [collection4Image, setCollection4Image] = useLocalStorage("collection4Image","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop)");

  const women = "Women's";
  const men = "Men's";
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
      <section className="hero-banner" style={{backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{mainHeader}</h1>
          <p>{subHeader}</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="flash-sale">
        <div className="flash-sale-content">
          <span className="sale-badge">{saleBadge}</span>
          <h2>{saleHeading}</h2>
          <p>{saleDescription}</p>
          <a href="#sale" className="sale-button">Shop Sale</a>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections" id="collections">
        <h2>Featured Collections</h2>
        <div className="collection-grid">
          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${collection1Image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{collection1Name}</span>
            </div>
            <h3>{collection1Name}</h3>
            <p>{collection1Desc}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${collection2Image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{collection2Name}</span>
            </div>
            <h3>{collection2Name}</h3>
            <p>{collection2Desc}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${collection3Image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{collection3Name}</span>
            </div>
            <h3>{collection3Name}</h3>
            <p>{collection3Desc}</p>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: `url(${collection4Image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <span className="collection-label">{collection4Name}</span>
            </div>
            <h3>{collection4Name}</h3>
            <p>{collection4Desc}</p>
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


