---
title: "Hello hooks, goodbye class components"
date: 2020-04-11
category: "🔮 Code"
thumbnail: "../thumbnails/hooks.png"
tags:
  - react
  - hooks
  - useEffect
publish: "yes"
---

You need to learn about React Hooks, let me try to tell you why!

First, allow me to digress and share my personal views why I venture into Hooks. I was very keen to know if there was a way to build a React application without thinking too much about where the data should live in and how it should be rendered in the Dom. For me it was always a little bit challenging to decide at the beginning of a project where my data should be stored, if a certain component needed to be a class component or we would be fine with it being a functional component.  

For me this was definitely a problem, but one could argue, that this is a boilerplate issue and nothing more than that. However, if you think about the added complexity of components lifecycle and their different methods, you will probably agree that this building a class component and adding logic to that component can quickly increase the complexity of your project and component. I reckon this is a good enough reason to give hooks a try as they look so much cleaner. 
     
Another big issue, in my view, is that React, in a way, was not living up to their promise of reusable components. If this sounds strange to you is probably because you are thinking about functional components. For a functional component that renders UI this doesn’t make sense, however to reuse a component that contains certain logic and state, reusing that component could create a lot of problems and what is called a wrapper hell by implementing higher order components. 

Last but certainly not the least I was always a little bit confused with lifecycle events, when to use them, and why it always seemed that I was splitting my logic through the component livecycles methods.

I was sold once I learnt that hooks would help me:
- Not needing to write class components; 
- Avoiding logic duplication; 
- Making it easier to refactor my components; 

Let me try to give one example of a typical form that you would have in your website - We will be building a typical class component and a component using hooks to compare the differences. After, we will also go through a `Context` example in order to illustrate the useContext hook, we will experiment with side effects. Just to make things fun we are also going to connect our forms to Airtable.

This would be your expected outcome: 



# Managing state

Here we will go through both types of components and try to explain the differences between managing state in a class component vs a functional component using hooks. 

You can use this list of [commits here](https://github.com/tiagofsanchez/hooks-examples/commits/master) to follow through. In this case, use *managing state on both class and functional components* if you want to play with the source code.

## State in a class component
If you are not new to react, this should be a typical form implementation. Below you will see 3 important things in our `classForm.js`: (1) component rendering a form in your DOM; (2) state object with `name` and `email` properties and; (3)  both change handlers (yes, we can consolidate both change handlers, but bear with me on this) 

```js
import React, { Component } from "react";
import "./form.css";
 
class ClassForm extends Component {
  
  state = {
    name: "",
    email: "",
  };
 
  onChangeHandlerName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
 
  onChangeHandlerEmail = (e) => { 
    this.setState({
      email: e.target.value
    })
  }
 
  render() {
    const { name, email } = this.state;
 
    return (
      <section>
        <form className="form">
          <h1>Class form</h1>
          <input
            className="input"
            placeholder="name..."
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeHandlerName}
          ></input>
          <input
            className="input"
            placeholder="email..."
            type="email"
            name="email"
            value={email}
            onChange={this.onChangeHandlerEmail}
          ></input>
          <button>submit</button>
        </form>
      </section>
    );
  }
}
 
export default ClassForm;
```

## State with hooks

The `hooksForm.js` component will be a functional component so now the big question is, how can we grab state in a functional component? Enter `useState`, react hook that will help us keep tabs with the state of a given functional component. 

> const [state, setState] = useState(initialState)

`useState()` is a function that returns a stateful value, in our example state, and a function to update it, in our example setState. I will not go super deep on this as the original hooks [documentation](https://reactjs.org/docs/hooks-intro.html) is very good

You can now check our `hooksForm.js` component to see how this would work in practice:
