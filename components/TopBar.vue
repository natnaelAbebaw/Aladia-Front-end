<script setup lang="ts">
import { styled } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";

const StyledTopBar = styled("div")`
  width: 100%;
  padding: 1.6rem;
  text-align: center;
  background-color: var(--color-primary);
  position: relative;

  span {
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 1rem;

    h2 {
      font-size: 1.6rem;
      color: #fff;
    }

    span {
      color: #fff;
      font-size: 1.6rem;
    }
  }

  svg {
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
`;
defineOptions({
  ssr: false,
});
</script>

<template>
  <StyledTopBar>
    <span>
      <h2>Ready to get with the time?</h2>
      <span>|</span>
      <span>Get the skills with Udemy Business.</span>
    </span>
    <Icon icon="carbon:close" />
  </StyledTopBar>
</template>
