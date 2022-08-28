import { AntDesign } from "@expo/vector-icons";
import { theme } from "@lib/theme";
import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import Svg, { Circle, G as GElement } from "react-native-svg";
import OnboardingItem from "../Item";
import { ButtonWithIcon, Container, List, NextButtonContainer } from "./styles";

interface NextButtonProps {
  percentage: number;
  scrollTo: (direction: string) => void;
}

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

const G = GElement as any;

const NextButton = ({ percentage, scrollTo }: NextButtonProps) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, [percentage]);

  return (
    <NextButtonContainer>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke="#aaa"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={theme.colors.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 30) / 100}
          />
        </G>
      </Svg>
      <ButtonWithIcon onPress={() => scrollTo("next")}>
        <AntDesign name="arrowright" size={24} color="white" />
      </ButtonWithIcon>
    </NextButtonContainer>
  );
};

const OnboardingList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = (direction: string) => {
    if (direction === "next") {
      if (currentIndex < slides.length - 1) {
        slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
      }
    } else {
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <Container>
      <List
        data={slides}
        renderItem={({ item }) => <OnboardingItem data={item} />}
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

      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </Container>
  );
};

export default OnboardingList;
