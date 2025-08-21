import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
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
    setVisivel3(!visivel3);
  }

return (
 <View style={styles.container}>
   <Text style={styles.titulo}>1. Modal de Desconto</Text>

     <TouchableOpacity style={styles.desconto} onPress={trocar} >
   <Text style={styles.textdesconto}> Confira seu Desconto </Text>
     </TouchableOpacity>

      <Modal 
        isVisible={visivel} 
        style={styles.modal1}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
        //animationInTiming={1000}
        //animationOutTiming={1000}
        backdropColor='#000000ff'
        backdropOpacity={0.5}
      >
          <Image style={styles.image} source={require('./assets/desconto.png')} /> 
   <Text style={styles.textomodal1} >Você ganhou 50% de desconto! </Text> 
    <TouchableOpacity style={styles.botaodesc} onPress={trocar} >
   <Text style={styles.textdesconto}> Retornar </Text>
     </TouchableOpacity>
      </Modal>


   <Text style={styles.titulo}>2. Modal de Informação</Text>
    <TouchableOpacity style={styles.info} onPress={trocar2} >
   <Text style={styles.textinfo}> Ver mais informações </Text>
     </TouchableOpacity>

      <Modal 
        isVisible={visivel2} 
        style={styles.modal2}
        animationIn={"fadeIn"}
        animationOut={"zoomOut"}
        //animationInTiming={1000}
        //animationOutTiming={1000}
        backdropColor='#000000ff'
        backdropOpacity={0.5}
      >
          <Image style={styles.image2} source={require('./assets/info.png')} /> 
        <Text style={styles.textmodal2}>Para usar transparência no código hexadecimal, utilize os seis dígitos e acrescente mais dois dígitos (também em hexadecimal) com a transparência, onde 00 corresponde a 0% e FF corresponde a 100%:</Text> 
        <TouchableOpacity style={styles.botaoinfo} onPress={trocar2} >
   <Text style={styles.textinfo}> Fechar </Text>
     </TouchableOpacity>
      </Modal>
1
 <Text style={styles.titulo}>3. Modal de Advertência</Text>
    <TouchableOpacity style={styles.adv} onPress={trocar3} >
   <Text style={styles.textadv}> Ver Advertências </Text>
     </TouchableOpacity>

      <Modal 
        isVisible={visivel3} 
        style={styles.modal3}
        animationIn={"bounce"}
       // animationOut={"flash"}
        //animationInTiming={1000}
        //animationOutTiming={1000}
        backdropColor='#000000ff'
        backdropOpacity={0.5}
      >

         <Image style={styles.image} source={require('./assets/adv.png')} /> 
        <Text style={styles.textmodal3}>Você tem 0 Advertências!</Text> 
        <TouchableOpacity style={styles.botaoadv} onPress={trocar3} >
   <Text style={styles.textadv3}> Voltar para a página inical </Text>
     </TouchableOpacity>
      </Modal>

    
  </View>

    
  );
}

const styles = StyleSheet.create({

  image:{
 width: "100%",
 height: 165, 
 resizeMode: "contain"

  },
  container: {
    flex: 1,
    backgroundColor: '#d7d2c2c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal1: {
    padding: 20,
    backgroundColor:'white',
    width:"50%",
    //height: 50
    marginTop:250,
    marginBottom:300,
    marginLeft: "25%",
    marginRight: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white", 
    borderWidth: 1,
    borderRadius: 20,
    flex: 10,
  },
  textomodal1:{
    fontSize: 18, 
    color:"#9370DB", 
    fontWeight:800
  },
  titulo:{
    fontSize: 18, 
    color:"black", 
    fontWeight:800
  },


  desconto:{
     //borderWidth:1, //borda
    //borderColor: "black", //cor de todos os lados da borda
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "white", //cor do botão
    marginTop:5, //espaço externo do botão
  },
  textdesconto:{
    color: "#9370DB",
     fontSize: 15, 
    fontWeight:800
  },
  botaodesc:{
    padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#ebe2ffff", //cor do botão
    marginTop:15, //espaço externo do botão,
  },


  info:{
 //borderWidth:1, //borda
    //borderColor: "black", //cor de todos os lados da borda
    padding:10, //espaço nos cantos do botao
    borderRadius:5, //borda redonda
    backgroundColor: "#77abd1ff", //cor do botão
    marginTop:5, //espaço externo do botão,
  },
  modal2: {
    backgroundColor:"#77abd1ff",
    width:"70%",
    marginTop: 250,
    marginBottom: 250,
    marginLeft: "15%",
    marginRight: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, 1)", 
    borderWidth: 1,
    borderRadius: 20,
    padding:10
  },
  textmodal2:{
 fontSize: 15, 
    color:"#d8efffff", 
    fontWeight:800
  },
  textinfo:{
     fontSize: 15, 
    color:"#e7f5ffff", 
    fontWeight:800
  },
  botaoinfo:{
    marginTop: 20, 
    paddingHorizontal:20,
    padding:6, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "#89b5d5ff", //cor do botão
  },
  image2:{
 width: "75%",
 height: 165, 
 resizeMode: "contain",
 paddingBottom:5
  },


  adv:{
 //borderWidth:1, //borda
    //borderColor: "black", //cor de todos os lados da borda
    padding:10, //espaço nos cantos do botao
    borderRadius:5, //borda redonda
    backgroundColor: "#ff8282ff", //cor do botão
    marginTop:5, //espaço externo do botão,
  },
  modal3:{
    padding: 20,
    backgroundColor:"#ff8282ff",
    width:"70%",
    //height: 50
    marginTop:250,
    marginBottom:300,
    marginLeft: "15%",
    marginRight: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ffffffff", 
    borderWidth: 1,
    borderRadius: 20,
    flex: 10,
  },
  textmodal3:{
 fontSize: 16, 
    color:"white", 
    
    fontWeight:800
  },
textadv:{
 fontSize: 15, 
    color:"white",
    fontWeight:800
},
  textadv3:{
 fontSize: 15, 
    color:"#ff8282ff", 
    fontWeight:800
  },
  botaoadv:{
padding:10, //espaço nos cantos do botao
    borderRadius:10, //borda redonda
    backgroundColor: "white", //cor do botão
    marginTop:5, //espaço externo do botão,
    
  }
});
