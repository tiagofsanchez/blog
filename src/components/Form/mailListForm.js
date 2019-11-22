import React, { Fragment } from "react";
import axios from "axios";
import Input from "./input";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

//params for the airtable
const app_id = process.env.GATSBY_AIRTABLE_APP_ID;
const app_key = process.env.GATSBY_AIRTABLE_API_KEY;
const view = "MailingList";

const initState = {
  isSubmited: false,
  name: "",
  email: ""
};

class mailListForm extends React.Component {
  state = initState;

  formChangeHandler = (event, name, value) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //For the email verification
  emailValidation = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const { name, email } = this.state;

    console.log(process.env.GATSBY_AIRTABLE_APP_ID)
    
    const data = {
      records: [
        {
          fields: {
            Name: name,
            Email: email
          }
        }
      ]
    };

    let url = "https://api.airtable.com/v0/" + app_id + "/" + view;
    let axiosConfig = {
      headers: {
        Authorization: "Bearer " + app_key,
        "Content-Type": "application/json"
      }
    };

    //Only when the email is valid
    if (this.emailValidation(email) === true) {
      axios
        .post(url, data, axiosConfig)
        .then(resp => {
          this.setState({
            ...initState,
            isSubmited: true
          });
        })
        .catch(error => console.log(error));
    } else {
      window.alert("Enter a correct email");
    }
  };

  render() {
    const { name, email, isSubmited } = this.state;

    const summitButton = (
      <button
        sx={{
          m: 3,
          background: `pink`,
          borderRadius: `10px`,
          boxShadow: `1px 2px 10px rgba(0, 0, 0, 1)`,
          cursor: `pointer`,
          border: `none`,
          outline: `none`,
          ":hover": {
            background: `#d23669`,
            color: `white`,
            outline: `pink`
          }
        }}
        onSubmit={e => this.formSubmitHandler(e)}
      >
        <p>Sign me up</p>
      </button>
    );

    const thankYou = (
      <Styled.h2 sx={{ color: `primary`, mt: 3 }}>
        Thank you for joining!
      </Styled.h2>
    );

    return (
      <Styled
        sx={{
          border: `1px solid pink`,
          mx: 4,
          px: 2,
          my: `40px`,
          boxShadow: `1px 2px 10px rgba(0, 0, 0, 0.5)`,
          borderRadius: `10px`,
          textAlign: `center`,
          fontSize: `13px`
        }}
      >
        {isSubmited ? (
          thankYou
        ) : (
          <Fragment>
            <Styled.h2 sx={{ color: `primary`, mt: 3 }}>
              Like what you see?
            </Styled.h2>
            <Styled.p>
              No spam, just me trying to learn how to code! And same other
              interesting stuff!
            </Styled.p>
            <form onSubmit={e => this.formSubmitHandler(e)}>
              <Input
                inputtype="input"
                label="Your name"
                placeholder="to get to know you..."
                name="name"
                value={name}
                onChange={(event, name, value) =>
                  this.formChangeHandler(event, name, value)
                }
              />
              <Input
                inputtype="input"
                label="And email"
                placeholder="to send you good stuff..."
                name="email"
                value={email}
                onChange={(event, name, value) =>
                  this.formChangeHandler(event, name, value)
                }
              />
              {summitButton}
            </form>
          </Fragment>
        )}
      </Styled>
    );
  }
}

export default mailListForm;
