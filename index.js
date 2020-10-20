module.exports = {
  register: (url, router) => {
    router.get('/ignored', async (q, a) => {
      
      const out = require('child_process').execSync('ls').toString().split('\n')
      
      a.send({
        result: true,
        message: "Hello world from github db2 plugin.",
        ls: out
      })
    })
  }
}
