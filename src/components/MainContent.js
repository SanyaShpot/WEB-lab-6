import React, { useState } from 'react';

const MainContent = () => {
  const [showMore, setShowMore] = useState(false);

  const contentBlocks = [
    {
      imageSrc: "/images/DELIVERY.jpg",
      title: "Fast Delivery",
      text: "We guarantee fast delivery of your orders, so you can enjoy your purchase without any delays!"
    },
    {
      imageSrc: "/images/price.jpg",
      title: "Affordable Prices",
      text: "Our store offers competitive prices without compromising on quality. Get the best value for your money!"
    },
    {
      imageSrc: "/images/quality.jpg",
      title: "High Quality",
      text: "We work with trusted manufacturers to ensure that you receive top-quality products. Satisfaction guaranteed!"
    }
  ];

  return (
    <main className="main-content">
      <section className="intro">
        <img src="/images/HOME.jpg" alt="Home" className="home-image" />
        <div className="intro-text">
          <h2>Christmas Tree Store</h2>
          <p>Discover a wide range of carefully crafted, high-quality artificial Christmas trees that will make your holiday season truly special. Our trees come in various sizes, styles, and materials, designed to bring warmth and cheer to your home or office. Whether you're looking for a classic tree, a modern design, or something unique, we have the perfect tree for you. Start your holiday decorating with the best choice for an unforgettable festive experience.</p>
        </div>
      </section>

      <section className="content-blocks">
        <div className="block-grid">
          {contentBlocks.map((block, index) => (
            <div key={index} className="content-block">
              <img src={block.imageSrc} alt={block.title} className="content-image" />
              <h4 className="content-title">{block.title}</h4>
              <p className="content-text">{block.text}</p>
            </div>
          ))}
        </div>

        <div className="view-more-container">
          {showMore && (
            <div className="content-block wide-content">
              <h4 className="content-title">Why Our Store is the Best</h4>
              <p className="content-text">
                At our Christmas Tree Store, we pride ourselves on offering the highest quality artificial trees at unbeatable prices. Unlike other stores, we focus on customer satisfaction, providing personalized service and expert advice to help you choose the perfect tree for your home or office. 
                <br />
                <br />
                Our trees are crafted with attention to detail, ensuring that they last for years while maintaining their beauty. We source our products from trusted manufacturers, so you can be sure that you're getting only the best. 
                <br />
                <br />
                We also offer a wide range of sizes, materials, and styles to fit every budget and preference. Whether you're looking for a classic tree or a unique modern design, we have it all. Plus, with our fast delivery service, you'll have your tree in no time—without any delays!
                <br />
                <br />
                When you shop with us, you're not just buying a tree—you're investing in a holiday experience that will make your season bright. Shop now and see why we're the top choice for Christmas trees!
              </p>
            </div>
          )}
          <button
            className="view-more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
