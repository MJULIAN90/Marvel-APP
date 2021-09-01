import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //global
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    backgroundColor: "#000000c0",
  },

  textoButon: { color: "white", fontWeight: "bold", fontSize: 25 },

  // home
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },

  search: { marginTop: "5%" },

  //

  // characterCard
  CardContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#000000c0",
  },

  imageCard: {
    width: "90%",
    height: 200,
  },

  textCard: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },

  //
  // comic
  ContainerComic: {
    backgroundColor: "#000000c0",
    alignItems: "center",
    justifyContent: "center",
    height: 650,
  },

  menuComic: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },

  imageComic: {
    borderRadius: 20,
    width: "100%",
    height: "60%",
    borderColor: "red",
    position: "absolute",
    top: -300,
  },

  textComic: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
    paddingTop: 565,
    position: "absolute",
  },

  //

  // information
  titleInformation: {
    alignSelf: "center",
    margin: 10,
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "uppercase",
    color: "white",
  },

  ContDescription: {
    marginHorizontal: 10,
    paddingBottom: 20,
    marginTop: 10,
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: "#000000c0",
  },

  description: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  //
});
