'use client';
import './admin.css';
import getLS from '../../hooks/getLs';
import React from 'react';
import useCampaigns from '../../hooks/getcampagins';
import getPublishedPage from '../../hooks/getPublisedPage';

export default function Admin() {
    const { data, isLoading, error } = useCampaigns();
    const { data: publishedData, isLoading: publishedLoading, error: publishedError } = getPublishedPage();
   


    const [nameOfCampaign, setNameOfCampaign] = React.useState(publishedData ? publishedData[0]?.nameOfCampaign : '');
    const [mainHeading, setMainHeading] = React.useState(publishedData ? publishedData[0]?.mainheading : '');
    const [subHeading, setSubheading] = React.useState(publishedData ? publishedData[0]?.subheading : '');
    const [backgroundImageUrl, setBackgroundImageUrl] = React.useState(publishedData ? publishedData[0]?.backgroundimageurl : '');
    const [saleBadge, setSaleBadge] = React.useState(publishedData ? publishedData[0]?.salebadge : '');
    const [saleHeading, setSaleHeading] = React.useState(publishedData ? publishedData[0]?.saleheading : '');
    const [saleDescription, setSaleDescription] = React.useState(publishedData ? publishedData[0]?.saledescription : '');
    const [sectionTitle, setSectionTitle] = React.useState(publishedData ? publishedData[0]?.sectiontitle : '');
    const [collectionOneName, setCollectionOneName] = React.useState(publishedData ? publishedData[0]?.collectiononename : '');
    const [collectionOneDescription, setCollectionOneDescription] = React.useState(publishedData ? publishedData[0]?.collectiononedescription : '');
    const [collectionOneImgUrl, setCollectionOneImgUrl] = React.useState(publishedData ? publishedData[0]?.collectiononeimgurl : '');
    const [collectionTwoName, setCollectionTwoName] = React.useState(publishedData ? publishedData[0]?.collectiontwoname : '');
    const [collectionTwoDescription, setCollectionTwoDescription] = React.useState(publishedData ? publishedData[0]?.collectiontwodescription : '');
    const [collectionTwoImgUrl, setCollectionTwoImgUrl] = React.useState(publishedData ? publishedData[0]?.collectiontwoimgurl : '');
    const [collectionThreeName, setCollectionThreeName] = React.useState(publishedData ? publishedData[0]?.collectionthreename : '');
    const [collectionThreeDescription, setCollectionThreeDescription] = React.useState(publishedData ? publishedData[0]?.collectionthreedescription : '');
    const [collectionThreeImgUrl, setCollectionThreeImgUrl] = React.useState(publishedData ? publishedData[0]?.collectionthreeimgurl : '');
    const [collectionFourName, setCollectionFourName] = React.useState(publishedData ? publishedData[0]?.collectionfourname : '');
    const [collectionFourDescription, setCollectionFourDescription] = React.useState(publishedData ? publishedData[0]?.collectionfourdescription : '');
    const [collectionFourImgUrl, setCollectionFourImgUrl] = React.useState(publishedData ? publishedData[0]?.collectionfourimgurl : '');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong</div>;

  const handleSubmitTwo = async (e) => {
    e.preventDefault();
    console.log(nameOfCampaign)
    const request = await fetch("http://localhost:2050/create-section", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({ 
        nameOfCampaign: nameOfCampaign || publishedData[0]?.nameofcampaign,
        mainHeading: mainHeading || publishedData[0]?.mainheading,
        subHeading: subHeading || publishedData[0]?.subheading,
        backgroundImageUrl: backgroundImageUrl || publishedData[0]?.backgroundimageurl,
        saleBadge: saleBadge || publishedData[0]?.salebadge,
        saleHeading: saleHeading || publishedData[0]?.saleheading,
        saleDescription: saleDescription || publishedData[0]?.saledescription,
        sectionTitle: sectionTitle || publishedData[0]?.sectiontitle,
        collectionOneName: collectionOneName || publishedData[0]?.collectiononename,
        collectionOneDescription: collectionOneDescription || publishedData[0]?.collectiononedescription,
        collectionOneImgUrl: collectionOneImgUrl || publishedData[0]?.collectiononeimgurl,
        collectionTwoName: collectionTwoName || publishedData[0]?.collectiontwoname,
        collectionTwoDescription: collectionTwoDescription || publishedData[0]?.collectiontwodescription,
        collectionTwoImgUrl: collectionTwoImgUrl || publishedData[0]?.collectiontwoimgurl,
        collectionThreeName: collectionThreeName || publishedData[0]?.collectionthreename,
        collectionThreeDescription: collectionThreeDescription || publishedData[0]?.collectionthreedescription,
        collectionThreeImgUrl: collectionThreeImgUrl || publishedData[0]?.collectionthreeimgurl,
        collectionFourName: collectionFourName || publishedData[0]?.collectionfourname,
        collectionFourDescription: collectionFourDescription || publishedData[0]?.collectionfourdescription,
        collectionFourImgUrl: collectionFourImgUrl || publishedData[0]?.collectionfourimgurl
      })
    });
    const data = await request.json();
    console.log(data);
  }

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
                  value={nameOfCampaign || publishedData[0]?.nameofcampaign }
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
                  value= {mainHeading || publishedData[0]?.mainheading}
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
                  value={subHeading || publishedData[0]?.subheading}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="herobackground">Background Image URL</label>
                <input 
                  id="herobackground" 
                  onChange={(e) => {setBackgroundImageUrl(e.target.value)}}
                  placeholder="Enter background image URL" 
                  value={backgroundImageUrl || publishedData[0]?.backgroundimageurl}
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
                  value={saleBadge || publishedData[0]?.salebadge}
                  onChange={(e) => {setSaleBadge(e.target.value)}}
                />
              </div>


              <div className="form-group">
                <label htmlFor="saleHeading">Sale Heading</label>
                <input 
                  type="text" 
                  id="saleHeading" 
                  placeholder="Enter sale heading" 
                  value={saleHeading || publishedData[0]?.saleheading}
                  onChange={(e) => {setSaleHeading(e.target.value)}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="saleParagraph">Sale Description</label>
                <textarea 
                  id="saleParagraph" 
                  rows="3"
                  placeholder="Enter sale description" 
                  value={saleDescription || publishedData[0]?.saledescription}
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
                  value={sectionTitle || publishedData[0]?.sectiontitle}
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
                    value={collectionOneName || publishedData[0]?.collectiononename}
                    onChange={(e) => {setCollectionOneName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Desc">Collection 1 Description</label>
                  <input 
                    type="text" 
                    id="collection1Desc" 
                    placeholder="Enter collection 1 description"
                    value={collectionOneDescription || publishedData[0]?.collectiononedescription}
                    onChange={(e) => {setCollectionOneDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Image">Collection 1 Image URL</label>
                  <input 
                    type="text" 
                    id="collection1Image" 
                    placeholder="Enter image URL"
                    value={collectionOneImgUrl  || publishedData[0]?.collectiononeimgurl}
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
                    value={collectionTwoName || publishedData[0]?.collectiontwoname}
                    onChange={(e) => {setCollectionTwoName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Desc">Collection 2 Description</label>
                  <input 
                    type="text" 
                    id="collection2Desc" 
                    placeholder="Enter collection 2 description"
                    value={collectionTwoDescription || publishedData[0]?.collectiontwodescription}
                    onChange={(e) => {setCollectionTwoDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Image">Collection 2 Image URL</label>
                  <input 
                    type="text" 
                    id="collection2Image" 
                    placeholder="Enter image URL"
                    value={collectionTwoImgUrl || publishedData[0]?.collectiontwoimgurl}
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
                    value={collectionThreeName || publishedData[0]?.collectionthreename}
                    onChange={(e) => {setCollectionThreeName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Desc">Collection 3 Description</label>
                  <input 
                    type="text" 
                    id="collection3Desc" 
                    placeholder="Enter collection 3 description"
                    value={collectionThreeDescription || publishedData[0]?.collectionthreedescription}
                    onChange={(e) => {setCollectionThreeDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Image">Collection 3 Image URL</label>
                  <input 
                    type="text" 
                    id="collection3Image" 
                    placeholder="Enter image URL"
                    value={collectionThreeImgUrl || publishedData[0]?.collectionthreeimgurl}
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
                    value={collectionFourName || publishedData[0]?.collectionfourname}
                    onChange={(e) => {setCollectionFourName(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Desc">Collection 4 Description</label>
                  <input 
                    type="text" 
                    id="collection4Desc" 
                    placeholder="Enter collection 4 description"
                    value={collectionFourDescription || publishedData[0]?.collectionfourdescription}
                    onChange={(e) => {setCollectionFourDescription(e.target.value)}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Image">Collection 4 Image URL</label>
                  <input 
                    type="text" 
                    id="collection4Image" 
                    placeholder="Enter image URL"
                    value={collectionFourImgUrl || publishedData[0]?.collectionfourimgurl}
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
              <button type="button" className="btn btn-preview">Preview</button>
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
