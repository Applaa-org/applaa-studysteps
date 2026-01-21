import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Shield, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About StudySteps</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering learners worldwide with structured, step-by-step educational content designed to make complex topics accessible and manageable.
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To democratize education by breaking down complex subjects into digestible, sequential steps that anyone can follow at their own pace. We believe learning should be accessible, engaging, and effective for everyone.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-green-600" size={24} />
              </div>
              <CardTitle>Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                We use proven educational methodologies to structure content logically, ensuring each step builds upon previous knowledge. Our platform adapts to different learning styles and provides multiple resources for comprehensive understanding.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose StudySteps?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-purple-600" size={32} />
                </div>
                <CardTitle>Expert-Curated Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All topics and steps are carefully crafted by subject matter experts to ensure accuracy and educational value.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-orange-600" size={32} />
                </div>
                <CardTitle>Community-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join a community of learners sharing insights, asking questions, and supporting each other's educational journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-pink-600" size={32} />
                </div>
                <CardTitle>Passionate Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're dedicated to your success and continuously improve our platform based on user feedback and educational research.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <Card className="bg-yellow-50 border-yellow-200 mb-12">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Shield className="text-yellow-600" size={24} />
              </div>
              <div>
                <CardTitle className="text-yellow-800">Educational Disclaimer</CardTitle>
                <CardDescription className="text-yellow-700">
                  Important information about our educational support services
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-yellow-800">Educational Support Only</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                StudySteps is designed to provide educational support and supplementary learning materials. We are not an accredited educational institution, and our content should not be considered a substitute for formal education, professional training, or certified academic programs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-yellow-800">Content Accuracy</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                While we strive to provide accurate and up-to-date information, educational content may become outdated. We recommend cross-referencing important information with official sources, academic institutions, or subject matter experts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-yellow-800">Learning Outcomes</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Individual learning outcomes may vary based on prior knowledge, learning style, and time invested. Progress indicators are for motivational purposes and do not guarantee mastery of the subject matter.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-yellow-800">Professional Advice</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                For career decisions, academic planning, or professional certification requirements, please consult with qualified educational advisors, career counselors, or relevant professional organizations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2">
              support@studysteps.com
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              @StudySteps
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;