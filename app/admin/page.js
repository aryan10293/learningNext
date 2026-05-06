'use client';
import './admin.css';
import getLS from '../../hooks/getLs';
import React from 'react';

export default function Admin() {
  const [mainHeader, setMainHeader] = React.useState(getLS('mainHeader', 'Move With Purpose'));
  const [subHeader, setSubHeader] = React.useState(getLS('subHeader', 'Premium activewear designed for your lifestyle'));
  const [heroBackground, setHeroBackground] = React.useState(getLS('heroBackground', 'https://cdn.mos.cms.futurecdn.net/ufy8gy6x2tRtG4jYZLtVeF-1920-80.jpg.webp'));
  const [saleBadge, setSaleBadge] = React.useState(getLS('saleBadge', 'FLASH SALE'));
  const [saleHeading, setSaleHeading] = React.useState(getLS('saleHeading', 'Up to 40% Off'));
  const [saleDescription, setSaleDescription] = React.useState(getLS('saleDescription', 'Limited time offer on select collections'));
  const [collectionsTitle, setCollectionsTitle] = React.useState(getLS('collectionsTitle', 'Featured Collections'));
  const [collection1Name, setCollection1Name] = React.useState(getLS('collection1Name', "Women's Essentials"));
  const [collection1Desc, setCollection1Desc] = React.useState(getLS('collection1Desc', 'Timeless basics for every day'));
  const [collection2Name, setCollection2Name] = React.useState(getLS('collection2Name', "Men's Performance"));
  const [collection2Desc, setCollection2Desc] = React.useState(getLS('collection2Desc', 'High-performance gear for athletes'));
  const [collection3Name, setCollection3Name] = React.useState(getLS('collection3Name', "Sustainable Styles"));
  const [collection3Desc, setCollection3Desc] = React.useState(getLS('collection3Desc', 'Eco-friendly activewear made from recycled materials'));
  const [collection4Name, setCollection4Name] = React.useState(getLS('collection4Name', "Limited Edition"));
  const [collection4Desc, setCollection4Desc] = React.useState(getLS('collection4Desc', 'Exclusive drops and collaborations'));
  const [collection1Image, setCollection1Image] = React.useState(getLS('collection1Image', 'https://comfrt.com/fast-image/comfrt/files/1_b6d483fd-43ed-4e9e-b456-8f916457862a.jpg?v=1761764267'));
  const [collection2Image, setCollection2Image] = React.useState(getLS('collection2Image', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'));
  const [collection3Image, setCollection3Image] = React.useState(getLS('collection3Image', 'https://alignwithglow.com/wp-content/uploads/2024/09/yoga-wellness-mindfulness-syracuse-ny.jpg'));
  const [collection4Image, setCollection4Image] = React.useState(getLS('collection4Image', 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop'));

  const handleSubmitTwo = async (e) => {
    e.preventDefault();
    const request = await fetch("http://localhost:2050/create-section", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        mainHeader,
        subHeader,
        heroBackground,
        saleBadge,
        saleHeading,
        saleDescription,
        collectionsTitle,
        collection1Name,
        collection1Desc,
        collection1Image,
        collection2Name,
        collection2Desc,
        collection2Image,
        collection3Name,
        collection3Desc,
        collection3Image,
        collection4Name,
        collection4Desc,
        collection4Image
       }),
    });

    const data = await request.json();
    alert(data.message);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('mainHeader', mainHeader);
  //   localStorage.setItem('subHeader', subHeader);
  //   localStorage.setItem('heroBackground', heroBackground);
  //   localStorage.setItem('saleBadge', saleBadge);
  //   localStorage.setItem('saleHeading', saleHeading);
  //   localStorage.setItem('saleDescription', saleDescription);
  //   localStorage.setItem('collectionsTitle', collectionsTitle);
  //   localStorage.setItem('collection1Name', collection1Name);
  //   localStorage.setItem('collection1Desc', collection1Desc);
  //   localStorage.setItem('collection1Image', collection1Image);
  //   localStorage.setItem('collection2Name', collection2Name);
  //   localStorage.setItem('collection2Desc', collection2Desc);
  //   localStorage.setItem('collection2Image', collection2Image);
  //   localStorage.setItem('collection3Name', collection3Name);
  //   localStorage.setItem('collection3Desc', collection3Desc);
  //   localStorage.setItem('collection3Image', collection3Image);
  //   localStorage.setItem('collection4Name', collection4Name);
  //   localStorage.setItem('collection4Desc', collection4Desc);
  //   localStorage.setItem('collection4Image', collection4Image);

  //   alert('Changes saved successfully!');
  // }
  return (
    <div className="admin-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">AURA</div>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#content">Content</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
          <div className="nav-icons">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </div>
      </nav>


      {/* Main Form Container */}
      <section className="form-section">
        <div className="form-wrapper">
          <form onSubmit={handleSubmitTwo} className="product-form">
            
            {/* Hero Banner Section */}
            <div className="form-group-section">
              <h2>Hero Banner</h2>
              
              <div className="form-group">
                <label htmlFor="heroHeading">Main Heading</label>
                <input 
                  type="text" 
                  id="heroHeading" 
                  value= {mainHeader}
                  onChange={(e) => {setMainHeader(e.target.value)}}
                  placeholder="Enter hero heading" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="heroParagraph">Sub Heading</label>
                <input 
                  id="heroParagraph" 
                  onChange={(e) => {setSubHeader(e.target.value)}}
                  placeholder="Enter hero paragraph" 
                  value={subHeader}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="herobackground">Background Image URL</label>
                <input 
                  id="herobackground" 
                  onChange={(e) => {setHeroBackground(e.target.value)}}
                  placeholder="Enter background image URL" 
                  value={heroBackground}
                ></input>
              </div>
            </div>

            {/* Flash Sale Section */}
            <div className="form-group-section">
              <h2>Flash Sale Banner</h2>
              
              <div className="form-group">
                <label htmlFor="saleBadge">Sale Badge</label>
                <input 
                  type="text" 
                  id="saleBadge" 
                  placeholder="Enter sale badge text" 
                  value={saleBadge}
                  onChange={(e) => {setSaleBadge(e.target.value)}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="saleHeading">Sale Heading</label>
                <input 
                  type="text" 
                  id="saleHeading" 
                  placeholder="Enter sale heading" 
                  value={saleHeading}
                  onChange={(e) => {setSaleHeading(e.target.value)}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="saleParagraph">Sale Description</label>
                <textarea 
                  id="saleParagraph" 
                  rows="3"
                  placeholder="Enter sale description" 
                  value={saleDescription}
                  onChange={(e) => {setSaleDescription(e.target.value)}}
                ></textarea>
              </div>
            </div>

            {/* Featured Collections Section */}
            <div className="form-group-section">
              <h2>Featured Collections</h2>
              
              <div className="form-group">
                <label htmlFor="collectionsTitle">Section Title</label>
                <input 
                  type="text" 
                  id="collectionsTitle" 
                  placeholder="Enter collections section title" 
                  value={collectionsTitle}
                  onChange={(e) => {setCollectionsTitle(e.target.value)}}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="collection1Name">Collection 1 Name</label>
                  <input 
                    type="text" 
                    id="collection1Name" 
                    placeholder="Enter collection 1 name"
                    value={collection1Name}
                    onChange={(e) => {setCollection1Name(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Desc">Collection 1 Description</label>
                  <input 
                    type="text" 
                    id="collection1Desc" 
                    placeholder="Enter collection 1 description"
                    value={collection1Desc}
                    onChange={(e) => {setCollection1Desc(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Image">Collection 1 Image URL</label>
                  <input 
                    type="text" 
                    id="collection1Image" 
                    placeholder="Enter image URL"
                    value={collection1Image}
                    onChange={(e) => {setCollection1Image(e.target.value)}}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="collection2Name">Collection 2 Name</label>
                  <input 
                    type="text" 
                    id="collection2Name" 
                    placeholder="Enter collection 2 name"
                    value={collection2Name}
                    onChange={(e) => {setCollection2Name(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Desc">Collection 2 Description</label>
                  <input 
                    type="text" 
                    id="collection2Desc" 
                    placeholder="Enter collection 2 description"
                    value={collection2Desc}
                    onChange={(e) => {setCollection2Desc(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Image">Collection 2 Image URL</label>
                  <input 
                    type="text" 
                    id="collection2Image" 
                    placeholder="Enter image URL"
                    value={collection2Image}
                    onChange={(e) => {setCollection2Image(e.target.value)}}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="collection3Name">Collection 3 Name</label>
                  <input 
                    type="text" 
                    id="collection3Name" 
                    placeholder="Enter collection 3 name"
                    value={collection3Name}
                    onChange={(e) => {setCollection3Name(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Desc">Collection 3 Description</label>
                  <input 
                    type="text" 
                    id="collection3Desc" 
                    placeholder="Enter collection 3 description"
                    value={collection3Desc}
                    onChange={(e) => {setCollection3Desc(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Image">Collection 3 Image URL</label>
                  <input 
                    type="text" 
                    id="collection3Image" 
                    placeholder="Enter image URL"
                    value={collection3Image}
                    onChange={(e) => {setCollection3Image(e.target.value)}}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="collection4Name">Collection 4 Name</label>
                  <input 
                    type="text" 
                    id="collection4Name" 
                    placeholder="Enter collection 4 name"
                    value={collection4Name}
                    onChange={(e) => {setCollection4Name(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Desc">Collection 4 Description</label>
                  <input 
                    type="text" 
                    id="collection4Desc" 
                    placeholder="Enter collection 4 description"
                    value={collection4Desc}
                    onChange={(e) => {setCollection4Desc(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Image">Collection 4 Image URL</label>
                  <input 
                    type="text" 
                    id="collection4Image" 
                    placeholder="Enter image URL"
                    value={collection4Image}
                    onChange={(e) => {setCollection4Image(e.target.value)}}
                  />
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="form-group-section">
              <h2>Categories</h2>
              
              <div className="form-group">
                <label htmlFor="categoriesTitle">Section Title</label>
                <input 
                  type="text" 
                  id="categoriesTitle" 
                  placeholder="Enter categories section title" 
                />
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="form-group-section">
              <h2>Newsletter Signup</h2>
              
              <div className="form-group">
                <label htmlFor="newsletterHeading">Newsletter Heading</label>
                <input 
                  type="text" 
                  id="newsletterHeading" 
                  placeholder="Enter newsletter heading" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="newsletterParagraph">Newsletter Description</label>
                <textarea 
                  id="newsletterParagraph" 
                  rows="3"
                  placeholder="Enter newsletter description" 
                ></textarea>
              </div>
            </div>

            {/* Footer Section */}
            <div className="form-group-section">
              <h2>Footer</h2>
              
              <div className="form-group">
                <label htmlFor="footerCopyright">Copyright Text</label>
                <input 
                  type="text" 
                  id="footerCopyright" 
                  placeholder="Enter footer copyright text" 
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Save Changes</button>
              <button type="reset" className="btn btn-secondary">Reset Form</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Admin Panel</h4>
            <ul>
              <li><a href="#">Back to Home</a></li>
              <li><a href="#content">Content Manager</a></li>
              <li><a href="#preview">Preview Changes</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Documentation</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Account</h4>
            <ul>
              <li><a href="#settings">Settings</a></li>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#logout">Logout</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 AURA Admin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
