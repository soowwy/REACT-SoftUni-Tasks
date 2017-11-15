const appKey = 'kid_SyRGSuEyz'
const appSecret = '883c2f937c4a48b3b37b4b85ebfa6c04'
const hostUrl = 'https://baas.kinvey.com'


let reqHandler = {
    login: (payload) => {
       return fetch(`${hostUrl}/user/${appKey}/login`, {
                method: 'POST',
                headers: {
                    Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload)
            }).then(res => {
                return res.json()
                
            })
    },
    register: (payload) => {
        return fetch(`${hostUrl}/user/${appKey}`, {
                 method: 'POST',
                 headers: {
                     Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                     'Content-Type': 'application/json'
                 },
                 body : JSON.stringify(payload)
             }).then(res => {
                 return res.json()
                 
             })
     },

    pullPosts: ()=> {        
       return fetch(`${hostUrl}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                Authorization: 'Kinvey ' +  localStorage.getItem('token')
            }
        }).then(res => {
            console.log(res)
            return res.json()
        })
    },

    createPost: payload=> {
        return fetch(`${hostUrl}/appdata/${appKey}/posts`, {
            method: 'POST',
            headers: {
                Authorization: 'Kinvey ' +  localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    }
} 


export default reqHandler