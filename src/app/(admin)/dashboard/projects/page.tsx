import { ProjectCardsSection } from "@/components/admin/section/ProjectCardsSection"
import { ProjectsTable } from "@/components/admin/table"
import { ListCardTabs } from "@/components/admin/tabs"

const ProjectsPage = () => {
  return (
    <div>
      <ListCardTabs
        list={<ProjectsTable />}
        card={<ProjectCardsSection />}
      />

    </div>
  )
}

export default ProjectsPage