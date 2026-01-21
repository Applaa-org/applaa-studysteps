import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressComponent } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, TrendingUp, Clock, BookOpen, Award } from "lucide-react";
import { studyTopics } from "@/data/studyTopics";

const Progress = () => {
  const totalTopics = studyTopics.length;
  const completedTopics = studyTopics.filter(topic => topic.progress === 100).length;
  const inProgressTopics = studyTopics.filter(topic => topic.progress > 0 && topic.progress < 100).length;
  const totalSteps = studyTopics.reduce((sum, topic) => sum + topic.totalSteps, 0);
  const completedSteps = studyTopics.reduce((sum, topic) => 
    sum + Math.floor((topic.progress / 100) * topic.totalSteps), 0
  );
  const overallProgress = Math.round((completedSteps / totalSteps) * 100);

  const achievements = [
    {
      id: 1,
      title: "First Step",
      description: "Complete your first learning step",
      icon: Target,
      unlocked: completedSteps > 0,
      color: "text-blue-600"
    },
    {
      id: 2,
      title: "Quick Learner",
      description: "Complete a topic in one session",
      icon: TrendingUp,
      unlocked: completedTopics > 0,
      color: "text-green-600"
    },
    {
      id: 3,
      title: "Dedicated Student",
      description: "Complete 5 topics",
      icon: Trophy,
      unlocked: completedTopics >= 5,
      color: "text-yellow-600"
    },
    {
      id: 4,
      title: "Master Learner",
      description: "Complete all available topics",
      icon: Award,
      unlocked: completedTopics === totalTopics,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
          <p className="text-gray-600">Track your learning journey and achievements</p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallProgress}%</div>
              <ProgressComponent value={overallProgress} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Topics Completed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedTopics}/{totalTopics}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {inProgressTopics} in progress
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Steps Completed</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedSteps}</div>
              <p className="text-xs text-muted-foreground mt-1">
                of {totalSteps} total steps
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5h</div>
              <p className="text-xs text-muted-foreground mt-1">
                estimated time
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Topic Progress */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Topic Progress</h2>
          <div className="grid gap-4">
            {studyTopics.map((topic) => (
              <Card key={topic.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="text-gray-400" size={20} />
                      <div>
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                        <CardDescription>{topic.category}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{topic.progress}%</div>
                      <Badge variant={topic.progress === 100 ? "default" : "secondary"}>
                        {topic.progress === 100 ? "Completed" : 
                         topic.progress > 0 ? "In Progress" : "Not Started"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ProgressComponent value={topic.progress} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{Math.floor((topic.progress / 100) * topic.totalSteps)} of {topic.totalSteps} steps</span>
                    <span>{topic.estimatedDuration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`transition-all duration-300 ${
                  achievement.unlocked 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200' 
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <CardHeader className="text-center pb-3">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    achievement.unlocked 
                      ? 'bg-white shadow-lg' 
                      : 'bg-gray-200'
                  }`}>
                    <achievement.icon 
                      className={achievement.unlocked ? achievement.color : "text-gray-400"} 
                      size={32} 
                    />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {achievement.description}
                  </CardDescription>
                  {achievement.unlocked && (
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Unlocked
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;