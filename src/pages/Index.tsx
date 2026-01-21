import { MadeWithApplaa } from "@/components/made-with-applaa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { studyTopics } from "@/data/studyTopics";
import { TopicCard } from "@/components/TopicCard";

const Index = () => {
  const featuredTopics = studyTopics.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            Educational Support Platform
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Master Any Subject Step by Step
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Break complex topics into manageable steps, track your progress, and achieve your learning goals with StudySteps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/topics">
              <Button size="lg" className="px-8">
                <BookOpen className="mr-2" size={20} />
                Browse Topics
              </Button>
            </Link>
            <Link to="/progress">
              <Button variant="outline" size="lg" className="px-8">
                <TrendingUp className="mr-2" size={20} />
                View Progress
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <CardTitle>Step-Based Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Complex topics broken down into small, manageable steps that build on each other for effective learning.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <CardTitle>Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Visual progress indicators help you stay motivated and see how far you've come in your learning journey.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <CardTitle>Expert Curated</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All study topics and steps are carefully curated by experts to ensure quality and effectiveness.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Topics</h2>
          <p className="text-gray-600">Start your learning journey with these popular topics</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/topics">
            <Button variant="outline" size="lg">
              View All Topics
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who are mastering new skills with StudySteps
          </p>
          <Link to="/topics">
            <Button size="lg" variant="secondary" className="px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <MadeWithApplaa />
    </div>
  );
};

export default Index;