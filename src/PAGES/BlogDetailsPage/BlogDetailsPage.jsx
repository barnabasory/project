import { Footer, Navbar, TopSnippet } from "..";
import { BlogDetailsContent } from "../blog";

const BlogDetailsPage = () => {
  return (
    <div>
      <TopSnippet />
      <Navbar />
      <BlogDetailsContent />
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
