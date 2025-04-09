import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const widgets = [
    {
      id: 1,
      nome: "Área Pix",
      img: require("../assets/pix.png"),
    },
    {
      id: 2,
      nome: "Pagar",
      img: require("../assets/pagar.png"),
    },
    {
      id: 3,
      nome: "Transferir",
      img: require("../assets/transferir.png"),
    },
    {
      id: 4,
      nome: "Depositar",
      img: require("../assets/depositar.png"),
    },
    {
      id: 5,
      nome: "Recarregar",
      img: require("../assets/recarregar.png"),
    },
    {
      id: 6,
      nome: "Cobrar",
      img: require("../assets/cobrar.png"),
    },
  ];
  const informativos = [
    {
      id: 1,
      texto: "Seu informe de rendimentos 2021 já está disponível",
    },
    {
      id: 2,
      texto: "Seu informe de rendimentos 2022 já está disponível",
    },
  ];
  const descubraMais = [
    {
      id: 1,
      img: require("../assets/descricao1.png"),
      nome: "Portabilidade de salário",
      descricao: "Sua liberdade financeira começa com você escolhendo...",
    }, {
      id: 2,
      img: require("../assets/descricao1.png"),
      nome: "Portabilidade de salário",
      descricao: "Sua liberdade financeira começa com você escolhendo...",
    },
  ];
  return (
    <>
      <ScrollView>
        {/* Header */}
        <View style={style.containerHeader}>
          <View style={style.child}>
            <TouchableOpacity>
              <View style={style.avatarContainer}>
                <Image source={require("../assets/person.png")} />
              </View>
            </TouchableOpacity>

            <View style={style.iconContainer}>
              <TouchableOpacity>
                <Image source={require("../assets/visible.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/info.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/email.png")} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.conteinerTextUser}>
            <Text style={style.textUser}>Ola, Gustavo</Text>
          </View>
        </View>

        {/* Conta Section */}
        <View style={{ marginHorizontal: 24 }}>
          <View style={style.containerConta}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>Conta</Text>
              <Text style={{ fontSize: 32, fontWeight: "bold" }}>
                R$ 3.000.00
              </Text>
            </View>
          </View>
          <View style={style.containerWidgets}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={widgets} // array com as imagens
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              renderItem={({ item }) => (
                <View key={item.id} style={style.textImageWidgets}>
                  <TouchableOpacity>
                  <View style={style.widgets}>
                    
                    <Image style={{ objectFit: "cover" }} source={item.img} />
                  </View>

                  </TouchableOpacity>
                 
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {item.nome}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
          <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#cfd0d176",
              flexDirection: "row",
              gap: 20,
              height: 70,
              alignItems: "center",
              paddingLeft: 16,
              marginTop: 40,
              borderRadius: 16,
            }}
          >
            <Image
              style={{ height: 24, width: 19, objectFit: "cover" }}
              source={require("../assets/cartao.png")}
            />
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              Meus Cartões
            </Text>
          </View>
          </TouchableOpacity>
        
          <FlatList
            style={{ marginTop: 24 }}
            horizontal
            data={informativos}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            renderItem={({ item }) => (
              <View
                style={{
                  width: 280,
                  backgroundColor: "#cfd0d176",
                  borderRadius: 12,
                  height: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 12,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  Seu{" "}
                  <Text style={{ color: "#8A19D6" }}>
                    informe de rendimentos{" "}
                  </Text>
                  já está disponível
                </Text>
              </View>
            )}
          />
          {/* Cartao Section */}
          <View
            style={{
              borderTopWidth: 2,
              borderBottomWidth: 2,
              marginTop: 32,
              paddingVertical: 32,
              borderColor: "#cfd0d176",
            }}
          >
            <View
              style={{
                gap: 16,
                width: "75%",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Image source={require("../assets/cartao.png")} />
              <Text
                style={{ fontWeight: "bold", fontSize: 24, marginLeft: -7 }}
              >
                {" "}
                Cartão de crédito
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Peca seu cartão de crédito sem anuidade e tenha mais controle da
                sua vida financeira.
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "#8A19D6",
                  width: 139,
                  borderRadius: 100,
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Pedir Cartão
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Descubra Section */}
          <View style={{marginBottom:30}}>
            <Text style={{ marginVertical: 20,fontSize:20,fontWeight:'bold' }}>Descubra mais</Text>
            <FlatList
              style={{ borderRadius: 10,width:'100%',height:'auto'}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={descubraMais}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              renderItem={({ item }) => (
                <View key={item.id}>
                  <View style={{borderRadius: 10,width:236,height:'auto'}}>
                    <Image style={{ objectFit: "cover" }} source={item.img} />
                  </View>
                  <View
                    style={{
                      backgroundColor: "#cfd0d176",
                      gap: 15,
                      padding: 15,
                      width:236,height:'auto'
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {item.nome}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#54565776",
                      }}
                    >
                      {item.descricao}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#8A19D6",
                        width: 139,
                        borderRadius: 100,
                        padding: 20,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        Conhecer
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    backgroundColor: "#8A19D6",
    paddingTop: 50,
    paddingBottom: 24,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  child: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    borderRadius: 100,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  conteinerTextUser: {
    marginTop: 10,
  },
  textUser: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto_400Regular", // Aplicando a fonte Roboto Regular
  },
  containerConta: {
    marginVertical: 32,
  },
  containerWidgets: {
    flexDirection: "row",
    width: "100%",
  },
  widgets: {
    backgroundColor: "#cfd0d176",
    width: 73,
    height: 73,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textImageWidgets: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});
