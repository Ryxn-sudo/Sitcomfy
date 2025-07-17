"use client";

import React from "react";
import { X } from "lucide-react";

/**
 * Dialog component
 * @param {object} props
 * @param {boolean} props.open - Whether the dialog is open
 * @param {function} props.onClose - Close handler
 * @param {React.ReactNode} props.children - Dialog content
 * @param {boolean} [props.noOverlay] - If true, do not render overlay (for FAQ)
 * @param {string} [props.position] - 'center' (default) or 'bottom-right'
 */
export function Dialog({ open, onClose, children, noOverlay = false, position = "center" }) {
  if (!open) return null;

  // Positioning logic
  let containerClass = "fixed z-50";
  if (position === "center") {
    containerClass += " inset-0 flex items-center justify-center";
  } else if (position === "bottom-right") {
    containerClass += " bottom-[calc(80px+2rem)] right-8 flex justify-end items-end w-auto h-auto";
  }

  // Remove default padding for bottom-right (FAQ) dialog
  const innerClass = position === "bottom-right"
    ? "relative w-full max-w-lg bg-white rounded-xl shadow-lg"
    : "relative w-full max-w-lg p-6 bg-white rounded-xl shadow-lg";

  return (
    <div className={containerClass + (noOverlay ? "" : " bg-black/50") }>
      <div className={innerClass}>
        {/* Only show default close button if children don't provide one */}
        {!noOverlay && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
  );
}

export function DialogClose({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700"
    >
      {children}
    </button>
  );
}
