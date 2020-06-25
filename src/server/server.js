// import {gql} from "apollo-server-core";
//
// const express = require('express')
// const port = "https://booster.games/api/"
// const graphqlHTTP = require('express-graphql')
// const cors = require('cors')
// const {buildSchema} = require('graphql')
// const {readFileSync} = require('fs')
//
// const query = gql`
//     type CategoryNode implements Node{
//         id: ID!
//         name: String!
//     }
// `
//
// const resolvers = {
//     Query: {
//         getGame: () => {
//             return allData.id, allData.name
//     }
//
// // const schemaString = readFileSync('./schema.graphql', {encoding: 'utf8'})
// // const schema = buildSchema(schemaString)
//
// const allData = {
//     category: {
//         id: "Q2F0ZWdvcnlOb2RlOjEw",
//         slug: "fortnite",
//         name: "Fortnite",
//         children: {
//             edges: [{
//                 node: {
//                     name: "Fortnite hourly boost",
//                     faq: {
//                         edges: [{
//                             node: {
//                                 question: "How does Fortnite boosting work?"
//                             }
//                         }]
//                     }
//                 }
//             }]
//         }
//     },
//     offers: {
//         edges: [{
//             node: {
//                 faq: {
//                     edges: [{
//                         node: {
//                             question: "How does Fortnite boosting work?"
//                         }
//                     }]
//                 }
//             }
//         }]
//     },
//     faq: {
//         edges: [{
//             node: {
//                 question: "How does Fortnite boosting work?"
//             }
//         }]
//     }
// }
//
//
// const root = {
//     getCategory: () => {
//         return allData
//     },
//     getGame: () => {
//         return allData.id, allData.name
//     },
//     getChildren: params => {
//         return allData.children.find(({name}) => params.name === name)
//     },
//     getOffers: () => {
//         return allData.offers
//     },
//     getFaq: () => {
//         return allData.faq
//     }
// }
//
//
// const app = express()
//
// app.use(cors())
//
// app.use(
//     '/api', graphqlHTTP({
//         schema: schema,
//         rootValue: root,
//         graphiql: true
//     })
// )
//
// app.listen(port)
//
// console.log('Running a GraphQL API server at https://booster.games/api/')