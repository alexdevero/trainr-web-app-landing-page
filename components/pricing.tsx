import * as React from 'react'

const Pricing = () => (
  <section id="pricing">
    <div className="container">
      <h1>Pricing</h1>

      <div className="row">
        <div className="col">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>$19<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Starter Plan</h2>

              <p>Best fit people just starting with training.</p>

              <ul>
                <li>Body measurements tracking</li>
                <li>Caloric intake tracking</li>
                <li>Water intake tracking</li>
                <li>Workout tracking</li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Starter</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>$29<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Intermediate Plan</h2>

              <p>Best fit people serious about their fitness goals.</p>

              <ul>
                <li>Body measurements tracking</li>
                <li>Caloric intake tracking</li>
                <li>Water intake tracking</li>
                <li>Workout tracking</li>
                <li>Exercise library</li>
                <li>Workout library</li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Intermediate</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>$79<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Athlete Plan</h2>

              <p>Best for fitness enthusiast who want to take their fitness to the next level.</p>

              <ul>
                <li>Body measurements tracking</li>
                <li>Caloric intake tracking</li>
                <li>Workout tracking</li>
                <li>Water intake tracking</li>
                <li>Exercise library</li>
                <li>Workout library</li>
                <li>Supplement tracking</li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Athlete</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <h2>$99<span className="price-label">per month</span></h2>
            </div>

            <div className="pricing-card__body">
              <h2>Coach Plan</h2>

              <p>Best for coaches who want to register and work with trainees.</p>

              <ul>
                <li>Body measurements tracking</li>
                <li>Caloric intake tracking</li>
                <li>Workout tracking</li>
                <li>Water intake tracking</li>
                <li>Exercise library</li>
                <li>Workout library</li>
                <li>Supplement tracking</li>
                <li>Manage trainees</li>
              </ul>
            </div>

            <div className="pricing-card__footer">
              <button>Start with Coach</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }

      .col {
        position: relative;
        padding-right: 15px;
        padding-left: 15px;
        width: 100%;
      }

      @media (min-width: 768px) {
        .col {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }

      @media (min-width: 992px) {
        .col {
          flex: 0 0 25%;
          max-width: 25%;
        }
      }
    `}</style>
  </section>
)

export default Pricing
