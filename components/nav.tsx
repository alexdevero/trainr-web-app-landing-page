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
    </nav>

    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.1);
      }

      nav {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
        text-align: center;
      }

      ul {
        display: flex;
        justify-content: flex-end;
      }

      nav > ul {
        padding: 4px 0;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      li:last-child {
        padding-right: 0;
      }

      a {
        font-size: 15px;
        text-decoration: none;
        color: #111;
        transition: .25s color ease-out;
      }

      a:hover {
        color: #067df7;
      }
    `}</style>
  </header>
)

export default Nav
