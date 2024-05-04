import React from "react";

const FAQPage = () => {
  return (
    <div className="container bg-blue-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">
          Frequently Asked Questions
        </h1>

        {/* FAQ 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            What measures does AfricArt take to support emerging artists?
          </h2>
          <p className="text-gray-700">
            AfricArt is committed to supporting emerging artists by providing
            them with a platform to showcase their talent and gain exposure. We
            actively seek out talented artists from across Africa and offer them
            opportunities to showcase their work to a global audience.
            Additionally, we provide resources and guidance to help artists
            develop their careers and reach their full potential.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            How does AfricArt handle returns or exchanges for purchased artwork?
          </h2>
          <p className="text-gray-700">
            There are no returns for artworks bought from AfricArt. Each piece
            of art is unique and handcrafted by African artists, making it
            difficult to replicate or exchange. We encourage buyers to carefully
            consider their purchase before placing an order request.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Can users request custom-made artwork through AfricArt?
          </h2>
          <p className="text-gray-700">
            No. Artworks posted to AfricArt are one-of-a-kind African artworks
            from African artists. Each piece is a unique expression of the
            artist's creativity and cannot be replicated. We believe in
            celebrating the authenticity and originality of African art and
            showcasing the diverse talents of our artists.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Does AfricArt offer any educational resources or workshops for
            artists or art enthusiasts?
          </h2>
          <p className="text-gray-700">
            No. We are simply an online art gallery/store dedicated to promoting
            African art and culture. While we do not currently offer educational
            resources or workshops, we strive to provide a rich and immersive
            experience for art enthusiasts through our curated collection of
            artworks and informative content about African art and artists.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            How does AfricArt contribute to the preservation and promotion of
            African culture through art?
          </h2>
          <p className="text-gray-700">
            AfricArt plays a vital role in preserving and promoting African
            culture by providing a platform for African artists to share their
            heritage and traditions through art. Our curated collection
            showcases a diverse range of artistic styles, techniques, and themes
            that reflect the richness and diversity of African culture. By
            supporting African artists and exposing global audiences to African
            art, we aim to foster a deeper appreciation and understanding of
            African culture.
          </p>
        </div>

        {/* FAQ 6 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            What kind of customer support does AfricArt provide for users
            experiencing issues with their purchases or accounts?
          </h2>
          <p className="text-gray-700">
            AfricArt values the satisfaction of our users and strives to provide
            excellent customer support. While our website does not have a
            traditional cart feature for purchasing items, users can express
            their interest in purchasing artwork by using the "I'm interested"
            button on the artwork listing. Our dedicated team of administrators
            is available to assist users with any inquiries or issues they may
            encounter. Users can reach out to us via email or through our
            contact form, and we will promptly address their concerns and
            provide assistance as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
