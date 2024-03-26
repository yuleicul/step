# React <Tag variant='brand' value='65 h' />

::: info
Currently reading _Fluent React_ by Tejas Kumar.
:::

::: details To learn

- [RSC From Scratch. Part 1: Server Components · reactwg/server-components · Discussion #5](https://github.com/reactwg/server-components/discussions/5)
- [Home v6.22.3 | React Router](https://reactrouter.com/en/main)
- [Redux - A predictable state container for JavaScript apps. | Redux](https://redux.js.org/)
- [RTK Query Overview | Redux Toolkit](https://redux-toolkit.js.org/rtk-query/overview)
- [Patterns.dev](https://www.patterns.dev/)

:::

## React Router Tutorial v6.22.3 <Tag value="2 h" /> <Tag variant="red" value="In progress" />

[Tutorial v6.22.3 | React Router](https://reactrouter.com/en/main/start/tutorial)

> A `<button type="button">`, while seemingly redundant, is the HTML way of **preventing** a button from submitting its form.
> Browsers can serialize forms by the `name` attribute of it's input elements. The name of this input is `q`, that's why the URL has `?q=`. If we named it `search` the URL would be `?search=`. Note that this form is different from the others we've used, it does not have `<form method="post">`. The default `method` is `"get"`. That means when the browser creates the request for the next document, it doesn't put the form data into the request POST body, but into the [`URLSearchParams`][urlsearchparams] of a GET request.

## The Two Reacts <Tag value="1 h" />

<Timestamp value="March 24, 2024" />

[The Two Reacts — overreacted](https://overreacted.io/the-two-reacts/)

> When you build a user interface, you need to be able to respond to at least some interactions with guaranteed low latency and with zero network roundtrips.
>
> UI is made of components, but we argued for two very different visions:
>
> - `UI = f(state)` where `state` is client-side, and `f` runs on the client. This approach allows writing instantly interactive components like `<Counter />`. (Here, `f` may also run on the server with the initial state to generate HTML.)
> - `UI = f(data)` where `data` is server-side, and `f` runs on the server only. This approach allows writing data-processing components like `<PostPreview />`. (Here, `f` runs categorically on the server only. Build-time counts as “server”.)

## Modern Redux <Tag value='2 h' /> <Tag variant="red" value='Draft' />

<Timestamp value="March, 2024" />

Redux has changed a lot. Redux Toolkit (also known as "RTK" for short) is now the official recommended approach for writing Redux logic. Let's relearn Redux.

[Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

<!-- https://github.com/markdown-it/markdown-it-container/issues/6#issuecomment-213789283 -->

:::: details

### Part 1: Redux Overview and Concepts

Redux is a library for managing **global** application state:

- Redux is typically used with the **React-Redux** library for integrating Redux and React together
- **Redux Toolkit** is the recommended way to write Redux logic

Redux terminology:

- _Action_: a plain JavaScript object that has a `type` field
  ```js
  const addTodoAction = {
    type: "todos/todoAdded",
    payload: "Buy milk",
  };
  ```
- _Action Creator_: a function that creates and returns an _action_ object
  ```js
  const addTodo = (text) => {
    return {
      type: "todos/todoAdded",
      payload: text,
    };
  };
  ```
- _Reducer_: a function that receives the current _state_ and an _action_ object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`
  - [Detailed Explanation: Why are they called 'Reducers'?](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#reducers)
- _Dispatch_: `dispatch` an _action_ to update the _state_
- _Selector_: a function to extract specific states

  ```js
  const selectCounterValue = (state) => state.value;

  const currentValue = selectCounterValue(store.getState());
  console.log(currentValue);
  // 2
  ```

Redux uses a "one-way data flow" app structure:
![Redux data flow](/redux-data-flow.gif)

### Part 2: Redux Toolkit App Structure

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

When we pass in an object like `{counter: counterReducer}`, that says that we want to have a `state.counter` **section** of our Redux state object, and that we want the `counterReducer` function to be **in charge of** deciding if and how to update the `state.counter` section whenever an action is dispatched.

::: info
When we pass an object of slice reducers to `configureStore`, it passes those to `combineReducers` for us to generate the root reducer. To learn the details, take a look at [Detailed Explanation: Reducers and State Structure](https://redux.js.org/tutorials/essentials/part-2-app-structure#redux-slices)
:::

**A "slice" is a collection of Redux reducer logic and actions for a single feature in your app**.

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

The `counterSlice` object returned by `createSlice()` has properties:

- `counterSlice.actions`: an object of **action creators**, which are usually called when using `dispatch` or `reducer` function
- `counterSlice.reducer`: passed to `configureStore` to be in charge of some state section

::: danger
You can only write "mutating" logic in Redux Toolkit's `createSlice` and `createReducer` because they use Immer inside! If you write mutating logic in reducers without Immer, it will mutate the state and cause bugs!
:::

::::

## Before <Tag value='62 h' />

My React journey started in July 2020. There're some special times spent:

- The first encounter with React - the official tutorial and onboarding pratice at my first job, took approximately 20 h
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) by Dan Abramov - 5 h
- [Deconstructing React](https://youtu.be/eTcyOCd6v1c?si=Zis_VAl1pgEWdZhj) by Tejas Kumar - 3 h
- [Build your own React](https://pomb.us/build-your-own-react/) by Rodrigo Pombo. I followed this article to build [my own React](https://github.com/yuleicul/build-your-own/tree/main/react) for about 10 h.
- [React mentoring program 2022](https://github.com/yuleicul/react-mentoring-program-2022) with my colleague Addy Zhou, where I learned Redux for the first time. - 24 h
