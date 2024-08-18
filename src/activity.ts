type WorkflowStepOptions = {
    phoneNumber: string
}

export async function workflowStep1({phoneNumber}: WorkflowStepOptions): Promise<string> {
    console.log(`Starting workflow step 1: ${phoneNumber}`)
    
    let apiResponse: string;
    if (Math.random() > 0.5) {
        throw new Error("STEP 1 FAILED")
    } else {
        apiResponse = "STEP 1 SUCCEEDED"
    }
    
    return await Promise.resolve(apiResponse)
}

export async function workflowStep2({phoneNumber}: WorkflowStepOptions): Promise<string> {
    console.log(`Starting workflow step 2: ${phoneNumber}`)
    
    let apiResponse: string;
    if (Math.random() > 0.5) {
        throw new Error("STEP 2 FAILED")
    } else {
        apiResponse = "STEP 2 SUCCEEDED"
    }
    
    return await Promise.resolve(apiResponse)
}

export async function workflowStep3({phoneNumber}: WorkflowStepOptions): Promise<string> {
    console.log(`Starting workflow step 3: ${phoneNumber}`)
    
    let apiResponse: string;
    if (Math.random() > 0.5) {
        throw new Error("STEP 3 FAILED")
    } else {
        apiResponse = "STEP 3 SUCCEEDED"
    }
    
    return await Promise.resolve(apiResponse)
}
