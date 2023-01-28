// router/index.tsx
import React, { Suspense,useMemo } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom'
import { Spin } from 'antd'
import Route from './routes'
import { SyncRoute } from './route.d'

const routes: SyncRoute.Routes[] = [
 ...Route
 //  加上你store 保存的路由集合的合并分类，仅加载执行一次 注入到Route中
]
const RegisterRouter = (routes: SyncRoute.Routes[]): RouteObject[] => {
  const SyncRouter = (routes: SyncRoute.Routes[]): RouteObject[] => {
    let mRouteTable: RouteObject[] = []
    
    routes.forEach(route => {
      mRouteTable.push({
        path: route.path,
        element: (
          <Suspense fallback={ <Spin tip="Loading..."></Spin> }>
            <route.component role={route.meta?.buttonList}/>
          </Suspense>
        ),
        children: route.children &&  SyncRouter(route.children)
      })
    })
    return mRouteTable
  }
  return SyncRouter(routes)
}

export default () => useRoutes(useMemo<RouteObject[]>(()=>RegisterRouter(routes),[]))
