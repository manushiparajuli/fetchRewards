import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import './style.css'; 

function Home() {
  const data = {
    birthDate: "Mon, 23 Oct  19:07:56 GMT"
  };

  const birthDate = new Date(data.birthDate);
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthDate.getFullYear();

  const socialMediaOrder = getSocialMediaOrder(age);

  const renderedSocialMedia = socialMediaOrder.map((platform) => (
    <div key={platform} className="row">
      <img
        src={getSocialMediaImageUrl(platform)}
        alt={platform}
        style={{ width: "100%" }}
      />
    </div>
  ));

  function getSocialMediaImageUrl(platform) {
    switch (platform) {
      case "Facebook":
        return "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/editor_images/DSN2-6828%20%20%20Social%20Invite%20Email%20Refresh_MODULE_FACEBOOK_MOBILE.ENG%20%281%29.png";
      case "Instagram":
        return "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/editor_images/DSN2-6828%20%20%20Social%20Invite%20Email%20Refresh_MODULE_INSTAGRAM_MOBILE.ENG%20%281%29_1.png";
      case "X":
        return "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/editor_images/DSN2-6828%20%20%20Social%20Invite%20Email%20Refresh_MODULE_X_MOBILE.ENG_1.png";
      case "TikTok":
        return "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/editor_images/DSN2-6828%20%20%20Social%20Invite%20Email%20Refresh_MODULE_TIKTOK_MOBILE.ENG%20%282%29.png";
      default:
        return "";
    }
  }

  function getSocialMediaOrder(age) {
    if (age < 35) {
      return ["TikTok", "Instagram", "X", "Facebook"];
    } else if (age >= 35 && age <= 55) {
      return ["Instagram", "X", "TikTok", "Facebook"];
    } else {
      return ["Facebook", "X", "Instagram", "TikTok"];
    }
  }

  return (
    <section id="fetch-email-section">
      <div className="logo-container">
        <img
        src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/Fetch_Logo_Secondary_Horizontal.png"
          alt="Fetch Logo"
          style={{ width: "20%" }}
        />
      </div>
      <div className="desktop-headline">
        <img
        src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/DESKTOP_HDR_1.png"
          alt="Desktop Headline"
          style={{ width: "100%" }}
        />
      </div>
      <div className="text-container-with-padding">
  <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>

      <div className="full-width-module">
        <img
        src= "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/Fullwidth%20snippet_1.png"
          alt="Full Width Module"
          style={{ width: "100%" }}
        />
      </div>

    
<div className="image-text-container">
      <div className="image-container">
        <img
          src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/1_1.png"
          alt="Image Description"
          style={{ width: "100%" }}
        />
      </div>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div className="image-text-container">
    <div className="text-container">
    <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/1_1.png"
          alt="Image Description"
          style={{ width: "100%" }}
        />
      </div>
     
    </div>


      <div className="grid-container">
        {renderedSocialMedia}
      </div>

      <div className="logo-container" style={{ width: '20%', margin: '0 auto' }}>

</div>
      <footer>
      <img
    src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/a8154cab5f1b44d7828db857ef3be885/Fetch_Logo_Primary_Stacked.png"
    alt="Fetch Logo"
    style={{ width: '10%' }}
  />
      <p><i>&copy; Fetch Rewards, Inc. All Rights Reserved</i></p>
      <p><a href="https://maps.google.com/?q=1050+E.+Washington+Ave.,+Madison,+WI,+53703" target="_blank">1050 E. Washington Ave.</a> 2nd Fl, Madison, WI, 53703</p>
    </footer>
    </section>
  );
}

export default Home;
