import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import  Modal  from 'react-native-modal';

export default function App() {
  const [visivel,setVisivel] = useState(false);
  const trocar = () => {
    setVisivel(!visivel);
  }
  const [visivel2,setVisivel2] = useState(false);
  const trocar2 = () => {
    setVisivel2(!visivel2);
  }
  const [visivel3,setVisivel3] = useState(false);
  const trocar3 = () => {
    setVisivel3(!visivel2);
  }

  return (
    <View style={styles.container}>
      <Text>Projeto Modal</Text>
      <Button title="Abrir Modal" onPress={trocar} />

      <Modal 
        isVisible={visivel} 
        style={styles.modal}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
        //animationInTiming={1000}
        //animationOutTiming={1000}
        backdropColor='#000000ff'
        backdropOpacity={0.5}
      >

        <Text>Salvo com sucesso!</Text> 
        <Button title="Fechar Modal" onPress={trocar} />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor:'#9eb9e1ff',
    width:"50%",
    //height: 50
    marginTop:200,
    marginBottom:200,
    marginLeft: "25%",
    marginRight: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white", 
    borderWidth: 1,
    borderRadius: 20
  }
});
