/* eslint-disable react-hooks/rules-of-hooks */
import low from 'lowlight';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../themes/Theme';

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
    color: darkColors.text,
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
    color: darkColors.text,
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
    color: lightColors.text,
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
    color: lightColors.text,
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

// Text alone does not generate a unique key. Index alone could result in stale UI. Use both to create unique
// keys that will always ensure up to date UI.
function createTextKey(text: string, index: number) {
  return `${index}_${text}`;
}

// Node alone does not generate a unique key. Index alone could result in stale UI. Use both to create unique
// keys that will always ensure up to date UI.
function createElementKey(node: lowlight.AST.Element, index: number) {
  return `${index}_${node}`;
}

function renderLowLightNode(node: lowlight.AST.Unist.Node, index: number) {
  const theme = React.useContext(ThemeContext);
  if (node.type === 'text') {
    let text = (node as lowlight.AST.Text).value;
    return <Text key={createTextKey(text, index)}>{text}</Text>;
  } else if (node.type === 'element') {
    const elementNode = node as lowlight.AST.Element;

    if (
      elementNode.properties.className &&
      (!lightStyles[
        elementNode.properties.className as keyof typeof lightStyles
      ] ||
        !darkStyles[
          elementNode.properties.className as keyof typeof darkStyles
        ])
    ) {
      throw new Error(
        `Missing code style for ${elementNode.properties.className}`,
      );
    }

    const styles = theme === 'light' ? lightStyles : darkStyles;
    const style = styles[
      elementNode.properties.className as keyof typeof styles
    ]
      ? styles[elementNode.properties.className as keyof typeof styles]
      : {};
    return (
      <Text key={createElementKey(elementNode, index)} style={style}>
        {elementNode.children.map(renderLowLightNode)}
      </Text>
    );
  }

  return <Text>{JSON.stringify(node)}</Text>;
}

function renderLowLightTree(tree: lowlight.HastNode[]) {
  if (tree.length === 1) {
    return renderLowLightNode(tree[0], 0);
  } else {
    return <>{tree.map(renderLowLightNode)}</>;
  }
}

export function Code(props: {children: string}) {
  const tree = low.highlight('typescript', props.children).value;
  const theme = React.useContext(ThemeContext);
  const styles = theme === 'light' ? lightStyles : darkStyles;
  return (
    <View style={styles['hljs-container']}>
      <Text style={styles['hljs-global']} selectable={true}>
        {renderLowLightTree(tree)}
      </Text>
    </View>
  );
}
