/// <reference types="Cypress"/>

let access_token = '';

describe("Given a user wants to interact with the Demo Site", () => {

    it("Basic Request Login", ()=> {
       cy.visit("https://my.demosphere.com/sign-in?")
       cy.get('#user_login').type('test10001@example.com')
       cy.get('#user_password').type('Test123')
       cy.get('[style="text-align: center;"] > .btn').click()
       cy.visit("https://demo5.demosphere-secure.com/_dashboard")

    })

    it("Basic Request Login", ()=> {
        cy.request("https://demo5.demosphere-secure.com/_login").then((res)=>{
            cy.log(JSON.stringify(res))
            //cy.log(res.body.access_token)
        })
    })
    
    it("Basic Post Request Login", ()=> {
        cy.request({

            method: 'POST',
            //url: "https://my.demosphere.com/sign-in?redirect_to=%2Foauth%2Fauthorize%3Fclient_id%3Dca6db3b02d704c287fecd155795f83e14c79651adcf30173892e7843c54955b4%26redirect_uri%3Dhttps%253A%252F%252Foauth.demosphere-secure.com%252F_chiron%252Fteamnet_callback%26response_type%3Dcode%26scope%3Dpublic%2Bclub%2Bclub%3Acontact%2Bclient%2Bclient%3Acontact%2Bhousehold%3Adetails%2Bhousehold%3Amembers%2Buser%3Aprofile%2Buser%3Acontact%2Buser%3Ahouseholds%2Buser%3Aroles%2Buser%3Ateams%2Buser%3Amembers%2Bteam%3Arosters%2Bteam%3Aactivities%2Bwrite%26org%3DDemosphere%2BDemo%2B5",
            url: "https://demo5.demosphere-secure.com/_api",
            form: true,
            headers:{
                "authorization" : "eyJ0eXAiOiJKV1QiLCJraWQiOiJjYTZkYjNiMDJkNzA0YzI4N2ZlY2QxNTU3OTVmODNlMTRjNzk2NTFhZGNmMzAxNzM4OTJlNzg0M2M1NDk1NWI0IiwiYWxnIjoiSFM1MTIifQ.eyJpc3MiOiJkZW1vc3BoZXJlLmNvbSIsImlhdCI6MTYzNDIyNTAwNywiYXVkIjoiNTViMTBiMzA2OTcwMmQyZmQ1MzgwNTAwIiwiY3JpdCI6WyJleHAiXSwiZXhwIjoxNjM0MjMyMjA3LCJqdGkiOiI0MGMxNTg2Mi1mZWM4LTQzYzctOGE0ZC1iNzlmMjExZmFjZTciLCJzY29wZSI6InB1YmxpYyBjbHViIGNsdWI6Y29udGFjdCBjbGllbnQgY2xpZW50OmNvbnRhY3QgaG91c2Vob2xkOmRldGFpbHMgaG91c2Vob2xkOm1lbWJlcnMgdXNlcjpwcm9maWxlIHVzZXI6Y29udGFjdCB1c2VyOmhvdXNlaG9sZHMgdXNlcjpyb2xlcyB1c2VyOnRlYW1zIHVzZXI6bWVtYmVycyB0ZWFtOnJvc3RlcnMgdGVhbTphY3Rpdml0aWVzIHdyaXRlIiwidXNlciI6eyJpZCI6IjU3NGYwMGYxZjdmZmQ5NmMwZjAwYzEzNiIsImVtYWlsIjoidGVzdDEwMDAxQGV4YW1wbGUuY29tIn19.5FCAt7PI9K5LnSZhIlSzmHAYWKmEyTdmIcq9G2eeTGAbPR-m04qNeRoMjhoTDMN_RORXSRKJCSWcwe7VghSr5A",
            },

            body: {
               // "client_id" : "ca6db3b02d704c287fecd155795f83e14c79651adcf30173892e7843c54955b4",
              // "grant_type" : "password",
               // data :{"myPermissions":{"permissions":{"registration_management":{},"season_management":{},"schedules":{},"communication_center_react_ui":{},"teams_react_ui":{},"isTeamStaffOrPlayerOrHhAdmin":false,"riskManagementAdmin":false,"policies":{}}}}},
               //username: "test10001@example.com",
               //password: "Test123",

                //data: {"operationName":"myPermissions","variables":{},"query":"query myPermissions {myPermissions { permissions } }"},
                //"authenticity_token": "8zhivAAG6OI7yQIrDIFGUWWNiaS98sPdwsRLIGpQ86e6nP4rLMUFl1y37iP/U9/bM86+IzJaN8HBMIa/Mb/qZw==",
                //"user[login]": "test10001@example.com",
                //"user[password]": "Test123",
                //operationName: "remindPhSubmission",
                //query: "query remindPhSubmission($validateStatus: Boolean) { remindPhSubmission(validateStatus: $validateStatus) }",
                //variables: {},
                idToken: "login_token: eyJ0eXAiOiJKV1QiLCJraWQiOiJjYTZkYjNiMDJkNzA0YzI4N2ZlY2QxNTU3OTVmODNlMTRjNzk2NTFhZGNmMzAxNzM4OTJlNzg0M2M1NDk1NWI0IiwiYWxnIjoiSFM1MTIifQ.eyJpc3MiOiJkZW1vc3BoZXJlLmNvbSIsImlhdCI6MTYzNDIyNTAwNywiYXVkIjoiNTViMTBiMzA2OTcwMmQyZmQ1MzgwNTAwIiwiY3JpdCI6WyJleHAiXSwiZXhwIjoxNjM0MjMyMjA3LCJqdGkiOiI0MGMxNTg2Mi1mZWM4LTQzYzctOGE0ZC1iNzlmMjExZmFjZTciLCJzY29wZSI6InB1YmxpYyBjbHViIGNsdWI6Y29udGFjdCBjbGllbnQgY2xpZW50OmNvbnRhY3QgaG91c2Vob2xkOmRldGFpbHMgaG91c2Vob2xkOm1lbWJlcnMgdXNlcjpwcm9maWxlIHVzZXI6Y29udGFjdCB1c2VyOmhvdXNlaG9sZHMgdXNlcjpyb2xlcyB1c2VyOnRlYW1zIHVzZXI6bWVtYmVycyB0ZWFtOnJvc3RlcnMgdGVhbTphY3Rpdml0aWVzIHdyaXRlIiwidXNlciI6eyJpZCI6IjU3NGYwMGYxZjdmZmQ5NmMwZjAwYzEzNiIsImVtYWlsIjoidGVzdDEwMDAxQGV4YW1wbGUuY29tIn19.5FCAt7PI9K5LnSZhIlSzmHAYWKmEyTdmIcq9G2eeTGAbPR-m04qNeRoMjhoTDMN_RORXSRKJCSWcwe7VghSr5A",
                "operationName":"myPermissions",
                "variables":{},
                "query":"query myPermissions {myPermissions { permissions } }"
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            localStorage.setItem('diiPermissions', res.body.idToken)
            cy.log(JSON.stringify(res.headers.authorization))
      })
    })

    it.only("Cleaner Basic Post Request Login", ()=> {
        cy.request({
            method: 'POST',
            url: "https://demo5.demosphere-secure.com/_api",
            form: true,
            headers: {
                authorization: "eyJ0eXAiOiJKV1QiLCJraWQiOiJjYTZkYjNiMDJkNzA0YzI4N2ZlY2QxNTU3OTVmODNlMTRjNzk2NTFhZGNmMzAxNzM4OTJlNzg0M2M1NDk1NWI0IiwiYWxnIjoiSFM1MTIifQ.eyJpc3MiOiJkZW1vc3BoZXJlLmNvbSIsImlhdCI6MTYzNDMwMTYxMiwiYXVkIjoiNTViMTBiMzA2OTcwMmQyZmQ1MzgwNTAwIiwiY3JpdCI6WyJleHAiXSwiZXhwIjoxNjM0MzA4ODEyLCJqdGkiOiI2N2RmYzJjZi03YTMxLTRmNzYtYTRkZi00MzMzNGIwZmExYzgiLCJzY29wZSI6InB1YmxpYyBjbHViIGNsdWI6Y29udGFjdCBjbGllbnQgY2xpZW50OmNvbnRhY3QgaG91c2Vob2xkOmRldGFpbHMgaG91c2Vob2xkOm1lbWJlcnMgdXNlcjpwcm9maWxlIHVzZXI6Y29udGFjdCB1c2VyOmhvdXNlaG9sZHMgdXNlcjpyb2xlcyB1c2VyOnRlYW1zIHVzZXI6bWVtYmVycyB0ZWFtOnJvc3RlcnMgdGVhbTphY3Rpdml0aWVzIHdyaXRlIiwidXNlciI6eyJpZCI6IjU3NGYwMGYxZjdmZmQ5NmMwZjAwYzEzNiIsImVtYWlsIjoidGVzdDEwMDAxQGV4YW1wbGUuY29tIn19.olyDvlo5D6CkmRwj7fjtuCoRt-FVs8JcJYvvDkpQ2ONjDkYRJd_BI-ob5qJfEEDfnoRdfuxh7H5MCPGJyr45Dw",
            },
            body: {
               
                //"id_Token" : {"login_token: eyJ0eXAiOiJKV1QiLCJraWQiOiJjYTZkYjNiMDJkNzA0YzI4N2ZlY2QxNTU3OTVmODNlMTRjNzk2NTFhZGNmMzAxNzM4OTJlNzg0M2M1NDk1NWI0IiwiYWxnIjoiSFM1MTIifQ.eyJpc3MiOiJkZW1vc3BoZXJlLmNvbSIsImlhdCI6MTYzNDMwMTYxMiwiYXVkIjoiNTViMTBiMzA2OTcwMmQyZmQ1MzgwNTAwIiwiY3JpdCI6WyJleHAiXSwiZXhwIjoxNjM0MzA4ODEyLCJqdGkiOiI2N2RmYzJjZi03YTMxLTRmNzYtYTRkZi00MzMzNGIwZmExYzgiLCJzY29wZSI6InB1YmxpYyBjbHViIGNsdWI6Y29udGFjdCBjbGllbnQgY2xpZW50OmNvbnRhY3QgaG91c2Vob2xkOmRldGFpbHMgaG91c2Vob2xkOm1lbWJlcnMgdXNlcjpwcm9maWxlIHVzZXI6Y29udGFjdCB1c2VyOmhvdXNlaG9sZHMgdXNlcjpyb2xlcyB1c2VyOnRlYW1zIHVzZXI6bWVtYmVycyB0ZWFtOnJvc3RlcnMgdGVhbTphY3Rpdml0aWVzIHdyaXRlIiwidXNlciI6eyJpZCI6IjU3NGYwMGYxZjdmZmQ5NmMwZjAwYzEzNiIsImVtYWlsIjoidGVzdDEwMDAxQGV4YW1wbGUuY29tIn19.olyDvlo5D6CkmRwj7fjtuCoRt-FVs8JcJYvvDkpQ2ONjDkYRJd_BI-ob5qJfEEDfnoRdfuxh7H5MCPGJyr45Dw"},
                "operationName":"myPermissions",
                "variables":{},
                "query":"query myPermissions {myPermissions { permissions } }"
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            localStorage.setItem('diiPermissions', res.body.operationName)
            //cy.log(JSON.stringify(res.body.id_Token))
      })
    })


})