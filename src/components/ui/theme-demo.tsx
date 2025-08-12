"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ThemeStatus } from "@/components/ui/theme-status"
import { useThemeDetector } from "@/hooks/use-theme"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function ThemeDemo() {
  const { theme, systemTheme, setTheme, mounted } = useThemeDetector()

  if (!mounted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Theme System</CardTitle>
          <CardDescription>Loading theme information...</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Theme System
          <ThemeToggle />
        </CardTitle>
        <CardDescription>
          Test the theme switching functionality
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Current Theme:</Label>
          <ThemeStatus />
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <Label>Quick Theme Switch:</Label>
          <div className="flex gap-2">
            <Button 
              variant={theme === 'light' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTheme('light')}
            >
              Light
            </Button>
            <Button 
              variant={theme === 'dark' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTheme('dark')}
            >
              Dark
            </Button>
            <Button 
              variant={theme === 'system' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTheme('system')}
            >
              System
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>System Theme:</Label>
          <Badge variant="secondary">
            {systemTheme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </Badge>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="demo-input">Sample Input:</Label>
          <Input id="demo-input" placeholder="Type something..." />
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="demo-switch" />
          <Label htmlFor="demo-switch">Sample Switch</Label>
        </div>

        <div className="flex gap-2">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </CardContent>
    </Card>
  )
}
