import About from "../../imports/About";
import Page from "./Page";

const isStoryblokEditor =
  typeof window !== "undefined" && window.location.search.includes("_storyblok");

export default function AboutPage() {
  if (isStoryblokEditor) {
    return <Page slug="about" />;
  }
  return <About />;
}
