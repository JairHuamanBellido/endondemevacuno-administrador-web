import { useState } from "react";

export default function useModal() {
  const [isVisible, setVisible] = useState<boolean>(false);

  const toggle = (): void => {
    setVisible((prevState) => !prevState);
  };

  // useEffect(() => {
  //   function handleEscapePressKey(e: KeyboardEvent) {
  //     if (e.key === "Escape") {
  //       setVisible(false);
  //     }
  //   }
  //   document.addEventListener("keyup", handleEscapePressKey);

  //   return () => {
  //     document.removeEventListener("keyup", handleEscapePressKey);
  //   };
  // }, []);

  return { isVisible, toggle };
}
