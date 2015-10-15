/*
  spec/fixtures/fake-component/index.js
  fake component for use in tests
*/

import React from 'react';

export default class FakeComponent extends React.Component {
  render() {
    return <span>{"Hello, world!"}</span>;
  }
}
