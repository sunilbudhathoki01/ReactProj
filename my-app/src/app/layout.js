import "./globals.css";
export const metadata = {
  title: "Dookan",
  description: "E-commerce website,Hamro-Mart",
  Keywords:"Buy and sell,E-commerce website"
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
      <h1>Header</h1>
        {children}
      <p className="footer">All rights reserved @2026Nepal</p>
      
      
      </body>
    </html>
  );
}
