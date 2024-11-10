<script setup>
import { styled } from "@vue-styled-components/core";
import Link from "./Link.vue";
import { Icon } from "@iconify/vue";
import Course from "./Courses.vue";
import Texts from "./Texts.vue";
import Heading from "./Heading.vue";
import Flex from "./Flex.vue";

const Main = styled("div", {})`
  padding: 3rem 14rem;
`;
const Container = styled("div", {})`
  width: 75rem;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    font-size: 2.4rem;
    color: var(--color-grey-900);
    margin-bottom: 0.4rem;
  }
`;

const ContainerBox = styled("div", {})`
  width: 100%;
  border: 1px solid var(--color-grey-500);
`;

const FlexBase = styled("div", {})`
  flex-basis: 30rem;
`;

const IconBox = styled("div", {})`
  svg {
    font-size: 1.8rem !important;
  }
`;

const Center = styled("div", {})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 7rem;
  border: 1px solid var(--color-grey-500);
  border-radius: 50%;
`;

const Containers = styled("div", {})`
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-grey-200);
`;

const Iconx = styled(Icon, { color: "#f69c08" })`
  font-size: 1.6rem !important;
  color: ${(props) => props.color || "#f69c08"} !important;
  margin-bottom: 0 !important;
`;
const Icony = styled(Icon, { color: "#f69c08" })`
  font-size: 1.6rem !important;
  color: ${(props) => props.color || "#f69c08"} !important;
  margin-bottom: 0.2rem !important;
`;
defineOptions({
  ssr: false,
});
</script>

<template>
  <Main>
    <Container>
      <Box mb="2.4rem" b="1px" borderColor="var(--color-grey-200)">
        <Box padding="1.6rem 2rem" bg="var(--color-grey-50)">
          <Flex alignItems="center">
            <Heading fs="1.8rem" color="var(--color-grey-700);">
              Prepare for your certification with this course.
            </Heading>
            <Link
              underline="true"
              fs="1.8rem"
              fw="700"
              color="var(--color-primary)"
            >
              Learn more
            </Link>
          </Flex>
        </Box>
        <Box padding="1.6rem 2.4rem">
          <Flex alignItems="center">
            <Box width="7rem" height="7rem">
              <img
                class="certification-carousel-module--carousel-certificate-image--7iXEa"
                alt="AWS Certified Solutions Architect – Associate"
                src="https://img-c.udemycdn.com/open-badges/v2/badge-class/1641170563/image8965422010918071331.png"
                loading="lazy"
              />
            </Box>
            <div>
              <Link
                mb="0.5rem"
                fs="1.8rem"
                fw="700"
                color="var(--color-primary)"
              >
                AWS Certified solution Architect - Associate</Link
              >
              <Texts fs="1.4rem" color="var(--color-grey-700)">
                Issued by Amazon Web Services Training and Certification
              </Texts>
            </div>
          </Flex>
        </Box>
      </Box>

      <Box
        mb="2.4rem"
        padding="3rem 2.4rem"
        b="1px"
        borderColor="var(--color-grey-200)"
      >
        <Heading mb="2.4rem" fs="2.4rem" color="var(--color-grey-900);">
          What you'll learn
        </Heading>
        <Grid columns="1fr 1fr">
          <div v-for="n in 6" :key="n">
            <Flex>
              <Icon icon="fluent-mdl2:check-mark" />
              <Texts fs="1.6rem" color="var(--color-grey-700)">
                Learn the core AWS services, uses, and basic architecture.
              </Texts>
            </Flex>
          </div>
        </Grid>
      </Box>

      <Box mb="3.2rem">
        <Heading mb="2.4rem" fs="2.4rem" color="var(--color-grey-900);"
          >Explore related topics
        </Heading>

        <Flex>
          <Box
            borderColor="var(--color-grey-900)"
            borderRadius="2rem"
            padding="1.2rem 1.8rem"
            b="1px"
          >
            <Texts fs="1.6rem" fw="700" color="var(--color-grey-900)"
              >AWS Certified solution Architect - Associate
            </Texts>
          </Box>

          <Box
            borderColor="var(--color-grey-900)"
            borderRadius="2rem"
            padding="1.2rem 1.8rem"
            b="1px"
          >
            <Texts fs="1.6rem" fw="700" color="var(--color-grey-900)"
              >IT certifications
            </Texts>
          </Box>
          <Box
            borderColor="var(--color-grey-900)"
            borderRadius="2rem"
            padding="1.2rem 1.8rem"
            b="1px"
          >
            <Texts fs="1.6rem" fw="700" color="var(--color-grey-900)"
              >IT & Software
            </Texts>
          </Box>
        </Flex>
      </Box>

      <Box mb="3.2rem">
        <Heading mb="2.4rem" fs="2.4rem" color="var(--color-grey-900);">
          This course includes:
        </Heading>
        <Grid columns="1fr 1fr">
          <Flex alignItems="center">
            <Icon icon="ic:baseline-live-tv" />
            <Texts fs="1.6rem" color="var(--color-grey-700)">
              13 hours on-demand video
            </Texts>
          </Flex>
          <Flex alignItems="center">
            <!-- <Icon icon="fluent-mdl2:check-mark" /> -->
            <Icon icon="lineicons:phone" />
            <Texts fs="1.6rem" color="var(--color-grey-700)">
              Access on mobile and TV
            </Texts>
          </Flex>
          <Flex alignItems="center">
            <Icon icon="fe:file" />
            <Texts fs="1.6rem" color="var(--color-grey-700)">
              13 articles
            </Texts>
          </Flex>
          <Flex alignItems="center">
            <Icon icon="circum:medal" />
            <Texts fs="1.6rem" color="var(--color-grey-700)">
              Certificate of completion
            </Texts>
          </Flex>
          <Flex alignItems="center">
            <Icon icon="lucide:download" />
            <Texts fs="1.6rem" color="var(--color-grey-700)">
              4 downloadable resources
            </Texts>
          </Flex>
        </Grid>
      </Box>

      <Box
        mb="3.2rem"
        padding="1.2rem 1.8rem"
        b="1px"
        borderColor="var(--color-grey-200)"
      >
        <Heading mb="1rem" fs="1.8rem" color="var(--color-grey-900);"
          >Top companies offer this course to their employees
        </Heading>

        <Texts>
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide.
          <Link underline="true" color="var--color-primary"> Learn more </Link>

          <Flex alignItems="center" justifyContent="space-between">
            <Box width="10rem" height="10rem">
              <img
                src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
                alt="Nasdaq"
                loading="lazy"
              />
            </Box>

            <Box width="4rem" height="4rem">
              <img
                src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
                alt="Volkswagen"
                height="38"
                width="44"
                loading="lazy"
              />
            </Box>

            <Box width="5rem" height="4rem">
              <img
                src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
                alt="Box"
                height="38"
                width="67"
                loading="lazy"
              />
            </Box>

            <Box width="10rem" height="10rem">
              <img
                src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
                alt="NetApp"
                height="38"
                width="115"
                loading="lazy"
              />
            </Box>

            <Box width="10rem" height="10rem">
              <img
                src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
                alt="Eventbrite"
                height="38"
                width="115"
                loading="lazy"
              />
            </Box>
          </Flex>
        </Texts>
      </Box>
      <Box mb="3.2rem">
        <Courses />
      </Box>

      <Box mb="6.4rem">
        <Heading fs="2.4rem" color="var(--color-grey-900)">
          Students also bought
        </Heading>

        <Box gap="4rem">
          <Box v-for="n in 10" :key="n">
            <Containers>
              <Flex
                gap="4rem"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Flex gap="1rem">
                  <Box width="7rem" height="7rem">
                    <img
                      src="https://img-b.udemycdn.com/course/50x50/1236626_b910_5.jpg"
                      srcset="
                        https://img-b.udemycdn.com/course/50x50/1236626_b910_5.jpg   1x,
                        https://img-b.udemycdn.com/course/100x100/1236626_b910_5.jpg 2x
                      "
                      alt=""
                      width="64"
                      height="64"
                      class="course-comparison-module--course-image--uMGqi"
                      loading="lazy"
                    />
                  </Box>
                  <FlexBase>
                    <Heading
                      mb="1rem"
                      fs="1.8rem"
                      color="var(--color-grey-900)"
                    >
                      AWS Certified Solutions Architect - Associate exam-SAA-C03
                    </Heading>

                    <Flex align-items="center">
                      <Link fs="1.6rem" fw="700" color="rgb(30, 96, 85)"
                        >26.5 total hours</Link
                      >
                      <Texts fs="1.6rem"> &centerdot; </Texts>
                      <Texts fs="1.6rem">Updated 6/2021</Texts>
                    </Flex>
                  </FlexBase>
                </Flex>
                <Flex align-items="center">
                  <Texts fs="1.6rem" fw="700" color="#4d3105"> 4.6 </Texts>
                  <IconBox>
                    <Icon color="#b4690e" icon="material-symbols:star" />
                  </IconBox>
                </Flex>

                <Flex align-items="center">
                  <IconBox>
                    <Icon icon="f7:person-2-fill" />
                  </IconBox>
                  <Texts color="var(--color-grey-900)"> 25,551 </Texts>
                </Flex>

                <Texts fw="900" fs="1.6rem" color="var(--color-grey-900)"
                  >$77.99</Texts
                >

                <Center>
                  <Icon icon="mdi-light:heart" />
                </Center>
              </Flex>
            </Containers>
          </Box>
        </Box>
        <Button width="100%"> show more </Button>
      </Box>
      <div v-for="n in 4" :key="n">
        <Box mb="3.2rem">
          <Heading mb="2.4rem" fs="2.4rem" color="var(--color-grey-900)">
            More Courses by
            <Link fs="2.4rem" fw="700" color="var(--color-primary)"
              >Syed Raza</Link
            >
          </Heading>
          <Flex justifyContent="space-between">
            <div v-for="n in 3" :key="n">
              <Box width="23rem">
                <Box mb="1.2rem" width="23rem" height="15rem">
                  <img
                    src="https://img-b.udemycdn.com/course/240x135/1256694_18e1_4.jpg"
                    alt=""
                    srcset="
                      https://img-b.udemycdn.com/course/240x135/1256694_18e1_4.jpg 1x,
                      https://img-b.udemycdn.com/course/480x270/1256694_18e1_4.jpg 2x
                    "
                  />
                </Box>
                <Heading mb="0.8rem" fs="1.6rem" color="var(--color-grey-900)">
                  IT Networking Fundamentals For Complete Beginners
                </Heading>

                <Texts mb="0.8rem">Ali Bokhari, Syed Raza, ClayDesk... </Texts>

                <Flex mb="0.8rem" gap="0.5rem" alignItems="center">
                  <Heading color="#f69c08"> 4.4 </Heading>
                  <stars v-for="n in 4" :key="n"
                    ><Iconx icon="material-symbols:star"
                  /></stars>

                  <Icony icon="material-symbols:star-half" />

                  <Link color="var(--color-grey-500)"> (2,702) </Link>
                </Flex>

                <Texts mb="0.8rem"
                  >3 total hours &centerdot; 25 lectures &centerdot; All levels
                </Texts>

                <Texts color="var(--color-grey-900)" fs="1.8rem" fw="900"
                  >$77.99
                </Texts>
              </Box>
            </div>
          </Flex>
        </Box>
      </div>
      <Button width="100%"> Report abuse </Button>
    </Container>
  </Main>
</template>
