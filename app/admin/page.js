'use client';
import './admin.css';
import getLS from '../../hooks/getLs';
import React from 'react';

export default function Admin() {
  const [nameOfCampaign, setNameOfCampaign] = React.useState(getLS('campaignName', 'Campaign 2025'));
  const [mainHeading, setMainHeading] = React.useState(getLS('mainHeading', 'Move With Purpose'));
  const [subheading, setSubheading] = React.useState(getLS('subHeader', 'Premium activewear designed for your lifestyle'));
  const [backgroundImageUrl, setBackgroundImageUrl] = React.useState(getLS('heroBackground', 'https://cdn.mos.cms.futurecdn.net/ufy8gy6x2tRtG4jYZLtVeF-1920-80.jpg.webp'));
  const [saleBadge, setSaleBadge] = React.useState(getLS('saleBadge', 'FLASH SALE'));
  const [saleHeading, setSaleHeading] = React.useState(getLS('saleHeading', 'Up to 40% Off'));
  const [saleDescription, setSaleDescription] = React.useState(getLS('saleDescription', 'Limited time offer on select collections'));
  const [sectionTitle, setSectionTitle] = React.useState(getLS('sectionTitle', 'Featured Collections'));
  const [collectionOneName, setCollectionOneName] = React.useState(getLS('collection1Name', "Women's Essentials"));
  const [collectionOneDescription, setCollectionOneDescription] = React.useState(getLS('collection1Desc', 'Timeless basics for every day'));
  const [collectionTwoName, setCollectionTwoName] = React.useState(getLS('collection2Name', "Men's Performance"));
  const [collectionTwoDescription, setCollectionTwoDescription] = React.useState(getLS('collection2Desc', 'High-performance gear for athletes'));
  const [collectionThreeName, setCollectionThreeName] = React.useState(getLS('collection3Name', "Sustainable Styles"));
  const [collectionThreeDescription, setCollectionThreeDescription] = React.useState(getLS('collection3Desc', 'Eco-friendly activewear made from recycled materials'));
  const [collectionFourName, setCollectionFourName] = React.useState(getLS('collection4Name', "Limited Edition"));
  const [collectionFourDescription, setCollectionFourDescription] = React.useState(getLS('collection4Desc', 'Exclusive drops and collaborations'));
  const [collectionOneImgUrl, setCollectionOneImgUrl] = React.useState(getLS('collection1Image', 'https://comfrt.com/fast-image/comfrt/files/1_b6d483fd-43ed-4e9e-b456-8f916457862a.jpg?v=1761764267'));
  const [collectionTwoImgUrl, setCollectionTwoImgUrl] = React.useState(getLS('collection2Image', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'));
  const [collectionThreeImgUrl, setCollectionThreeImgUrl] = React.useState(getLS('collection3Image', 'https://alignwithglow.com/wp-content/uploads/2024/09/yoga-wellness-mindfulness-syracuse-ny.jpg'));
  const [collectionFourImgUrl, setCollectionFourImgUrl] = React.useState(getLS('collection4Image', 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop'));

  const handleSubmitTwo = async (e) => {
    e.preventDefault();
    const request = await fetch("http://localhost:2050/create-section", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        nameOfCampaign,
        mainHeading,
        subheading,
        backgroundImageUrl,
        saleBadge,
        saleHeading,
        saleDescription,
        sectionTitle,
        collectionOneName,
        collectionOneDescription,
        collectionOneImgUrl,
        collectionTwoName,
        collectionTwoDescription,
        collectionTwoImgUrl,
        collectionThreeName,
        collectionThreeDescription,
        collectionThreeImgUrl,
        collectionFourName,
        collectionFourDescription,
        collectionFourImgUrl
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
            
            {/* Campaign Name Section */}
            <div className="form-group-section">
              <h2>Campaign</h2>
              
              <div className="form-group">
                <label htmlFor="campaignName">Campaign Name</label>
                <input 
                  type="text" 
                  id="campaignName" 
                  value={nameOfCampaign}
                  onChange={(e) => {setNameOfCampaign(e.target.value)}}
                  placeholder="Enter campaign name" 
                />
              </div>
            </div>
            
            {/* Hero Banner Section */}
            <div className="form-group-section">
              <h2>Hero Banner</h2>
              
              <div className="form-group">
                <label htmlFor="heroHeading">Main Heading</label>
                <input 
                  type="text" 
                  id="heroHeading" 
                  value= {mainHeading}
                  onChange={(e) => {setMainHeading(e.target.value)}}
                  placeholder="Enter hero heading" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="heroParagraph">Sub Heading</label>
                <input 
                  id="heroParagraph" 
                  onChange={(e) => {setSubheading(e.target.value)}}
                  placeholder="Enter hero paragraph" 
                  value={subheading}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="herobackground">Background Image URL</label>
                <input 
                  id="herobackground" 
                  onChange={(e) => {setBackgroundImageUrl(e.target.value)}}
                  placeholder="Enter background image URL" 
                  value={backgroundImageUrl}
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
                  value={sectionTitle}
                  onChange={(e) => {setSectionTitle(e.target.value)}}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="collection1Name">Collection 1 Name</label>
                  <input 
                    type="text" 
                    id="collection1Name" 
                    placeholder="Enter collection 1 name"
                    value={collectionOneName}
                    onChange={(e) => {setCollectionOneName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Desc">Collection 1 Description</label>
                  <input 
                    type="text" 
                    id="collection1Desc" 
                    placeholder="Enter collection 1 description"
                    value={collectionOneDescription}
                    onChange={(e) => {setCollectionOneDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Image">Collection 1 Image URL</label>
                  <input 
                    type="text" 
                    id="collection1Image" 
                    placeholder="Enter image URL"
                    value={collectionOneImgUrl}
                    onChange={(e) => {setCollectionOneImgUrl(e.target.value)}}
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
                    value={collectionTwoName}
                    onChange={(e) => {setCollectionTwoName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Desc">Collection 2 Description</label>
                  <input 
                    type="text" 
                    id="collection2Desc" 
                    placeholder="Enter collection 2 description"
                    value={collectionTwoDescription}
                    onChange={(e) => {setCollectionTwoDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Image">Collection 2 Image URL</label>
                  <input 
                    type="text" 
                    id="collection2Image" 
                    placeholder="Enter image URL"
                    value={collectionTwoImgUrl}
                    onChange={(e) => {setCollectionTwoImgUrl(e.target.value)}}
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
                    value={collectionThreeName}
                    onChange={(e) => {setCollectionThreeName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Desc">Collection 3 Description</label>
                  <input 
                    type="text" 
                    id="collection3Desc" 
                    placeholder="Enter collection 3 description"
                    value={collectionThreeDescription}
                    onChange={(e) => {setCollectionThreeDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Image">Collection 3 Image URL</label>
                  <input 
                    type="text" 
                    id="collection3Image" 
                    placeholder="Enter image URL"
                    value={collectionThreeImgUrl}
                    onChange={(e) => {setCollectionThreeImgUrl(e.target.value)}}
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
                    value={collectionFourName}
                    onChange={(e) => {setCollectionFourName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Desc">Collection 4 Description</label>
                  <input 
                    type="text" 
                    id="collection4Desc" 
                    placeholder="Enter collection 4 description"
                    value={collectionFourDescription}
                    onChange={(e) => {setCollectionFourDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Image">Collection 4 Image URL</label>
                  <input 
                    type="text" 
                    id="collection4Image" 
                    placeholder="Enter image URL"
                    value={collectionFourImgUrl}
                    onChange={(e) => {setCollectionFourImgUrl(e.target.value)}}
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
