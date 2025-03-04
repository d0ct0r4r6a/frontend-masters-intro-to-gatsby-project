import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo';
import '../styles/global.css';
import { header, content } from '../styles/layout.module.css';

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
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
      <Seo title={title} description={description} image={image} path={path} />
      <header className={header}>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About this site</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  );
}
