import { Stack, useSegments } from "expo-router";

export default function Layout() {
  const segment  = useSegments();
  const hide = segment.includes('nearby-modal');
  return (
    <Stack screenOptions={{ headerShown: false,
      // tabBarStyle: {
      //   display: hide ? "none" : "flex",
      // },

    
    }}>
      <Stack.Screen
        name="index"
        options={{
        }}
      />
     
    </Stack>
  );
}