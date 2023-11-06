import React, { createContext, useContext } from "react";

interface ScrollProviderProps {
  children: React.ReactNode;
}

interface ScrollContextProps {
  scrollToSection: (sectionId: string) => void;
}

export const ScrollContext = createContext<ScrollContextProps>({
  scrollToSection: () => {},
});

export default function ScrollProvider({ children }: ScrollProviderProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const valueProvider = {
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={valueProvider}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  return context;
};
