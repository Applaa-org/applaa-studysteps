import { useState } from "react";
import { useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, BookOpen, CheckCircle2, Circle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { studyTopics } from "@/data/studyTopics";
import { StepCard } from "@/components/StepCard";

const TopicDetail = () => {
  const { topicId } = useParams({ from: "/topic/$topicId" });
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());
  
  const topic = studyTopics.find(t => t.id === parseInt(topicId));
  
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Topic not found</h2>
          <Link to="/topics">
            <Button>Back to Topics</Button>
          </Link>
        </div>
      </div>
    );
  }

  const completedSteps = topic.steps.filter(step => step.completed).length;
  const progressPercentage = Math.round((completedSteps / topic.steps.length) * 100);

  const handleToggleComplete = (stepId: number) => {
    const step = topic.steps.find(s => s.id === stepId);
    if (step) {
      step.completed = !step.completed;
      // Force re-render by updating state
      setExpandedSteps(new Set(expandedSteps));
    }
  };

  const handleToggleExpand = (stepId: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedSteps(newExpanded);
  };

  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/topics">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Topics
            </Button>
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src={topic.image} 
                alt={topic.title}
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className={difficultyColors[topic.difficulty]}>
                    {topic.difficulty}
                  </Badge>
                  <Badge variant="outline">{topic.category}</Badge>
                </div>
                
                <h1 className="text-3xl font-bold mb-3">{topic.title}</h1>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-1" />
                    {topic.totalSteps} steps
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {topic.estimatedDuration}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-gray-600">
                      {completedSteps} of {topic.steps.length} steps completed
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="text-right text-sm font-medium text-blue-600">
                    {progressPercentage}% Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Learning Steps</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {completedSteps > 0 && (
                <>
                  <CheckCircle2 className="text-green-600" size={16} />
                  <span>{completedSteps} completed</span>
                </>
              )}
              {topic.steps.length - completedSteps > 0 && (
                <>
                  <Circle className="text-gray-400" size={16} />
                  <span>{topic.steps.length - completedSteps} remaining</span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {topic.steps.map((step) => (
              <StepCard
                key={step.id}
                step={step}
                onToggleComplete={handleToggleComplete}
                isExpanded={expandedSteps.has(step.id)}
                onToggleExpand={handleToggleExpand}
              />
            ))}
          </div>
        </div>

        {/* Completion Message */}
        {progressPercentage === 100 && (
          <Card className="mt-8 bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <CheckCircle2 className="text-green-600 size-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
              <p className="text-gray-600">
                You've completed all steps in {topic.title}. Great job on your achievement!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TopicDetail;