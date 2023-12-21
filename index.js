import { Version3Client } from "jira.js"

// la clé d'API
const API_TOKEN = 'ATATT3xFfGF0_bP9Vd7RsBco45qvO9TagdNPGjlJ_yI8A_hURmxQuUpssz0BWxwPZFdQVVbAPWoNpOBI0HbGE9SOSxkLnOg1qJnLsgjDuA3QXKuAKIfWivllWff-KVsCK7H_JaMvh66xpYwqw6AooqVze2wbE5xFK8h3x-RhCUF9aNpEOYh7q5w=FDB4FFA3'
// le nom d'utilisateur
const API_USERNAME = 'laurentmwn@gmail.com'
// la cible
const API_HOST = "https://labeya.atlassian.net"


const client =  new Version3Client({ 
    host: API_HOST, 
    authentication: {email: API_USERNAME, apiToken: API_TOKEN}, 
    newErrorHandling: true
})

console.log(client.tasks.getTask('LAB-2'));



