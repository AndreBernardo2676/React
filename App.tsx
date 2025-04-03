import { useCallback } from 'react';
import { StyleSheet, Text, View, Linking, Image, Alert, Button} from 'react-native';

type SendIntentButtonProps = {
  acao: string;
  children: string;
  extras?: Array<{
    key: string;
    value: string | number | boolean;

  }>;
};

const SendIntentButton = ({acao, extras,  children,}: SendIntentButtonProps)=> {
  const hondLePress = useCallback(async () => {
    try {
      await Linking.sendIntent(acao, extras);
    }catch (e: any){
      Alert.alert(e.message);
    }
   
  },[acao, extras]);
  return <Button title={children} onPress={hondLePress} />;
}
export default function App(){
  return (
    <View style={styles.container}>
      <Image source={require("./assets/image.png")} style={styles.logo}/>
      <Text style={styles.header}>Meu App!</Text>
      <View style={styles.nav}>
        <Text style={styles.navLink} onPress={() => console.log("Clique inicio")}>INICIO</Text>
        <Text style={styles.navLink} onPress={() => console.log("Clique Momento")}>MOMENTO</Text>
        <Text style={styles.navLink} onPress={() => console.log("Clique Sobre")}>SOBRE</Text>
        <Text style={styles.navLink} onPress={() => console.log("Clique Contado")}>CONTATO</Text>    
      </View>
    <View style={styles.section} id="inicio">
        <Text style={styles.sectionHeader}>Seção de Inicio</Text>
        <Text>Conteúdo da seção de inicio.</Text>
        <Text>... </Text>
        <SendIntentButton acao="android.intent,action.POWER_USAGE_SUMMARY">
          Uso Bateria
        </SendIntentButton>
    </View>
    <View style={styles.section} id="sobre">
      <Text style={styles.sectionHeader}>Seção Sobre</Text>
      <Text>Conteúdo da seção sobre. </Text>
      <Text>... </Text>
      <Text>... </Text>
    </View>
    <View style={styles.section} id="contato">
      <Text style={styles.sectionHeader}>Seção Contato</Text>
      <Text>Conteúdo da seção contato. </Text>
      <Text>... </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  navLink: {
    marginHorizontal: 10,
    color: "Blue",
  },
  section:{
    marginBottom: 30,
  },
  sectionHeader:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
