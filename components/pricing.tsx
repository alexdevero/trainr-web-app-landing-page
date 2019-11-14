import * as React from 'react'

const Pricing = () => (
  <section>
    <div className="container">
      <h1>Pricing</h1>

      <div className="row">
        <div className="col-4">
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

        <div className="col-4">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>&doll;49<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Professional Plan</h2>

              <p></p>

              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Professional</button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>&doll;89<span className="price-label">per month</span></h2>
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
