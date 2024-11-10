<script setup>
import { styled, css } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";
import Link from "./Link.vue";

const props = defineProps({
  lecture: {
    type: Object,
    default: () => ({}),
  },
});

const Lecture = styled("div", {})`
  svg {
    font-size: 2.4rem;
    transform: translateY(0.2rem);
  }
`;

const MoveRight = styled("div")`
  margin-left: auto;
`;

const IconBox = styled("div", { isExpanded: false })`
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

  ${(props) =>
    props.isExpanded &&
    css`
      transform: rotate(180deg);
    `};
`;

const isExpanded = ref(false);

function toggleExpand() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <Lecture>
    <Box padding="0.5rem 0">
      <Flex gap="2rem" alignItems="center">
        <div v-if="lecture.type === 'video'">
          <Icon icon="material-symbols-light:live-tv-outline-rounded" />
        </div>
        <div v-else>
          <Icon icon="iconamoon:file-light" />
        </div>

        <div v-if="lecture.type === 'video'">
          <Link underline="true" fs="1.6rem" color="var(--color-primary)">
            {{ lecture.title }}
          </Link>
        </div>
        <div v-else>
          <Texts fs="1.6rem" color="var(--color-grey-700)">
            {{ lecture.title }}
          </Texts>
        </div>

        <IconBox :isExpanded="isExpanded" @click="toggleExpand">
          <Icon icon="lsicon:down-filled"
        /></IconBox>
        <MoveRight>
          <Flex gap="2rem" alignItems="center">
            <div v-if="lecture.type === 'video'">
              <Link underline="true" fs="1.6rem" color="var(--color-primary)">
                Preview
              </Link>
            </div>

            <Texts> {{ lecture.duration }} </Texts>
          </Flex>
        </MoveRight>
      </Flex>
    </Box>

    <Box v-if="isExpanded" padding="0.5rem 4.2rem">
      <Texts color="var(--color-grey-600)">
        {{ lecture.description }}
      </Texts>
    </Box>
  </Lecture>
</template>
