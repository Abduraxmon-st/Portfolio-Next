"use client"

import { Technology } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandInput,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { technology } from "@/data/skills";
type Props = {
  technologies: Technology[];
  value: string[];
  onChange: (value: string[]) => void;
};
export const TechnologiesSelect = ({
  technologies,
  value,
  onChange,
}: Props) => {
  const [open, setOpen] = useState(false);

  const toggleTech = (path: string) => {
    if (value.includes(path)) {
      onChange(value.filter((v) => v !== path));
    } else {
      onChange([...value, path]);
    }
  };

  const removeTech = (path: string) => {
    onChange(value.filter((v) => v !== path));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between min-h-max bg-descColor/5 hover:bg-descColor/8 border-borderColor hover:text-descColor"
        >
          <div className="flex flex-wrap gap-1 h-max">
            {value.length === 0 && "Select technologies"}

            {value.map((tech) => {
              const item = technologies.find((t) => t.path === tech);
              return (
                <Badge key={tech} className="flex items-center gap-1 px-2! nc1:px-2! xl:px-2! py-1! text-xs! xl:text-xs">
                  {item?.title}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTech(tech);
                    }}>
                    <X
                      className="cursor-pointer mt-px size-3"
                    />
                  </div>
                </Badge>
              );
            })}
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-75 p-0 bg-[#050921] text-descColor border-borderColor">
        <Command className="bg-transparent!">
          <CommandInput placeholder="Search technology..." className="placeholder:text-descColor/50 text-descColor" />
          <CommandGroup className="text-descColor!">
            {technology.map((tech) => (
              <CommandItem
                key={tech.path}
                onSelect={() => toggleTech(tech.path)}
              >
                <img src={`/${tech.path}.svg`} alt={"icon"} className="rounded-[3px] size-4 cursor-pointer" />
                {tech.title}

                <Check
                  className={`ml-auto h-4 w-4 ${value.includes(tech.path) ? "opacity-100" : "opacity-0"
                    }`}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
