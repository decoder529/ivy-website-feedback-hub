import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Check, User } from 'lucide-react';

interface Question {
  id: string;
  type: string;
  content: string;
  answer: string;
  difficulty: number;
  marks: string;
  subject: string;
  topic: string;
}

const WorksheetBuilder = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState(2);
  const [activeTab, setActiveTab] = useState('question');

  // Sample questions data
  const questions: Question[] = [
    {
      id: '1',
      type: '(a)(i)',
      content: 'rule(r) / metre stick / tape measure',
      answer: 'Use a ruler, metre stick, or tape measure to measure length accurately.',
      difficulty: 2,
      marks: 'B1',
      subject: 'Physics',
      topic: 'Measurements'
    },
    {
      id: '2',
      type: '(a)(ii)',
      content: 'place n tiles on top of each other owtte AND n = 10 or more',
      answer: 'Stack multiple tiles and divide total thickness by number of tiles for average.',
      difficulty: 2,
      marks: 'B1',
      subject: 'Physics',
      topic: 'Measurements'
    },
    {
      id: '3',
      type: '(b)(i)',
      content: '(volume =) (25 × 20 × 0.30 =) 150 (cm³)',
      answer: 'Volume = length × width × height = 25 × 20 × 0.30 = 150 cm³',
      difficulty: 3,
      marks: 'B1',
      subject: 'Physics',
      topic: 'Volume'
    },
    {
      id: '4',
      type: '(b)(ii)',
      content: '2.7',
      answer: 'The density of aluminum is 2.7 g/cm³',
      difficulty: 2,
      marks: 'A3',
      subject: 'Physics',
      topic: 'Density'
    }
  ];

  const handleQuestionSelect = (questionId: string) => {
    setSelectedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const getMarkStyle = (mark: string) => {
    switch (mark) {
      case 'A3': return 'bg-green-100 text-green-800 border-green-200';
      case 'B1': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'C1': case 'C2': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <User className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold">Deepak</p>
              <p className="text-sm text-muted-foreground">deepakextc.yadav@gmail.com</p>
            </div>
          </div>
        </div>
        <Button className="bg-primary text-primary-foreground">
          Build Worksheet
        </Button>
      </div>

      {/* Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="question">Question</TabsTrigger>
                <TabsTrigger value="answer">Answer</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-sm">Not Completed</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{difficulty}/5 difficulty</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`w-8 h-8 rounded text-sm ${
                        level <= difficulty 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <span className="text-sm">Difficulty</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Questions Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {questions
                  .filter(q => q.difficulty <= difficulty)
                  .map((question) => (
                    <tr key={question.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 w-20">
                        <Badge variant="outline" className="text-xs">
                          {question.type}
                        </Badge>
                      </td>
                      <td className="p-4 flex-1">
                        <div className="text-sm">
                          {activeTab === 'question' ? question.content : question.answer}
                        </div>
                      </td>
                      <td className="p-4 w-20">
                        <Badge className={`text-xs ${getMarkStyle(question.marks)}`}>
                          {question.marks}
                        </Badge>
                      </td>
                      <td className="p-4 w-16">
                        <Button
                          variant={selectedQuestions.includes(question.id) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleQuestionSelect(question.id)}
                          className="w-full"
                        >
                          {selectedQuestions.includes(question.id) ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Selected Questions Summary */}
      {selectedQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Selected Questions ({selectedQuestions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Ready to build worksheet with {selectedQuestions.length} questions
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add to Worksheet
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WorksheetBuilder;