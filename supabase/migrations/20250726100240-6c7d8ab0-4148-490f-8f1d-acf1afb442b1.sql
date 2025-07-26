-- Create storage bucket for question papers
INSERT INTO storage.buckets (id, name, public) 
VALUES ('question-papers', 'question-papers', true);

-- Create question_papers table
CREATE TABLE public.question_papers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  board TEXT NOT NULL,
  year INTEGER NOT NULL,
  session TEXT NOT NULL, -- 'May/June', 'Oct/Nov', 'Feb/Mar'
  paper_number TEXT NOT NULL, -- '1', '2', '3', etc.
  variant TEXT, -- 'A', 'B', 'C', etc.
  level TEXT NOT NULL, -- 'O Level', 'A Level', 'IGCSE'
  file_path TEXT NOT NULL, -- path to file in storage
  file_size BIGINT,
  download_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.question_papers ENABLE ROW LEVEL SECURITY;

-- Create policies - allow everyone to view and download
CREATE POLICY "Everyone can view question papers" 
ON public.question_papers 
FOR SELECT 
USING (is_active = true);

-- Create storage policies for question papers
CREATE POLICY "Question papers are publicly viewable" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'question-papers');

CREATE POLICY "Authenticated users can upload question papers" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'question-papers' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update question papers" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'question-papers' AND auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_question_papers_subject ON public.question_papers(subject);
CREATE INDEX idx_question_papers_board ON public.question_papers(board);
CREATE INDEX idx_question_papers_year ON public.question_papers(year);
CREATE INDEX idx_question_papers_level ON public.question_papers(level);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_question_papers_updated_at
BEFORE UPDATE ON public.question_papers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to increment download count
CREATE OR REPLACE FUNCTION public.increment_download_count(paper_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.question_papers 
  SET download_count = download_count + 1 
  WHERE id = paper_id;
END;
$$;