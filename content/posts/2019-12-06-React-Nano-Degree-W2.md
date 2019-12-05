---
title: "React Nano Degree - week 2"
cover: "."
date: 2019-12-09
category: "🔮 Code"
tags:
  - react
  - learning
  - udacity
publish: "no"
---

Two weeks ago I have started my [ReactJS Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) from UDACITY and I wanted to share what I have been through and what I have learned so far. For all intents and purposes this entry, and all the other ones that will follow, are a series of quick notes and reflections about ReactJS and are not intended to be a guide for anyone to learn React. 

Despite the fact that I have been learning ReactJS for the past 1 year (oh yeah, 1 year as past by) the content of the first 2 weeks of the course were really interesting to reflect on the basics and to consolidate knowledge.

Allow me to jott down a couple of things that I think are very important to know: 
. React is all about reusable components
. You have different types of components
. State, props and constructor, when to use what
. Components have lifecycle
. PropTypes, a life savior
. React route, to create SPA
. Do you really need controlled components?


Before we start is good to highlight that React is, at the end of the day, just JavaScript. I will assume that you know JSX and that words like `state` and `props` are not totally allien to you. You also should be confortable with ES6 syntax and the implications that functional programming have on JavaScript - if you need a quick refresher on that you can check this quick [introdutory course](https://classroom.udacity.com/courses/ud356) from UDACITY.

# Reusable components

React is build on the principle that you build a larger UI pieces by composing different components together. You use JSX to describe small and manageble portions of your UI creating small elements instead of traditional rigit string elements. 

The great thing about doing this is that you can reuse your components. Put it very simply, you will be able to write a piece of code that could be used for differend users or even different similar and repetitive content that you would like to render in the UI. 

You can see this at work on the messaging app that we create on the course - you can check [my repo](https://github.com/tiagofsanchez/UdacityNanoDegree-W2-Ex2-AllTogether) of that exercise.

```jsx
//MessagingApp.js
const MessagingApp = (props) => {
    const { users , messages , onNewSms } = props
    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users}</div>
            <SmsHistory messages={messages} users={users} />
            <SendSms users={users} onNewSms={onNewSms}/>
          </div>
    )
}

```

# There are different types of components



# State, props and constructor 

# Components Lifecycle

# Allways use PropTypes

# React route

I know that all of the above is really brief and barely scratches the surface of the technical complexities of ReactJS. For more detail explanations and indepth learning I would suggest you the following materials: 






