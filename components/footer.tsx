import * as React from 'react'

const Footer = () => (
  <footer>
    <div className="container">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">FAQs</a></li>
        <li><a href="">How to use</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Terms</a></li>
        <li><a href="">Sign up</a></li>
        <li><a href="">Sign in</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      <p>Copyright &copy; 2019 Devero Technologies</p>
    </div>

    <style jsx>{`
      .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
      }
    `}</style>
  </footer>
)

export default Footer
