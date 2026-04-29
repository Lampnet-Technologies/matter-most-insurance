/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({
    api: { projectId, dataset },
    /**  to avoid prompting for application id on next deploy **/
    deployment: {
        appId: 'plbbv8c89av77eiz7ay8tgdl',
    },
})
