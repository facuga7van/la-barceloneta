import About from "../../imports/About";
import Page from "./Page";
import { isStoryblokEditor } from "../../storyblok/env";

export default function AboutPage() {
  if (isStoryblokEditor()) {
    return <Page slug="about" />;
  }
  return <About />;
}
