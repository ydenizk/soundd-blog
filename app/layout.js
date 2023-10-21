
import './globals.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { ThemeProvider } from './context/context'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
        
        </body>
    </html>
  )
}
