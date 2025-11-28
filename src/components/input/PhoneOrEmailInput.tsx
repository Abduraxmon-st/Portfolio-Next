import React, { useState } from "react"
import { Controller, type Control } from "react-hook-form"
import { Input } from "../ui/input"

function formatUzPhone(value: string) {
  const digits = value.replace(/\D/g, "")
  let formatted = "+998"
  const rest = digits.slice(3)

  if (!rest) return formatted
  if (rest.length <= 2) formatted += ` ${rest}`
  else if (rest.length <= 5)
    formatted += ` ${rest.slice(0, 2)} ${rest.slice(2)}`
  else if (rest.length <= 7)
    formatted += ` ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5)}`
  else
    formatted += ` ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5, 7)} ${rest.slice(7, 9)}`
  return formatted.trim()
}

interface PhoneOrEmailInputProps {
  control: Control<any>
  name: string
  placeholder?: string
  className?: string
  errors?: any
}

export const PhoneOrEmailInput: React.FC<PhoneOrEmailInputProps> = ({
  control,
  name,
  placeholder = "Email or Phone number",
  className,
  errors
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value = "" } }) => {
        const isFloating = focused || value.length > 0;

        return (
          <div className={`relative flex items-end transition-all duration-200 ${isFloating ? "h-15" : "h-12"}`}>
            <label
              style={{ cursor: "none" }}
              className={`
                absolute z-1 text-sm transition-all duration-200 text-descColor/50
                ${isFloating ? "-top-1.5 left-0 text-xs" : "top-1/2 -translate-y-1/2 left-4 text-sm"}
                ${errors?.contact ? "text-red-500/70" : ""}
              `}
            >
              {placeholder}
            </label>

            {/* INPUT */}
            <Input
              style={{ cursor: "none" }}
              className={className}
              value={value}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false);
                onBlur(); 
              }}
              onChange={(e: any) => {
                let val = e.target.value;

                if (/[a-zA-Z@]/.test(val)) {
                  val = val.replace(/\s/g, "");
                  val = val.replace(/^\+998\s?/, "");
                  onChange(val);
                  return;
                }

                if (/^\d/.test(val) || val.startsWith("+998")) {
                  if (!val.startsWith("+998")) {
                    val = "+998" + val.replace(/\D/g, "");
                  }
                  val = formatUzPhone(val);
                  onChange(val);
                  return;
                }

                onChange(val);
              }}
            />
          </div>
        );
      }}
    />
  );

}
