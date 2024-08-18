import { uuid4 } from "@temporalio/workflow"
import { Client, Connection } from "@temporalio/client"
import { workflow1 } from "./workflow"
import { taskQueue } from "./constants"

const temporalHost = "localhost"
const temporalPort = 7233

async function run() {
    const connection = await Connection.connect({
        address: `${temporalHost}:${temporalPort}`,
    })
    
    const client = new Client({connection})
    const workflowClient = client.workflow

    const handle = await workflowClient.start(workflow1, {
        args: [{
            phoneNumber: "4085555555"
        }],
        taskQueue,
        workflowId: uuid4(),
        startDelay: "10s",
    })

    await client.connection.close()
}

run().catch(err => {
    console.error("Error running workflow: ", err)
    process.exit(1)
})