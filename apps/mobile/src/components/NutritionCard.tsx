import { StyleSheet, View } from 'react-native';
import { Card, Typography, CalorieRing, MacroBar } from '../components';
import { textStyles } from '../theme';

export interface NutritionCardProps {
    cardTitle: string;
    consumed: number;
    goal: number;
    protein: number;
    proteinGoal: number;
    carbs: number;
    carbsGoal: number;
    fats: number;
    fatsGoal: number;
    date?: string;
}

export default function NutritionCard({
    cardTitle,
    consumed,
    goal,
    protein,
    proteinGoal,
    carbs,
    carbsGoal,
    fats,
    fatsGoal,
    date,
}: NutritionCardProps) {
    return (
        <Card>
            <View style={styles.header}>
                <Typography text={cardTitle} textStyles={textStyles.cardTitle} />
                {date ? <Typography text={date} textStyles={textStyles.caption} /> : null}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <CalorieRing consumed={consumed} goal={goal} />
                <View style={styles.macros}>
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Typography text={`Protein ${protein}g`} textStyles={textStyles.caption} />
                        <MacroBar value={protein} goal={proteinGoal} color="#FF6384" />
                    </View>

                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Typography text={`Carbs ${carbs}g`} textStyles={textStyles.caption} />
                        <MacroBar value={carbs} goal={carbsGoal} color="#36A2EB" />
                    </View>

                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Typography text={`Fats ${fats}g`} textStyles={textStyles.caption} />
                        <MacroBar value={fats} goal={fatsGoal} color="#FFCE56" />
                    </View>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    macros: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 8,
    },
});