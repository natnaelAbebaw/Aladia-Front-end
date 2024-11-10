<script setup>
import { styled, css } from "@vue-styled-components/core";
import { Icon } from "@iconify/vue";

const props = defineProps({
  isSticky: {
    type: Boolean,
    required: true,
  },
  isNotStickyCardAfterFooter: {
    type: Boolean,
    required: true,
  },
});

console.log(
  "isSticky",
  props.isSticky,
  "isNotStickyCardAfterFooter",
  props.isNotStickyCardAfterFooter
);

watch(
  () => props.isNotStickyCardAfterFooter,
  (newVal, oldVal) => {
    console.log("Prop changed from", oldVal, "to", newVal);
  }
);

const Card = styled("div", {
  isSticky: false,
  isNotStickyCardAfterFooter: false,
})`
  width: 35rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-0);
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.isSticky &&
    css`
      position: fixed;
      top: 2rem;
      right: 18rem;
      z-index: 100;
    `}

  ${(props) =>
    !props.isNotStickyCardAfterFooter &&
    css`
      position: static;
    `}
`;

const ImgBox = styled("div")`
  background-color: var(--color-grey-200);
  height: 25vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.6rem;
    font-weight: 700;
    z-index: 2;
    color: var(--color-grey-0);
  }

  .icon {
    position: absolute;
    background-color: var(--color-grey-0);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 5rem;
      color: var(--color-grey-700);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    );
    z-index: 1;
  }
`;

const StyledButton = styled("button", { active: false })`
  background-color: var(--color-grey-0);
  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1.6rem 2.4rem;
  width: 100%;
  border: none;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;
  border-bottom: 2px solid var(--color-grey-300);
  &:hover {
    background-color: var(--color-grey-100);
  }
  ${(props) =>
    props.active &&
    css`
      color: var(--color-grey-900);
      border-bottom: 2px solid var(--color-grey-900);
    `}
`;

const StyledFlex = styled("div")`
  display: flex;
  gap: ${(props) => props.gap || "1rem"};
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  .line {
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-300);
  }
`;

const Container = styled("div")`
  padding: 2rem;
`;

const StyledTab = styled("button", { active: false })`
  background-color: var(--color-grey-0);
  color: var(--color-grey-900);
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.1rem 0rem;
  border: none;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-grey-100);
  }
  ${(props) =>
    props.active &&
    css`
      color: var(--color-grey-900);
      border-bottom: 1.5px solid var(--color-primary);
    `}
`;

const Box = styled("div")`
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: 1px dashed var(--color-grey-400);
  padding: 0.8rem;
  margin-bottom: 1.6rem;
  svg {
    font-size: 2.4rem;
    color: var(--color-primary);
  }
`;

const CouponInputBox = styled("div")`
  display: flex;

  input {
    padding: 1.2rem 1.6rem;
    border: 1px solid var(--color-grey-700);
    width: 100%;
  }
`;
</script>

<template>
  <Card
    :isNotStickyCardAfterFooter="isNotStickyCardAfterFooter"
    :isSticky="isSticky"
  >
    <div v-if="!isSticky" class="other-element">
      <ImgBox>
        <span class="intro-asset--img-aspect--3gluH"
          ><img
            src="https://img-b.udemycdn.com/course/240x135/2599968_6f4d_4.jpg"
            srcset="
              https://img-b.udemycdn.com/course/240x135/2599968_6f4d_4.jpg 240w,
              https://img-b.udemycdn.com/course/480x270/2599968_6f4d_4.jpg 480w,
              https://img-b.udemycdn.com/course/750x422/2599968_6f4d_4.jpg 750w
            "
            alt=""
            style="
              background-size: cover;
              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8zgxGjERaUxaRhhcYosVFGQk2axii/NjPP/FDzxuu9mSRbZTtFiY1fC/4CtspaKSIlO2VNbNBz3oyaSebczj2f+733nO49F+yRtKIaVT5QM1k9PB7wzM7Ne5zP1NBGE63YooqhjYRCQSraxx02K970WLUqn/vX6pfihgK2WuFhRdOzwhPCwdWsZvG2cIuSii4Jnwp363JB4VtLjxX5xeJkkb8s1iPhUbA3CnuSZRwrYyWlq8LycrxqOqf83sd6iSuemZmW2CHejkGYcQJ4mGSMUQboY0jmAXrw0ysrKuT7CvlTrEiuIrPGGjrLJEmRpVvUnFSPS0yIHpeRZs3q/9++Gol+f7G6KwDVT6b51gnOLfjOm+bnoWl+H4HjES4ypfyVAxh8Fz1f0rz74N6As8uSFtuB801ofdCierQgOcTtiQS8nkDDHDRfQ91CsWe/+xzfQ2RdvuoKdvegS867F38AGNNnwvJxPYUAAAAJcEhZcwAACxMAAAsTAQCanBgAAALtSURBVHic7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Bh0SQABe+rNwwAAAABJRU5ErkJggg==');
            "
            sizes="(min-width: 1080px) 240px,
                (min-width: 43.8125rem) 600px,
                100vw"
            width="240"
            height="135"
            loading="eager"
          />
        </span>
        <div class="icon">
          <Icon icon="mdi:play" />
        </div>
        <Texts color="#000"> Preview this course </Texts>
      </ImgBox>
    </div>

    <Flex gap="0px">
      <StyledButton active="true">Personal</StyledButton>
      <StyledButton>Teams</StyledButton>
    </Flex>

    <Container>
      <Heading fw="600" fs="2.4rem" color="var(color-grey-900)">
        Subscribe to Udemy’s top courses
      </Heading>

      <Texts mb="2.4rem" color="var(--color-grey-900)">
        Get this course, plus 12,000+ of our top-rated courses, with Personal
        Plan.
        <Link fw="700" underline="true" color="var(--color-primary)">
          Learn More
        </Link>
      </Texts>

      <Button
        padding="1.6rem 2.4rem"
        bgColor="var(--color-primary-600)"
        filled="true"
        width="100%"
        mb="1.6rem"
      >
        Try Presonal Plan for free
      </Button>
      <Texts mb="1.6rem" textAlign="center" color="var(--color-grey-500)">
        Starting at $10.00 per month after trial
      </Texts>

      <Texts mb="1.6rem" textAlign="center" color="var(--color-grey-500)">
        Cancel anytime
      </Texts>

      <StyledFlex>
        <div class="line"></div>
        <Texts color="var(--color-grey-500)"> or </Texts>
        <div class="line"></div>
      </StyledFlex>

      <Texts mb="1.6rem" fs="1.8rem" fw="700" color="var(--color-grey-900)">
        $74.99
      </Texts>
      <Button
        padding="1.6rem 2.4rem"
        bgColor="var(--color-primary-600)"
        width="100%"
        mb="1.6rem"
      >
        <Texts fs="1.6rem" fw="700" color="var(--color-grey-900)">
          Add to cart
        </Texts>
      </Button>

      <Texts mb="1.6rem" textAlign="center" color="var(--color-grey-500)">
        30-Day Money-Back Guarantee
      </Texts>

      <Texts mb="1.6rem" textAlign="center" color="var(--color-grey-500)">
        Full Lifetime Access
      </Texts>

      <Flex mb="1.6rem" justifyContent="space-between">
        <StyledTab active="true"> Share </StyledTab>

        <StyledTab> Gift this course </StyledTab>
        <StyledTab> Apply coupon </StyledTab>
      </Flex>

      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <div>
            <Flex>
              <Texts
                fw="700"
                color="var(--color-grey-500)"
                textTransform="uppercase"
              >
                LETSLEARNNOW
              </Texts>
              <Texts fs="1.4rem" color="var(--color-grey-500)">
                is applied
              </Texts>
            </Flex>
            <Texts fs="1.4rem" color="var(--color-grey-500)">
              Udemy coupon
            </Texts>
          </div>
          <Icon icon="carbon:close" />
        </Flex>
      </Box>

      <CouponInputBox>
        <input type="text" placeholder="Enter coupon" />
        <Button bgColor="var(--color-grey-900)" filled="true">Apply</Button>
      </CouponInputBox>
    </Container>
  </Card>
</template>
