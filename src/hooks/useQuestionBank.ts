import { useState, useEffect } from 'react';

export interface Question {
  id: string;
  type: string;
  content: string;
  answer: string;
  difficulty: number;
  marks: string;
  subject: string;
  topic: string;
  chapter: string;
}

export interface QuestionFilters {
  subject?: string;
  difficulty?: number;
  topic?: string;
  marks?: string;
}

export const useQuestionBank = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<QuestionFilters>({});

  // In a real app, this would fetch from your database
  const fetchQuestions = async (filters: QuestionFilters = {}) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data - replace with actual API call
    const mockQuestions: Question[] = [
      {
        id: '1',
        type: '(a)(i)',
        content: 'Describe how to measure the length of a curved line using simple apparatus.',
        answer: 'Use a flexible measuring tape or place a string along the curved line, then measure the string with a ruler.',
        difficulty: 2,
        marks: 'B1',
        subject: 'Physics',
        topic: 'Measurements',
        chapter: 'Physical Quantities and Units'
      },
      {
        id: '2',
        type: '(a)(ii)',
        content: 'Explain why it is better to measure several objects together rather than one at a time.',
        answer: 'Measuring several objects together reduces percentage error and improves accuracy by averaging out small measurement errors.',
        difficulty: 3,
        marks: 'A3',
        subject: 'Physics',
        topic: 'Measurements',
        chapter: 'Physical Quantities and Units'
      },
      // Add more mock questions as needed
    ];

    // Apply filters
    let filteredQuestions = mockQuestions;
    
    if (filters.subject) {
      filteredQuestions = filteredQuestions.filter(q => q.subject === filters.subject);
    }
    
    if (filters.difficulty) {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty <= filters.difficulty);
    }
    
    if (filters.topic) {
      filteredQuestions = filteredQuestions.filter(q => q.topic === filters.topic);
    }

    setQuestions(filteredQuestions);
    setLoading(false);
  };

  const updateFilters = (newFilters: QuestionFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    fetchQuestions({ ...filters, ...newFilters });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return {
    questions,
    loading,
    filters,
    updateFilters,
    refetch: () => fetchQuestions(filters)
  };
};