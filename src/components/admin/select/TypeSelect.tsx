import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const types = ["down", "working", "private"]
interface props {
  type: string
  setTipe: (value: string) => void
  all?: boolean
}
export const TypeSelect = ({ type, setTipe, all = true }: props) => {
  return (
    <Select value={type} onValueChange={setTipe}>
      <SelectTrigger className="border-descColor/20 bg-mainColor/30 cursor-pointer text-descColor h-9!">
        <SelectValue placeholder="type" />
      </SelectTrigger>
      <SelectContent align="end" className="border-0 bg-[#050921] text-descColor">
        {all && <SelectItem
          value={"all"}
          className="focus:bg-descColor/10 focus:text-descColor">
          all
        </SelectItem>}
        <SelectGroup>
          {
            types.map((t) => (
              <SelectItem
                key={t}
                value={t}
                className="focus:bg-descColor/10 focus:text-descColor">
                {t}
              </SelectItem>
            )
            )
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
