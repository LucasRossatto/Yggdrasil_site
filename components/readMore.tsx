'use client'

import { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

export default function ReadMore({ text, maxLength = 100 }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const isLong = text.length > maxLength;
  const displayedText = isExpanded || !isLong ? text : text.slice(0, maxLength) + "...";

  return (
    <p className="text-sm text-foreground mt-2 leading-relaxed">
      {displayedText}
      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary font-medium ml-1 cursor-pointer"
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </p>
  );
}
