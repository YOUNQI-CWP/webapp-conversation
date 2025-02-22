import { getLocaleOnServer } from '@/i18n/server'
import Head from 'next/head' // 确保正确导入 Head 组件

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={'zh-Hans'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <Head>
            <title>您的网页标题</title>
          </Head>
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
