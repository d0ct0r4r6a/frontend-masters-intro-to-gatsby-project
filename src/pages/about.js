import { Link } from 'gatsby';
import * as React from 'react';
import { Seo } from '../components/seo';

export default function AboutPage() {
  return (
    <>
      <Seo title="About this site" description="More information" />
      <main>
        <h1>Hello, Frontend Masters Gatsby! This is the about page</h1>
        <Link to="/">Back to home</Link>
      </main>
    </>
  );
}
