# Theme System Documentation

## Tổng quan

Dự án sử dụng hệ thống theme hiện đại với 3 chế độ:
- **Light Mode**: Giao diện sáng
- **Dark Mode**: Giao diện tối  
- **System Mode**: Tự động theo cài đặt hệ thống

## Công nghệ sử dụng

- **next-themes**: Quản lý theme state và persistence
- **Tailwind CSS**: Styling với CSS variables
- **Radix UI**: Accessible components
- **React Hooks**: Custom hooks cho theme management

## Cấu trúc files

```
src/
├── lib/
│   └── theme-provider.tsx      # ThemeProvider wrapper
├── hooks/
│   └── use-theme.ts           # Custom theme hooks
├── components/ui/
│   ├── theme-toggle.tsx       # Theme toggle dropdown
│   ├── theme-status.tsx       # Theme status display
│   └── theme-demo.tsx         # Demo component
└── index.css                  # CSS variables & transitions
```

## Cách sử dụng

### 1. ThemeProvider Setup

```tsx
// App.tsx
import { ThemeProvider } from "@/lib/theme-provider"

const App = () => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {/* Your app content */}
  </ThemeProvider>
)
```

### 2. Theme Toggle Component

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle"

// Sử dụng trong header hoặc bất kỳ đâu
<ThemeToggle />
```

### 3. Custom Hooks

```tsx
import { useThemeDetector, useCurrentTheme } from "@/hooks/use-theme"

// Hook chính
const { theme, systemTheme, setTheme, mounted } = useThemeDetector()

// Hook cho theme hiện tại (bao gồm system)
const currentTheme = useCurrentTheme()

// Hook cho system theme
const systemTheme = useSystemTheme()
```

### 4. Theme Status Display

```tsx
import { ThemeStatus } from "@/components/ui/theme-status"

// Hiển thị trạng thái theme
<ThemeStatus />
```

## CSS Variables

### Light Mode Variables
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}
```

### Dark Mode Variables
```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  /* ... more variables */
}
```

## Features

### ✅ Đã implement
- [x] 3 chế độ theme: Light, Dark, System
- [x] Automatic system preference detection
- [x] Theme persistence trong localStorage
- [x] Smooth transitions
- [x] No flash of unstyled content (FOUC)
- [x] Accessible components với Radix UI
- [x] Custom scrollbar cho từng theme
- [x] Responsive design
- [x] TypeScript support

### 🎨 UI Components
- [x] Theme toggle dropdown với icons
- [x] Theme status badge
- [x] Demo component để test
- [x] Adaptive gradients và animations

### 🔧 Developer Experience
- [x] Custom hooks cho easy theme management
- [x] Type-safe theme operations
- [x] SSR compatible
- [x] Performance optimized

## Best Practices

### 1. Sử dụng CSS Variables
```tsx
// ✅ Good
<div className="bg-background text-foreground" />

// ❌ Bad  
<div className="bg-white dark:bg-gray-900" />
```

### 2. Conditional Styling
```tsx
import { useCurrentTheme } from "@/hooks/use-theme"

const Component = () => {
  const currentTheme = useCurrentTheme()
  
  return (
    <div className={`${
      currentTheme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      Content
    </div>
  )
}
```

### 3. Theme-aware Components
```tsx
const ThemeAwareCard = ({ children }) => {
  const currentTheme = useCurrentTheme()
  
  return (
    <Card className={`${
      currentTheme === 'dark' 
        ? 'border-gray-700 bg-gray-800' 
        : 'border-gray-200 bg-white'
    }`}>
      {children}
    </Card>
  )
}
```

## Troubleshooting

### Flash of Unstyled Content (FOUC)
- Đảm bảo `ThemeProvider` wrap toàn bộ app
- Sử dụng `mounted` state từ `useThemeDetector`
- Disable transitions với `disableTransitionOnChange`

### Theme không persist
- Kiểm tra localStorage permissions
- Đảm bảo `ThemeProvider` có `attribute="class"`

### System theme không detect
- Kiểm tra `enableSystem={true}`
- Test với browser dev tools

## Performance

- Theme changes được optimize với CSS variables
- No re-renders khi system theme thay đổi
- Lazy loading cho theme-specific assets
- Smooth transitions với CSS transforms

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Reduced motion support
- ARIA labels và descriptions
