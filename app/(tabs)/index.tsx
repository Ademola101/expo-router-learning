import React, { useState } from "react";

import {
  View,
  Image,
  Animated,
  Keyboard,
  PanResponder,
  ScrollView,
  StyleSheet,
  Switch,
  ActivityIndicator,
  TextInput,
  Dimensions,
} from "react-native";
import {
  DefaultTheme,
  Text,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";

const { height } = Dimensions.get("window");

const FromPage = () => {
  const [step, setStep] = useState(0);
  const theme = {
    ...DefaultTheme,
    roundness: 6,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3644E2",
      accent: "#FF0000",
    },
  };

  const nextStepAmount = () => {
    setStep(1);
  };

  const nextStepPeople = () => {
    setStep(2);
  };

  const nextStepWhere = () => {
    setStep(3);
  }

  const nextStepWhen = () => {
    setStep(4);
  }
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {step === 0 && <TitleSection onPress={nextStepAmount} />}
        {step === 1 && <AmountSection onPress={nextStepPeople} />}

        {step === 2 && <PeopleStep onPress={nextStepWhere} />}

        {step === 3 && <WhereStep onPress={nextStepWhen} />}

        {step === 4 && <WhenStep />}

        
      </View>
    </PaperProvider>
  );
};

export default FromPage;

const TitleSection = ({ onPress }) => {
  return (
    <>
      <Text style={styles.title}>Title</Text>
      <TextInput placeholder="Ex : My first experience" style={styles.input} autoFocus />
      <Button mode="contained" onPress={onPress} style={styles.buttonStyle}>
        Continue
      </Button>
    </>
  );
};

const AmountSection = ({ onPress }) => {
  return (
    <>
      <Text style={styles.amountText}>What is the total amount</Text>
      <TextInput
        placeholder="$0"
        style={styles.amountInput}
        placeholderTextColor={"#000"}
        autoFocus
      />
      <Button mode="contained" onPress={onPress} style={styles.buttonStyle}>
        Continue
      </Button>
    </>
  );
};

const PeopleStep = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>How many people?</Text>
      <TextInput
        placeholder=""
        style={styles.amountInput}
        keyboardType="numeric"
        autoFocus
      />
      <Button mode="contained" onPress={onPress} style={styles.buttonStyle}>
        Continue
      </Button>
    </>
  );
};

const WhereStep = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>Where at?</Text>
      <TextInput placeholder="" style={styles.amountInput} autoFocus />
      <Button mode="contained" onPress={() => console.log("Pressed")} style={styles.buttonStyle}>
        Continue
      </Button>
    </>
  );
};

const WhenStep = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>When?</Text>
      <TextInput placeholder="" style={styles.amountInput} autoFocus />
      <Button mode="contained" onPress={() => console.log("Pressed")} style={styles.buttonStyle}>
        Continue
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  input: {
    backgroundColor: "#FFF",
    paddingVertical: 8,
    borderColor: "#eaeaea",
    fontSize: 16,
    marginBottom: 12,

    borderRadius: 4,
    textAlign: "center",
  },
  locationInputContainer: {
    backgroundColor: "#FFF",
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
  },
  locationInput: {
    height: 44,
    color: "#000",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 32,
  },
  datePicker: {
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    paddingVertical: 24,
    borderColor: "#eaeaea",
    borderRadius: 4,
    borderBottomWidth: 1,
    fontSize: 18,
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  amountText: {
    fontSize: 32,
    marginTop: 32,
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
    fontWeight: "100",
  },

  amountInput: {
    backgroundColor: "#FFF",
    paddingVertical: 8,
    borderColor: "#eaeaea",
    fontSize: 32,
    marginBottom: 12,
    borderRadius: 4,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },

  buttonStyle: {
    marginTop: height / 4,
  },
});
