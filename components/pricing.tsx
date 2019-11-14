import * as React from 'react'

const Pricing = () => (
  <section>
    <div className="container">
      <h1>Pricing</h1>

      <div className="row">
        <div className="col-3">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>&doll;19<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Starter Plan</h2>

              <p></p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Starter</button>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>&doll;29<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Intermediate Plan</h2>

              <p></p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Intermediate</button>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>&doll;79<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Athlete Plan</h2>

              <p></p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Athlete</button>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>&doll;99<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Trainer Plan</h2>

              <p></p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Trainer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Pricing
