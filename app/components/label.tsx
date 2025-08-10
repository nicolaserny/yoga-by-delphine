/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from "clsx";
import React from "react";

function Label({
  className,
  ref,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & {
  ref?: React.Ref<HTMLLabelElement>;
}) {
  return (
    <label
      {...props}
      ref={ref}
      className={clsx(
        className,
        "mb-1 block text-sm font-medium text-gray-800 lg:text-base",
      )}
    />
  );
}

export default Label;
