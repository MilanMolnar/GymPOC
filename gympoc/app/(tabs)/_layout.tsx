import { Link, Stack, Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Attekintes',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="workOut"
                options={{
                    title: 'Edzes',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="edit"
                options={{
                    title: 'Szerkesztes',
                    headerShown: false
                }}
            />
        </Tabs>
    );
}
