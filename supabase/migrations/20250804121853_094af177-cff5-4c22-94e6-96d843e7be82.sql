-- Insert sample IGCSE past papers data
INSERT INTO public.question_papers (
  title, subject, board, year, session, paper_number, variant, level, file_path, file_size, download_count
) VALUES 
-- Physics Papers
('IGCSE Physics Paper 21 February/March 2024', 'Physics', 'IGCSE', 2024, 'February/March', '0625', '21', 'IGCSE', 'physics/2024/feb-mar/0625_21.pdf', 2048576, 0),
('IGCSE Physics Paper 22 February/March 2024', 'Physics', 'IGCSE', 2024, 'February/March', '0625', '22', 'IGCSE', 'physics/2024/feb-mar/0625_22.pdf', 2048576, 0),
('IGCSE Physics Paper 21 May/June 2024', 'Physics', 'IGCSE', 2024, 'May/June', '0625', '21', 'IGCSE', 'physics/2024/may-jun/0625_21.pdf', 2048576, 0),
('IGCSE Physics Paper 23 October/November 2023', 'Physics', 'IGCSE', 2023, 'October/November', '0625', '23', 'IGCSE', 'physics/2023/oct-nov/0625_23.pdf', 2048576, 0),

-- Mathematics Papers
('IGCSE Mathematics Paper 21 May/June 2024', 'Mathematics', 'IGCSE', 2024, 'May/June', '0580', '21', 'IGCSE', 'mathematics/2024/may-jun/0580_21.pdf', 1945600, 0),
('IGCSE Mathematics Paper 22 May/June 2024', 'Mathematics', 'IGCSE', 2024, 'May/June', '0580', '22', 'IGCSE', 'mathematics/2024/may-jun/0580_22.pdf', 1945600, 0),
('IGCSE Mathematics Paper 41 October/November 2023', 'Mathematics', 'IGCSE', 2023, 'October/November', '0580', '41', 'IGCSE', 'mathematics/2023/oct-nov/0580_41.pdf', 1945600, 0),

-- Chemistry Papers
('IGCSE Chemistry Paper 21 February/March 2024', 'Chemistry', 'IGCSE', 2024, 'February/March', '0620', '21', 'IGCSE', 'chemistry/2024/feb-mar/0620_21.pdf', 2148576, 0),
('IGCSE Chemistry Paper 22 May/June 2024', 'Chemistry', 'IGCSE', 2024, 'May/June', '0620', '22', 'IGCSE', 'chemistry/2024/may-jun/0620_22.pdf', 2148576, 0),

-- Biology Papers
('IGCSE Biology Paper 21 May/June 2024', 'Biology', 'IGCSE', 2024, 'May/June', '0610', '21', 'IGCSE', 'biology/2024/may-jun/0610_21.pdf', 2248576, 0),
('IGCSE Biology Paper 23 October/November 2023', 'Biology', 'IGCSE', 2023, 'October/November', '0610', '23', 'IGCSE', 'biology/2023/oct-nov/0610_23.pdf', 2248576, 0),

-- English Language Papers
('IGCSE English Language Paper 21 May/June 2024', 'English Language', 'IGCSE', 2024, 'May/June', '0500', '21', 'IGCSE', 'english/2024/may-jun/0500_21.pdf', 1848576, 0),
('IGCSE English Language Paper 22 October/November 2023', 'English Language', 'IGCSE', 2023, 'October/November', '0500', '22', 'IGCSE', 'english/2023/oct-nov/0500_22.pdf', 1848576, 0);