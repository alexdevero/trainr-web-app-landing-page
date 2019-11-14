import * as React from 'react'

const Hero = () => (
  <section>
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="content">
              <h1 className="hero__title"></h1>

              <h2 className="hero__subtitle"></h2>
            </div>
          </div>

          <div className="col-6">
            <img src="" alt=""/>
          </div>
        </div>

        <style jsx>{`
          .hero__title {}
        `}</style>
      </div>
    </div>
  </section>
)

export default Hero
