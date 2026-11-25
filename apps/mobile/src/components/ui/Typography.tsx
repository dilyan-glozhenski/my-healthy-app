import { Text, type StyleProp, type TextStyle } from 'react-native';

import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from '../../theme';

type TypographyStyle = Pick<
  TextStyle,
  'fontFamily' | 'fontSize' | 'lineHeight' | 'letterSpacing' | 'fontWeight' | 'color'
>;

export interface TypographyProps {
  text: string;
  textStyles?: Partial<TypographyStyle>;
  style?: StyleProp<TextStyle>;
}

export default function Typography({ text, textStyles, style }: TypographyProps) {
  const {
    fontFamily = fontFamilies.body,
    fontSize = fontSizes.lg,
    lineHeight = lineHeights.body,
    letterSpacing = 0,
    fontWeight = fontWeights.regular,
    color = colors.textPrimary,
  } = textStyles ?? {};

  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize,
          lineHeight,
          letterSpacing,
          fontWeight,
          color,
        },
        style,
      ]}>
      {text}
    </Text>
  );
}