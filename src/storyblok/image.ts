import type { StoryblokAsset } from './types'

/**
 * Resolves an image source from a StoryblokAsset.
 * - Storyblok CDN URLs: appends transform suffix for responsive sizing
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

  // Storyblok CDN: append transforms
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
