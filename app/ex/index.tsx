
import { useRouter } from 'expo-router';
import { Button, Text } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export default function Page() {

  const router = useRouter()

  const bottomSheetRef = useRef<any>(null);

  const snapPoints = useMemo(() => ['100%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  
  
  const onPress = () => {
    router.replace({
      pathname: '/form',
      
    })
    }
  
    
  return (
    <BottomSheetModalProvider>
      
      <Button title="Go to Modal" onPress={onPress} />
      <Button title="Present Modal" onPress={handlePresentModalPress} />

      <BottomSheetModal
        snapPoints={snapPoints}
        index={0}
        onChange={handleSheetChanges}
        ref={bottomSheetRef}
        
      >
        <Text>Awesome 🎉</Text>
      </BottomSheetModal>
        
    </BottomSheetModalProvider>
  )
}