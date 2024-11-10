<script setup>
import { styled, css } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";
import Link from "./Link.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
const props = defineProps({
  isStickyTopBar: {
    type: Boolean,
    required: true,
  },
});

watch(
  () => props.isStickyTopBar,
  (newVal, oldVal) => {
    console.log("Prop changed from", oldVal, "to", newVal);
  }
);

const StyledMiddleLinksBar = styled("div")`
  width: 100%;
  padding: 1.6rem 2rem;
  text-align: center;
  position: relative;
  z-index: 3;
  background-color: var(--color-grey-0);
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

const InputBox = styled("div")`
  flex-grow: 1;
  position: relative;

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: var(--color-grey-500);
  }
`;

const StyledStickyTopBar = styled("div", { isStickyTopBar: false })`
  background-color: var(--color-grey-900);
  padding: 1rem 2rem;
  position: absolute;
  width: 100%;
  top: 0;

  svg {
    margin-bottom: 0.4rem;
  }

  ${(props) =>
    props.isStickyTopBar &&
    css`
      position: fixed;
      top: 0;
      z-index: 2;
    `}
`;

const Container = styled("div")`
  position: relative;
`;
</script>

<template>
  <Container>
    <StyledMiddleLinksBar>
      <nav>
        <a href="#">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
            width="91"
            height="34"
            loading="lazy"
          />
        </a>
        <Link>Categories</Link>

        <InputBox>
          <Input />
          <Icon icon="fluent:search-16-filled" />
        </InputBox>
        <Link>Udemy Business</Link>

        <Link>Teach on udemy</Link>
        <Link><Icon icon="mdi:cart-outline" /></Link>
        <Button>Log in</Button>
        <Button filled="true" bgColor="var(--color-grey-900)">Sign up</Button>

        <Button padding="0.7rem"><Icon icon="tabler:world" /></Button>
      </nav>
    </StyledMiddleLinksBar>

    <StyledStickyTopBar :isStickyTopBar="isStickyTopBar">
      <Heading mb="0.8rem" fw="700" fs="1.8rem">
        NEW AWS Certified Solutions Architect - Associate
      </Heading>
      <Flex gap="0.5rem" alignItems="center">
        <Heading color="#f69c08"> 4.4 </Heading>
        <Icon color="#f69c08" icon="material-symbols:star" />
        <div></div>
        <Link underline="true" color="var(--color-primary-100)">
          (2,702 ratings)
        </Link>
        <Texts color="var(--color-grey-0)">58,532 students</Texts>
      </Flex>
    </StyledStickyTopBar>
  </Container>
</template>
