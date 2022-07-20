import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import { Seo } from '../components/seo.js';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo />
      <header>{meta.title}</header>
      <main>
        <h1>Hello, Frontend Masters Gatsby! Does hot reload work?</h1>
        <Link to="/about">About page</Link>
      </main>
    </>
  );
}
