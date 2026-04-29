<template>
    <main class="container-fluid">
        <section
            class="hero is-fullheight is-bold"
            style="color-scheme: light"
        >
            <div class="hero-body">
                <div class="container has-text-centered content">
                    <hgroup class="mb-6">
                        <h1
                            class="title is-1 has-text-upper has-font-weight-bold has-letter-spacing-tighter my-1 has-text-dark"
                            style="--psoda-text-emphasis: none; --psoda-fizz-font-family: Gluten"
                            aria-label="psoda"
                        >
                            <span v-psoda-fizz:left="'Popovers (Tooltips)'"><span style="opacity: 0.6">::</span>p</span>
                            <span v-psoda-fizz:top="'Snackbars (soon)'">s</span>
                            <span v-psoda-fizz:bottom="'Overlays (soon)'">o</span>
                            <span v-psoda-fizz:top="'Dialogs (Modals)'">d</span>
                            <span v-psoda-fizz:right="'Alerts'">a</span>
                            <span class="tag is-dark">{{ version }}</span>
                        </h1>

                        <h2 class="title is-5 has-text-dark my-0">Refreshingly simple Tooltips & Modals for Vue</h2>
                    </hgroup>

                    <div class="psoda-can">
                        <img
                            src="./assets/tooltip_r.webp"
                            class="psoda-can-tooltip-r"
                            alt="A design showing an example tooltip."
                        />
                        <img
                            src="./assets/tooltip_m.webp"
                            class="psoda-can-tooltip-m"
                            alt="A design showing an example tooltip."
                        />
                        <img
                            src="./assets/tooltip_l.webp"
                            class="psoda-can-tooltip-l"
                            alt="A design showing an example tooltip."
                        />
                        <img
                            src="./assets/modal.webp"
                            class="psoda-can-modal"
                            alt="A design showing a simple confirm modal"
                        />
                        <img
                            src="./assets/can.webp"
                            class="psoda-can-can"
                            alt="Just a cute can"
                            v-psoda-fizz:bottom
                        />
                        <img
                            src="./assets/alert.webp"
                            class="psoda-can-alert"
                            alt="A design showing a simple alert modal"
                        />
                    </div>
                    <div class="level is-mobile mt-4">
                        <div class="level-item is-justify-content-flex-end">
                            <a
                                href="#features"
                                class="button is-rounded is-light"
                                >Get Started
                            </a>
                        </div>
                        <div class="level-item is-justify-content-flex-start">
                            <button class="button is-rounded is-dark">Docs </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="section container"
            id="features"
        >
            <div class="has-text-centered">
                <h3 class="title is-2 mb-1">Full of <s v-psoda-fizz:bottom="'BYOFlavor'">flavor</s> features</h3>
                <p class="subtitle">Everything you need for delightful tooltips and dialogs</p>
            </div>

            <div class="fixed-grid has-2-cols has-3-cols-tablet mt-6">
                <div class="grid is-6">
                    <div class="cell is-col-span-2">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.627 0.265 303.9) 0%,
                                            oklch(0.656 0.241 354.308) 100%
                                        );
                                    "
                                >
                                    <div class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-sparkles w-6 h-6 text-white"
                                        >
                                            <path
                                                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                                            ></path>
                                            <path d="M20 3v4"></path>
                                            <path d="M22 5h-4"></path>
                                            <path d="M4 17v2"></path>
                                            <path d="M5 18H3"></path>
                                        </svg>
                                    </div>
                                </figure>
                                <h3 class="title is-4 mb-3">Dependency-free</h3>
                                <p class="subtitle">Under the hood its just native HTML!</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell is-col-span-2-mobile">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.623 0.214 259.815) 0%,
                                            oklch(0.715 0.143 215.221) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-palette w-6 h-6 text-white"
                                    >
                                        <circle
                                            cx="13.5"
                                            cy="6.5"
                                            r=".5"
                                            fill="currentColor"
                                        ></circle>
                                        <circle
                                            cx="17.5"
                                            cy="10.5"
                                            r=".5"
                                            fill="currentColor"
                                        ></circle>
                                        <circle
                                            cx="8.5"
                                            cy="7.5"
                                            r=".5"
                                            fill="currentColor"
                                        ></circle>
                                        <circle
                                            cx="6.5"
                                            cy="12.5"
                                            r=".5"
                                            fill="currentColor"
                                        ></circle>
                                        <path
                                            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                                        ></path>
                                    </svg>
                                </figure>
                                <h3 class="title is-4 mb-3">Fully Themeable</h3>
                                <p class="subtitle">Customize every aspect to match your brand</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell is-col-span-2-mobile">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.705 0.213 47.604) 0%,
                                            oklch(0.637 0.237 25.331) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-zap w-6 h-6 text-white"
                                    >
                                        <path
                                            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                                        ></path>
                                    </svg>
                                </figure>
                                <h3 class="title is-4 mb-3">Lightning Fast</h3>
                                <p class="subtitle">Optimized for performance with minimal bundle size</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell is-col-span-2-mobile">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.723 0.219 149.579) 0%,
                                            oklch(0.696 0.17 162.48) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-code w-6 h-6 text-white"
                                    >
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                </figure>
                                <h3 class="title is-4 mb-3">TypeScript Native</h3>
                                <p class="subtitle">First-class TypeScript support out of the box</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell is-col-span-2-mobile">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; grid-column: span 1; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.656 0.241 354.308) 0%,
                                            oklch(0.645 0.246 16.439) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-package w-6 h-6 text-white"
                                    >
                                        <path
                                            d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                                        ></path>
                                        <path d="M12 22V12"></path>
                                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                        <path d="m7.5 4.27 9 5.15"></path>
                                    </svg>
                                </figure>
                                <h3 class="title is-4 mb-3">Tiny Bundle</h3>
                                <p class="subtitle">Less than 5kb gzipped & fully tree-shakeable</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell is-col-span-2-mobile">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; grid-column: span 1; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    aria-hidden
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.87 0.19 106.6) 0%,
                                            oklch(0.67 0.21 33.5) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M2 21h18v-1h1V6h-1V5h-5V4h-1V3h-1V2h-1V1h-2v1H9v1H8v1H7v1H2v1H1v14h1zm1-2V7h5V6h1V5h1V4h2v1h1v1h1v1h5v12zm2-3h10v-2H5zm0-4h12v-2H5z"
                                        />
                                    </svg>
                                </figure>
                                <h3 class="title is-4 mb-3">Flexible Positioning</h3>
                                <p class="subtitle"
                                    >Smart auto-positioning that adapts to viewport and free of z-index issues.</p
                                >
                            </div>
                        </div>
                    </div>
                    <div class="cell is-col-span-2-mobile">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.64 0.26 320.66) 0%,
                                            oklch(0.7 0.31 330.75) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 28 28"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 5.5a2 2 0 0 0 1.491 1.935c.337.053.68.053 1.018 0A2 2 0 1 0 12 5.5m-1.337 1.058a3.5 3.5 0 1 1 6.675 0l4.419-1.436a2.477 2.477 0 1 1 1.53 4.712L18 11.552v1.598a7.4 7.4 0 0 0-1.5.474V11.37c0-.541.349-1.021.864-1.189l5.46-1.774a.977.977 0 0 0-.604-1.859l-6.752 2.194q-.32.104-.649.162a3.5 3.5 0 0 1-1.639 0a5 5 0 0 1-.648-.162L5.78 6.548a.977.977 0 0 0-.604 1.859l5.46 1.774c.515.168.864.648.864 1.189v3.957c0 .35-.067.698-.198 1.024l-2.734 6.811a.977.977 0 0 0 .538 1.267a.96.96 0 0 0 1.252-.531l1.684-4.196a7.6 7.6 0 0 0 .342 3.174l-.634 1.58a2.46 2.46 0 0 1-3.21 1.363a2.477 2.477 0 0 1-1.364-3.215l2.734-6.812q.09-.224.09-.466v-3.774L4.712 9.834a2.477 2.477 0 0 1 1.531-4.712zM26 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L18 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708"
                                        />
                                    </svg>
                                </figure>
                                <h3 class="title is-4 mb-3">Accessible</h3>
                                <p class="subtitle">Screen-readable markup with ARIA labels</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell is-col-span-2-mobile">
                        <div
                            class="card"
                            style="opacity: 1; transform: none; --bulma-card-shadow: none"
                        >
                            <div class="card-content content">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background: linear-gradient(
                                            to right bottom,
                                            oklch(0.606 0.25 292.717) 0%,
                                            oklch(0.627 0.265 303.9) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M4.616 18q-.691 0-1.153-.462T3 16.384V7.616q0-.691.463-1.153T4.615 6h14.77q.69 0 1.152.463T21 7.616v8.769q0 .69-.463 1.153T19.385 18zm0-1h14.769q.23 0 .423-.192t.192-.424V7.616q0-.231-.192-.424T19.385 7H4.615q-.23 0-.423.192T4 7.616v8.769q0 .23.192.423t.423.192M9 15.77h6q.31 0 .54-.221q.23-.22.23-.549q0-.31-.23-.54t-.54-.23H9q-.31 0-.54.221q-.23.22-.23.549q0 .31.23.54t.54.23M4 17V7zm2.54-7.46q.23-.23.23-.54t-.23-.54T6 8.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54T9 8.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m-12 3q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m3 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23"
                                        />
                                    </svg>
                                </figure>
                                <h3 class="title is-4 mb-3">Keyboard-friendly</h3>
                                <p class="subtitle">
                                    <kbd>esc</kbd> dismiss modals. Optional, <kbd>tab</kbd> focusable tooltips
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section container">
            <a name="installation" />
            <div
                class="block py-4"
                id="gettingStarted"
            >
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <div class="is-flex is-align-items-center is-gap-3">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background-image: linear-gradient(
                                            to right bottom,
                                            oklch(0.72 0.16 164.34) 0%,
                                            oklch(0.46 0.13 145.47) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-terminal w-5 h-5 text-white"
                                    >
                                        <polyline points="4 17 10 11 4 5"></polyline>
                                        <line
                                            x1="12"
                                            x2="20"
                                            y1="19"
                                            y2="19"
                                        ></line>
                                    </svg>
                                </figure>
                                <h4 class="title is-4">Installation</h4>
                            </div>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="buttons has-addons">
                                <button
                                    class="button"
                                    :class="packageManager === 'vite+' ? 'is-primary is-selected' : ''"
                                    @click="packageManager = 'vite+'"
                                >
                                    vite+
                                </button>
                                <button
                                    class="button"
                                    :class="packageManager === 'pnpm' ? 'is-primary is-selected' : ''"
                                    @click="packageManager = 'pnpm'"
                                    >pnpm</button
                                >
                                <button
                                    class="button"
                                    :class="packageManager === 'npm' ? 'is-primary is-selected' : ''"
                                    @click="packageManager = 'npm'"
                                    >npm</button
                                >
                                <button
                                    class="button"
                                    :class="packageManager === 'yarn' ? 'is-primary is-selected' : ''"
                                    @click="packageManager = 'yarn'"
                                    >yarn</button
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is-bg-gray-900 rounded-2xl overflow-x-auto">
                    <HighCode
                        v-if="packageManager === 'vite+'"
                        codeValue="vp add psoda"
                        lang="shell"
                        width="100%"
                        class="p-0"
                        max-height="100px"
                    />
                    <HighCode
                        v-if="packageManager === 'pnpm'"
                        codeValue="pnpm add psoda"
                        lang="shell"
                        width="100%"
                        class="p-0"
                        max-height="100px"
                    />
                    <HighCode
                        v-if="packageManager === 'npm'"
                        codeValue="npm install psoda"
                        lang="shell"
                        width="100%"
                        class="p-0"
                        max-height="100px"
                    />
                    <HighCode
                        v-if="packageManager === 'yarn'"
                        codeValue="yarn add psoda"
                        lang="shell"
                        width="100%"
                        class="p-0"
                        max-height="100px"
                    />
                </div>
            </div>
            <div class="block py-4">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <div class="is-flex is-align-items-center is-gap-3">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background-image: linear-gradient(
                                            to right bottom,
                                            oklch(0.627 0.265 303.9) 0%,
                                            oklch(0.656 0.241 354.308) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 21 21"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9.5 5.5h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-4m0-8v6m3-3h-6"
                                            stroke-width="1"
                                        />
                                    </svg>
                                </figure>
                                <h4 class="title is-4">Global Registration</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <p>Register globally to have access to all directives & components</p>
                </div>
                <HighCode
                    :codeValue="usageCode"
                    lang="javascript"
                    width="100%"
                    class="p-0"
                />
            </div>
            <div
                class="block py-4"
                id="gettingStarted"
            >
                <a name="documentation" />
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <div class="is-flex is-align-items-center is-gap-3">
                                <figure
                                    class="image is-48x48 is-rounded is-flex is-justify-content-center is-align-items-center"
                                    style="
                                        background-image: linear-gradient(
                                            to right bottom,
                                            oklch(0.705 0.213 47.604) 0%,
                                            oklch(0.637 0.237 25.331) 100%
                                        );
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="10"
                                            stroke-width="1.5"
                                            d="M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334m0-12C12 5.5 13.5 4 15.333 4H22v12h-6.667C12 16 12 19.334 12 19.334m0-12v12m1.875 1.124A2.58 2.58 0 0 1 16.167 19H21m-10.875 1.458A2.54 2.54 0 0 0 7.833 19H3"
                                        />
                                    </svg>
                                </figure>
                                <h4 class="title is-4">Documentation</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is-bg-gray-900 rounded-2xl overflow-x-auto">
                    <a name="fizz" />
                    <div class="block">
                        <div class="level mb-3">
                            <div class="level-left">
                                <div class="level-item">
                                    <h6 class="title is-4 mt-6 mb-1"
                                        >Fizz <span class="tag is-primary is-small">Tooltips</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <p class="block"
                            >The Fizz component (or directive) is a utility wrapper around the native HTML
                            <strong>Popover</strong>
                            API. Making it easy to add tooltips to your Vue applications.
                        </p>
                        <h6 class="title is-5 mt-6">Component usage</h6>
                        <div class="block example-block">
                            <div class="header">
                                <psoda-fizz
                                    v-model="fizzOpen"
                                    :tabindex="0"
                                    @close="changeLyric"
                                >
                                    random song lyrics
                                    <template #tooltip>
                                        {{ featuredSongLyric }}
                                    </template>
                                </psoda-fizz>
                            </div>
                            <div class="content">
                                <HighCode
                                    :codeValue="psodaFizzExample"
                                    :lang="'vue'"
                                    class="p-0"
                                    width="100%"
                                />
                            </div>
                        </div>

                        <h6 class="title is-5 mt-6">Directive usage</h6>
                        <div class="block example-block">
                            <div class="header"
                                ><span v-psoda-fizz="'For an instant tooltip!'">Add v-psoda-fizz to any element. </span>
                            </div>
                            <div class="content">
                                <HighCode
                                    :codeValue="psodaFizzDirectiveExample"
                                    lang="vue"
                                    class="p-0"
                                    width="100%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="block">
                        <a name="pop" />
                        <div class="level mb-3">
                            <div class="level-left">
                                <div class="level-item">
                                    <h6 class="title is-4 mt-5 mb-1"
                                        >Pop <span class="tag is-primary is-small">Modals</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <p class="block"
                            >The Pop component is a utility wrapper around the native HTML
                            <strong>dialog</strong>
                            element.
                        </p>

                        <h6 class="title is-5 mt-6">Basic Modal</h6>
                        <div class="block example-block">
                            <div class="header">
                                <psoda-pop>
                                    <button class="button is-primary">Modal</button>
                                    <template #content> Here's a simple modal </template>
                                    <template #confirm="slotProps">
                                        <button
                                            v-bind="slotProps"
                                            class="button is-success"
                                            >Ok!</button
                                        >
                                    </template>
                                </psoda-pop>
                            </div>
                            <div class="content">
                                <HighCode
                                    :codeValue="psodaPopExample"
                                    lang="vue"
                                    class="p-0"
                                    width="100%"
                                />
                            </div>
                        </div>

                        <h6 class="title is-5 mt-6">Easy Confirmation Modal</h6>
                        <p class="block"
                            >Add the <code>v-psoda-confirm"&lt;string&gt;"</code> directive to an element that will
                            perform a destructive action.</p
                        >
                        <div class="block example-block">
                            <div class="header">
                                <div class="field is-grouped is-grouped-multiline">
                                    <transition-group name="fade">
                                        <div
                                            class="control"
                                            v-for="(fruit, index) in fruits"
                                            :key="fruit"
                                        >
                                            <div class="tags has-addons">
                                                <a class="tag">{{ fruit }}</a>
                                                <a
                                                    class="tag is-delete"
                                                    v-psoda-confirm="`Remove ${fruit}?`"
                                                    @click.prevent="fruits.splice(index, 1)"
                                                ></a>
                                            </div>
                                        </div>
                                    </transition-group>
                                </div>
                            </div>
                            <div class="content">
                                <HighCode
                                    :codeValue="psodaConfirmExample"
                                    lang="vue"
                                    class="p-0"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <a name="snackbar" />
                        <div class="level mb-3">
                            <div class="level-left">
                                <div class="level-item">
                                    <h6 class="title is-4 mt-5 mb-1"
                                        >Utilities <span class="tag is-primary is-small">Composables</span></h6
                                    >
                                </div>
                            </div>
                        </div>
                        <p class="block"
                            >For when you want to quickly spin up a something quick without having to worry about
                            <code>v-if</code> or <code>refs</code>
                        </p>

                        <h6 class="title is-5 mt-6">Snackbar <span class="tag is-info is-small">useSnackbar</span></h6>
                        <p class="block"
                            >The <code>useSnackbar</code> composable will bring up a timed dialog anchored to the bottom
                            of the page.</p
                        >
                        <div class="block example-block">
                            <div class="header">
                                <button
                                    class="button is-primary"
                                    @click="showSnackbar"
                                    >Open Snackbar</button
                                >
                            </div>
                            <div class="content">
                                <HighCode
                                    :codeValue="snackbarExample"
                                    lang="vue"
                                    class="p-0"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-dark">
            <div class="hero-body container">
                <div class="level">
                    <div class="level-left">
                        <div class="level-itemm">
                            <h5 class="title is-4 mb-1">psoda</h5>
                            <p class="subtitle">Refreshingly simple Tooltips & Modals for Vue</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level is-mobile">
                            <div class="level-itemm">
                                <a
                                    href="https://github.com/limitlis/psoda"
                                    class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-github w-5 h-5"
                                    >
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                        ></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path></svg
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div
                    class="container has-text-centered is-size-5"
                    style="--psoda-text-emphasis: none"
                    >Made with <span v-psoda-fizz="'🥤 + ☕️'">🫶</span> by
                    <a href="https://github.com/limitlis"><strong class="has-text-primary">Cesar (limitlis)</strong></a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import pkg from '../../package.json';

    //@ts-ignore
    import { HighCode } from 'vue-highlight-code';
    
    import 'vue-highlight-code/dist/style.css';

    import { useSnackbar } from 'psoda';

    import psodaFizzExample from './examples/fizz-component-example.vue?raw';
    import psodaFizzDirectiveExample from './examples/fizz-directive-example.vue?raw';

    import psodaPopExample from './examples/pop-component-example.vue?raw';

    import psodaConfirmExample from './examples/pop-confirm-directive-example.vue?raw';
    import snackbarExample from './examples/useSnackbar-composable.vue?raw';

    const version = ref(pkg.version);

    const packageManager = ref<'vite+' | 'npm' | 'pnpm' | 'yarn'>('vite+');
    const fizzOpen = ref(true);

    function showSnackbar() {
        useSnackbar({
            message: 'Changes saved.',
            actionClass: 'button is-primary',
            actionText: 'Nice!',
        });
    }
    const fruits = ref(['🍇', '🍉', '🍊', '🍌', '🍍', '🍏', '🍐', '🍑', '🍓']);
    const songLyrics = [
        'Never gonna give you up',
        "Sippin' on gin and juice, laid back",
        'Brass Monkey, that funky Monkey',
        'If you like Piña Coladas...',
    ];
    const songLyricIndex = ref(0);
    const changeLyric = () => {
        songLyricIndex.value++;
        if (songLyricIndex.value > songLyrics.length - 1) {
            songLyricIndex.value = 0;
        }
    };
    const featuredSongLyric = computed(() => {
        return songLyrics[songLyricIndex.value];
    });
    const usageCode = ref(`import psoda from "psoda";
import "psoda/style.css";
...
const app = createApp(main);
...
app.use(psoda);`);
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Gluten:wght@600&family=Quicksand:wght@300..700&display=swap');
    :root {
        interpolate-size: allow-keywords;
        --bulma-body-family: 'Quicksand', sans-serif;
    }

    /* *:not(pre, code) {
    font-family: Quicksand, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
} */

    .hero:first-of-type::before {
        content: '';
        position: absolute;
        inset: 0;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background: tan;
        z-index: -2;
    }

    .card {
        flex: 1;
        height: 100%;
        height: stretch;
        background: light-dark(#f3f4f6, #1f2229);
        color: light-dark(#222, #eee);
    }

    figure {
        &.image {
            border-radius: 0.5rem;
            color: #fff;
        }
    }

    @keyframes hueCycle {
        from {
            filter: hue-rotate(0deg);
        }

        to {
            filter: hue-rotate(360deg);
        }
    }

    p {
        line-height: 1.4;
    }

    .title {
        text-wrap-style: balance;
    }

    .title.is-1 {
        font-size: 5.7rem;

        figure {
            font-family: Gluten;
            font-optical-sizing: auto;
            font-weight: 600;
            font-style: normal;
            font-variation-settings: 'slnt' 0;
        }
    }

    kbd {
        padding: 0.2rem 0.4rem;
        font-size: 87.5%;
        color: #fff;
        background-color: #212529;
        border-radius: 0.2rem;
        font-size: inherit;
        line-height: inherit;
        margin-bottom: 0.4375rem;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        margin-top: 0.25rem;
        padding: 0.1rem 0.4rem;
        box-shadow:
            0 0 #d9d9d9,
            0 0px #d9d9d9,
            0 1px #d9d9d9,
            0 2px #d9d9d9,
            0 3px #d9d9d9,
            0 4px #d9d9d9,
            0 5px #d9d9d9,
            2px 2.5px 4px #adb5bd,
            0 -1px 2.5px #adb5bd;
        background-color: #fff;
        border-color: #e6e6e6;
        color: #343a40;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: 1px solid #e6e6e6;
        border-radius: 0.25rem;
        display: inline-block;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        font-weight: 400;
        text-align: left;
        transform: translate3d(0, 0, 5px);
        transform-style: preserve-3d;
        transition: all 0.25s cubic-bezier(0.2, 1, 0.2, 1);
        zoom: 0.8;
    }

    .psoda-can {
        display: grid;
        margin: auto;
        width: clamp(20vw, 460px, 60vw);
        aspect-ratio: 3 / 4;
        scale: 0.6;
        z-index: 0;
        position: relative;

        > * {
            grid-area: 1/1;
            position: relative;
        }

        > img {
            position: fixed;
        }

        .psoda-can-tooltip-r {
            left: 320px;
            top: -100px;
            z-index: 4;
        }

        .psoda-can-tooltip-m {
            left: 100px;
            top: -180px;
            z-index: 0;
        }

        .psoda-can-tooltip-l {
            left: -60px;
            top: -103px;
            z-index: 4;
        }

        .psoda-can-modal {
            bottom: -161px;
            right: -180px;
            width: clamp(26vw, 280px, 500px);
            z-index: 2;
        }

        .psoda-can-can {
            z-index: 1;
            animation: float infinite 6s ease-out alternate;
        }

        .psoda-can-alert {
            top: 220px;
            left: -150px;
            z-index: 0;
        }
    }

    @media screen and (max-width: 430px) {
        .title.is-1 {
            font-size: 6rem;
        }

        .psoda-can {
            .psoda-can-tooltip-l {
                left: -151px;
            }

            .psoda-can-tooltip-m {
                left: 0;
            }

            .psoda-can-can {
                scale: 1.3;
                top: 30px;
            }

            .psoda-can-modal {
                bottom: -110px;
                right: -150px;
            }

            .psoda-can-tooltip-r {
                left: 190px;
            }
        }
    }

    @keyframes float {
        0% {
            transform: translate(0, -10px);
        }

        50% {
            transform: translate(0, 10px);
        }

        100% {
            transform: translate(0, -10px);
        }
    }

    .example-block {
        --bulma-pre-background: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 3px solid light-dark(#f4f4f6, #1e2229);
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

        .header {
            display: flex;
            min-height: 60px;
            align-items: center;
            padding: 0.5rem;
        }

        .content {
            width: 100%;
            width: stretch;

            .code {
                border-top-right-radius: 0 !important;
                border-radius: 0 !important;
            }
        }
    }

    .code {
        .code_header {
            flex: 0 1 30px;
        }

        .code_area {
            flex: 1;
        }
    }

    pre {
        background: inherit !important;
        padding: auto 0 !important;
    }
</style>
