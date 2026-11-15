"use client";
import { useEffect, useState } from "react";

export default function InstallButton() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    function onPrompt(e) {
      e.preventDefault();
      setPromptEvent(e);
    }
    function onInstalled() {
      setInstalled(true);
    }
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
    }
    return function () {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null;

  async function install() {
    if (promptEvent) {
      promptEvent.prompt();
      await promptEvent.userChoice;
      setPromptEvent(null);
    } else {
      setShowHelp(true);
    }
  }

  return (
    <div className="center">
      <button className="btn btn-outline" onClick={install}>
        Install GrowMyPin App
      </button>
      {showHelp && (
        <p className="hint">
          Android: browser menu (3 dots), then Install app or Add to Home screen.
          iPhone: Share button, then Add to Home Screen.
        </p>
      )}
    </div>
  );
}
