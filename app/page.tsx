"use client"

import MemberImage from "@/component/teamDialog"
import { Grid, GridItem, UIProvider } from "@yamada-ui/react"
import { brank_added_image_name } from "../const/const"

type memberObjectType = {
  name: string,
  index: number
}

export default function HelloWorld() {
  return (
    <UIProvider>
      <div>
        <Grid templateColumns="repeat(5, 3fr)" w="90%" className="top">
          {brank_added_image_name.map((memberObject: memberObjectType, index: number) => {
            return <GridItem w="80%" h="auto" key={index} >
              {memberObject.name == "br" ? <div></div> :
                <MemberImage imageName={memberObject.name} index={memberObject.index} />
              }
            </GridItem>
          })}
        </Grid>
      </div>
    </UIProvider>
  )
}