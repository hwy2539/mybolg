import { Children, Component, lazy } from "react";

export default [
    {
        path:'/home',
        component: lazy(() => import('@/views/home')),
        // meta:{},
        children:[]
    },
    {
        path:'/blog',
        component:lazy(()=>import('@/views/blog')),
        // meta:{}
        children:[]
    }
]
    
