import Inicio from "../views/Inicio.vue"
import Enfermeria from "../views/Enfermeria.vue"
import Bienestar from "../views/Bienestar.vue"
import Biblioteca from "../views/Biblioteca.vue"
import Cafeteria from "../views/Cafeteria.vue"
import Coordinacion from "../views/Coordinacion.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const rutas = [
    {path:"/", component: Inicio},
    {path:"/enfermeria", component:Enfermeria},
    {path:"/bienestar", component: Bienestar},
    {path:"/biblioteca", component: Biblioteca}, 
    {path:"/cafeteria", component: Cafeteria}, 
    {path:"/coordinacion", component: Coordinacion}
]

export const router =createRouter({
    routes: rutas,
    history:createWebHashHistory()
})