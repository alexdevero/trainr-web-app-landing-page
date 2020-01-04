import React from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { colors } from '../constants/theme'

const links = [
  { href: '#intro', label: 'What is Trainr', key: 'keyBenefits' },
  { href: '#benefits', label: 'Why Trainr', key: 'keyBenefits' },
  // { href: '#howItWorks', label: 'How it works', key: '' },
  { href: '#pricing', label: 'Pricing', key: 'keyPricing' },
  // { href: '#faq', label: 'FAQ', key: '' },
  // { href: '#testimonials', label: 'Testimonials', key: '' },
  // { href: '#signUp', label: 'Sign up', key: 'keySignUp' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <header>
    <div className="container">
      <nav>
        <ul>
          {/* <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li> */}

          {links.map(({ key, href, label }) => (
            <li key={key}>
              <AnchorLink offset="80%" style={{ textDecoration: 'none' }} href={href}><span>{label}</span></AnchorLink>
            </li>
          ))}

          <li>
            <AnchorLink style={{ textDecoration: 'none' }} href='#signUp'>
              <span className="nav__cta">Sign up</span>
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </div>

    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
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
        align-items: center;
        padding: 6px 8px;
      }

      li + li {
        margin-left: 12px;
      }

      li:last-child {
        padding-right: 0;
      }

      li span {
        font-size: 15px;
        color: #111;
        transition: .25s color ease-out;
      }

      li span:hover {
        color: #067df7;
      }

      li .nav__cta,
      li .nav__cta:hover {
        color: ${colors.white};
      }

      li .nav__cta {
        display: flex;
        padding: 8px 24px;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        background: ${colors.primary};
        border: 0;
        border-radius: 4px;
        cursor: pointer;
      }
    `}</style>
  </header>
)

export default Nav
