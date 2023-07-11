import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-until";
import Head from "next/head";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max's Blog</title>
        <meta
          name="description"
          content="I post about programing and web development"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
export default HomePage;
