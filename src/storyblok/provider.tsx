import { storyblokInit, apiPlugin } from '@storyblok/react'

// Initialize Storyblok — must run before any component renders.
// In production, the token is only needed for editor preview.
// In dev without Storyblok, this still initializes the bridge hooks (they just no-op).
storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN || 'placeholder-for-dev',
  use: [apiPlugin],
  bridge: typeof window !== 'undefined' && window.location.search.includes('_storyblok'),
})
