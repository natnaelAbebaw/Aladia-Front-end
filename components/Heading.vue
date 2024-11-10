<script setup>
import { styled } from "@vue-styled-components/core";

const Heading = styled("h2", {
  fs: "1.4rem",
  fw: 700,
  color: "var(--color-grey-0)",
  mb: "0",
})`
  color: ${(props) => props.color || "var(--color-grey-0)"};
  font-size: ${(props) => props.fs || "1.4rem"};
  font-weight: ${(props) => props.fw || 700};
  margin-bottom: ${(props) => props.mb || "0"};
`;
</script>

<template>
  <Heading>
    <slot />
  </Heading>
</template>
