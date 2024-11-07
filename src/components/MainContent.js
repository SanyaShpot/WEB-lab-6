import React from 'react';

const MainContent = () => {
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
          <button className="view-more-button">View More</button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
