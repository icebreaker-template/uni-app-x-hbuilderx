import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import tailwindcss from '@tailwindcss/postcss'
export default defineConfig({
    plugins: [
        uni(),
        UnifiedViteWeappTailwindcssPlugin(
            {
                rem2rpx: true,
                tailwindcssPatcherOptions: {
                    patch: {
                        tailwindcss: {
                            v4: {
                                base: __dirname
                            }
                        }
                    }
                }
            }
        )
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