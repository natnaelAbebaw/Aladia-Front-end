<script setup>
import { styled } from "@vue-styled-components/core";
import Link from "./Link.vue";

const Footer = styled("footer", {})`
  background-color: var(--color-grey-900);
  width: 100%;
  height: 40rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const FootBox = styled("div", {})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 3rem;
  border-bottom: 1px solid var(--color-grey-300);
`;
</script>

<template>
  <Footer>
    <!-- sdsds -->
    <FootBox>
      <Heading fs="2rem" color="var(--color-grey-0)">
        Top companies choose Udemy Business to build in-demand career skills.
      </Heading>
      <Flex gap="4rem" alignItems="center" justifyContent="space-between">
        <Box bg="var(--color-grey-900)" width="10rem" height="5rem">
          <img
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            alt="Nasdaq"
            loading="lazy"
          />
        </Box>

        <Box bg="var(--color-grey-900)" width="4rem" height="5rem">
          <img
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
            alt="Volkswagen"
          />
        </Box>

        <Box bg="var(--color-grey-900)" width="5rem" height="5rem">
          <img
            src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
            alt="Box"
            loading="lazy"
          />
        </Box>

        <Box bg="var(--color-grey-900)" width="10rem" height="5rem">
          <img
            src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
            alt="NetApp"
            loading="lazy"
          />
        </Box>

        <Box bg="var(--color-grey-900)" width="10rem" height="5rem">
          <img
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
            alt="Eventbrite"
            height="38"
          />
        </Box>
      </Flex>
    </FootBox>

    <Box bg="var(--color-grey-900)" padding="3rem 4rem">
      <heading mb="3.2rem" fs="2rem">
        Explore top skills and certifications
      </heading>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Box bg="var(--color-grey-900)" v-for="n in 4" :key="4">
          <heading mb="1.6rem" fs="1.6rem"> Certifications by Issuer </heading>
          <Flex gap="0.5rem" direction="column">
            <Link color="var(--color-grey-0)">
              Amazon Web (AWS) Certifications
            </Link>
            <Link color="var(--color-grey-0)"> Six Sigma Certifications </Link>
            <Link color="var(--color-grey-0)"> Microsoft Certifications </Link>
            <Link color="var(--color-grey-0)"> Cisco Certifications </Link>
            <Link color="var(--color-grey-0)"> Six Sigma Certifications </Link>
            <Link color="var(--color-grey-0)"> Six Sigma Certifications </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>

    <Box bg="var(--color-grey-900)" padding="3rem 4rem">
      <heading mb="3.2rem" fs="2rem">
        Explore top skills and certifications
      </heading>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Box bg="var(--color-grey-900)" v-for="n in 4" :key="4">
          <heading mb="1.6rem" fs="1.6rem"> Certifications by Issuer </heading>
          <Flex gap="0.5rem" direction="column">
            <Link color="var(--color-grey-0)">
              Amazon Web (AWS) Certifications
            </Link>
            <Link color="var(--color-grey-0)"> Six Sigma Certifications </Link>
            <Link color="var(--color-grey-0)"> Microsoft Certifications </Link>
            <Link color="var(--color-grey-0)"> Cisco Certifications </Link>
            <Link color="var(--color-grey-0)"> Six Sigma Certifications </Link>
            <Link color="var(--color-grey-0)"> Six Sigma Certifications </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
    <Box> </Box>
  </Footer>
</template>
