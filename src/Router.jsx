import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./home'))
const Collection = lazy(() => import('./components/views/Collection'))

export default function Router () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}