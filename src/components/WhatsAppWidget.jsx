import React, { useState, useEffect, useRef } from "react";
import "./WhatsAppWidget.css";

function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);
  const phoneNumber = "918878366225"; // +91 88783 66225

  const quickMessages = [
    { id: 1, text: "Check Room Availability", emoji: "🏠" },
    { id: 2, text: "Get Room Prices", emoji: "💰" },
    { id: 3, text: "Book a Room", emoji: "📅" },
    { id: 4, text: "Ask a Question", emoji: "❓" },
  ];

  // Close on outside click / touch
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen]);

  const sendMessage = (message = "") => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div
      ref={widgetRef}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {/* Quick Messages Popup */}
      {isOpen && (
        <div className="whatsapp-popup" style={{ pointerEvents: "all" }}>
          <div className="whatsapp-popup-header">
            <div className="whatsapp-avatar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.32-3.83-.88l-.27-.15-2.83.48.48-2.83-.15-.27C4.32 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                <path d="M17.25 14.77c-.26-.13-1.53-.75-1.77-.84-.24-.08-.41-.13-.58.13-.17.25-.67.84-.82 1.01-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45s.17-.26.26-.43c.08-.17.04-.32-.02-.45s-.58-1.39-.79-1.9c-.2-.5-.41-.43-.58-.44h-.48c-.17 0-.43.06-.65.32-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.53-.63 1.74-1.23.21-.61.21-1.13.15-1.23-.06-.11-.23-.17-.49-.3z" />
              </svg>
            </div>
            <div className="whatsapp-header-text">
              <h4>Bundela Woods</h4>
              <p>Typically replies within minutes</p>
            </div>
            <button
              className="whatsapp-close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="whatsapp-popup-body">
            <div className="whatsapp-message">
              <p>Hello! 👋</p>
              <p>How can we help you today?</p>
            </div>

            <div className="whatsapp-quick-messages">
              {quickMessages.map((msg) => (
                <button
                  key={msg.id}
                  className="whatsapp-quick-btn"
                  onClick={() => sendMessage(`Hi, I want to ${msg.text}`)}
                >
                  <span className="quick-emoji">{msg.emoji}</span>
                  <span className="quick-text">{msg.text}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="whatsapp-popup-footer">
            <button
              className="whatsapp-start-chat"
              onClick={() => sendMessage("Hi, Bundela Woods")}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              Start Direct Chat
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        className={`whatsapp-float-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp Chat"
        style={{ pointerEvents: "all" }}
      >
        {!isOpen ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default WhatsAppWidget;
