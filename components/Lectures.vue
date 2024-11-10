<script setup>
import { styled } from "@vue-styled-components/core";

// import Lecture from "./Lecture.vue";

const props = defineProps({
  lectures: {
    type: Array,
    default: () => [],
  },
});

const Lectures = styled("div", {})`
  svg {
    font-size: 2.4rem;
    transform: translateY(0.2rem);
  }
`;

const MoveRight = styled("div")`
  margin-left: auto;
`;

defineOptions({
  ssr: false,
});
console.log("lectures", props.lectures);

const IconBox = styled("div")`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-200);
  svg {
    font-size: 2.4rem;
    transform: translateY(0.2rem);
  }
`;
</script>

<template>
  <Lectures>
    <Box padding="1.4rem 3rem" borderColor="var(--color-grey-300)" b="1px">
      <div v-for="lecture in lectures" :key="lecture.title">
        <Lecture :lecture="lecture" />
      </div>
    </Box>
  </Lectures>
</template>
