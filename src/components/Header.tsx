import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BookOpen, Home, Library, BarChart3, Settings, HelpCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              StudySteps
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/topics" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <Library size={18} />
              <span>Topics</span>
            </Link>
            <Link to="/progress" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <BarChart3 size={18} />
              <span>Progress</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              <HelpCircle size={18} />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}