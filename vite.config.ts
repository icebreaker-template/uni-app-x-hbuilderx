import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import tailwindcss from '@tailwindcss/postcss'
import { uniAppX } from 'weapp-tailwindcss/presets'
import path from 'path'
import { debugX } from '@weapp-tailwindcss/debug-uni-app-x'

export default defineConfig({
    plugins: [
        uni(),
        UnifiedViteWeappTailwindcssPlugin(
            uniAppX({
                base: __dirname,
                rem2rpx: true,
                cssEntries: [path.resolve(__dirname, 'main.css')],
                resolve: {
                    paths: [import.meta.url],
                },
            }),
        ),
        debugX({
            cwd: __dirname,
        })
    ],
    css: {
        postcss: {
            plugins: [
                tailwindcss({
                    base: __dirname
                })
            ]
        }
    }
});