
import { FlatList, StyleSheet, Text, View } from "react-native";
import Botao from "./src/components/botao";
import Cabecalho from "./src/components/cabecalho";
import Jogos from "./src/components/jogos";
import ProximosLancamentos from "./src/components/lancamentos";
import Dados from "./dados/dadosJogos";
import Lancamentos from "./dados/dadosLancamentos"



export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao 
      Logo="logo-android"
      texto="APPS"
      cor="black"
      Logo2="game-controller"
      texto2="JOGOS"
      cor2="purple"
      />
      <Botao 
      Logo="videocam"
      texto="FILMES"
      cor="green"
      Logo2="musical-notes"
      texto2="MÚSICAS"
      cor2="orange"
      />
      <Botao 
      Logo="book"
      texto="LIVROS"
      cor="blue"
      Logo2="newspaper"
      texto2="NOTÍCIAS"
      cor2="red"
      />

      <Text style={estilosTextos.baseText}>
        Jogos em Destaque
      </Text>

      <FlatList 
            horizontal={true}
            data={Dados}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Jogos
                  titulo ={item.nome}
                  imagem ={item.imagem}
                  valor ={item.valor}
              />
            )}
      />

      <Text style={estilosTextos.baseText}>
        Próximos Lançamentos  
      </Text>

      <FlatList 
            horizontal={true}
            data={Lancamentos}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (


              <ProximosLancamentos
                  titulo ={item.nome}
                  imagem ={item.imagem}
                  data ={item.data}
              />
            )}
      />
     </View>
  );
  
}
const estilosTextos = StyleSheet.create({
  baseText: {
    color: "black",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 15,
  }
});


