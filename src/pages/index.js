import { Link } from 'gatsby'
import * as React from 'react'

export default function IndexPage() {
  return (
    <main>
      <h1>Hello, Frontend Masters Gatsby! Does hot reload work?</h1>
      <Link to="/about">About page</Link>
    </main>
  )
}