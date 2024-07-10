import '@/styles/globals.css'

import Navbar from "@/components/Navbar"

type PropsTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }: PropsTypes) {
  return (
    <html lang="fr">
      <body>
        <div className="w-full bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}