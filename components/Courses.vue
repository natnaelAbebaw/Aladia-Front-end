<script setup>
import { styled } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";
import Link from "./Link.vue";

const Courses = styled("div", {})`
  svg {
    font-size: 2.4rem;
    transform: translateY(0.2rem);
  }
`;

const courses = [
  {
    title: "Vue 3 for Everyone",
    time: "2 min",
    lectures: [
      {
        title: "Introduction",
        type: "video",
        duration: "5:00",
        description: "Learn Vue 3 from scratch",
      },
      {
        title: "Installation",
        type: "video",
        duration: "10:00",
        description: "Install Vue 3",
      },
      {
        title: "First App",
        type: "file",
        duration: "15:00",
        description: "Create your first Vue 3 app",
      },
      {
        title: "Components",
        type: "video",
        duration: "20:00",
        description: "Learn about Vue 3 components",
      },
      {
        title: "Props object",
        type: "video",
        duration: "25:00",
        description: "Learn about Vue 3 props",
      },
      {
        title: "Slots",
        type: "file",
        duration: "30:00",
        description: "Learn about Vue 3 slots",
      },
      {
        title: "Composition API",
        type: "file",
        duration: "35:00",
        description: "Learn about Vue 3 composition API",
      },
      {
        title: "Props",
        type: "video",
        duration: "25:00",
        description: "Learn about Vue 3 props",
      },
    ],
  },

  {
    title: "React 17 for Everyone",
    time: "2 min",
    lectures: [
      {
        title: "Introduction",
        type: "video",
        duration: "5:00",
        description: "Learn React 17 from scratch",
      },
      {
        title: "Installation",
        type: "video",
        duration: "10:00",
        description: "Install React 17",
      },
      {
        title: "First App",
        type: "file",
        duration: "15:00",
        description: "Create your first React 17 app",
      },
      {
        title: "Components",
        type: "video",
        duration: "20:00",
        description: "Create your first React 17 app",
      },
      {
        title: "Props",
        type: "video",
        duration: "25:00",
        description: "Create your first React 17 app",
      },
      {
        title: "Composition API",
        type: "file",
        duration: "35:00",
        description: "Create your first React 17 app",
      },
    ],
  },

  {
    title: "Angular 12 for Everyone",
    time: "2 min",
    lectures: [
      {
        title: "Introduction",
        type: "video",
        duration: "5:00",
        description: "Learn Angular 12 from scratch",
      },
      {
        title: "Installation",
        type: "video",
        duration: "10:00",
        description: "Create your first React 17 app",
      },
      {
        title: "First App",
        type: "file",
        duration: "15:00",
        description: "Create your first React 17 app",
      },
      {
        title: "Components",
        type: "video",
        duration: "20:00",
        description: "Create your first React 17 app",
      },
      {
        title: "Composition API",
        type: "file",
        duration: "35:00",
        description: "Create your first React 17 app",
      },
    ],
  },

  {
    title: "Svelte 3 for Everyone",
    time: "2 min",
    lectures: [
      {
        title: "Introduction",
        type: "video",
        duration: "5:00",
        description: "Learn Svelte 3 from scratch",
      },
      {
        title: "Installation",
        type: "video",
        duration: "10:00",
        description: "Create your first Svelte 3 app",
      },
      {
        title: "First App",
        type: "file",
        duration: "15:00",
        description: "Create your first Svelte 3 app",
      },
      {
        title: "Components",
        type: "video",
        duration: "20:00",
        description: "Create your first Svelte 3 app",
      },
      {
        title: "Props",
        type: "video",
        duration: "25:00",
        description: "Create your first Svelte 3 app",
      },
      {
        title: "Slots",
        type: "file",
        duration: "30:00",
        description: "Create your first Svelte 3 app",
      },
      {
        title: "Composition API",
        type: "file",
        duration: "35:00",
        description: "Create your first Svelte 3 app",
      },
    ],
  },

  {
    title: "Node.js for Everyone",
    time: "2 min",
    lectures: [
      {
        title: "Introduction",
        type: "video",
        duration: "5:00",
        description: "Learn Node.js from scratch",
      },
      {
        title: "Installation",
        type: "video",
        duration: "10:00",
        description: "Create your first Node.js app",
      },
      {
        title: "First App",
        type: "file",
        duration: "15:00",
        description: "Create your first Node.js app",
      },
      {
        title: "Components",
        type: "video",
        duration: "20:00",
        description: "Create your first Node.js app",
      },
      {
        title: "Props",
        type: "video",
        duration: "25:00",
        description: "Create your first Node.js app",
      },
      {
        title: "Slots",
        type: "file",
        duration: "30:00",
        description: "Create your first Node.js app",
      },
      {
        title: "Composition API",
        type: "file",
        duration: "35:00",
        description: "Create your first Node.js app",
      },
    ],
  },
];

const MoveRight = styled("div")`
  margin-left: auto;
`;
const StyleButton = styled("button", {})`
  background: none;
  border: none;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.6rem;
  cursor: pointer;
`;

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

const isAllExpanded = ref(false);

function toggleExpand() {
  isAllExpanded.value = !isAllExpanded.value;
}
</script>

<template>
  <Box>
    <Heading mb="2.4rem" fs="2.4rem" color="var(--color-grey-900);"
      >Course content
    </Heading>

    <Flex mb="1.6rem" justifyContent="space-between">
      <Texts>28 sections • 124 lectures • 13h 19m total length</Texts>

      <div @click="toggleExpand">
        <StyleButton>{{
          !isAllExpanded ? "Expand all sections" : "Collapse all sections"
        }}</StyleButton>
      </div>
    </Flex>
    <Courses>
      <Box v-for="course in courses" :key="course.title">
        <Course :course="course" :isAllExpanded="isAllExpanded" />
      </Box>
    </Courses>
  </Box>
</template>
