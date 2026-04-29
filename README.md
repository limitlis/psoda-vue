# Psoda

Refreshingly simple Tooltips & Modals for Vue

## Install

```bash
npm install psoda
```

### Global Registration

```vue
import psoda from "psoda"; import "psoda/style.css"; const app = createApp(main); app.use(psoda);
```

### Typescript Support

If needed, modify your tsconfig file to include psoda.

```json
{
    "include": ["./node_modules/psoda/*"]
}
```

## Usage

### Fizz [Tooltips]

The Fizz component/directive are utility wrappers around the native HTML Popover API.

#### Component Usage

```vue
<script setup>
    import PsodaFizz from 'psoda/fizz';
</script>

<template>
    <psoda-fizz :tabindex="0">
        hover for song lyrics
        <template #tooltip> Never gonna give you up! </template>
    </psoda-fizz>
</template>
```

#### Directive Usage

```html
<span v-psoda-fizz="'Hello World'"> Tooltip directive example </span>
```

### Pop [Modals]

The Pop component is a utility wrapper around the native HTML Dialog element.

#### Basic Modal

```html
<psoda-pop>
    <button class="button">Modal</button>
    <template #content> Here's a simple modal </template>
</psoda-pop>
```

#### Easy Confirmation directive

When want a quick way to add a confirmation prompt to a destructive action. Add the `v-psoda-confirm="<string?>"` with an optional string to display in the confirmation modal.

```html
<template>
    <button
        v-psoda-confirm
        @click.prevent="destructiveAction"
    >
        Delete
    </button>
</template>

<script setup>
    function destructiveAction() {
        // Perform delete call
        api.delete();
    }
</script>
```

### Utilities [Composables]
For when you want to quickly spin up a something quick without having to worry about v-if or refs

#### Snackbar [useSnackbar]

The useSnackbar composable will bring up a timed dialog anchored to the bottom of the page.

```vue
<script setup>
    import { useSnackbar } from 'psoda';

    function showSnackbar() {
        useSnackbar({
            message: 'Changes saved',
            actionClass: 'button is-primary',
            actionText: 'Nice!',
        });
    }
</script>

```
---

## Contributing

- Install dependencies:

```bash
vp install
```

- Start dev server w/ watcher

```bash
vp pack --watch
```

- Run the unit tests:

```bash
vp test
```

- Build the library:

```bash
vp pack
```

- Build the site

```bash
vp run psoda-website#build
```
