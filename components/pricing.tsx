import * as React from 'react'

interface PricingInterface {
  isBillingMonthly: boolean;
  setIsBillingMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pricing = (props: PricingInterface) => {
  return (
    <section id="pricing">
      <div className="container">
        <h1>Pricing</h1>

        <div className="billing-switch">switch to <button className="billing-switch-link" onClick={() => props.setIsBillingMonthly(!props.isBillingMonthly)}>{props.isBillingMonthly ? 'yearly' : 'monthly'}</button></div>

        <div className="row">
          <div className="col">
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h2>{props.isBillingMonthly ? '$19' : '$16'}<span className="price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span></h2>
              </div>

              <div className="pricing-card__body">
                <h2>Starter</h2>

                <p>You are new to CrossFit training.</p>

                <ul>
                  <li>Body measurements tracking</li>
                  {/* <li>Caloric intake tracking</li> */}
                  {/* <li>Water intake tracking</li> */}
                  <li>Workout tracking</li>
                  <li>Daily WODs</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button>Start with Starter</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="pricing-card pricing-card-selected">
              <div className="pricing-card__header">
                <h2>{props.isBillingMonthly ? '$29' : '$24'}<span className="price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span></h2>
              </div>

              <div className="pricing-card__body">
                <h2>Athlete</h2>

                <p>You are ready to take your game to the next level.</p>

                <ul>
                  <li>Body measurements tracking</li>
                  <li>Caloric intake tracking</li>
                  <li>Water intake tracking</li>
                  <li>Workout tracking</li>
                  <li>Daily WODs</li>
                  {/* <li>Exercise library</li> */}
                  <li>Workouts library</li>
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
                <h2>{props.isBillingMonthly ? '$79' : '$69'}<span className="price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span></h2>
              </div>

              <div className="pricing-card__body">
                <h2>Beast</h2>

                <p>You are at the top. You do The Seven, Murph, Fran and Filthy 50 as a warmup.</p>

                <ul>
                  <li>Body measurements tracking</li>
                  <li>Caloric intake tracking</li>
                  <li>Workout tracking</li>
                  <li>Water intake tracking</li>
                  <li>Daily WODs</li>
                  <li>Exercise library</li>
                  <li>Workouts library</li>
                  <li>Custom workouts library</li>
                  <li>Supplement tracking</li>
                </ul>
              </div>

              <div className="pricing-card__footer">
                <button>Start with Beast</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="pricing-card">
              <div className="pricing-card__header">
                <h2>{props.isBillingMonthly ? '$99' : '$84'}<span className="price-label">/{props.isBillingMonthly ? 'month' : 'year'}</span></h2>
              </div>

              <div className="pricing-card__body">
                <h2>Box</h2>

                <p>Best for coaches who want to register and work with trainees.</p>

                <ul>
                  <li>Body measurements tracking</li>
                  <li>Caloric intake tracking</li>
                  <li>Workout tracking</li>
                  <li>Water intake tracking</li>
                  <li>Daily WODs</li>
                  <li>Exercise library</li>
                  <li>Workouts library</li>
                  <li>Custom workouts library</li>
                  <li>Supplement tracking</li>
                  <li>Register and manage trainees</li>
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
        .container {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          max-width: 1140px;
        }

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

        h1,
        .billing-switch {
          text-align: center;
        }

        .billing-switch-link {
          padding: 0;
          font-size: 16px;
          text-decoration: underline;
          color: #222;
          background: transparent;
          border: 0;
          cursor: pointer;
          outline: 0;
        }

        .pricing-card {}

        .pricing-card-selected {}
      `}</style>
    </section>
  )
}

export default Pricing
