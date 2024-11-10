<script setup>
import { styled } from "@vue-styled-components/core";

const Flex = styled("div", {
  gap: "1rem",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "0",
  margin: "0",
  mb: "0",
  direction: "row",
  flexWrap: "nowrap",
})`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap || "1rem"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  svg {
    font-size: 1.6rem;
    transform: translateY(0.2rem);
  }
`;
</script>

<template>
  <Flex>
    <slot />
  </Flex>
</template>
