import React from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    return (
      <html lang="en" className=" scroll-smooth font-[Cera-pro]">
        <body>
          {children}
        </body>
      </html>
  
    );
      
    }