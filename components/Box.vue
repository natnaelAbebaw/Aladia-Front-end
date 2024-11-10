<script setup>
import { styled, css } from "@vue-styled-components/core";

const Box = styled("div", {
  gap: "1rem",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "0",
  margin: "0",
  mb: "0",
  b: "",
  bg: "var(--color-grey-0)",
  width: "auto",
  height: "auto",
  borderColor: "var(--color-grey-500)",
  borderRadius: "0",
})`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  gap: ${(props) => props.gap || "1rem"};
  background-color: ${(props) => props.bg || "var(--color-grey-0)"};
  svg {
    font-size: 1.6rem;
    transform: translateY(0.2rem);
  }
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "0"};
  ${(props) =>
    props.b &&
    css`
      border: ${props.b} solid
        ${(props) => props.borderColor || "var(--color-grey-500)"};
    `};
`;
defineOptions({
  ssr: false,
});
</script>

<template>
  <Box>
    <slot />
  </Box>
</template>
