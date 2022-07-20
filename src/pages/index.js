import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout.js';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello, Frontend Masters Gatsby! Does hot reload work?</h1>
      <Link to="/about">About page</Link>
    </Layout>
  );
}
