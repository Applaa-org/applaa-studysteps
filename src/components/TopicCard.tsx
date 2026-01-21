import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, Star } from "lucide-react";
import { StudyTopic } from "@/data/studyTopics";
import { Link } from "@tanstack/react-router";

interface TopicCardProps {
  topic: StudyTopic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    advanced: "bg-red-100 text-red-800"
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge className={difficultyColors[topic.difficulty]}>
            {topic.difficulty}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={14} className="mr-1" />
            {topic.estimatedDuration}
          </div>
        </div>
        <img 
          src={topic.image} 
          alt={topic.title}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
        <CardTitle className="text-lg">{topic.title}</CardTitle>
        <CardDescription className="text-sm">
          {topic.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{topic.progress}%</span>
          </div>
          <Progress value={topic.progress} className="h-2" />
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <BookOpen size={14} className="mr-1" />
              {topic.totalSteps} steps
            </div>
            <div className="flex items-center">
              <Star size={14} className="mr-1" />
              {topic.category}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {topic.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to="/topic/$topicId" params={{ topicId: topic.id.toString() }} className="w-full">
          <Button className="w-full">
            {topic.progress > 0 ? 'Continue Learning' : 'Start Learning'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}