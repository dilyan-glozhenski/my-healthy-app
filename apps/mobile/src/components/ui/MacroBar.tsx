import Animated, {
  useSharedValue, useAnimatedStyle, withDelay, withTiming, Easing, useReducedMotion,
} from 'react-native-reanimated';
import { View } from 'react-native';
import { useEffect } from 'react';
import { colors } from '../../theme/colors';

export default function MacroBar({ value, goal, delay = 0, color }: {
  value: number; goal: number; delay?: number; color: string;
}) {
  const fill = useSharedValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const target = Math.min(value / goal, 1);
    fill.value = reduceMotion
      ? target
      : withDelay(delay, withTiming(target, { duration: 600, easing: Easing.out(Easing.cubic) }));
  }, [value, goal]);

  const style = useAnimatedStyle(() => ({ width: `${fill.value * 100}%` }));

  return (
    <View style={{ height: 6, borderRadius: 3, backgroundColor: colors.surfaceMuted }}>
      <Animated.View style={[{ height: 6, borderRadius: 3, backgroundColor: color }, style]} />
    </View>
  );
}