"use client"

import { useThemeDetector } from "@/hooks/use-theme"
import { Badge } from "@/components/ui/badge"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeStatus() {
  const { theme, systemTheme, mounted } = useThemeDetector()

  if (!mounted) {
    return (
      <Badge variant="secondary" className="animate-pulse">
        <div className="w-4 h-4 bg-muted-foreground/20 rounded" />
        <span className="ml-2">Loading...</span>
      </Badge>
    )
  }

  const getThemeIcon = () => {
    if (theme === 'system') {
      return systemTheme === 'dark' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />
    }
    return theme === 'dark' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />
  }

  const getThemeText = () => {
    if (theme === 'system') {
      return `System (${systemTheme})`
    }
    return theme === 'dark' ? 'Dark' : 'Light'
  }

  return (
    <Badge variant="outline" className="text-xs">
      {getThemeIcon()}
      <span className="ml-1">{getThemeText()}</span>
    </Badge>
  )
}
