"use client";

import { useState, useCallback } from "react";

export function useCopy(timeout: number = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback
          const textArea = document.createElement("textarea");
          textArea.value = text;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch (err) {
        console.error("Failed to copy text: ", err);
        return false;
      }
    },
    [timeout]
  );

  return { copied, copy };
}
