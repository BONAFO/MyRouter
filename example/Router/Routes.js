import Home from "../Components/Home";
import Kurumi from "../Components/Kurumi.jsx";
import Perro from "../Components/Perro.jsx";

const name = '';

class Config {
    constructor({ gh_repo = '', hash = false }) {
        this.gh_repo = gh_repo;
        this.hash = hash;
    }

}


// console.log(typeof <Home></Home>);

export const config = new Config({ gh_repo: '/RouterTest/' });
export default [
    {
        path: `/`,
        e: <><Home></Home></>,
    },
    {
        path: `:id<int>/:name<str>`,
        e: <><Home></Home></>,
    },
    {
        path: `perro`,
        e: <><Perro></Perro></>,
    },
    {
        path: `perro/:id<str>`,
        e: <><Perro></Perro></>,
    },
    {
        path: `perro/:id<str>/nombre`,
        e: <><Perro></Perro></>,
    },
    {
        path: `perro/:id<int>/registro`,
        e: <><Home></Home></>,
    },
    {
        path: `perro/:id<int>/:name<str>`,
        e: <><Kurumi></Kurumi></>,
    },

]

