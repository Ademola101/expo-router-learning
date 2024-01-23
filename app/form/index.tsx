
import React from 'react'

import { View, Image, Animated, Keyboard, PanResponder, ScrollView, StyleSheet, Switch, ActivityIndicator } from 'react-native';
import { DefaultTheme, Text, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';

const FromPage = () => {
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: 'tomato',
          secondary: 'yellow',
        },
      };
  return (
    <PaperProvider theme={theme}>
    <Text style={styles.title}>Group experience</Text>
          <TextInput
            label="Title"
            
            style={styles.input}
          />
    </PaperProvider>
  )
}

export default FromPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 32,
      marginBottom: 20,
      textAlign: 'left',
      color: '#000',
    },
    input: {
      backgroundColor: '#FFF',
      paddingHorizontal: 0,
      paddingVertical: 8,
      borderColor: '#eaeaea',
      fontSize: 16,
      marginBottom: 12,
    },
    locationInputContainer: {
      backgroundColor: '#FFF',
      borderTopWidth: 0,
      borderBottomWidth: 1,
      borderColor: '#eaeaea',
    },
    locationInput: {
      height: 44,
      color: '#000',
      fontSize: 16,
      paddingHorizontal: 0,
    },
    inputLabel: {
      fontSize: 16,
    },
    form: {
      marginHorizontal: 24,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 32,
    },
    datePicker: {
      backgroundColor: '#FFF',
      paddingHorizontal: 0,
      paddingVertical: 24,
      borderColor: '#eaeaea',
      borderRadius: 4,
      borderBottomWidth: 1,
      fontSize: 18,
      marginBottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });