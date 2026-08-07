"use client";

import { useState } from "react";
import { Coffee, Copy, Check, Heart, ExternalLink, Sparkles, QrCode, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site";

const PRESET_TIERS = [
  { amount: 50, label: "Buy a Coffee", emoji: "☕", desc: "A warm cup of coffee to fuel late night coding." },
  { amount: 200, label: "Fuel a Feature", emoji: "🍕", desc: "Helps cover small tools & API services." },
  { amount: 500, label: "Server Sponsor", emoji: "🚀", desc: "Covers monthly database & server hosting." },
];

export function SupportDeveloper() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const activeAmount = customAmount ? Number(customAmount) || 0 : selectedAmount;
  const upiId = siteConfig.upiId;
  const developerName = siteConfig.developer;

  // Build standard UPI Pay string: upi://pay?pa=...&pn=...&am=...&cu=INR
  const upiPayUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(
    developerName,
  )}&am=${activeAmount}&cu=INR&tn=${encodeURIComponent("Support DockDaily Developer")}`;

  // QR Code image URL using qrserver API
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(
    upiPayUrl,
  )}`;

  function handleCopyUpi() {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-lg overflow-hidden">
      {/* Header Banner */}
      <div
        className="p-8 text-center sm:p-10"
        style={{
          background: "linear-gradient(135deg, #1c2540 0%, #162c66 60%, #2a55d4 100%)",
          color: "#fff",
        }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-white backdrop-blur">
          <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" />
          Support Independent Development
        </div>
        <h2 className="heading-display mt-4 text-3xl sm:text-4xl text-white">
          Buy Shitanshu a Coffee ☕
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">
          DockDaily is built independently with care, without VC funding or intrusive ads. If DockDaily helps your routine, consider supporting ongoing development!
        </p>
      </div>

      <div className="p-6 sm:p-10 flex flex-col gap-8">
        {/* Support Tiers Selector */}
        <div>
          <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-[var(--color-subtle)]">
            Choose an Amount (INR / ₹)
          </label>
          <div className="grid gap-4 sm:grid-cols-3">
            {PRESET_TIERS.map((tier) => {
              const isSelected = !customAmount && selectedAmount === tier.amount;
              return (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(tier.amount);
                    setCustomAmount("");
                  }}
                  className={`surface-card flex flex-col items-start p-5 text-left transition-all ${
                    isSelected
                      ? "border-2 border-[var(--color-brand-500)] bg-[var(--color-brand-50)]/20 shadow-md scale-[1.02]"
                      : "hover:border-[var(--color-border-strong)]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl">{tier.emoji}</span>
                    <span className="text-lg font-bold text-[var(--color-foreground)]">
                      ₹{tier.amount}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-[var(--color-foreground)]">
                    {tier.label}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-subtle)]">
                    {tier.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Custom Amount Input */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-medium text-[var(--color-muted)]">Custom Amount:</span>
            <div className="relative flex-1 max-w-xs">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-[var(--color-subtle)]">
                ₹
              </span>
              <input
                type="number"
                min="10"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="h-10 w-full rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface-muted)] pl-8 pr-4 text-sm font-medium text-[var(--color-foreground)] focus:border-[var(--color-brand-500)] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* UPI Payment Box */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
            <div>
              <span className="text-xs font-semibold text-[var(--color-subtle)] uppercase tracking-wider">
                Direct UPI ID
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-mono font-bold text-[var(--color-foreground)]">
                  {upiId}
                </span>
                <span className="pill text-[11px]">Shitanshu</span>
              </div>
            </div>

            <button
              onClick={handleCopyUpi}
              className="btn btn-ghost flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-2 text-xs font-medium bg-[var(--color-surface)] shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" /> Copied UPI ID!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy UPI ID
                </>
              )}
            </button>
          </div>

          {/* Payment CTA Options */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Mobile direct deep link button */}
            <a
              href={upiPayUrl}
              className="btn btn-brand min-h-[3rem] h-auto py-3 px-5 flex-1 items-center justify-center rounded-2xl sm:rounded-full text-xs sm:text-sm font-medium shadow-md text-center leading-snug"
            >
              <Smartphone className="h-4 w-4 mr-1.5 shrink-0" />
              <span>
                Pay ₹{activeAmount || 50} via UPI{" "}
                <span className="hidden xs:inline sm:inline">App</span>{" "}
                <span className="text-[11px] opacity-90 sm:text-xs">
                  (GPay / PhonePe / Paytm)
                </span>
              </span>
            </a>

            <button
              onClick={() => setShowQr(!showQr)}
              className="btn btn-ghost min-h-[3rem] h-auto py-3 rounded-2xl sm:rounded-full px-5 text-xs sm:text-sm font-medium border border-[var(--color-border-strong)] bg-[var(--color-surface)] shrink-0 justify-center"
            >
              <QrCode className="h-4 w-4 mr-1.5 shrink-0" />
              {showQr ? "Hide QR Code" : "Show QR Code"}
            </button>
          </div>

          {/* QR Code Container */}
          {showQr && (
            <div className="mt-2 flex flex-col items-center justify-center p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] text-center animate-in fade-in">
              <img
                src={qrImageUrl}
                alt={`UPI QR Code for ${upiId}`}
                className="h-48 w-48 rounded-xl border border-[var(--color-border)] bg-white p-2 shadow-sm"
              />
              <p className="mt-3 text-xs font-medium text-[var(--color-foreground)]">
                Scan with Google Pay, PhonePe, Paytm, or BHIM
              </p>
              <p className="mt-1 text-[11px] text-[var(--color-subtle)]">
                Paying: ₹{activeAmount || 50} to {upiId}
              </p>
            </div>
          )}
        </div>

        {/* Developer Note */}
        <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] p-4 text-xs text-[var(--color-muted)] bg-[var(--color-surface)]">
          <Sparkles className="h-5 w-5 shrink-0 text-[var(--color-brand-500)] mt-0.5" />
          <div>
            <p className="font-semibold text-[var(--color-foreground)]">
              Thank you for supporting DockDaily!
            </p>
            <p className="mt-0.5 leading-relaxed">
              Every contribution directly helps us maintain servers, cover app store fees, and keep DockDaily ad-free and privacy-first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
