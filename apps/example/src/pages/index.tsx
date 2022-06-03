import type { NextPage } from "next";

import NewsletterSubscription from "strapi-newsletter-react";

const Home: NextPage = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto py-10">
        <NewsletterSubscription />
      </div>
    </div>
  );
};

export default Home;
