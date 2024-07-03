import React, {useState} from 'react';
import {
  FlatList,
  FlatListProps,
  Image,
  Platform,
  PlatformColor,
  Pressable,
  View,
} from 'react-native';
import type {ColorValue} from 'react-native';

type PagingButtonProps = {left: boolean; onPress: () => void};
const PagingButton = ({left, onPress}: PagingButtonProps) => {
  const [hover, setHover] = useState(false);

  const rightImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiIGNsYXNzPSJzdmdfZGQ3OTBlZTMiIGZvY3VzYWJsZT0iZmFsc2UiPjxwYXRoIGQ9Ik01MTUgMTk1NWw5MzAtOTMxTDUxNSA5M2w5MC05MCAxMDIyIDEwMjFMNjA1IDIwNDVsLTkwLTkweiIvPjwvc3ZnPg==';
  const leftImage =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiIGNsYXNzPSJzdmdfZGQ3OTBlZTMiIGZvY3VzYWJsZT0iZmFsc2UiPjxwYXRoIGQ9Ik0xNDQzIDIwNDVMNDIxIDEwMjQgMTQ0MyAzbDkwIDkwLTkzMCA5MzEgOTMwIDkzMS05MCA5MHoiLz48L3N2Zz4=';

  const tooltip = left ? 'Scroll left' : 'Scroll right';

  const backgroundColorRest = Platform.select<ColorValue>({
    windows: PlatformColor('ControlFillColorDefaultBrush'),
    macos: PlatformColor('controlColor'),
    default: 'white',
  });

  const backgroundColorHover = Platform.select<ColorValue>({
    windows: PlatformColor('ControlFillColorSecondaryBrush'),
    macos: PlatformColor('controlColor'),
    default: 'lightgray',
  });

  const borderColorRest = Platform.select<ColorValue>({
    windows: PlatformColor('CircleElevationBorderBrush'),
    macos: PlatformColor('separatorColor'),
    default: 'black',
  });

  const borderColorHover = Platform.select<ColorValue>({
    windows: PlatformColor('ControlElevationBorderBrush'),
    macos: PlatformColor('separatorColor'),
    default: 'black',
  });

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={tooltip}
      tooltip={tooltip}
      onPress={() => onPress()}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}>
      <View
        style={{
          backgroundColor: hover ? backgroundColorHover : backgroundColorRest,
          borderRadius: 24,
          borderWidth: 1,
          borderColor: hover ? borderColorHover : borderColorRest,
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 48,
          minHeight: 48,
        }}>
        <Image
          src={left ? leftImage : rightImage}
          style={{
            width: 16,
            height: 16,
          }}
        />
      </View>
    </Pressable>
  );
};

type HorizontalListWithPageNavigationProps<ItemT> = FlatListProps<ItemT> & {
  spacing?: number;
};
const HorizontalListWithPageNavigation = (
  props: HorizontalListWithPageNavigationProps<JSX.Element>,
): JSX.Element => {
  const listRef = React.useRef<FlatList>(null);
  const [scrollLeftTarget, setScrollLeftTarget] = React.useState(-1);
  const [scrollRightTarget, setScrollRightTarget] = React.useState(-1);

  const onViewableItemsChanged = ({viewableItems}) => {
    const firstVisibleIndex = viewableItems[0].index;
    const lastVisibleIndex = viewableItems[viewableItems.length - 1].index;
    const itemsInView = viewableItems.length;
    setScrollLeftTarget(
      firstVisibleIndex > 0 ? Math.max(firstVisibleIndex - itemsInView, 0) : -1,
    );
    setScrollRightTarget(lastVisibleIndex);
  };
  const viewabilityConfigCallbackPairs = React.useRef([
    {onViewableItemsChanged},
  ]);

  const canScrollLeft = scrollLeftTarget >= 0;
  const canScrollRight =
    props.data && scrollRightTarget < props.data.length - 1;

  return (
    <View>
      {canScrollLeft && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            zIndex: 1,
            height: '100%',
            justifyContent: 'center',
          }}>
          <PagingButton
            left={true}
            onPress={() => {
              listRef.current?.scrollToIndex({
                animated: true,
                index: scrollLeftTarget,
                viewPosition: 0,
              });
            }}
          />
        </View>
      )}
      {canScrollRight && (
        <View
          style={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            height: '100%',
            justifyContent: 'center',
          }}>
          <PagingButton
            left={false}
            onPress={() => {
              listRef.current?.scrollToIndex({
                animated: true,
                index: scrollRightTarget,
                viewPosition: 0,
              });
            }}
          />
        </View>
      )}
      <FlatList
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsHorizontalScrollIndicator={false}
        ref={listRef}
        horizontal={true}
        ItemSeparatorComponent={() => (
          <View style={{width: props.spacing ?? 10}} />
        )}
        style={{paddingBottom: 20}}
        {...props}
      />
    </View>
  );
};

export {HorizontalListWithPageNavigation};
