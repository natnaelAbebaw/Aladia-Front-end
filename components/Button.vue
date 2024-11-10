<script setup lang="ts">
import { css, styled } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";

const Button = styled("button", {
  filled: false,
  bgColor: "var(--color-primary)",
  padding: "1.2rem 2.4rem",
  width: "auto",
  mb: "0",
})`
  color: var(--color-grey-700);
  font-size: 1.4rem;
  padding: ${(props) => props.padding || "1.2rem 2.4rem"};
  border: none;
  width: ${(props) => props.width || "auto"};
  font-weight: 700;
  margin-bottom: ${(props) => props.mb || "0"};

  svg {
    font-size: 2.4rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.filled
      ? css`
          background-color: ${props.bgColor};
          color: #fff;
        `
      : css`
          background-color: transparent;
          border: 1px solid var(--color-grey-500);
        `}
`;
defineOptions({
  ssr: false,
});
</script>

<template>
  <Button>
    <slot />
  </Button>
</template>
