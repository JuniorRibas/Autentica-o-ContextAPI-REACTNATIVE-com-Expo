interface Response {
    token: string,
    user: {
        name: string,
        email: string
    }
}


export  function authLogar() : Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'UIDASUhsdasihudu=sidsa=sdaus-KKDksda54',
                user: {
                    name: 'Junior',
                    email: 'ribas@gmail.com'
                }
            })
        }, 2000)
    })
}