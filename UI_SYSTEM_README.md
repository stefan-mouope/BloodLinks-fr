# BloodLinks UI System

A comprehensive, responsive UI component system for the BloodLinks React Native application.

## 🎨 Features

- **Responsive Design**: Dynamic sizing based on screen dimensions
- **TypeScript Support**: Full type safety for all components
- **Theme System**: Centralized colors, typography, and spacing
- **Accessibility**: Built with accessibility in mind
- **Consistent Styling**: Unified design language across components

## 📁 Project Structure

```
src/
├── constants/
│   └── theme.ts              # Theme configuration
├── utils/
│   └── responsive.ts         # Responsive utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── RoleCard.tsx
│   │   ├── RoleSelector.tsx
│   │   └── index.ts
│   └── examples/
│       └── UIExample.tsx    # Usage examples
└── screens/
    └── Auth/
        └── SignUpScreen.tsx # Complete signup screen
```

## 🚀 Quick Start

### 1. Import Components

```tsx
import { Button, Input, Card, RoleSelector } from '../components/ui';
import { theme } from '../constants/theme';
import { responsiveSize, responsiveFontSize } from '../utils/responsive';
```

### 2. Use Components

```tsx
<Button
  title="Sign Up"
  onPress={handleSubmit}
  variant="primary"
  size="lg"
  fullWidth
/>

<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>

<RoleSelector
  selectedRole={role}
  onRoleSelect={setRole}
/>
```

## 🎯 Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
- `title: string` - Button text
- `onPress: () => void` - Press handler
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost'` - Button style
- `size?: 'sm' | 'md' | 'lg'` - Button size
- `disabled?: boolean` - Disabled state
- `loading?: boolean` - Loading state
- `fullWidth?: boolean` - Full width button

**Example:**
```tsx
<Button
  title="Submit"
  onPress={handleSubmit}
  variant="primary"
  size="lg"
  fullWidth
/>
```

### Input

A flexible input component with validation and styling options.

**Props:**
- `label?: string` - Input label
- `placeholder?: string` - Placeholder text
- `value?: string` - Input value
- `onChangeText?: (text: string) => void` - Change handler
- `size?: 'sm' | 'md' | 'lg'` - Input size
- `secureTextEntry?: boolean` - Password input
- `keyboardType?: KeyboardTypeOptions` - Keyboard type
- `error?: string` - Error message
- `disabled?: boolean` - Disabled state

**Example:**
```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
  error={emailError}
/>
```

### Card

A container component with consistent styling and shadows.

**Props:**
- `children: React.ReactNode` - Card content
- `padding?: number` - Internal padding
- `margin?: number` - External margin
- `borderRadius?: number` - Border radius
- `shadow?: 'sm' | 'md' | 'lg' | 'none'` - Shadow level
- `backgroundColor?: string` - Background color
- `borderColor?: string` - Border color

**Example:**
```tsx
<Card shadow="md" padding={16}>
  <Text>Card content</Text>
</Card>
```

### RoleSelector

A specialized component for selecting user roles (Doctor, Blood Bank, Donor).

**Props:**
- `selectedRole: RoleType | null` - Currently selected role
- `onRoleSelect: (role: RoleType) => void` - Role selection handler

**Example:**
```tsx
<RoleSelector
  selectedRole={role}
  onRoleSelect={setRole}
/>
```

## 🎨 Theme System

The theme system provides consistent colors, typography, spacing, and dimensions.

### Colors

```tsx
import { theme } from '../constants/theme';

// Primary colors
theme.colors.primary        // #E53E3E (Red)
theme.colors.primaryLight  // #FC8181
theme.colors.primaryDark   // #C53030

// Text colors
theme.colors.textPrimary   // #2D3748
theme.colors.textSecondary // #4A5568
theme.colors.textTertiary  // #718096

// Background colors
theme.colors.background    // #FFFFFF
theme.colors.surface       // #F7FAFC
```

### Typography

```tsx
// Font sizes
theme.typography.fontSize.xs    // 12
theme.typography.fontSize.sm    // 14
theme.typography.fontSize.base  // 16
theme.typography.fontSize.lg    // 18
theme.typography.fontSize.xl    // 20

// Font weights
theme.typography.fontWeight.normal    // '400'
theme.typography.fontWeight.medium    // '500'
theme.typography.fontWeight.semiBold // '600'
theme.typography.fontWeight.bold     // '700'
```

### Spacing

```tsx
theme.spacing.xs    // 4
theme.spacing.sm    // 8
theme.spacing.md    // 16
theme.spacing.lg    // 24
theme.spacing.xl    // 32
```

## 📱 Responsive Design

The responsive utility functions automatically adjust component sizes based on screen dimensions.

### Utility Functions

```tsx
import { 
  wp, 
  hp, 
  responsiveSize, 
  responsiveFontSize,
  dynamicWidth,
  dynamicHeight 
} from '../utils/responsive';

// Width percentage
const width = wp(90); // 90% of screen width

// Height percentage  
const height = hp(50); // 50% of screen height

// Responsive sizing
const size = responsiveSize(16); // Scales based on screen size

// Responsive font size
const fontSize = responsiveFontSize(16); // Scales font size

// Dynamic width with constraints
const width = dynamicWidth(90, 280, 400); // 90% width, min 280, max 400
```

### Screen Size Detection

```tsx
import { isSmallScreen, isMediumScreen, isLargeScreen } from '../utils/responsive';

if (isSmallScreen()) {
  // Adjust for small screens
} else if (isLargeScreen()) {
  // Adjust for large screens
}
```

## 🔧 Customization

### Extending the Theme

```tsx
// In theme.ts
export const customColors = {
  ...colors,
  brand: '#FF6B6B',
  accent: '#4ECDC4',
};

export const customTheme = {
  ...theme,
  colors: customColors,
};
```

### Creating Custom Components

```tsx
import { theme } from '../constants/theme';
import { responsiveSize } from '../utils/responsive';

const CustomComponent: React.FC<Props> = ({ children, style }) => {
  return (
    <View style={[
      {
        padding: responsiveSize(theme.spacing.md),
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
      },
      style
    ]}>
      {children}
    </View>
  );
};
```

## 📋 Best Practices

1. **Use Theme Constants**: Always use theme values instead of hardcoded colors/sizes
2. **Responsive Sizing**: Use responsive utilities for dynamic sizing
3. **Type Safety**: Leverage TypeScript interfaces for component props
4. **Consistent Spacing**: Use theme spacing values for consistent layouts
5. **Accessibility**: Include proper accessibility props when needed

## 🎯 Example Usage

See `src/components/examples/UIExample.tsx` for comprehensive usage examples of all components.

## 🚀 Running the App

```bash
# Install dependencies
npm install

# Run on Android
npm run android

# Run on iOS
npm run ios
```

The SignUp screen will be displayed with all the UI components working together to create a beautiful, responsive interface.
