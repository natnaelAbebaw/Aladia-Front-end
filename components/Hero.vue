<script setup>
import { styled } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";
import Link from "./Link.vue";
import Heading from "./Heading.vue";
import Texts from "./Texts.vue";
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  isNotStickyCardAfterFooter: {
    type: Boolean,
    required: true,
  },
});

// console.log("isNotStickyCardAfterFooter---", props.isNotStickyCardAfterFooter);
// watch(
//   () => props.isNotStickyCardAfterFooter,
//   (newVal, oldVal) => {
//     console.log("Prop changed from", oldVal, "to", newVal);
//   }
// );

const Hero = styled("div")`
  background-color: var(--color-grey-900);
  width: 100%;
  height: 50vh;
  color: #fff;
`;
console.log(
  "isSticky",
  props.isSticky,
  "isNotStickyCardAfterFooter",
  props.isNotStickyCardAfterFooter
);

const Container = styled("div")`
  padding: 3rem 3rem 4rem 3rem;
  max-width: 118.4rem;
  margin: 0 auto;
`;
const stars = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    font-size: 1.6rem;
    color: #f69c08;
    margin-bottom: 0.4rem;
  }
`;

const Icons = styled(Icon, { color: "#f69c08" })`
  font-size: 1.6rem;
  color: ${(props) => props.color || "#f69c08"};
  margin-bottom: 0.4rem;
`;

const isSticky = ref(false);
const card = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = !entry.isIntersecting;
      console.log("entry.isIntersecting", entry.isIntersecting);
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  console.log(card.value);

  if (card.value) observer.observe(card.value);

  onUnmounted(() => {
    if (card.value) observer.unobserve(card.value);
  });
});
</script>

<template>
  <Hero>
    <div ref="card">
      <Container>
        <Grid columns="2fr 1fr">
          <div>
            <Flex mb="2.4rem">
              <Link color="var(--color-primary-100)">IT & Software </Link>
              <span><Icon icon="lsicon:right-filled" /></span>
              <Link color="var(--color-primary-100)">IT & Certification</Link>
              <span><Icon icon="lsicon:right-filled" /></span>
              <Link color="var(--color-primary-100)">
                AWS Certified Solutions Architect - Associate
              </Link>
            </Flex>

            <Heading mb="2.4rem" fs="3.6rem">
              NEW AWS Certified Solutions Architect - Associate
            </Heading>
            <Texts color="var(--color-grey-0)" mb="1.8rem" fs="1.8rem">
              Want to pass the NEW AWS Solutions Architect - Associate Exam?
              (SAA-C03) In-depth AWS Architectures. Take this course
            </Texts>

            <Flex mb="1.8rem" gap="0.5rem" alignItems="center">
              <Heading color="#f69c08"> 4.4 </Heading>
              <stars v-for="n in 4" :key="n"
                ><Icon icon="material-symbols:star"
              /></stars>

              <Icons icon="material-symbols:star-half" />
              <div></div>
              <Link underline="true" color="var(--color-primary-100)">
                (2,702 ratings)
              </Link>
              <Texts color="var(--color-grey-0)">58,532 students</Texts>
            </Flex>
            <Flex mb="1.8rem">
              <Texts color="var(--color-grey-0)"> Created by </Texts>
              <Link underline="true" color="var(--color-primary-100)">
                Syed Raza,</Link
              >
              <Link underline="true" color="var(--color-primary-100)"
                >Syed Raza,</Link
              >
              <Link underline="true" color="var(--color-primary-100)">
                Syed Raza,
              </Link>
              <Link underline="true" color="var(--color-primary-100)">
                Syed Raza,
              </Link>
              <Link underline="true" color="var(--color-primary-100)">
                Syed Raza
              </Link>
            </Flex>
            <Flex gap="0.5rem" alignItems="center">
              <Icons color="#fff" icon="f7:exclamationmark-octagon-fill" />
              <Texts color="var(--color-grey-0)"> Last updated 2/2024 </Texts>
              <Icons color="#fff" icon="tabler:world" />

              <Texts color="var(--color-grey-0)"> English </Texts>
              <Icons color="#fff" icon="octicon:note-24" />
              <Texts color="var(--color-grey-0)">
                English [Auto], French [Auto] ,</Texts
              >
              <Link underline="true" color="var(--color-primary-100)"
                >6 more</Link
              >
            </Flex>
          </div>
          <Card
            :isNotStickyCardAfterFooter="isNotStickyCardAfterFooter"
            :isSticky="isSticky"
          />
        </Grid>
      </Container>
    </div>
  </Hero>
</template>
