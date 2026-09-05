# @jlopvil/mui-kit gaps

## Box

### Current project requirement

Neutral polymorphic layout for responsive wizard shells, semantic lists, and positioning.

### Current library API

No public Box export; `Section` adds semantics and vertical spacing and is not equivalent.

### Missing API

A transparent, theme-aware layout primitive.

### Proposed solution

Reexport MUI `Box` from the package root under the existing transparent-reexport policy.

## Grid migration compatibility

### Current project requirement

The editor uses the MUI 5 `item` and breakpoint props throughout layout-critical forms.

### Current library API

Library `Grid` exposes MUI 7's `size` contract.

### Missing API

An incremental migration guide; a direct substitution is not type-compatible.

### Proposed solution

Document the `GridLegacy` to `Grid size={{...}}` conversion and recommended responsive visual checks. Avoid adding legacy API to the library.

## Feedback and utility primitives

### Current project requirement

`Tooltip`, `Chip`, `Divider`, `Switch`, `CircularProgress`, and `DialogContentText` are reused across accessible editor workflows.

### Current library API

None is publicly exported; `Alert` and the main dialog shell cover only part of feedback UI.

### Missing API

Theme-governed public primitives for these recurring cases.

### Proposed solution

Audit use across all consumers, then transparently reexport primitives with shared defaults. A future loader abstraction should preserve accessible status text rather than merely wrap a spinner.

## Paper panels

### Current project requirement

Eight panels use Paper with bespoke responsive padding, borders and positioning.

### Current library API

`Surface` has fixed variants and tokenized padding presets.

### Missing API

Some current panels cannot match their exact spacing and border treatments without retaining local `sx`.

### Proposed solution

Validate whether existing Surface presets cover cross-project patterns; add only broadly reusable variants or padding tokens, leaving layout-specific styling in this project.
