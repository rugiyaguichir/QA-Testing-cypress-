// cypress/tests/api/api-users.spec.ts
import { BaseController}  from "../api-core/Controllers/BaseController"

describe("GET /users", () => {
    let token = ""
    const bc = new BaseController()

    before( async() => {

        const tok  = await bc.authorize()
        process.env.token = `Bearer ${tok}`
        cy.log(process.env)
    })


    it("gets a list of users", async () => {
        const clients  = await bc.getClientsList()
        cy.log(clients)
    })

    it("edit client account", async () => {
        const edit = await bc.EditClient()
        cy.log(edit)
    })

    it("download info about client", async () => {
        const download = await bc.DownloadCSV()
        cy.log(download)
    })
  })
  