const api = require("./api")
// @ponicode
describe("api.loadLists", () => {
    test("0", () => {
        let callFunction = () => {
            api.loadLists()
        }
    
        expect(callFunction).not.toThrow()
    })
})
