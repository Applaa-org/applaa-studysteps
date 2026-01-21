import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, BookOpen, CheckCircle2, Circle } from "lucide-react";
import { StudyStep } from "@/data/studyTopics";

interface StepCardProps {
  step: StudyStep;
  onToggleComplete: (stepId: number) => void;
  isExpanded?: boolean;
  onToggleExpand?: (stepId: number) => void;
}

export function StepCard({ step, onToggleComplete, isExpanded = false, onToggleExpand }: StepCardProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800"
  };

  return (
    <Card className={`mb-4 transition-all duration-300 ${step.completed ? 'bg-green-50 border-green-200' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className="pt-1">
              <Checkbox
                checked={step.completed}
                onCheckedChange={() => onToggleComplete(step.id)}
                className="mt-1"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <CardTitle className={`text-lg ${step.completed ? 'line-through text-gray-500' : ''}`}>
                  {step.title}
                </CardTitle>
                {step.completed && <CheckCircle2 className="text-green-600" size={20} />}
              </div>
              <CardDescription className="text-sm">
                {step.description}
              </CardDescription>
            </div>
          </div>
          <Badge className={difficultyColors[step.difficulty]}>
            {step.difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              {step.estimatedTime}
            </div>
            <div className="flex items-center">
              <BookOpen size={14} className="mr-1" />
              {step.resources.length} resources
            </div>
          </div>
          
          {isExpanded && (
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-medium mb-2">Content</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {step.content}
                </p>
              </div>
              
              {step.resources.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Resources</h4>
                  <ul className="space-y-1">
                    {step.resources.map((resource, index) => (
                      <li key={index} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        • {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          
          {onToggleExpand && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleExpand(step.id)}
              className="mt-2"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}