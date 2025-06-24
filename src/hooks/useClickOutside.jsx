import { useEffect, useRef } from "react";

function useClickOutside(handler, listeningCapture = true) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClickOutside, listeningCapture);

    return () =>
      document.removeEventListener(
        "click",
        handleClickOutside,
        listeningCapture,
      );
  }, [ref, handler, listeningCapture]);

  return ref;
}

export default useClickOutside;
