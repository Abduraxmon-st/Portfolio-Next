import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Textarea } from "../ui/textarea";

export default function FloatingTextarea({ control, name, error }: any) {
  const [focused, setFocused] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const value = field.value || "";

        return (
          <div className={`relative flex items-end transition-all duration-200 ${focused || value ? "h-27" : "h-24"}`}>
            {/* Label */}
            <label
              style={{ cursor: "none" }}
              className={`
                absolute pointer-events-none text-descColor/50 transition-all duration-150
                ${focused || value
                  ? "-top-1.5 left-0 text-xs"
                  : "top-3 left-4 text-sm"
                }
                ${error ? "text-red-500/70" : ""}
              `}
            >
              {error ? error.message : "Your Message"}
            </label>

            {/* Textarea */}
            <Textarea
              {...field}
              onFocus={() => setFocused(true)}
              style={{ cursor: "none" }}
              onBlur={() => {
                setFocused(false);
                field.onBlur();
              }}
              placeholder=" "
              className={`text-descColor
                ${error
                  ? "placeholder:text-red-500/50 border-red-700 ring-3 ring-red-500/30"
                  : "placeholder:text-descColor/50"
                }
              `}
            />
          </div>
        );
      }}
    />
  );
}
