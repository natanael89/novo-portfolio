import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { Toaster as Sonner} from "../components/ui/sonner"
import { TooltipProvider } from "../components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Index from "../pages/Index"
import NotFound from "../pages/NotFound"


function App() {
 

  return (
    <QueryClientProvider client={new QueryClient()}>
     <TooltipProvider>
          {/* <Toaster /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
            {/* Add more routes here */}
          </Routes>
        </Router>

     </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
