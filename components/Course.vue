<script setup>
import { styled } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";
import Link from "./Link.vue";

const props = defineProps({
  course: {
    type: Object,
    default: () => ({}),
  },
  isAllExpanded: {
    type: Boolean,
    default: false,
  },
});

defineOptions({
  ssr: false,
});

const Course = styled("div", {})`
  cursor: pointer;
  svg {
    font-size: 2.4rem;
    transform: translateY(0.2rem);
  }
`;

const MoveRight = styled("div")`
  margin-left: auto;
`;

const IconBox = styled("div", { isExpanded: false })`
  transition: transform 0.3s;
  ${(props) => props.isExpanded && "transform: rotate(180deg)"};
`;

const isExpanded = ref(false);

watch(
  () => props.isAllExpanded,
  (newVal) => {
    isExpanded.value = props.isAllExpanded;
  }
);

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <Course>
    <div @click="toggleExpand">
      <Box
        padding="1.4rem 3rem"
        borderColor="var(--color-grey-300)"
        bg="var(--color-grey-50)"
        b="1px"
      >
        <Flex alignItems="center">
          <IconBox :isExpanded="isExpanded">
            <Icon icon="lsicon:down-filled" />
          </IconBox>

          <Heading fs="1.8rem" color="var(--color-grey-700)">
            {{ course.title }}
          </Heading>
          <MoveRight>
            <Texts>
              <span fs="1.6rem" color="var(--color-grey-500)">
                {{ course.lectures.length }} lectures
              </span>
              <span>&centerdot;</span>
              <span fs="1.6rem" color="var(--color-grey-500)">
                {{ course.time }}
              </span>
            </Texts>
          </MoveRight>
        </Flex>
      </Box>
    </div>

    <div v-if="isExpanded">
      <Lectures :lectures="course.lectures" />
    </div>
  </Course>
</template>
