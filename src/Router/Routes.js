const name = '';

class Config {
    constructor({gh_repo='', hash=false}) {
        this.gh_repo = gh_repo;
        this.hash = hash;
    }

}
    // {
    //     path: ``,
    //     e: (async () => (await import("../Components/Home")).default),
    // }, 
    // {
    //     path: `err`,
    //     e: (async () => (await import("./404.jsx")).default),
    // }, 
    // {
    //     path: `perro`,
    //     e: (async () => (await import("../Components/Perro.jsx")).default),
    // }, 
    // {
    //     path: `perro/:id<str>`,
    //     e: (async () => (await import("../Components/Perro.jsx")).default),
    // }, 
    // {
    //     path: `perro/:id<str>/:name<str>`,
    //     e: (async () => (await import("../Components/Perro.jsx")).default),
    // }, 


export const config = new Config({gh_repo: '/RouterTest/'});
export default [

 
]

