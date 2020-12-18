import low from 'lowlight';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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

function renderLowLightNode(node: lowlight.AST.Unist.Node) {
  if (node.type === 'text') {
    return <Text>{(node as lowlight.AST.Text).value}</Text>;
  } else if (node.type === 'element') {
    const elementNode = node as lowlight.AST.Element;
    if (
      elementNode.properties.className &&
      !darkStyles[elementNode.properties.className as keyof typeof darkStyles]
    ) {
      throw new Error(
        `Missing code style for ${elementNode.properties.className}`,
      );
    }
    const style = darkStyles[elementNode.properties.className as keyof typeof darkStyles]
      ? darkStyles[elementNode.properties.className as keyof typeof darkStyles]
      : {};
    return (
      <Text style={style}>{elementNode.children.map(renderLowLightNode)}</Text>
    );
  }

  return <Text>{JSON.stringify(node)}</Text>;
}

function renderLowLightTree(tree: lowlight.HastNode[]) {
  if (tree.length === 1) {
    return renderLowLightNode(tree[0]);
  } else {
    return <>{tree.map(renderLowLightNode)}</>;
  }
}

export function Code(props: {children: string}) {
  const tree = low.highlight('typescript', props.children).value;
  return (
    <View style={darkStyles['hljs-container']}>
      <Text style={darkStyles['hljs-global']}>{renderLowLightTree(tree)}</Text>
    </View>
  );
}
