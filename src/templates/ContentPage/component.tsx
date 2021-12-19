import React from "react"
import PageLayout from "layouts/PageLayout"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOneContentPage } }) => {
  const queryResult = readOneContentPage

  return (
    <PageLayout page={readOneContentPage}>
      <HTMLElement html={queryResult?.content ?? ""} />
    </PageLayout>
  )
}

export default Page
