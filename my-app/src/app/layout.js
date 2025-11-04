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
      
      
        {children}
      </body>
    </html>
  );
}
