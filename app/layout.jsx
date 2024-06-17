// Hooks
import { NavProvider } from "./_lib/providers/nav.provider";
import { SelectedPlanProvider } from "./_lib/providers/selection-plan.provider";
import { ModalProvider } from "./_lib/providers/modal.provider";

// Styling
import { barlow } from "./utils/fonts";
import "./reset.css";
import "./styles.css";


export const metadata = {
  title: "Coffee Roasters | Great Coffee Simple Made",
  description: "Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
};

export default function RootLayout({ children }) {
  return (
    <NavProvider>
      <ModalProvider>
        <SelectedPlanProvider>
          <html lang="en">
            <body className={barlow.className} >{children}</body>
          </html>
        </SelectedPlanProvider>
      </ModalProvider>
    </NavProvider>
  );
}
