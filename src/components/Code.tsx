/* eslint-disable react-hooks/rules-of-hooks */
import low from 'lowlight';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGlobal} from 'reactn';
import {AppTheme} from 'react-native-windows';

const darkColors = {
  background: '#1E1E1E',
  text: '#9cdcfe',
  comment: '#6a9955',
  keyword: '#c586c0',
  tag: '#cc99cc',
  number: '#b5cea8',
  string: '#ce9178',
  jsxTags: '#4ec9b0',
  jsxBrackets: '#80807a',
  types: '#4ec9b0',
  regexp: '#d16969',
};

const lightColors = {
  background: '#E6E6E6',
  text: '#000000',
  comment: '#000000',
  keyword: '#FF0000',
  tag: '#A31515',
  number: '#FF0000',
  string: '#0000FF',
  jsxTags: '#A31515',
  jsxBrackets: '#0000FF',
  types: '#A31515',
  regexp: '#000000',
};

const darkStyles = StyleSheet.create({
  'hljs-container': {
    backgroundColor: darkColors.background,
    flexGrow: 1,
    padding: 5,
  },
  'hljs-global': {
    color: darkColors.text,
    fontFamily: 'Consolas',
  },
  'hljs-comment': {
    color: darkColors.comment,
    fontStyle: 'italic',
  },
  'hljs-quote': {
    color: darkColors.comment,
    fontStyle: 'italic',
  },
  'hljs-keyword': {
    color: darkColors.keyword,
  },
  'hljs-selector-tag': {
    color: darkColors.keyword,
  },
  'hljs-literal': {
    color: darkColors.keyword,
  },
  'hljs-type': {
    color: darkColors.keyword,
  },
  'hljs-addition': {
    color: darkColors.keyword,
  },
  'hljs-number': {
    color: darkColors.number,
  },
  'hljs-selector-attr': {
    color: darkColors.number,
  },
  'hljs-symbol': {
    color: darkColors.number,
  },
  'hljs-bullet': {
    color: darkColors.number,
  },
  'hljs-subst': {
    color: darkColors.number,
  },
  'hljs-meta': {
    color: darkColors.number,
  },
  'hljs-link': {
    color: darkColors.number,
  },
  'hljs-string': {
    color: darkColors.string,
  },
  'hljs-doctag': {
    color: darkColors.string,
  },
  'hljs-regexp': {
    color: darkColors.regexp,
  },
  'hljs-emphasis': {
    fontStyle: 'italic',
  },
  'hljs-function': {}, // Apply to whole function
  'hljs-params': {}, // Apply to the parameters of a function
  'hljs-built_in': {
    color: darkColors.types,
  },
  'hljs-class': {},
  'hljs-title': {
    color: darkColors.jsxTags, //darkColors.classTypes,
  },
  xml: {}, // Apply to text within XML sections of JSX
  'hljs-tag': {color: darkColors.jsxBrackets},
  'hljs-name': {color: darkColors.jsxTags}, // Name within Component JSX Tags
  'hljs-attr': {color: darkColors.text}, // Attributes within JSX Tags
});

const lightStyles = StyleSheet.create({
  'hljs-container': {
    backgroundColor: lightColors.background,
    flexGrow: 1,
    padding: 5,
  },
  'hljs-global': {
    color: lightColors.text,
    fontFamily: 'Consolas',
  },
  'hljs-comment': {
    color: lightColors.comment,
    fontStyle: 'italic',
  },
  'hljs-quote': {
    color: lightColors.comment,
    fontStyle: 'italic',
  },
  'hljs-keyword': {
    color: lightColors.keyword,
  },
  'hljs-selector-tag': {
    color: lightColors.keyword,
  },
  'hljs-literal': {
    color: lightColors.keyword,
  },
  'hljs-type': {
    color: lightColors.keyword,
  },
  'hljs-addition': {
    color: lightColors.keyword,
  },
  'hljs-number': {
    color: lightColors.number,
  },
  'hljs-selector-attr': {
    color: lightColors.number,
  },
  'hljs-symbol': {
    color: lightColors.number,
  },
  'hljs-bullet': {
    color: lightColors.number,
  },
  'hljs-subst': {
    color: lightColors.number,
  },
  'hljs-meta': {
    color: lightColors.number,
  },
  'hljs-link': {
    color: lightColors.number,
  },
  'hljs-string': {
    color: lightColors.string,
  },
  'hljs-doctag': {
    color: lightColors.string,
  },
  'hljs-regexp': {
    color: lightColors.regexp,
  },
  'hljs-emphasis': {
    fontStyle: 'italic',
  },
  'hljs-function': {}, // Apply to whole function
  'hljs-params': {}, // Apply to the parameters of a function
  'hljs-built_in': {
    color: lightColors.types,
  },
  'hljs-class': {},
  'hljs-title': {
    color: lightColors.jsxTags, //darkColors.classTypes,
  },
  xml: {}, // Apply to text within XML sections of JSX
  'hljs-tag': {color: lightColors.jsxBrackets},
  'hljs-name': {color: lightColors.jsxTags}, // Name within Component JSX Tags
  'hljs-attr': {color: lightColors.text}, // Attributes within JSX Tags
});

function createKey(index: string, value: string) {
  return `${value}`;
}

function renderLowLightNode(node: lowlight.AST.Unist.Node, index: number) {
  //@ts-ignore
  const [theme, setTheme] = useGlobal('theme');
  const themeStyles =
    theme === 'system'
      ? AppTheme.currentTheme === 'dark'
        ? 1
        : 0
      : theme === 'dark'
      ? 1
      : 0;
  if (node.type === 'text') {
    return (
      <Text key={(node as lowlight.AST.Text).value}>
        {(node as lowlight.AST.Text).value}
      </Text>
    );
  } else if (node.type === 'element') {
    const elementNode = node as lowlight.AST.Element;
    if (themeStyles === 0) {
      if (
        elementNode.properties.className &&
        !lightStyles[
          elementNode.properties.className as keyof typeof lightStyles
        ]
      ) {
        throw new Error(
          `Missing code style for ${elementNode.properties.className}`,
        );
      }
      const style = lightStyles[
        elementNode.properties.className as keyof typeof lightStyles
      ]
        ? lightStyles[
            elementNode.properties.className as keyof typeof lightStyles
          ]
        : {};
      return (
        <Text key={elementNode.tagName} style={style}>
          {elementNode.children.map(renderLowLightNode)}
        </Text>
      );
    } else {
      if (
        elementNode.properties.className &&
        !darkStyles[elementNode.properties.className as keyof typeof darkStyles]
      ) {
        throw new Error(
          `Missing code style for ${elementNode.properties.className}`,
        );
      }
      const style = darkStyles[
        elementNode.properties.className as keyof typeof darkStyles
      ]
        ? darkStyles[
            elementNode.properties.className as keyof typeof darkStyles
          ]
        : {};
      return (
        <Text key={elementNode.tagName} style={style}>
          {elementNode.children.map(renderLowLightNode)}
        </Text>
      );
    }
  }

  return <Text>{JSON.stringify(node)}</Text>;
}

function renderLowLightTree(tree: lowlight.HastNode[]) {
  if (tree.length === 1) {
    return renderLowLightNode(tree[0], 0);
  } else {
    return <>{tree.map((node, index) => renderLowLightNode(node, index))}</>;
  }
}

export function Code(props: {children: string}) {
  const tree = low.highlight('typescript', props.children).value;
  //@ts-ignore
  const [theme, setTheme] = useGlobal('theme');
  const themeStyles =
    theme === 'system'
      ? AppTheme.currentTheme === 'dark'
        ? 1
        : 0
      : theme === 'dark'
      ? 1
      : 0;
  return (
    <View
      style={
        themeStyles === 0
          ? lightStyles['hljs-container']
          : darkStyles['hljs-container']
      }>
      <Text
        style={
          themeStyles === 0
            ? lightStyles['hljs-global']
            : darkStyles['hljs-global']
        }
        selectable={true}>
        {renderLowLightTree(tree)}
      </Text>
    </View>
  );
}
