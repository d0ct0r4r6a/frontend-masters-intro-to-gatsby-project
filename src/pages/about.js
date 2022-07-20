import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout
      title="About This Site"
      description="More information about this site"
    >
      <h1>Hello, Frontend Masters Gatsby! This is the about page</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
