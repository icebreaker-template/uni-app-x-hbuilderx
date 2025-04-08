import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'

export default defineConfig(async () => {
  // 这里必须这样引用，因为 uni 只提供了 cjs 的版本且 uni-app 默认 cjs，而 @tailwindcss/vite 只提供了 esm 版本
  const { default: tailwindcss } = await import('@tailwindcss/vite')
  return {
    plugins: [
      uni(),
      tailwindcss(),
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
      ),
    ],
  }
});