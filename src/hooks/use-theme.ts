import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeDetector() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return {
      theme: undefined,
      systemTheme: undefined,
      setTheme: () => null,
      mounted: false,
    }
  }

  return {
    theme,
    systemTheme,
    setTheme,
    mounted,
  }
}

export function useSystemTheme() {
  const { systemTheme } = useThemeDetector()
  return systemTheme
}

export function useCurrentTheme() {
  const { theme, systemTheme } = useThemeDetector()
  
  // Return the actual theme being used (system theme if theme is 'system')
  if (theme === 'system') {
    return systemTheme
  }
  
  return theme
}
