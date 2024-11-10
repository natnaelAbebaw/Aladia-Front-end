<script setup>
import { styled } from "@vue-styled-components/core";

const Grid = styled("div", { columns: "1f 1fr", gap: "1rem" })`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "1fr 1fr"};
  gap: ${(props) => props.gap || "1rem"};
  column-gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

defineOptions({
  ssr: false,
});
</script>

<template>
  <Grid>
    <slot />
  </Grid>
</template>
