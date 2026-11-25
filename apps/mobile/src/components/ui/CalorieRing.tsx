import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue, useAnimatedProps, withTiming, Easing, useReducedMotion,
} from 'react-native-reanimated';
import { colors } from '../../theme';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const R = 44;
const C = 2 * Math.PI * R;

export default function CalorieRing({ consumed, goal }: { consumed: number; goal: number }) {
  const progress = useSharedValue(0);
  const reduceMotion = useReducedMotion();
  const over = consumed > goal;

  useEffect(() => {
    const target = Math.min(consumed / goal, 1);
    progress.value = reduceMotion
      ? target
      : withTiming(target, { duration: 900, easing: Easing.out(Easing.cubic) });
  }, [consumed, goal]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: C * (1 - progress.value),
  }));

  return (
    <View style={styles.container}>
      <Svg width={104} height={104} viewBox="0 0 104 104">
        <Circle cx={52} cy={52} r={R} stroke={colors.primaryTint} strokeWidth={10} fill="none" />
        <AnimatedCircle
          cx={52} cy={52} r={R} fill="none" strokeWidth={10} strokeLinecap="round"
          stroke={over ? colors.accentWarm : colors.primary}
          strokeDasharray={C}
          animatedProps={animatedProps}
          transform="rotate(-90 52 52)"
        />
      </Svg>
      <View pointerEvents="none" style={styles.centerText}>
        <Text style={styles.consumed}>{consumed}</Text>
        <Text style={styles.goal}>of {goal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 104,
    position: 'relative',
    width: 104,
  },
  centerText: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  consumed: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  goal: {
    color: colors.textSecondary,
    fontSize: 11,
  },
});