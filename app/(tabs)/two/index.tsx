import { Button, StyleSheet } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
export default function TabTwoScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      {/* <Link href={'/ex'}>
        hello world
        </Link> */}

        <Button title="Go to Modal" onPress={() => {
          router.replace({
            pathname: '/(tabs)/two/[id]',
            params: { id: 'hello' }
          })
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
