import { StyleSheet, Text, Image, View, Linking, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Presentacion() {

  const instagram = () => {
    Linking.openURL(
      "https://www.instagram.com/nayludu_?igsh=MWVra3J1Nmk3cmFtcw=="
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          <View>
            <Text style={styles.titulo}>
              Carta de presentación:
            </Text>

            <Text style={styles.nombre}>
              Nombre completo: Nayla Elisa Ludueña.
            </Text>

            <Text style={styles.edad}>
              Edad: 17 años.
            </Text>

            <Text style={styles.fecha}>
              Fecha de nacimiento: 26/02/09
            </Text>

            <Text style={styles.gustos}>
              Gustos: gatos, series, películas, historia, geografía.
            </Text>
          </View>

          <Image
            source={{
              uri: "https://i.pinimg.com/originals/5e/19/68/5e196899ff4b98d4352d1ba7337db1ee.jpg"
            }}
            style={styles.imagen}
          />

          <Pressable

            hitSlop={50}

            onPress={instagram}

            onPressIn={() => {
              console.log("Botón presionado");
            }}

            onPressOut={() => {
              console.log("Botón soltado");
            }}

            onLongPress={() => {
              Alert.alert(
                "Instagram",
                "Quieres abrir Instagram?"
              );
            }}

            delayLongPress={700}

            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPresionado
            ]}
          >

            {({ pressed }) => (
              <Text style={styles.textoBoton}>
                {pressed ? "Abriendo..." : "Apretar"}
              </Text>
            )}

          </Pressable>

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
    fontSize: 20,
    fontWeight: 'bold',
  },

  nombre: {
    backgroundColor: 'pink',
    padding: 5,
  },

  edad: {
    backgroundColor: 'yellow',
    padding: 5,
  },

  fecha: {
    backgroundColor: 'pink',
    padding: 5,
  },

  gustos: {
    backgroundColor: 'yellow',
    padding: 5,
  },

  imagen: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 10,
  },

  boton: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 35
  },

  botonPresionado: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }

});
