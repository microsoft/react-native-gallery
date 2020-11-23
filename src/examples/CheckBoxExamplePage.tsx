'use strict';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const CheckBoxExamplePage: React.FunctionComponent<{}> = () => {
  return (
    <Page
      title="Checkbox"
      description="This is a page showing how to use a CheckBox">
      <Example
        title="Simple Checkbox"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox />;
}`}>
        <CheckBox />
      </Example>
      <Example
        title="Checked Checkbox"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox value={true}/>;
}`}>
        <CheckBox value={true} />
      </Example>
      <Example
        title="Disabled Checkbox"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox disabled />;
}`}>
        <CheckBox disabled />
      </Example>
      <Example
        title="Disabled Checked Checkbox"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox disabled value={true} />;
}`}>
        <CheckBox disabled value={true} />
      </Example>
      <Example
        title="Custom onCheckColor Checkmark"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox onCheckColor='red' value={true} />;
}`}>
        <CheckBox onCheckColor="red" value={true} />
      </Example>
      <Example
        title="Custom onTintColor Color"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox onTintColor='red' value={true} />;
}`}>
        <CheckBox onTintColor="red" value={true} />
      </Example>
      <Example
        title="Custom onFillColor Color"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox onFillColor='red' value={true} />;
}`}>
        <CheckBox onFillColor="red" value={true} />
      </Example>
      <Example
        title="Custom tintColor Color"
        code={`import CheckBox from '@react-native-community/checkbox';

function Example() {
  return <CheckBox tintColor='red' />;
}`}>
        <CheckBox tintColor="red" />
      </Example>
    </Page>
  );
};
