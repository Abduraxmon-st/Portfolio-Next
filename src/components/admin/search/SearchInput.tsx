import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
interface props {
  search: string
  setSearch: (value: string) => void
}
export const SearchInput = ({ search, setSearch }: props) => {
  return (
    <div className="w-full sm:w-max relative">
      <Input
        className="w-full max-w-full sm:max-w-50 h-9 bg-mainColor/20 border-descColor/20 rounded-md pr-8"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {
        search.length === 0 ?
          <Search className="absolute size-5 right-2 top-1/2 -translate-y-1/2 opacity-20" />
          :
          <X onClick={() => setSearch("")} className="absolute size-5 right-2 top-1/2 -translate-y-1/2 opacity-30 cursor-pointer" />
      }
    </div>
  )
}
