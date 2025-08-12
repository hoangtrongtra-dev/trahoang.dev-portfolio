/**
 * Image optimization utilities
 */

export interface ImageConfig {
  src: string
  alt: string
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpeg' | 'png'
}

/**
 * Generate responsive image sizes
 */
export function getResponsiveSizes(breakpoints: number[] = [640, 768, 1024, 1280]) {
  return breakpoints.map(bp => `${bp}px`).join(', ')
}

/**
 * Generate srcSet for responsive images
 */
export function generateSrcSet(
  baseSrc: string, 
  widths: number[] = [400, 600, 800, 1200],
  quality: number = 80
) {
  return widths
    .map(width => `${baseSrc}?w=${width}&q=${quality} ${width}w`)
    .join(', ')
}

/**
 * Optimize image URL with parameters
 */
export function optimizeImageUrl(
  src: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'jpeg' | 'png'
    fit?: 'cover' | 'contain' | 'fill'
  } = {}
) {
  const params = new URLSearchParams()
  
  if (options.width) params.append('w', options.width.toString())
  if (options.height) params.append('h', options.height.toString())
  if (options.quality) params.append('q', options.quality.toString())
  if (options.format) params.append('f', options.format)
  if (options.fit) params.append('fit', options.fit)
  
  return params.toString() ? `${src}?${params.toString()}` : src
}

/**
 * Preload critical images
 */
export function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

/**
 * Check if image is cached
 */
export function isImageCached(src: string): boolean {
  const img = new Image()
  img.src = src
  return img.complete
}

/**
 * Generate blur data URL for placeholder
 */
export function generateBlurDataURL(width: number, height: number): string {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // Create a simple gradient pattern
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#f3f4f6')
    gradient.addColorStop(1, '#e5e7eb')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
  
  return canvas.toDataURL()
}

/**
 * Lazy load images with Intersection Observer
 */
export function createLazyLoadObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1
  }
) {
  return new IntersectionObserver(callback, options)
}

/**
 * Get image dimensions from URL or element
 */
export function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = () => {
      reject(new Error(`Failed to get dimensions for: ${src}`))
    }
    img.src = src
  })
}

/**
 * Calculate aspect ratio
 */
export function calculateAspectRatio(width: number, height: number): number {
  return width / height
}

/**
 * Get optimal image size for container
 */
export function getOptimalImageSize(
  containerWidth: number,
  containerHeight: number,
  imageWidth: number,
  imageHeight: number
): { width: number; height: number } {
  const containerRatio = containerWidth / containerHeight
  const imageRatio = imageWidth / imageHeight
  
  if (containerRatio > imageRatio) {
    // Container is wider than image
    return {
      width: containerHeight * imageRatio,
      height: containerHeight
    }
  } else {
    // Container is taller than image
    return {
      width: containerWidth,
      height: containerWidth / imageRatio
    }
  }
}
