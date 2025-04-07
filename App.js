import React, { useState } from "react";
import { View, Button } from "react-native";
import FlatListExemplo from "./exemplos/FlatListExemplo";
import SectionListExemplo from "./exemplos/SectionListExemplo";
import ScrollViewExemplo from "./exemplos/ScrollViewExemplo";
import CarouselExemplo from "./exemplos/CarouselExemplo";
import Styles from "./style/estilo";

export default function App() {
  const [telaAtual, setTelaAtual] = useState(null);

  const navegaParaTela = (nomeTela) => {
    setTelaAtual(nomeTela);
  };

  const desenhaTela = () => {
    switch (telaAtual) {
      case "FlatList":
        return <FlatListExemplo voltaPara={() => setTelaAtual(null)} />;
      case "SectionList":
        return <SectionListExemplo voltaPara={() => setTelaAtual(null)} />;
      case "ScrollView":
        return <ScrollViewExemplo voltaPara={() => setTelaAtual(null)} />;
      case "Carousel":
        return <CarouselExemplo voltaPara={() => setTelaAtual(null)} />;
      default:
        return (
          <View style={Styles.container}>
            <Button title="FlatList Exemplo" onPress={() => navegaParaTela("FlatList")} />
            <View style={Styles.buttonSpacing} />
            <Button title="SectionList Exemplo" onPress={() => navegaParaTela("SectionList")} />
            <View style={Styles.buttonSpacing} />
            <Button title="ScrollView Exemplo" onPress={() => navegaParaTela("ScrollView")} />
            <View style={Styles.buttonSpacing} />
            <Button title="Carousel Exemplo" onPress={() => navegaParaTela("Carousel")} />
          </View>
        );
    }
  };

  return (
    <View style={Styles.container}>
      {desenhaTela()}
      </View>
    );
}
