'use client'
import { useEffect } from 'react';

export default function Template({ children }) {
    
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js')
     },[]);

    return <div>{children}</div>
  }