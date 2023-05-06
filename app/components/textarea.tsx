import clsx from "clsx";
import React from "react";

function Textarea(
  { className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  return (
    <textarea
      {...props}
      ref={ref}
      className={clsx(
        className,
        "w-full resize-none appearance-none rounded border border-gray-300 px-3 py-2 leading-tight text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-purple-400",
      )}
    />
  );
}

export default React.forwardRef(Textarea);
