import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
interface props {
  list: React.ReactNode
  card: React.ReactNode
  className?: string
}
export const ListCardTabs = ({ list, card, className }: props) => {
  return (
    <Tabs defaultValue="list" className={className}>
      <TabsList className="bg-mainColor/30! border border-descColor/20!">
        <TabsTrigger className="text-descColor data-[state=active]:text-descColor data-[state=active]:bg-descColor/20! rounded-sm hover:text-descColor cursor-pointer" value="list">List</TabsTrigger>
        <TabsTrigger className="text-descColor data-[state=active]:text-descColor data-[state=active]:bg-descColor/20! rounded-sm hover:text-descColor cursor-pointer" value="card">Card</TabsTrigger>
      </TabsList>
      <TabsContent value="list" className="w-full">{list}</TabsContent>
      <TabsContent value="card" className="w-full">{card}</TabsContent>
    </Tabs>
  )
}
