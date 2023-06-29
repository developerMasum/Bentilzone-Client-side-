import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster />
    <div className='max-w-screen-xl mx-auto'>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider> 
      <RouterProvider router={router} />
      </HelmetProvider>
        
            </QueryClientProvider>
          </div>
  </AuthProvider>
)
