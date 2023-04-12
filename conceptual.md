### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is an open-source JavaScript library for building user interfaces that was built by Facebook.
It is used for building interactive and dynamic user interfaces in web development. It's great for creating single-page applications and complex web applications. One of its strengths is that it's well-suited for building UIs using reusable components, which means that different parts of the user interface can be broken down into smaller, reusable pieces of code. This makes development more efficient and helps create maintainable and scalable web applications.

- What is Babel?
It is a JavaScript compiler that is used to translate modern JavaScript code into older JavaScript code that can run in older web browsers or environments that may not support the latest JavaScript features.

- What is JSX?
It stands for JavaScript XML, and it is a syntax extension used in React to write HTML-like code within JavaScript, making it easy to create UI elements in React that can be rendered to the DOM.

Example:
```Javascript
import React from 'react';

// JSX component
const MyComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a JSX component.</p>
    </div>
  );
};

export default MyComponent;
```


- How is a Component created in React?
    First, a component is a reusable piece of UI that can be created using either function components or class components.

    Function Components: A function component is a simple JavaScript function that returns JSX to define the structure and appearance of the UI component. 

    Class Components - A class component is a JavaScript class that extends the React.Component class and defines a render() method to return JSX. 

    Exporting and Importing - Once a component is defined, it can be exported using the "export" keyword, so that it can be used in other parts of the app. To use a component in another component or file, it needs to be imported using the "import" statement.

- What are some difference between state and props?
    State is a local data storage mechanism that is mutable. It is declared and managed within a component with the "useState" in function components or "this.state" in class components. Props are immutable and are used to pass data from a parent component to a child component. They are passed as function arguments in function components or as properties of "this.props" in class components.

- What does "downward data flow" refer to in React?
    It is the passing of data from a parent component to its child components through props.

- What is a controlled component?
    A controlled component is a form element (input, textarea, select) whose value and behavior are controlled by React state, rather than being managed by the DOM directly.
    
    The value and state of the form element are controlled by the component's props and/or state, rather than the value being solely based the user's input.

- What is an uncontrolled component?
    It is the opposit of controlled in the sense that the form element's value and behavior are controlled directly by the DOM rather than the React state. The form element's value and behavior are determined by the user's input and the DOM and react doesn't have direct influence of them.

- What is the purpose of the `key` prop when rendering a list of components?
    It is to help React keep track of the identity of each component in a list so that it can optimize the rendering process. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    It can lead to issues when the list changes.

    Use a unique identifier such as ID or a combination of values that can easily identify each item in the list. This helps React accurately track the identity of the components in the list.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a hook that allows you to handle side effects in functional components. Side effects are operations that have an impact outside of the component (example: getting data from an API or updating the DOM)

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is a hook that allows you to create a mutable reference that stays consistent through renders of a component, but changes to that value do not trigger a re-render of the component.

- When would you use a ref? When wouldn't you use one?
    You can use red if you want to work with HTML elements directly, like getting their values, setting focus, or doing animations. It helps you create a reference to the HTML element so you can access it and modify it directly.

    You shouldn't use a ref If you need to store and access data that is related to the way a component looks or behaves, like the contents of a form input, a toggle switch, or a checkbox, it's usually better to use React state (useState) or component props. These options automatically update the component's appearance when the data changes, so you don't have to worry about manually updating the UI.

- What is a custom hook in React? When would you want to write one?

    A custom hook is a reusable function that contains logic and state that can be shared across different components. 

    You would want to write one when writing similar logic in multiple components because a custom hook can help you consolidate that logic into a single place, making it easier to maintain and update. This can help reduce code duplication and promote code reuse throughout your application.
