'use client';
import './admin.css';
import getLS from '../../hooks/getLs';
import React, {  useState, useEffect } from 'react';
import useCampaigns from '../../hooks/getcampagins';
import getPublishedPage from '../../hooks/getPublisedPage';
import Dropdown from '../../components/Dropdown';

export default function Admin() {
    const { data:campaignData, isLoading:campaignLoading, error:campaignError } = useCampaigns();
    const { data: publishedData, isLoading: publishedLoading, error: publishedError } = getPublishedPage();
    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState(null)
    const [selectedCampaign, setSelectedCampaign] = useState(null);

// lets change this whole point of attack to be the published page data instead of the campaigns data, 
// we can use the campaigns data to populate a dropdown of campaigns and then when we select a campaign, 
// we can populate the form with the data from that campaign, and then when we submit the form, 
// we can send a request to update that campaign with the new data from the form, 
// this way we can have multiple campaigns and we can easily switch between them and edit them without having to worry about creating new campaigns or deleting old ones, 
// we can just update the existing ones with new data, 
// this will also allow us to keep track of the history of changes for each campaign and we can easily revert back to previous versions if needed, 
// so let's start by creating a dropdown of campaigns and populating it with the data from the campaigns query, 
// and then when we select a campaign, we can populate the form with the data from that campaign, 
// and then when we submit the form, we can send a request to update that campaign with the new data from the form

    const handleEdit = () => {
      setEdit(!edit);
    }

    const handleMakeNew = () => {
      setNewCamp(true);
      setEdit(false);
    }
    const handleCampaignSelect = (campaign) => {
      setSelectedCampaign(campaignData.filter(c => c.id === campaign.value)[0]); 
      setFormData(campaignData.filter(c => c.id === campaign.value)[0]) 
    }

    useEffect(() => {
      console.log(formData, "updated")
    }, [formData])

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

    if (campaignLoading) return <div>Loading...</div>;
    if (campaignError) return <div>Something went wrong</div>;


  const handleSubmitTwo = async (e) => {
    e.preventDefault();
    const urlString = edit ? "http://localhost:2050/edit-campaign" : "http://localhost:2050/create-section"
    const request = await fetch(urlString, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(formData)
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
          <div className="dropdown-wrapper"  style={{marginBottom: '30px', display: "flex", gap: '15px', alignItems: 'flex-end'}}>
            <div style={{flex: 1, display: edit ? 'block' : 'none'}}>
              <label style={{display: 'block', marginBottom: '10px', fontWeight: '600', fontSize: '14px'}}>Select Campaign</label>
              <Dropdown
                items={campaignData && campaignData.map(campaign => ({
                  label: campaign.nameofcampaign || 'Untitled Campaign',
                  value: campaign.id
                }))}
                placeholder="Choose a campaign"
                onSelect={(campaign) => {
                  handleCampaignSelect(campaign)
                } }
              />
            </div>
            <button onClick={handleEdit} type="button" className="btn btn-edit">{edit ? 'Make New Campaign' : 'Edit Campaign'}</button>
          </div>
          <form onSubmit={handleSubmitTwo} className="product-form">
            
            {/* Campaign Name Section */}
            <div className="form-group-section">
              <h2>Campaign</h2>
              
              <div className="form-group">
                <label htmlFor="campaignName">Campaign Name</label>
                <input 
                  type="text" 
                  id="campaignName" 
                  value={formData ? formData.nameofcampaign : ''}
                  onChange={(e) => {
                    setFormData(prev => ({
                        ...prev,
                        nameofcampaign: e.target.value
                    }))
                  }}
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
                  value= {formData ? formData.mainheading : ''}
                  onChange={(e) => {
                    setFormData(prev => ({
                        ...prev,
                        mainheading: e.target.value
                    }))
                  }}
                  placeholder="Enter hero heading" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="heroParagraph">Sub Heading</label>
                <input 
                  id="heroParagraph" 
                  onChange={(e) => {setFormData(prev => ({
                    ...prev,
                    subheading: e.target.value
                  }))}}
                  placeholder="Enter hero paragraph" 
                  value={formData ? formData.subheading : ''}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="herobackground">Background Image URL</label>
                <input 
                  id="herobackground" 
                  onChange={(e) => {setFormData(prev => ({
                    ...prev,
                    backgroundimageurl: e.target.value
                  }))}}
                  placeholder="Enter background image URL" 
                  value={formData ? formData.backgroundimageurl : ''}
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
                  value={formData ? formData.salebadge : ''}
                  onChange={(e) => {setFormData(prev => ({
                    ...prev,
                    salebadge: e.target.value
                  }))}}
                />
              </div>


              <div className="form-group">
                <label htmlFor="saleHeading">Sale Heading</label>
                <input 
                  type="text" 
                  id="saleHeading" 
                  placeholder="Enter sale heading" 
                  value={formData ? formData.saleheading : ''}
                  onChange={(e) => {setFormData(prev => ({
                    ...prev,
                    saleheading: e.target.value
                  }))}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="saleParagraph">Sale Description</label>
                <textarea 
                  id="saleParagraph" 
                  rows="3"
                  placeholder="Enter sale description" 
                  value={formData ? formData.saledescription : ''}
                  onChange={(e) => {setFormData(prev => ({
                    ...prev,
                    saledescription: e.target.value
                  }))}}
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
                  value={formData ? formData.sectiontitle : ''}
                  onChange={(e) => {setFormData(prev => ({
                    ...prev,
                    sectiontitle: e.target.value
                  }))}}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="collection1Name">Collection 1 Name</label>
                  <input 
                    type="text" 
                    id="collection1Name" 
                    placeholder="Enter collection 1 name"
                    value={formData ? formData.collectiononename : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectiononename: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Desc">Collection 1 Description</label>
                  <input 
                    type="text" 
                    id="collection1Desc" 
                    placeholder="Enter collection 1 description"
                    value={formData ? formData.collectiononedescription : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectiononedescription: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Image">Collection 1 Image URL</label>
                  <input 
                    type="text" 
                    id="collection1Image" 
                    placeholder="Enter image URL"
                    value={formData ? formData.collectiononeimgurl : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectiononeimgurl: e.target.value
                    }))}}
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
                    value={formData ? formData.collectiontwoname : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectiontwoname: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Desc">Collection 2 Description</label>
                  <input 
                    type="text" 
                    id="collection2Desc" 
                    placeholder="Enter collection 2 description"
                    value={formData ? formData.collectiontwodescription : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectiontwodescription: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Image">Collection 2 Image URL</label>
                  <input 
                    type="text" 
                    id="collection2Image" 
                    placeholder="Enter image URL"
                    value={formData ? formData.collectiontwoimgurl : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectiontwoimgurl: e.target.value
                    }))}}
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
                    value={formData ? formData.collectionthreename : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectionthreename: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Desc">Collection 3 Description</label>
                  <input 
                    type="text" 
                    id="collection3Desc" 
                    placeholder="Enter collection 3 description"
                    value={formData ? formData.collectionthreedescription : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectionthreedescription: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Image">Collection 3 Image URL</label>
                  <input 
                    type="text" 
                    id="collection3Image" 
                    placeholder="Enter image URL"
                    value={formData ? formData.collectionthreeimgurl : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectionthreeimgurl: e.target.value
                    }))}}
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
                    value={formData ? formData.collectionfourname : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectionfourname: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Desc">Collection 4 Description</label>
                  <input 
                    type="text" 
                    id="collection4Desc" 
                    placeholder="Enter collection 4 description"
                    value={formData ? formData.collectionfourdescription : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectionfourdescription: e.target.value
                    }))}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Image">Collection 4 Image URL</label>
                  <input 
                    type="text" 
                    id="collection4Image" 
                    placeholder="Enter image URL"
                    value={formData ? formData.collectionfourimgurl : ''}
                    onChange={(e) => {setFormData(prev => ({
                      ...prev,
                      collectionfourimgurl: e.target.value
                    }))}}
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
