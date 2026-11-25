import Screen from '../../src/components/Screen';
import { Text, View, StyleSheet } from 'react-native';
import { Typography, Button, Card } from "../../src/components";
import { useTranslation } from "react-i18next";
import { colors, textStyles } from "../../src/theme";
import { Link } from 'expo-router';
import NutritionCard from '../../src/components/NutritionCard';

export default function WelcomeScreen() {
  const { t } = useTranslation();
  return (
    <Screen>
      <View style={styles.header}>
        <Text>Welcome</Text>
        <Link href="/(auth)/login" style={{ color: colors.link }}>
          Login
        </Link>
      </View>
      <Typography text={t("screens.home.welcomeMessage")} textStyles={textStyles.hero} style={{ marginBottom: 24 }} />
      <Typography text={t("screens.home.welcomeDescription")} textStyles={textStyles.sectionTitle} style={{ marginBottom: 24 }} />
      <Button value={t("screens.home.getStartedButton")} cta={() => {}} />
      <NutritionCard
        cardTitle="Your day at a glance"
        consumed={1420}
        goal={2000}
        protein={85}
        proteinGoal={120}
        carbs={203}
        carbsGoal={250}
        fats={24}
        fatsGoal={70}
      />
    </Screen>
  );
}

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
  }
})