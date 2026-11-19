import Screen from '../../src/components/Screen';
import { Text } from 'react-native';

export default function DashboardScreen() {
  return (
    <Screen edges={['top', 'left', 'right']}>
      <Text>Dashboard</Text>
    </Screen>
  );
}
