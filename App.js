import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const imagens = [
    require('./assets/caixa mis.png'),
    require('./assets/pedra.png'),
    require('./assets/papel.png'),
    require('./assets/tesoura.png'),
  ];

  const [imgJogador, setImgJogador] = useState(0);
  const [imgMaquina, setImgMaquina] = useState(0);
  const [pontoJogador, setPontoJogador] = useState(0);
  const [pontoMaquina, setPontoMaquina] = useState(0);

  const jogar = (jogador) => {
    const maquina = Math.floor(Math.random() * 3) + 1;

    setImgJogador(jogador);
    setImgMaquina(maquina);

    
    if (
      (jogador === 1 && maquina === 3) ||
      (jogador === 2 && maquina === 1) ||
      (jogador === 3 && maquina === 2)
    ) {
      setPontoJogador((prev) => prev + 1);
    } else if (jogador !== maquina) {
      setPontoMaquina((prev) => prev + 1);
    }
  };

  const reset = () => {
    setImgJogador(0);
    setImgMaquina(0);
    setPontoJogador(0);
    setPontoMaquina(0);
  };

  return (
    <View style={styles.container}>

      <Image style={styles.titulo} source={require('./assets/jokenpo.png')} />

      <Text style={styles.placar}>
        Jogador: {pontoJogador}  X  Computador: {pontoMaquina}
      </Text>

      <View style={styles.areaJogo}>
        <Image style={styles.img} source={imagens[imgJogador]} />
        <Image style={styles.versus} source={require('./assets/versus.png')} />
        <Image style={styles.img} source={imagens[imgMaquina]} />
      </View>

      <View style={styles.botoes}>
        <Pressable onPress={() => jogar(1)}>
          <Image style={styles.botaoImg} source={imagens[1]} />
        </Pressable>

        <Pressable onPress={() => jogar(2)}>
          <Image style={styles.botaoImg} source={imagens[2]} />
        </Pressable>

        <Pressable onPress={() => jogar(3)}>
          <Image style={styles.botaoImg} source={imagens[3]} />
        </Pressable>
      </View>

      <Pressable style={styles.reset} onPress={reset}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>Jogar de novo</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    height: 300,
    width: 500,
    marginTop: 10,
    
  
  },

  placar: {
    color: '#d08d40',
    fontSize: 30,
    marginBottom: 20,
  },

  areaJogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 30,
  },

  img: {
    width: 150,
    height: 150,
  },

  botoes: {
    flexDirection: 'row',
    gap: 20,
  },

  botaoImg: {
    width: 120,
    height: 150,
  },

  reset: {
    marginTop: 30,
    backgroundColor: '#d08d40',
    padding: 10,
    borderRadius: 10,
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  versus: {
    width: 100,
    height: 100,
  },
});