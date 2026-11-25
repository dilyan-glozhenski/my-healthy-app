import { Link, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import {colors} from '../../theme';

type ButtonCta = Href | (() => void | Promise<void>);

interface ButtonProps {
  value: string;
  cta: ButtonCta;
}

export default function Button({ value, cta }: ButtonProps) {
  const isAction = typeof cta === 'function';
  const button = (
    <Pressable
      accessibilityRole={isAction ? 'button' : 'link'}
      onPress={isAction ? cta : undefined}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.label}>{value}</Text>
    </Pressable>
  );

  return isAction ? button : <Link href={cta} asChild>{button}</Link>;
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  label: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
