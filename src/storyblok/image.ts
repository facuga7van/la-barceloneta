import type { StoryblokAsset } from './types'

const VIDEO_EXTENSIONS = /\.(mp4|mov|webm|avi|mkv|ogv)$/i

/**
 * Resolves an asset source from a StoryblokAsset.
 * - Video files: returns URL as-is (no image transforms)
 * - Storyblok CDN images: appends /m/{w}x{h} for optional resizing (0x0 = original)
 * - Local paths (dev mode): returns as-is
 */
export function resolveImage(
  asset: StoryblokAsset | undefined,
  opts?: { width?: number; height?: number }
): string {
  if (!asset?.filename) return ''

  // Local dev images (start with / or relative path)
  if (!asset.filename.startsWith('https://a.storyblok.com')) {
    return asset.filename
  }

  // Videos: return original URL — Storyblok image transforms don't apply
  if (VIDEO_EXTENSIONS.test(asset.filename)) {
    return asset.filename
  }

  // Storyblok CDN images: append transforms (0x0 = original resolution)
  const w = opts?.width ?? 0
  const h = opts?.height ?? 0
  return `${asset.filename}/m/${w}x${h}`
}

/**
 * Generate srcSet for responsive images from Storyblok CDN.
 * Falls back to single src for local images.
 */
export function responsiveSrcSet(
  asset: StoryblokAsset | undefined,
  widths: number[] = [400, 800, 1200]
): string {
  if (!asset?.filename) return ''
  if (!asset.filename.startsWith('https://a.storyblok.com')) return ''

  return widths
    .map((w) => `${asset.filename}/m/${w}x0 ${w}w`)
    .join(', ')
}
