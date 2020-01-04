import * as React from 'react'

import { colors } from '../constants/theme'

interface SignUpInterface {
  isEmailMessageErrorVisible: boolean;
  isSelectPlanMessageVisible: boolean;
  isSignUpMessageSuccessVisible: boolean;
  isSignUpMessageErrorVisible: boolean;
  selectedPlan: string;
  signUpEmail: string;
  handleSignUp: (event: React.FormEvent<Element>) => void;
  handleSignUpEmailChange: React.Dispatch<React.SetStateAction<string>>;
}

const SignUp = (props: SignUpInterface) => (
  <section className="sign-up" id="signUp">
    <div className="container">
      <h1 className="h2">Sign up for early access to Trainr {props.selectedPlan.substring(0, 1).toUpperCase() + props.selectedPlan.substring(1)}</h1>

      <p>Train smarter, better, harder, reach your peak performance and have fun.</p>

      {props.isSelectPlanMessageVisible && <p className="sign-up__warning">Please select one of the training plans above before signing up.</p>}

      <div className="row">
        <div className="col-md-10 col-lg-8">
          <form action="">
            <div className="row">
                <div className="col-sm-7 col-input">
                  <input
                    className={props.isSignUpMessageErrorVisible ? 'sign-up__input sign-up__input--error' : 'sign-up__input'}
                    type="email"
                    defaultValue={props.signUpEmail}
                    placeholder="Your email address"
                    onChange={(event) => props.handleSignUpEmailChange(event.target.value)}
                    required
                  />
                </div>

                <div className="col-sm-5 col-button">
                  <button className="sign-up__button" onClick={props.handleSignUp}>Sign up</button>
                </div>
            </div>

            {props.isEmailMessageErrorVisible && <p className="error-message"><small>Please fill in your email.</small></p>}
          </form>
        </div>
      </div>
    </div>

    <style jsx>{`
      .sign-up {
        padding-top: 60px;
        padding-bottom: 60px;
      }

      h1,
      p {
        margin-top: 0;
        text-align: center;
      }

      h1 {
        margin-bottom: 18px;
      }

      p {
        margin-bottom: 21px;
      }

      .sign-up .row {
        justify-content: center;
      }

      [class*=col-] {
        position: relative;
        padding-right: 15px;
        padding-left: 15px;
        width: 100%;
      }

      @media (min-width: 576px) {
        .col-sm-5 {
          flex: 0 0 20%;
          max-width: 20%;
        }

        .col-sm-7 {
          flex: 0 0 58.333333%;
          max-width: 58.333333%;
        }

        .col-input {
          padding-right: 0;
        }

        .col-button {
          padding-left: 0;
        }
      }

      @media (min-width: 768px) {
        .col-md-10 {
          flex: 0 0 83.333333%;
          max-width: 83.333333%;
        }
      }

      @media (min-width: 992px) {
        .col-lg-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }
      }

      .sign-up__warning {
        color: ${colors.red};
      }

      form {
        width: 100%;
      }

      .sign-up__input {
        padding: 0 12px;
        width: 100%;
        min-height: 40px;
        height: 100%;
        border: 2px solid ${colors.gray};
        border-right: 0;
        border-radius: 4px;
      }

      .sign-up__input--error {
        border-color: ${colors.red};
      }

      @media (min-width: 576px) {
        .sign-up__input {
          border-radius: 4px 0 0 4px;
        }
      }

      .sign-up__input:focus {
        border-color: ${colors.primary};
        outline: 0;
      }

      .sign-up__button {
        display: flex;
        justify-content: center;
        margin-top: 21px;
        padding: 12px 22px;
        width: 100%;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        color: ${colors.white};
        background: ${colors.primary};
        border: 0;
        border-radius: 4px;
        cursor: pointer;
      }

      @media (min-width: 576px) {
        .sign-up__button {
          margin-top: 0;
          border-radius: 0 4px 4px 0;
        }
      }

      .error-message {
        margin-top: 8px;
        margin-bottom: 0;
        font-weight: 700;
        color: ${colors.red};
      }
    `}</style>
  </section>
)

export default SignUp
