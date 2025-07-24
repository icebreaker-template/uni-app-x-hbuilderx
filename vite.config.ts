import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import { r } from './shared'
import { uniAppX } from 'weapp-tailwindcss/presets'
import tailwindcss from '@tailwindcss/postcss'
// import { debugX } from '@weapp-tailwindcss/debug-uni-app-x'

export default defineConfig({
    plugins: [
        uni(),
        UnifiedViteWeappTailwindcssPlugin(
            uniAppX({
                base: __dirname,
                rem2rpx: true,
                cssEntries: [r(__dirname, 'main.css')],
            }),
        ),
        // debugX({
        //     cwd: __dirname,
        // })
    ],
    css: {
        postcss: {
            plugins: [
                tailwindcss({
                    base: __dirname,
                }),
            ]
        }
    }
});