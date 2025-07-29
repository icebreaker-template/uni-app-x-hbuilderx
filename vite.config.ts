import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import { r } from './shared'
import { uniAppX } from 'weapp-tailwindcss/presets'
import tailwindcss from 'tailwindcss'
import { debugX } from '@weapp-tailwindcss/debug-uni-app-x'

export default defineConfig({
    plugins: [
        uni(),
        UnifiedViteWeappTailwindcssPlugin(
            uniAppX({
                base: __dirname,
                rem2rpx: true,
            }),
        ),
        // debugX({
        //     cwd: __dirname
        // })
    ],
    css: {
        postcss: {
            plugins: [
                tailwindcss({
                    config: r('./tailwind.config.js'),
                }),
            ]
        }
    }
});