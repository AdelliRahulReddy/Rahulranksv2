import { permanentRedirect } from 'next/navigation';

const BlogSidebarRedirectPage = () => {
  permanentRedirect('/blog');
};

export default BlogSidebarRedirectPage;
