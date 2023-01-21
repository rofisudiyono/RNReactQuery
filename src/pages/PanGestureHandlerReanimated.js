import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {IcCs} from '../images';
const PanGestureHandlerReanimated = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = event.translationX + ctx.startX;
      y.value = event.translationY + ctx.startY;
    },
  });

  const reset = () => {
    x.value = withSpring(0);
    y.value = withSpring(0);
  };

  const _style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <View style={styles.page}>
      <Button title="Reset" onPress={reset} />
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.wrapperImage, _style]}>
          <Image source={IcCs} style={styles.image} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PanGestureHandlerReanimated;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  wrapperImage: {
    height: 70,
    width: 70,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
});
