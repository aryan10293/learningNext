'use client';
import './admin.css';
import { useRouter } from "next/navigation";
import React, {  useEffect } from 'react';
import useCampaigns from '../../hooks/getcampagins';
import useFormStore from '../../hooks/useFormStore';

export default function Admin() {
    const { data:campaignData, isLoading:campaignLoading, error:campaignError } = useCampaigns();
    const router = useRouter();
    const { formData, setFormData, edit, setEdit } = useFormStore();
    const emptyForm = {
      nameofcampaign: "",
      mainheading: "",
      subheading: "",
      backgroundimageurl: "",
      salebadge: "",
      saleheading: "",
      saledescription: "",
      sectiontitle: "",

      collectiononename: "",
      collectiononedescription: "",
      collectiononeimgurl: "",

      collectiontwoname: "",
      collectiontwodescription: "",
      collectiontwoimgurl: "",

      collectionthreename: "",
      collectionthreedescription: "",
      collectionthreeimgurl: "",

      collectionfourname: "",
      collectionfourdescription: "",
      collectionfourimgurl: ""
    };

    const handleEdit = () => {
      setEdit(!edit);
      // if(edit === false){
      //   setFormData(emptyForm)
      // }
    }
    const handleCampaignSelect = (campaign) => {
      setFormData(campaignData.filter(c => c.nameofcampaign === campaign)[0]) 
    }
      useEffect(() => {
        console.log(formData, "formData in useEffect")
    }, [formData])
    
    const handlePreview = () => {
      localStorage.setItem(
        "formData",
        JSON.stringify(formData)
      );
      router.push("/preview")
    }

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
            <li><a href="/preview">preview</a></li>
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
              <select value={formData ? formData.nameofcampaign : ''} className="simple-dropdown" onChange={(e) => handleCampaignSelect( e.target.value)}>
                <option value="">Select an campaign</option>
                {campaignData.map((option, index) => (
                  <option key={index} value={option.nameofcampaign}>
                    {option.nameofcampaign}
                  </option>
                ))}
              </select>
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
                    setFormData( ({
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
                    setFormData(({
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
                  onChange={(e) => {
                    setFormData(({
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
                  onChange={(e) => {
                    setFormData(({
                      backgroundimageurl: e.target.value
                  }))}}
                  placeholder="Enter background image URL" 
                  value={formData ? formData.backgroundimageurl :''}
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
                  onChange={(e) => {
                    setFormData(({
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
                  value={formData ? formData.saleheading :''}
                  onChange={(e) => {
                    setFormData(({
                      saleheading: e.target.value
                    }))
                    }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="saleParagraph">Sale Description</label>
                <textarea 
                  id="saleParagraph" 
                  rows="3"
                  placeholder="Enter sale description" 
                  value={formData ? formData.saledescription : ''}
                  onChange={(e) => {
                    setFormData(({
                      saledescription: e.target.value
                    }))
                  }}
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
                  onChange={(e) => {  
                    setFormData(({
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
                    onChange={(e) => {
                      setFormData(({
                        collectiononename: e.target.value
                      }))
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Desc">Collection 1 Description</label>
                  <input 
                    type="text" 
                    id="collection1Desc" 
                    placeholder="Enter collection 1 description"
                    value={formData ? formData.collectiononedescription : ''}
                    onChange={(e) => {
                      setFormData(({
                        collectiononedescription: e.target.value
                      }))
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection1Image">Collection 1 Image URL</label>
                  <input 
                    type="text" 
                    id="collection1Image" 
                    placeholder="Enter image URL"
                    value={formData ? formData.collectiononeimgurl : ''}
                    onChange={(e) => {
                      setFormData(({
                       collectiononeimgurl: e.target.value
                      }))
                    }}
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
                    onChange={(e) => {
                      setFormData(({
                        collectiontwoname: e.target.value
                      }))
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Desc">Collection 2 Description</label>
                  <input 
                    type="text" 
                    id="collection2Desc" 
                    placeholder="Enter collection 2 description"
                    value={formData ? formData.collectiontwodescription : ''}
                    onChange={(e) => {
                      setFormData(({
                        collectiontwodescription: e.target.value
                      }))
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection2Image">Collection 2 Image URL</label>
                  <input 
                    type="text" 
                    id="collection2Image" 
                    placeholder="Enter image URL"
                    value={formData ? formData.collectiontwoimgurl : ''}
                    onChange={(e) => {
                      setFormData(({
                        collectiontwoimgurl: e.target.value
                      }))
                    }}
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
                    onChange={(e) => {
                      setFormData(({
                        collectionthreename: e.target.value
                      }))
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Desc">Collection 3 Description</label>
                  <input 
                    type="text" 
                    id="collection3Desc" 
                    placeholder="Enter collection 3 description"
                    value={formData ? formData.collectionthreedescription : ''}
                    onChange={(e) => {
                      setFormData(({
                        collectionthreedescription: e.target.value
                      }))
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection3Image">Collection 3 Image URL</label>
                  <input 
                    type="text" 
                    id="collection3Image" 
                    placeholder="Enter image URL"
                    value={formData ? formData.collectionthreeimgurl : ''}
                    onChange={(e) => {
                      setFormData(({
                        collectionthreeimgurl: e.target.value
                      }))
                    }}
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
                    onChange={(e) => {setFormData(({
                      collectionfourname: e.target.value
                    }))
                  }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="collection4Desc">Collection 4 Description</label>
                  <input 
                    type="text" 
                    id="collection4Desc" 
                    placeholder="Enter collection 4 description"
                    value={formData ? formData.collectionfourdescription : ''}
                    onChange={(e) => {setFormData(({
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
                    onChange={(e) => {setFormData(({
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
             {/* <button type="submit" className="btn btn-primary">Save Changes</button>*/}
              <button type="button" onClick={handlePreview} className="btn btn-preview">Preview</button>
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
