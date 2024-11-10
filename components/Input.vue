<script setup>
import { styled } from "@vue-styled-components/core";

const Input = styled("input").attrs({
  type: "text",
  placeholder: "Search any thing",
})`
  color: var(--color-grey-700);
  font-size: 1.4rem;
  padding: 1.2rem 2.4rem 1.2rem 4.8rem;
  width: 100%;
  border: 1px solid var(--color-grey-500);
  border-radius: 2.4rem;
  ::placeholder {
    font-size: 1.4rem;
    font-family: inhernt;
    color: var(--color-grey-500);
  }
  /* background-color: var(--color-primary); */
`;

defineOptions({
  ssr: false,
});
</script>

<template>
  <Input />
</template>
