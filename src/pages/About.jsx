import React from "react";

const AboutPage = () => {
  return (
    <div className="container bg-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* About AfricArt */}
        <h1 className="title">About AfricArt</h1>
        <p className="paragraph">
          AfricArt is more than just an online art marketplace. It is a platform
          that celebrates the diverse and vibrant cultures of Africa through
          art. Our mission is to connect talented African artists with art
          enthusiasts worldwide, providing them with a space to showcase their
          creativity and talent.
        </p>

        {/* Our Story */}
        <h2 className="subtitle">Our Story</h2>
        <p className="paragraph">
          AfricArt was founded in 2024 by a group of passionate art lovers who
          wanted to create a platform that celebrates the richness of African
          art and culture. Inspired by the beauty and diversity of African art,
          we set out to create a space where artists and art enthusiasts can
          come together to explore, discover, and appreciate the incredible
          talent that Africa has to offer.
        </p>

        {/* Our Mission */}
        <h2 className="subtitle">Our Mission</h2>
        <p className="paragraph">
          Our mission at AfricArt is to empower African artists by providing
          them with a global platform to showcase their work and reach a wider
          audience. We believe that art has the power to transcend boundaries
          and connect people from different backgrounds and cultures. By
          promoting African art, we aim to foster a greater appreciation and
          understanding of African culture worldwide.
        </p>

        {/* Our Values */}
        <h2 className="subtitle">Our Values</h2>
        <div className="values-container">
          {/* Creativity */}
          <div className="value">
            <h3 className="subtitle">Creativity</h3>
            <p className="paragraph">
              We value creativity and innovation in all forms of art. We believe
              that art has the power to inspire, provoke thought, and evoke
              emotions.
            </p>
          </div>

          {/* Diversity */}
          <div className="value">
            <h3 className="subtitle">Diversity</h3>
            <p className="paragraph">
              We celebrate the diversity of African art and culture. We believe
              that diversity enriches our understanding of the world and
              promotes inclusivity and acceptance.
            </p>
          </div>

          {/* Community */}
          <div className="value">
            <h3 className="subtitle">Community</h3>
            <p className="paragraph">
              We foster a sense of community among artists, art enthusiasts, and
              collectors. We believe that art has the power to bring people
              together and create meaningful connections.
            </p>
          </div>
        </div>

        {/* Contact Us section */}
        <h2 className="subtitle">Contact Us</h2>
        <div className="contact-us">
          <p className="paragraph">
            For any inquiries, please feel free to reach out to us via email at
            <a href="mailto:info@africart.com"> info@africart.com</a>.
          </p>
          <p className="paragraph">
            You can also call us at <a href="tel:+1234567890">+1 234 567 890</a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
