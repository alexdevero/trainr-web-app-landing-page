import React from 'react'
import Link from 'next/link'

const links = [
  { href: '#benefits', label: 'Benefits', key: '' },
  { href: '#how-it-works', label: 'How it works', key: '' },
  { href: '#faqs', label: 'FAQs', key: '' },
  { href: '#pricing', label: 'Pricing', key: '' },
  { href: '#testimonials', label: 'Testimonials', key: '' },
  { href: '#sign-up', label: 'Sign in', key: '' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>

        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  </header>
)

export default Nav
