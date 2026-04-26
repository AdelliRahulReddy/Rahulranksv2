import { permanentRedirect } from 'next/navigation';

const BlogDetailsRedirectPage = () => {
  permanentRedirect('/blog');
};

export default BlogDetailsRedirectPage;
