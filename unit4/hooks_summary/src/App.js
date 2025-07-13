// App.js
import React from 'react';
import CounterState from './components/CounterState';
import TextInputState from './components/TextInputState';
import TimerEffect from './components/TimerEffect';
import FetchEffect from './components/FetchEffect';
import FocusRef from './components/FocusRef';
import ClickCountRef from './components/ClickCountRef';
import ThemeContextDemo from './components/ThemeContextDemo';
import UserContextDemo from './components/UserContextDemo';
import CounterReducer from './components/CounterReducer';
import FormReducer from './components/FormReducer';
import CustomLocalStorageHook from './components/CustomLocalStorageHook';
import CustomCounterHook from './components/CustomCounterHook';

export default function App() {
  return (
    <div style={{ padding: 30, fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>🧪 React Hooks Playground</h2>
      <CounterState />
      <TextInputState />
      <TimerEffect />
      <FetchEffect />
      <FocusRef />
      <ClickCountRef />
      <ThemeContextDemo />
      <UserContextDemo />
      <CounterReducer />
      <FormReducer />
      <CustomLocalStorageHook />
      <CustomCounterHook />
    </div>
  );
}