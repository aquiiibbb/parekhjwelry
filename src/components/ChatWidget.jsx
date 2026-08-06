import { useEffect, useRef, useState } from 'react';
import './ChatWidget.css';
import logo from '../assest/logo.png';

const QUICK_REPLIES = ['Repair pricing', 'Track my order', 'Book appointment', 'Shipping info'];

const BOT_NAME = 'Parekh Jewelers';

function getBotReply(rawText) {
  const text = rawText.toLowerCase();

  if (/(hi|hello|hey|namaste|hola)/.test(text)) {
    return "Namaste! Welcome to Parekh Jewelers. How can I help you today — repair, pricing, or an order update?";
  }
  if (/(price|cost|quote|charge|repair pricing)/.test(text)) {
    return "Our repair pricing depends on the service and metal type. Share a photo and details on our Contact page and our team will send you a free, no-obligation quote within one business day.";
  }
  if (/(track|status|order|track my order)/.test(text)) {
    return "You can track your repair live from your account dashboard, from intake all the way to the return shipment. Would you like me to point you to the tracking page?";
  }
  if (/(appointment|book|visit|consult)/.test(text)) {
    return "In-person consultations are available by appointment only. I can have our team reach out to schedule one — just leave your details on the Contact page and mention 'appointment'.";
  }
  if (/(ship|shipping|mail|delivery)/.test(text)) {
    return "We provide a prepaid, fully insured shipping label with every order, both ways. Your piece is photographed and documented the moment it arrives with us.";
  }
  if (/(resize|resizing|ring size)/.test(text)) {
    return "Ring resizing is one of our most popular services! If your ring slides off easily or feels too tight, we can resize it safely without damaging any stones.";
  }
  if (/(thank|thanks|ty)/.test(text)) {
    return "You're most welcome! Is there anything else I can help you with?";
  }
  if (/(human|agent|person|representative)/.test(text)) {
    return "Of course — our team typically responds within one business day on the Contact page, or you can reach us on WhatsApp for a quicker reply.";
  }
  return "Thanks for reaching out! For anything specific to your piece, our team can help best — feel free to leave details on our Contact page and we'll get right back to you.";
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && !hasOpenedOnce) {
      setHasOpenedOnce(true);
      setIsTyping(true);
      const t = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: 'greet',
            sender: 'bot',
            text: "Namaste! \u{1F64F} Welcome to Parekh Jewelers. I'm here to help with repairs, pricing, or your order — what can I do for you?",
          },
        ]);
      }, 1100);
      return () => clearTimeout(t);
    }
  }, [isOpen, hasOpenedOnce]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = { id: `u-${Date.now()}`, sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const delay = 900 + Math.random() * 700;
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `b-${Date.now()}`, sender: 'bot', text: getBotReply(trimmed) },
      ]);
    }, delay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="pj-chat-root">
      {isOpen && (
        <div className="pj-chat-panel" role="dialog" aria-label="Chat with Parekh Jewelers">
          <div className="pj-chat-header">
            <div className="pj-chat-header-info">
              <span className="pj-chat-avatar">
                <img src={logo} alt="Parekh Jewelers" />
              </span>
              <div className="pj-chat-header-text">
                <span className="pj-chat-name">{BOT_NAME}</span>
                <span className="pj-chat-status">
                  <span className="pj-chat-dot" /> Online now
                </span>
              </div>
            </div>
            <button
              className="pj-chat-close"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>

          <div className="pj-chat-body" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`pj-chat-row pj-chat-row--${msg.sender}`}>
                {msg.sender === 'bot' && (
                  <span className="pj-chat-bubble-avatar">
                    <img src={logo} alt="" />
                  </span>
                )}
                <div className={`pj-chat-bubble pj-chat-bubble--${msg.sender}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="pj-chat-row pj-chat-row--bot">
                <span className="pj-chat-bubble-avatar">
                  <img src={logo} alt="" />
                </span>
                <div className="pj-chat-bubble pj-chat-bubble--bot pj-chat-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {messages.length > 0 && !isTyping && (
            <div className="pj-chat-quick-replies">
              {QUICK_REPLIES.map((q) => (
                <button key={q} type="button" onClick={() => sendMessage(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="pj-chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button type="submit" aria-label="Send message">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M4 20l16-8L4 4l0 6.5L15 12 4 13.5z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        className="pj-chat-toggle"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close chat' : 'Chat with Parekh Jewelers'}
      >
        {isOpen ? (
          <span className="pj-chat-toggle-close">&times;</span>
        ) : (
          <span className="pj-chat-toggle-logo">
            <img src={logo} alt="" />
          </span>
        )}
      </button>
    </div>
  );
}

export default ChatWidget;
