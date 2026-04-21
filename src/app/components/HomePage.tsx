import Page from "./Page";

import imgArrowRight4 from "figma:asset/ee42972642d8fa9e5f8cda6dbdda134bd59958d1.webp";
import imgArrowRight3 from "figma:asset/4f6aa36958afd713bc1c8acb59b4994a3636420d.webp";
import imgArrowRight5 from "figma:asset/e7b02b83f7d79cd443a54c11301740ab75dd548e.webp";

export default function HomePage() {
  return <Page slug="home" menuThumbnails={[imgArrowRight4, imgArrowRight3, imgArrowRight5]} />;
}
