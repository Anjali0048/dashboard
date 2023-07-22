import './globals.css'
// import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webpage Dashboard',
  description: 'Responsive Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          {/* <ToastContainer> */}
            {children}
          {/* </ToastContainer> */}
        </body>
      </html>    
    </>
  );
}
