import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LinkTile} from './LinkTile';

const styles = StyleSheet.create({
  hyperlinkContainer: {
    flexDirection: 'column',
    marginRight: 90,
  },
  hyperlinkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export function LinkContainer(props: {
  pageCodeUrl: string;
  feedbackUrl: string;
  documentation: {label: string; url: string}[];
}) {
  return (
    <View style={styles.hyperlinkContainer}>
      <View style={styles.hyperlinkRow}>
        <LinkTile
          title="View page code on Github"
          links={[{label: 'Source Code', url: props.pageCodeUrl}]}
        />
        <LinkTile
          title="Feedback"
          links={[
            {label: 'Send feedback about this page', url: props.feedbackUrl},
          ]}
        />
      </View>
      <LinkTile title="Documentation" links={props.documentation} />
    </View>
  );
}
