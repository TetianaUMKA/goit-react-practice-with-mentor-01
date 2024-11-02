import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from "components";

import articleData from "./data/article.json";
import statsData from "./data/stats.json";

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard data={articleData} />

        <Heading title="Task 2 Statistics" top bottom />
        {statsData.title ? (
          <Statistics title="Main Statistics" stats={statsData} />
        ) : (
          <Statistics stats={statsData} />
        )}
        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
