import { Worker } from "@temporalio/worker";
import { namespace, taskQueue } from "./constants";
import * as activities from "./activity"

async function run() {
    const worker = await Worker.create({
        workflowsPath: require.resolve("./workflow.ts"),
        taskQueue,
        namespace,
        activities,
    })

    await worker.run()
}

run().catch(err => {
    console.error(err)
    process.exit(1)
})
