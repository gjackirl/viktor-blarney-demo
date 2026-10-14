import "./globals.css";
import FeedbackBubble from "./FeedbackBubble";
export const metadata = { title: "Blarney.io — the gift of the gab, as a service", description: "AI messaging for GTM teams." };
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`;
export default function RootLayout({ children }) {
  return (<html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head><body>{children}<FeedbackBubble /></body></html>);
}
