import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Topics from "./pages/Topics";
import TopicDetail from "./pages/TopicDetail";
import Progress from "./pages/Progress";
import About from "./pages/About";
import Header from "./components/Header";

const queryClient = new QueryClient();

// Create root route with header
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <Outlet />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create topics route
const topicsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/topics',
  component: Topics,
})

// Create topic detail route
const topicDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/topic/$topicId',
  component: TopicDetail,
})

// Create progress route
const progressRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/progress',
  component: Progress,
})

// Create about route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  topicsRoute,
  topicDetailRoute,
  progressRoute,
  aboutRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;