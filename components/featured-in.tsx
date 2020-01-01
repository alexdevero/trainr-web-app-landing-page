import * as React from 'react'

const FeaturedIn = () => (
  <section id="featuredIn">
    <div className="container">
      <div className="row">
        <div className="col-2"><img src="" alt="" className="logo"/></div>

        <div className="col-2"><img src="" alt="" className="logo"/></div>

        <div className="col-2"><img src="" alt="" className="logo"/></div>

        <div className="col-2"><img src="" alt="" className="logo"/></div>

        <div className="col-2"><img src="" alt="" className="logo"/></div>

        <div className="col-2"><img src="" alt="" className="logo"/></div>
      </div>
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
  </section>
)

export default FeaturedIn
