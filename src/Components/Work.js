//Image editing
import React from "react";
import PresetFilterPacks from "../Assets/filter icon.png";
import ProfessionalEditingTools from "../Assets/editing tools.png";
import CustomizableTemplates from "../Assets/Customizable Templates.png";

const Work = () => {                    //Image editing
  const workInfoData = [
    {
      image: PresetFilterPacks,
      title: "Preset Filter Packs",
      text: "Offer bundles of preset filters that users can apply to their photos with a single click. such as: AI Retouching , Background Removal and Batch Editing and more" ,
    },
    {
      image: ProfessionalEditingTools,
      title: "Professional Editing Tools",
      text: "Provide access to advanced editing tools and features that users can purchase to enhance their editing capabilities",
    },
    {
      image: CustomizableTemplates,
      title: "Customizable Templates",
      text: "Sell packs of customizable templates that users can use for various projects.Such as : Social Media Posts and Marketing Materials",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Image editing involves manipulating and enhancing digital images using various tools and techniques. This can include adjusting colors, brightness, and contrast, cropping and resizing, removing unwanted elements, and applying filters or effects. Advanced image editing can also involve retouching photos to remove blemishes, combining multiple images, and using AI to automate enhancements and corrections, resulting in professional-quality images.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
