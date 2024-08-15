import { useState } from "react";
import { useRouter } from "./RouterContext"
import Routes, { config } from "./Routes";

const Handle_Exeptions = (path) => {
    if (path.trim() == '/') {
        path = ""
    }

    return path
}




export default function Router() {
    const { History } = useRouter();
    const [compo, setCompo] = useState("");


    const params_manager = (path_data,param, value) => {

          if(param.type == "string"){
            path_data[param.name] = value
            return ""
        
            
          }else if (param == "int"){

          }
    }   


    let route_found;
    if (History.length > 0) {
        let { pathname, hash ,search } = window.location;
        pathname = pathname.replace(config.gh_repo, "");
        hash = hash.replace(config.gh_repo, "");
        pathname = Handle_Exeptions(pathname);
        hash = Handle_Exeptions(hash);
        const path_data ={param : {}};

        const search_route = (route) => {
            route = route.split("/").filter(r => r != "");
            let coincidences = [];
            const final = [];
                route.map((r, i) => {
                History.map(h => {
                    const hp = h.path.cleared.split("/").filter(r => r != "");

                    if (hp[i] == r && coincidences.indexOf(h) == -1) {
                        coincidences.push(h)
                    }
                })


            })

            coincidences.map((c, i) => {
                let paramaux =0;
                if (route.length == c.path.cleared.split("/").filter(r => r != "").length) {
                    c.path.cleared.split("/").filter(r => r != "").map((cpath, j) => {
                        if (cpath.includes('p|')) {
                            
                            params_manager(path_data.param,c.path.param.param[paramaux], route[j] )
                            paramaux++

                        }
                    })

                }

            })

            
            if(search){
                const urlParams = new URLSearchParams(search);

                // Convierte los parámetros a un objeto
                const paramsObject = {};
                for (const [key, value] of urlParams.entries()) {
                  paramsObject[key] = value;
                }

                
                path_data.query = paramsObject;
            }


            return path_data

        }
        console.log(search_route(pathname));
        


        if (typeof compo == 'string') {
            if (pathname.length > 0) {


                route_found = History.filter(p => p.path.cleared.trim() == pathname || "/" + p.path.cleared.trim() == pathname)[0];
                if (route_found) {
                    (async () => {
                        const comp = await route_found.compo();

                        setCompo(comp)
                    })()
                }
            } else if (hash.length > 0) {
                hash = hash.replace("#/", "");


                route_found = History.filter(p => p.path.cleared.trim() == hash || "/" + p.path.cleared.trim() == hash)[0];

                if (route_found) {
                    (async () => {
                        const comp = await route_found.compo();

                        setCompo(comp)
                    })()
                }

            } else {

                route_found = History.filter(p => p.path.cleared.trim() == "")[0];
                (async () => {
                    const comp = await route_found.compo();
                    setCompo(comp)
                })()

            }


            if (!route_found) {

            }
        }


    }


    return <>
        {compo}
    </>
}