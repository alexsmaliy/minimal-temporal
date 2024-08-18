import { ApplicationFailure, proxyActivities } from "@temporalio/workflow"
import * as activities from "./activity"

type Workflow1Options = {
    phoneNumber: string,
}

export async function workflow1({phoneNumber}: Workflow1Options): Promise<string> {
    const {workflowStep1, workflowStep2, workflowStep3} = proxyActivities<typeof activities>({
        startToCloseTimeout: "60s",
        retry: {
            backoffCoefficient: 2,
            initialInterval: "1s",
            maximumInterval: "16s",
            maximumAttempts: 5,
        }
    })

    console.log(`Starting workflow 1: ${phoneNumber}`)

    let apiResults12: [string, string]
    try {
        apiResults12 = await Promise.all([
            workflowStep1({phoneNumber}),
            workflowStep2({phoneNumber}),
        ])
    } catch (err) {
        throw new ApplicationFailure(`Tasks 1+2 failed completely: ${err}`)
    }

    let apiResult3: string
    try {
        apiResult3 = await workflowStep3({phoneNumber})
    } catch (err) {
        throw new ApplicationFailure(`Task 3 failed completely: ${err}`)
    }

    return `Workflow 1 succeeded: ${apiResults12} + ${apiResult3}`
}
