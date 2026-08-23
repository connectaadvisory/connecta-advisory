"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "connecta_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [prefs, setPrefs] = useState({ preferences: false, stats: false, marketing: false });

  useEffect(() => {
    // Só mostra o banner se ainda não houver uma escolha guardada
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!saved) {
      const timer = setTimeout(() => {
        setVisible(true);
        requestAnimationFrame(() => setShow(true));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function persist(consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setShow(false);
    setTimeout(() => setVisible(false), 300);
  }

  function acceptAll() {
    persist({ necessary: true, preferences: true, stats: true, marketing: true });
  }

  function rejectAll() {
    persist({ necessary: true, preferences: false, stats: false, marketing: false });
  }

  function savePrefs() {
    persist({ necessary: true, ...prefs });
  }

  if (!visible) return null;

  return (
    <div className={`cookie-banner ${show ? "show" : ""}`}>
      <div className="cookie-inner">
        <p>
          Usamos cookies para melhorar a sua experiência e analisar o tráfego do site. Pode
          aceitar, rejeitar ou escolher as suas preferências.{" "}
          <Link href="/privacidade">Política de Privacidade</Link>
        </p>
        <div className="cookie-actions">
          <button className="btn btn-outline btn-sm" type="button" onClick={() => setPrefsOpen((v) => !v)}>
            Gerir preferências
          </button>
          <button className="btn btn-outline btn-sm" type="button" onClick={rejectAll}>
            Rejeitar
          </button>
          <button className="btn btn-primary btn-sm" type="button" onClick={acceptAll}>
            Aceitar
          </button>
        </div>
      </div>

      {prefsOpen && (
        <div className="cookie-prefs">
          <div className="cookie-pref-row">
            <span>Necessários</span>
            <span className="pref-tag">Sempre ativo</span>
          </div>
          <div className="cookie-pref-row">
            <span>Preferências</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={prefs.preferences}
                onChange={(e) => setPrefs((p) => ({ ...p, preferences: e.target.checked }))}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="cookie-pref-row">
            <span>Estatística</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={prefs.stats}
                onChange={(e) => setPrefs((p) => ({ ...p, stats: e.target.checked }))}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="cookie-pref-row">
            <span>Marketing</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
              />
              <span className="slider"></span>
            </label>
          </div>
          <button className="btn btn-primary btn-sm" type="button" onClick={savePrefs}>
            Guardar preferências
          </button>
        </div>
      )}
    </div>
  );
}
