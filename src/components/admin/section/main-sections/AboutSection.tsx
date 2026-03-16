import { Button } from "@/components/ui/button"

export const AboutSection = () => {
  return (
    <div>
      <div className="bg-mainColor/40 p-3 rounded-md">
        <div className="flex gap-2 justify-end items-center">
          <p className="text-lg md:text-xl flex-1 pl-2">About info</p>
          <Button
            type="button"
            className="bg-descColor/10 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-green-400/20 border border-green-400 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer"
          >
            Save
          </Button>
        </div>
        <div className="w-full h-px border-t border-borderColor mt-3 mb-4" />
        <div className="flex flex-col nc1:flex-row gap-2">
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  )
}
// bio info
// exp, location, specialization
// photo
