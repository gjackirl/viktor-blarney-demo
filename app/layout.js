import "./globals.css";
import FeedbackBubble from "./FeedbackBubble";
export const metadata = { title: "Blarney.io — the gift of the gab, as a service", description: "AI messaging for GTM teams." };
export default function RootLayout({ children }) {
  return (<html lang="en"><body>{children}<FeedbackBubble /></body></html>);
}
