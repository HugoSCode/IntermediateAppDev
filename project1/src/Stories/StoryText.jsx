import { useState } from "react";
import {Button} from "../components/ui/button";
import  DOMPurify from "dompurify";

export function StoryText({text}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!text) {
    return null;
  }
  const storyText = text.length > 100 ? text.slice(0, 100) + "..." : text;
  const safeText=isExpanded ? DOMPurify.sanitize(text) : DOMPurify.sanitize(storyText);

  return (
    <div>
      <div
        className="break-words text-sm"
        style={{ wordBreak: "break-word" }}
        dangerouslySetInnerHTML={{
          __html: safeText,
        }}
      />
      <Button variant="ghost" onClick={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}>
        { isExpanded ? "Show Less" : "Read More"}
      </Button>
    </div>
  );
}
