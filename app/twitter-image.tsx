import { createSocialImage, socialImageSize } from "./social-card";

export const alt = "Alexandre Beato — Desenvolvedor Full Stack";
export const size = socialImageSize;
export const contentType = "image/png";
export const runtime = "edge";

export default function TwitterImage() {
  return createSocialImage();
}
