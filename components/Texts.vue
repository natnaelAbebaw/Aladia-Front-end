<script setup>
import { styled } from "@vue-styled-components/core";

const Text = styled("div", {
  color: "var(--color-grey-700)",
  fs: "1.4rem",
  mb: "0",
  fw: "400",
  textAlign: "start",
  textTransform: "none",
})`
  font-size: ${(props) => props.fs || "1.4rem"};
  color: ${(props) => props.color || "var(--color-grey-700)"};
  margin-bottom: ${(props) => props.mb || "0"};
  font-weight: ${(props) => props.fw || "400"};
  text-align: ${(props) => props.textAlign || "start"};
  text-transform: ${(props) => props.textTransform || "none"};
`;
defineOptions({
  ssr: false,
});
</script>

<template>
  <Text>
    <slot />
  </Text>
</template>
