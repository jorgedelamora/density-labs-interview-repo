import { TEST } from "../constants"

export const testActionChangePayload = (payload) => {
    return {
        type: TEST,
        payload
    }
}