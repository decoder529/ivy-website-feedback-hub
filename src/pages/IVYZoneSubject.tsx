import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '@/components/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, FileText, Eye, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IVYZoneSubject = () => {
  const { subject } = useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/ivyzone');
    }
  }, [user, loading, navigate]);

  // Sample data structure similar to the reference site
  const years = [
    { year: '2025', sessions: ['MAY-JUNE-2025', 'OCT-NOV-2025'] },
    { year: '2024', sessions: ['MAY-JUNE-2024', 'OCT-NOV-2024'] },
    { year: '2023', sessions: ['MAY-JUNE-2023', 'OCT-NOV-2023'] },
    { year: '2022', sessions: ['MAY-JUNE-2022', 'OCT-NOV-2022'] },
    { year: '2021', sessions: ['MAY-JUNE-2021', 'OCT-NOV-2021'] },
    { year: '2020', sessions: ['MAY-JUNE-2020', 'OCT-NOV-2020'] },
    { year: '2019', sessions: ['MAY-JUNE-2019', 'OCT-NOV-2019'] },
    { year: '2018', sessions: ['MAY-JUNE-2018', 'OCT-NOV-2018'] },
    { year: '2017', sessions: ['MAY-JUNE-2017', 'OCT-NOV-2017'] },
    { year: '2016', sessions: ['MAY-JUNE-2016', 'OCT-NOV-2016'] },
    { year: '2015', sessions: ['MAY-JUNE-2015', 'OCT-NOV-2015'] },
  ];

  const getSubjectIcon = (subjectName: string) => {
    switch (subjectName?.toLowerCase()) {
      case 'physics': return '⚛️';
      case 'chemistry': return '🧪';
      case 'mathematics': return '📐';
      case 'biology': return '🧬';
      default: return '📚';
    }
  };

  const handleSessionClick = (session: string) => {
    navigate(`/ivyzone/${subject}/${session.toLowerCase().replace(/\s+/g, '-')}`);
  };

  // Subject-specific paper options with year-specific URLs
  const paperData = {
    physics: {
      2025: {
        'MAY-JUNE-2025': {
          HL: {
            qp: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-hl-qp/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-hl-qp/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-hl-qp/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-hl-qp/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-hl-qp/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-hl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-hl-ms/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-hl-ms/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-hl-ms/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-hl-ms/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-hl-ms/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-sl-qp/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-sl-qp/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-sl-qp/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-sl-qp/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-sl-qp/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-sl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-sl-ms/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-sl-ms/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-sl-ms/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-sl-ms/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-sl-ms/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-sl-ms/view'
            }
          }
        },
        'OCT-NOV-2025': {
          HL: {
            qp: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-hl-qp/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-hl-qp/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-hl-qp/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-hl-qp/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-hl-qp/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-hl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-hl-ms/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-hl-ms/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-hl-ms/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-hl-ms/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-hl-ms/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-sl-qp/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-sl-qp/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-sl-qp/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-sl-qp/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-sl-qp/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-sl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-sl-ms/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-sl-ms/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-sl-ms/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-sl-ms/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-sl-ms/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-sl-ms/view'
            }
          }
        }
      },
      2024: {
        'MAY-JUNE-2024': {
          HL: {
            qp: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-hl-qp/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-hl-qp/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-hl-qp/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-hl-qp/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-hl-qp/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-hl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-hl-ms/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-hl-ms/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-hl-ms/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-hl-ms/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-hl-ms/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-sl-qp/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-sl-qp/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-sl-qp/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-sl-qp/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-sl-qp/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-sl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz1-sl-ms/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p1-tz2-sl-ms/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz1-sl-ms/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p2-tz2-sl-ms/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz1-sl-ms/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-mj-p3-tz2-sl-ms/view'
            }
          }
        },
        'OCT-NOV-2024': {
          HL: {
            qp: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-hl-qp/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-hl-qp/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-hl-qp/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-hl-qp/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-hl-qp/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-hl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-hl-ms/view',
              'Physics_paper_1__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-hl-ms/view',
              'Physics_paper_2__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-hl-ms/view',
              'Physics_paper_2__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-hl-ms/view',
              'Physics_paper_3__TZ1_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-hl-ms/view',
              'Physics_paper_3__TZ2_HL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-sl-qp/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-sl-qp/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-sl-qp/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-sl-qp/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-sl-qp/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-sl-qp/view'
            },
            ms: {
              'Physics_paper_1__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz1-sl-ms/view',
              'Physics_paper_1__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p1-tz2-sl-ms/view',
              'Physics_paper_2__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz1-sl-ms/view',
              'Physics_paper_2__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p2-tz2-sl-ms/view',
              'Physics_paper_3__TZ1_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz1-sl-ms/view',
              'Physics_paper_3__TZ2_SL': 'https://drive.google.com/file/d/physics-2023-on-p3-tz2-sl-ms/view'
            }
          }
        }
      },

      // Add similar structure for years 2022, 2021, 2020, 2019, 2018, 2017, 2016
    },
    chemistry: {
      2023: {
        'MAY-JUNE-2023': {
          HL: {
            qp: {
              'Chemistry_paper_1__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz1-hl-qp/view',
              'Chemistry_paper_1__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz2-hl-qp/view',
              'Chemistry_paper_2__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz1-hl-qp/view',
              'Chemistry_paper_2__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz2-hl-qp/view',
              'Chemistry_paper_3__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz1-hl-qp/view',
              'Chemistry_paper_3__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz2-hl-qp/view'
            },
            ms: {
              'Chemistry_paper_1__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz1-hl-ms/view',
              'Chemistry_paper_1__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz2-hl-ms/view',
              'Chemistry_paper_2__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz1-hl-ms/view',
              'Chemistry_paper_2__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz2-hl-ms/view',
              'Chemistry_paper_3__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz1-hl-ms/view',
              'Chemistry_paper_3__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Chemistry_paper_1__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz1-sl-qp/view',
              'Chemistry_paper_1__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz2-sl-qp/view',
              'Chemistry_paper_2__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz1-sl-qp/view',
              'Chemistry_paper_2__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz2-sl-qp/view',
              'Chemistry_paper_3__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz1-sl-qp/view',
              'Chemistry_paper_3__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz2-sl-qp/view'
            },
            ms: {
              'Chemistry_paper_1__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz1-sl-ms/view',
              'Chemistry_paper_1__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p1-tz2-sl-ms/view',
              'Chemistry_paper_2__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz1-sl-ms/view',
              'Chemistry_paper_2__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p2-tz2-sl-ms/view',
              'Chemistry_paper_3__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz1-sl-ms/view',
              'Chemistry_paper_3__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-mj-p3-tz2-sl-ms/view'
            }
          }
        },
        'OCT-NOV-2023': {
          HL: {
            qp: {
              'Chemistry_paper_1__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz1-hl-qp/view',
              'Chemistry_paper_1__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz2-hl-qp/view',
              'Chemistry_paper_2__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz1-hl-qp/view',
              'Chemistry_paper_2__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz2-hl-qp/view',
              'Chemistry_paper_3__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz1-hl-qp/view',
              'Chemistry_paper_3__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz2-hl-qp/view'
            },
            ms: {
              'Chemistry_paper_1__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz1-hl-ms/view',
              'Chemistry_paper_1__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz2-hl-ms/view',
              'Chemistry_paper_2__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz1-hl-ms/view',
              'Chemistry_paper_2__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz2-hl-ms/view',
              'Chemistry_paper_3__TZ1_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz1-hl-ms/view',
              'Chemistry_paper_3__TZ2_HL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Chemistry_paper_1__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz1-sl-qp/view',
              'Chemistry_paper_1__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz2-sl-qp/view',
              'Chemistry_paper_2__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz1-sl-qp/view',
              'Chemistry_paper_2__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz2-sl-qp/view',
              'Chemistry_paper_3__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz1-sl-qp/view',
              'Chemistry_paper_3__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz2-sl-qp/view'
            },
            ms: {
              'Chemistry_paper_1__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz1-sl-ms/view',
              'Chemistry_paper_1__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p1-tz2-sl-ms/view',
              'Chemistry_paper_2__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz1-sl-ms/view',
              'Chemistry_paper_2__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p2-tz2-sl-ms/view',
              'Chemistry_paper_3__TZ1_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz1-sl-ms/view',
              'Chemistry_paper_3__TZ2_SL': 'https://drive.google.com/file/d/chemistry-2023-on-p3-tz2-sl-ms/view'
            }
          }
        }
      },
      // Add similar structure for years 2022, 2021, 2020, 2019, 2018, 2017, 2016
    },
    biology: {
      2023: {
        'MAY-JUNE-2023': {
          HL: {
            qp: {
              'Biology_paper_1__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz1-hl-qp/view',
              'Biology_paper_1__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz2-hl-qp/view',
              'Biology_paper_2__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz1-hl-qp/view',
              'Biology_paper_2__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz2-hl-qp/view',
              'Biology_paper_3__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz1-hl-qp/view',
              'Biology_paper_3__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz2-hl-qp/view'
            },
            ms: {
              'Biology_paper_1__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz1-hl-ms/view',
              'Biology_paper_1__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz2-hl-ms/view',
              'Biology_paper_2__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz1-hl-ms/view',
              'Biology_paper_2__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz2-hl-ms/view',
              'Biology_paper_3__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz1-hl-ms/view',
              'Biology_paper_3__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Biology_paper_1__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz1-sl-qp/view',
              'Biology_paper_1__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz2-sl-qp/view',
              'Biology_paper_2__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz1-sl-qp/view',
              'Biology_paper_2__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz2-sl-qp/view',
              'Biology_paper_3__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz1-sl-qp/view',
              'Biology_paper_3__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz2-sl-qp/view'
            },
            ms: {
              'Biology_paper_1__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz1-sl-ms/view',
              'Biology_paper_1__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-mj-p1-tz2-sl-ms/view',
              'Biology_paper_2__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz1-sl-ms/view',
              'Biology_paper_2__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-mj-p2-tz2-sl-ms/view',
              'Biology_paper_3__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz1-sl-ms/view',
              'Biology_paper_3__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-mj-p3-tz2-sl-ms/view'
            }
          }
        },
        'OCT-NOV-2023': {
          HL: {
            qp: {
              'Biology_paper_1__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz1-hl-qp/view',
              'Biology_paper_1__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz2-hl-qp/view',
              'Biology_paper_2__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz1-hl-qp/view',
              'Biology_paper_2__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz2-hl-qp/view',
              'Biology_paper_3__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz1-hl-qp/view',
              'Biology_paper_3__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz2-hl-qp/view'
            },
            ms: {
              'Biology_paper_1__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz1-hl-ms/view',
              'Biology_paper_1__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz2-hl-ms/view',
              'Biology_paper_2__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz1-hl-ms/view',
              'Biology_paper_2__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz2-hl-ms/view',
              'Biology_paper_3__TZ1_HL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz1-hl-ms/view',
              'Biology_paper_3__TZ2_HL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz2-hl-ms/view'
            }
          },
          SL: {
            qp: {
              'Biology_paper_1__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz1-sl-qp/view',
              'Biology_paper_1__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz2-sl-qp/view',
              'Biology_paper_2__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz1-sl-qp/view',
              'Biology_paper_2__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz2-sl-qp/view',
              'Biology_paper_3__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz1-sl-qp/view',
              'Biology_paper_3__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz2-sl-qp/view'
            },
            ms: {
              'Biology_paper_1__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz1-sl-ms/view',
              'Biology_paper_1__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-on-p1-tz2-sl-ms/view',
              'Biology_paper_2__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz1-sl-ms/view',
              'Biology_paper_2__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-on-p2-tz2-sl-ms/view',
              'Biology_paper_3__TZ1_SL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz1-sl-ms/view',
              'Biology_paper_3__TZ2_SL': 'https://drive.google.com/file/d/biology-2023-on-p3-tz2-sl-ms/view'
            }
          }
        }
      },
      // Add similar structure for years 2022, 2021, 2020, 2019, 2018, 2017, 2016
    }
  };

  const getSubjectPapers = (subjectName: string, level: 'HL' | 'SL', year: string, session: string) => {
    const normalizedSubject = subjectName?.toLowerCase() as keyof typeof paperData;
    if (paperData[normalizedSubject] && paperData[normalizedSubject][year] && paperData[normalizedSubject][year][session]) {
      return Object.keys(paperData[normalizedSubject][year][session][level].qp);
    }
    // Fallback to default physics papers if specific year/session not found
    return ['Physics_paper_1__TZ1_' + level, 'Physics_paper_1__TZ2_' + level, 'Physics_paper_2__TZ1_' + level, 'Physics_paper_2__TZ2_' + level, 'Physics_paper_3__TZ1_' + level, 'Physics_paper_3__TZ2_' + level];
  };

  const handleDownload = (session: string, type: 'qp' | 'ms', paperName?: string, year?: string) => {
    if (paperName && subject && year) {
      const normalizedSubject = subject.toLowerCase() as keyof typeof paperData;
      const level = paperName.includes('_HL') ? 'HL' : 'SL';
      
      if (paperData[normalizedSubject] && 
          paperData[normalizedSubject][year] && 
          paperData[normalizedSubject][year][session] &&
          paperData[normalizedSubject][year][session][level][type][paperName]) {
        const url = paperData[normalizedSubject][year][session][level][type][paperName];
        window.open(url, '_blank');
      } else {
        console.log(`URL not found for ${paperName} in ${year} ${session}`);
      }
    } else {
      console.log(`Downloading ${type.toUpperCase()} for ${session}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen ivyzone-bg flex items-center justify-center">
        <div className="ivyzone-text text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ivyzone-hero-bg">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button
              onClick={() => navigate('/ivyzone/dashboard')}
              variant="outline"
              size="sm"
              className="ivyzone-card border-3 border-orange-300 ivyzone-text hover:opacity-80 font-semibold"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          
          <div className="text-center">
            <div className="text-7xl mb-6 drop-shadow-lg">{getSubjectIcon(subject || '')}</div>
            <h1 className="text-5xl md:text-6xl font-bold ivyzone-text mb-6 capitalize drop-shadow-sm">
              {subject} Past Papers
            </h1>
            <p className="text-2xl ivyzone-text-muted max-w-3xl mx-auto font-medium">
              Complete collection of {subject} past papers organized by year and session
            </p>
          </div>
        </div>
      </section>

      {/* Paper Levels */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="ivyzone-feature-card">
              <CardHeader className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-t-lg">
                <CardTitle className="ivyzone-text text-3xl font-bold">Higher Level (HL)</CardTitle>
                <CardDescription className="ivyzone-text-muted text-lg font-medium">
                  Advanced level papers for deeper understanding
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {years.map((yearData) => (
                    <Card key={yearData.year} className="ivyzone-card border-3 border-orange-200 hover:border-orange-400 transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="ivyzone-text text-xl font-bold">{yearData.year}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {yearData.sessions.map((session) => (
                            <div key={session} className="flex items-center justify-between p-3 ivyzone-card rounded-lg border-2 border-orange-100 hover:border-orange-300 transition-colors">
                              <span className="ivyzone-text text-sm font-medium">{session}</span>
                              <div className="flex gap-2">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-8 px-3 ivyzone-button text-xs font-semibold"
                                    >
                                      <FileText className="h-3 w-3 mr-1" />
                                      QP
                                      <ChevronDown className="h-3 w-3 ml-1" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                   <DropdownMenuContent className="bg-popover border shadow-md">
                                     {getSubjectPapers(subject || '', 'HL', yearData.year, session).map((paper) => (
                                       <DropdownMenuItem
                                         key={paper}
                                         onClick={() => handleDownload(session, 'qp', paper, yearData.year)}
                                         className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                                       >
                                         {paper}
                                       </DropdownMenuItem>
                                     ))}
                                   </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-8 px-3 ivyzone-button text-xs font-semibold"
                                    >
                                      <Download className="h-3 w-3 mr-1" />
                                      MS
                                      <ChevronDown className="h-3 w-3 ml-1" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                   <DropdownMenuContent className="bg-popover border shadow-md">
                                     {getSubjectPapers(subject || '', 'HL', yearData.year, session).map((paper) => (
                                       <DropdownMenuItem
                                         key={paper}
                                         onClick={() => handleDownload(session, 'ms', paper, yearData.year)}
                                         className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                                       >
                                         {paper}
                                       </DropdownMenuItem>
                                     ))}
                                   </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="ivyzone-feature-card">
              <CardHeader className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-t-lg">
                <CardTitle className="ivyzone-text text-3xl font-bold">Standard Level (SL)</CardTitle>
                <CardDescription className="ivyzone-text-muted text-lg font-medium">
                  Foundation level papers for core concepts
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {years.map((yearData) => (
                    <Card key={yearData.year} className="ivyzone-card border-3 border-orange-200 hover:border-orange-400 transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="ivyzone-text text-xl font-bold">{yearData.year}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {yearData.sessions.map((session) => (
                            <div key={session} className="flex items-center justify-between p-3 ivyzone-card rounded-lg border-2 border-orange-100 hover:border-orange-300 transition-colors">
                              <span className="ivyzone-text text-sm font-medium">{session}</span>
                              <div className="flex gap-2">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-8 px-3 ivyzone-button text-xs font-semibold"
                                    >
                                      <FileText className="h-3 w-3 mr-1" />
                                      QP
                                      <ChevronDown className="h-3 w-3 ml-1" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                   <DropdownMenuContent className="bg-popover border shadow-md">
                                     {getSubjectPapers(subject || '', 'SL', yearData.year, session).map((paper) => (
                                       <DropdownMenuItem
                                         key={paper}
                                         onClick={() => handleDownload(session, 'qp', paper, yearData.year)}
                                         className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                                       >
                                         {paper}
                                       </DropdownMenuItem>
                                     ))}
                                   </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-8 px-3 ivyzone-button text-xs font-semibold"
                                    >
                                      <Download className="h-3 w-3 mr-1" />
                                      MS
                                      <ChevronDown className="h-3 w-3 ml-1" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                   <DropdownMenuContent className="bg-popover border shadow-md">
                                     {getSubjectPapers(subject || '', 'SL', yearData.year, session).map((paper) => (
                                       <DropdownMenuItem
                                         key={paper}
                                         onClick={() => handleDownload(session, 'ms', paper, yearData.year)}
                                         className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                                       >
                                         {paper}
                                       </DropdownMenuItem>
                                     ))}
                                   </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Legend */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <Card className="ivyzone-feature-card max-w-3xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold ivyzone-text mb-4 text-center">Download Guide</h3>
              <div className="flex justify-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-full p-2">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <span className="ivyzone-text font-semibold">QP = Question Paper</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-2">
                    <Download className="h-5 w-5 text-white" />
                  </div>
                  <span className="ivyzone-text font-semibold">MS = Marking Scheme</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IVYZoneSubject;
