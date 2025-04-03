import React, { useEffect, useState} from "react";
import{
  StyleSheet, Text, View, Image, ViewStyle, ImageStyle,
} from "react-native";
interface Pessoa{
  nome: string;
  idade: number;
  cidade: string;
  avatar: any;
}

const pessoa: Pessoa={
  nome: "André", 
  idade: 48,
  cidade: "Rio de Janeiro",
  avatar: require("/assets/icon.png"),
};

function getHora(): string{
  const horaAtual = new Date().getUTCHours();

  if (horaAtual >=5 && horaAtual <15){
    return "Bom dia";
  }else if(horaAtual >= 12 && horaAtual < 18){
    return "Boa tarde ";
  }else {
    return "Boa noite";
  }
}

interface SaudacaoPersonalizadaProps {
  saudacao?: string;
  nome?: string;
  style?: ViewStyle | ViewStyle[];
}

const SaudacaoPersonalizada: React.FC<SaudacaoPersonalizadaProps> = ({
  saudacao = "Olá",
  nome = "Usuário",
  style,
}) => {
  return(
    <View style = {[styles.saudacaoContainer, style]}>
      <Text>
        {saudacao}, {nome}!
      </Text>
    </View>
  );
};

interface ExibirPessoaProps {
  nome: string;
  idade: number;
  cidade: string;
}

const ExibirPessoa: React.FC<ExibirPessoaProps> = ({
  nome, idade, cidade}) => {
    return(
      <View style={styles.container}>
        <Image source={pessoa.avatar} style={styles.avatar} />
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Cidade: {cidade}</Text>
      </View>
    );
  };

const App: React.FC = ()=> {
  const [saudacao, setSaudacao] = useState<string>("")

    useEffect(()=> {
      setSaudacao(getHora());
     }, []);

    return (
      <View style={styles.appContainer}>
        <SaudacaoPersonalizada
        saudacao={saudacao}
        nome={pessoa.nome}
        style={styles.saudacaoPersonalizada}
        />
        <ExibirPessoa {...pessoa} />
      </View>
    );
};

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }as ViewStyle,
  saudacaoContainer: {
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  } as ViewStyle,
  saudacaoPersonalizada: {
    backgroundColor: "lightblue",
    padding: 10,
  }as ViewStyle,
  container: {
    alignItems: "center",
    justifyContent: "center",
  }as ViewStyle,
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  }as ImageStyle,
});

export default App;
