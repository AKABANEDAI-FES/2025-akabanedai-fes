# GitHub Copilot Instructions

When performing a code review, respond in Japanese.

When performing a code review, refer to the following documentation:

- `/README.md` - Project overview, setup, development workflow, and guidelines
- `/src/components/ui/UIComponents.mdx` - UI component library documentation
- `/src/stories/tokens/DesignTokens.mdx` - Design tokens documentation

When performing a code review, focus on the following aspects:

## CSS and Styling

- CSS Modules must be used for all component styles
- Design tokens (CSS variables) from `src/app/globals.css` should be used instead of hardcoded values
- Check for proper use of semantic color tokens (e.g., `--fg-default`, `--bg-default`, `--accent-default`)
- Verify mobile-first responsive design approach
- Ensure CSS class names follow camelCase convention

## Component Architecture

- Verify components are placed in the correct location:
  - Reusable components � `src/components/`
  - Page-specific components � `src/app/_components/`
- Check that components export both the component and helper function
- Ensure polymorphic components properly use the `as` prop
- Verify proper use of existing UI components from `src/components/ui/`

## Accessibility

- Check for proper semantic HTML usage
- Verify that interactive elements have appropriate labels
- Check that images have proper `alt` attributes
