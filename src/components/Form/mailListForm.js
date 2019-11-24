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
      window.alert("Please, enter a correct email");
    }
  };

  render() {
    const { name, email, isSubmited } = this.state;
    const { formType } = this.props;

    let formHeader = null;
    if (formType == "homePage") {
      formHeader = (
        <>
          <Styled.h2 sx={{ color: `primary`, mt: 3 }}>
            Like what you see?
          </Styled.h2>
          <Styled.p>
            No spam, just me trying to learn how to code! And same other
            interesting stuff!
          </Styled.p>
        </>
      );
    }

    const summitButton = (
      <div>
        <button
          sx={{
            m: 4,
            px: 3,
            background: `pink`,
            borderRadius: `5px`,
            cursor: `pointer`,
            border: `none`,
            outline: `none`,
            fontFamily: `inherit`,
            fontSize: `inherit`,
            ":hover": {
              background: `#d23669`,
              color: `white`,
              outline: `pink`
            }
          }}
          onSubmit={e => this.formSubmitHandler(e)}
        >
          <Styled.p sx={{ m: 0 }}>Sign me</Styled.p>
        </button>
      </div>
    );

    const myForm = (
      <Styled
        sx={{
          border: `1px solid pink`,
          px: 2,
          my: `80px`,
          boxShadow: `1px 2px 10px rgba(0, 0, 0, 0.5)`,
          borderRadius: `10px`,
          textAlign: `center`,
          fontSize: `13px`
        }}
      >
        {formHeader}
        <form onSubmit={e => this.formSubmitHandler(e)}>
          <Input
            inputtype="input"
            label="Your name"
            placeholder="to get to know you better..."
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
      </Styled>
    );

    const thankYou = (
      <Styled.h2 sx={{ color: `primary`, mt: 3 }}>
        Thank you for joining!
      </Styled.h2>
    );

    return <div>{isSubmited ? thankYou : myForm}</div>;
  }
}

export default mailListForm;
