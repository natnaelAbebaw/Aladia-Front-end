<script setup>
import { styled } from "@vue-styled-components/core";

const Link = styled("a", {
  color: "var(--color-grey-700)",
  underline: false,
  fw: "400",
  fs: "1.4rem",
  mb: "0",
}).attrs({ href: "#" })`
  color: ${(props) => props.color || "var(--color-grey-700)"};
  font-size: 1.4rem;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  ${(props) => props.underline && "text-decoration: underline"};
  font-weight: ${(props) => props.fw || "400"};
  font-size: ${(props) => props.fs || "1.4rem"};
  margin-bottom: ${(props) => props.mb || "0"};
  svg {
    font-size: 2.4rem;
    transform: translateY(0.3rem);
  }
`;

defineOptions({
  ssr: false,
});
</script>

<template>
  <Link>
    <slot />
  </Link>
</template>
