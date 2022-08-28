import { useRef, useState } from "react";
import { Animated } from "react-native";
import OnboardingItem from "../Item";
import { Container, List } from "./styles";

const slides = [
  {
    id: "1",
    title: "Todos os dados na palma da sua mão",
    description:
      "Pesquise o CEP de um lugar e tenha acesso a dados como estado, cidade, bairro, rua e DDD",
    gif: require("@assets/gifs/search.gif"),
  },
  {
    id: "2",
    title: "Tudo no seu controle",
    description: "Salve localmente todos os CEPs que encontrar",
    gif: require("@assets/gifs/storage.gif"),
  },
  {
    id: "3",
    title: "Rápido e prático",
    description: "Veja o mapa do local de forma fácil e rápida",
    gif: require("@assets/gifs/map.gif"),
  },
];

const OnboardingList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <Container>
      <List
        data={slides}
        renderItem={({ item }) => (
          <OnboardingItem data={item} paginator={currentIndex} />
        )}
        keyExtractor={(item: { id: string }) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </Container>
  );
};

export default OnboardingList;
