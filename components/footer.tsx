import * as React from 'react'

const Footer = () => (
  <footer>
    <div className="container">
      <ul>
        {/* <li><a href="">Home</a></li> */}
        {/* <li><a href="">FAQs</a></li> */}
        {/* <li><a href="">How to use</a></li> */}
        <li><a href="">About</a></li>
        <li><a href="">Terms</a></li>
        <li><a href="">Sign up</a></li>
        {/* <li><a href="">Sign in</a></li> */}
        {/* <li><a href="">Contact</a></li> */}
      </ul>

      <p className="copyright">Copyright &copy; 2019 Devero Technologies</p>
    </div>

    <style jsx>{`
      footer {
        padding-top: 32px;
        padding-bottom: 32px;
        background: #222;
      }

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
      }

      li {
        list-style-type: none;
      }

      li + li {
        margin-left: 18px;
      }

      li a {
        font-size: 14px;
        text-decoration: none;
        color: rgba(255, 255, 255, .85);
      }

      li a:hover {
        text-decoration: underline;
      }

      .copyright {
        margin-top: 28px;
        margin-bottom: 0;
        font-size: 12px;
        text-align: center;
        color: rgba(255, 255, 255, .5);
      }
    `}</style>
  </footer>
)

export default Footer
