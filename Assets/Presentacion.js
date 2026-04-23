import { StyleSheet, Text, Image, View, Button, Linking, ScrollView } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Presentacion () {
  const instagram = () => {
  Linking.openURL("https://www.instagram.com/nayludu_?igsh=MWVra3J1Nmk3cmFtcw==")
}
  return (
<SafeAreaView>
  <ScrollView>
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}> Carta de presentacion: </Text>
        <Text style={styles.nombre}> Nombre completo: Nayla Elisa Ludueña. </Text>
        <Text style={styles.edad}> Edad: 17 años.</Text>
        <Text style={styles.fecha}> Fecha de nacimiento: 26/02/09 </Text>
        <Text style={styles.gustos}> Gustos: gatos, series, peliculas, historia, geografia. </Text>
      </View>

      <Image 
        source={{uri:"https://i.pinimg.com/originals/5e/19/68/5e196899ff4b98d4352d1ba7337db1ee.jpg"}}
          style={styles.imagen}
      />
      <Button
        onPress={instagram}
        color="pink"
        title="Apretar"
      />
    </View>
  </ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    justifyContent: 'center',
    padding: 2,
  },
  nombre: {
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  edad: {
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  fecha: {
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  gustos: {
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  imagen: {
    width: 200,
    height: 200,
    alignSelf: "center"
  }
});
