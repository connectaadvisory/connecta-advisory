import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ModalProvider } from "@/components/ModalProvider";
import LeadModal from "@/components/LeadModal";

export default function MarketingLayout({ children }) {
  return (
    <ModalProvider>
      <Header />
      {children}
      <Footer />
      <LeadModal />
      <CookieBanner />
    </ModalProvider>
  );
}
