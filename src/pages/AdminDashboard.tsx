import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Users, MessageSquare, Calendar, DollarSign, Eye, Edit } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface DemoRequest {
  id: string;
  parents_name: string;
  parents_mobile: string;
  students_name: string;
  grade: string;
  school_name: string;
  status: string;
  notes?: string;
  created_at: string;
}

interface TeacherMessage {
  id: string;
  user_id: string;
  subject: string;
  message: string;
  teacher_name: string;
  status: string;
  response?: string;
  created_at: string;
}

interface UserSubscription {
  id: string;
  user_id: string;
  status: string;
  start_date: string;
  end_date?: string;
  plan_id: string;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [teacherMessages, setTeacherMessages] = useState<TeacherMessage[]>([]);
  const [subscriptions, setSubscriptions] = useState<UserSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<DemoRequest | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<TeacherMessage | null>(null);
  const [notes, setNotes] = useState('');
  const [response, setResponse] = useState('');
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch demo requests
      const { data: demos, error: demoError } = await supabase
        .from('demo_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (demoError) throw demoError;
      setDemoRequests(demos || []);

      // Fetch teacher messages
      const { data: messages, error: messageError } = await supabase
        .from('teacher_support')
        .select('*')
        .order('created_at', { ascending: false });

      if (messageError) throw messageError;
      setTeacherMessages(messages || []);

      // Fetch subscriptions
      const { data: subs, error: subError } = await supabase
        .from('user_subscriptions')
        .select('*')
        .order('created_at', { ascending: false });

      if (subError) throw subError;
      setSubscriptions(subs || []);

    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateDemoRequest = async (id: string, updates: Partial<DemoRequest>) => {
    try {
      const { error } = await supabase
        .from('demo_requests')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      setDemoRequests(prev => 
        prev.map(request => 
          request.id === id ? { ...request, ...updates } : request
        )
      );

      toast({
        title: "Success",
        description: "Demo request updated successfully",
      });
    } catch (error) {
      console.error('Error updating demo request:', error);
      toast({
        title: "Error",
        description: "Failed to update demo request",
        variant: "destructive",
      });
    }
  };

  const updateTeacherMessage = async (id: string, updates: Partial<TeacherMessage>) => {
    try {
      const { error } = await supabase
        .from('teacher_support')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      setTeacherMessages(prev => 
        prev.map(message => 
          message.id === id ? { ...message, ...updates } : message
        )
      );

      toast({
        title: "Success",
        description: "Message updated successfully",
      });
    } catch (error) {
      console.error('Error updating message:', error);
      toast({
        title: "Error",
        description: "Failed to update message",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive'> = {
      pending: 'default',
      contacted: 'secondary',
      completed: 'secondary',
      cancelled: 'destructive',
      responded: 'secondary'
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">Loading...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage subscriptions, messages, and demo requests</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Demo Requests</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{demoRequests.length}</div>
                <p className="text-xs text-muted-foreground">
                  {demoRequests.filter(r => r.status === 'pending').length} pending
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{teacherMessages.length}</div>
                <p className="text-xs text-muted-foreground">
                  {teacherMessages.filter(m => m.status === 'pending').length} pending
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{subscriptions.length}</div>
                <p className="text-xs text-muted-foreground">
                  {subscriptions.filter(s => s.status === 'active').length} active
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹0</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="demo-requests" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="demo-requests">Demo Requests</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            </TabsList>

            <TabsContent value="demo-requests" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Demo Requests</CardTitle>
                  <CardDescription>Manage incoming demo requests from parents</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Parent Name</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>School</TableHead>
                        <TableHead>Mobile</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {demoRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.parents_name}</TableCell>
                          <TableCell>{request.students_name}</TableCell>
                          <TableCell>{request.grade}</TableCell>
                          <TableCell>{request.school_name}</TableCell>
                          <TableCell>{request.parents_mobile}</TableCell>
                          <TableCell>{getStatusBadge(request.status)}</TableCell>
                          <TableCell>{new Date(request.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => {
                                  setSelectedRequest(request);
                                  setNotes(request.notes || '');
                                  setNewStatus(request.status);
                                }}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Update Demo Request</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium">Status</label>
                                    <Select value={newStatus} onValueChange={setNewStatus}>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="contacted">Contacted</SelectItem>
                                        <SelectItem value="completed">Completed</SelectItem>
                                        <SelectItem value="cancelled">Cancelled</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Notes</label>
                                    <Textarea
                                      value={notes}
                                      onChange={(e) => setNotes(e.target.value)}
                                      placeholder="Add notes about this request..."
                                    />
                                  </div>
                                  <Button 
                                    onClick={() => {
                                      if (selectedRequest) {
                                        updateDemoRequest(selectedRequest.id, {
                                          status: newStatus,
                                          notes: notes
                                        });
                                      }
                                    }}
                                  >
                                    Update Request
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Teacher Support Messages</CardTitle>
                  <CardDescription>View and respond to student messages</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Teacher</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {teacherMessages.map((message) => (
                        <TableRow key={message.id}>
                          <TableCell className="font-medium">{message.subject}</TableCell>
                          <TableCell>{message.teacher_name}</TableCell>
                          <TableCell>{getStatusBadge(message.status)}</TableCell>
                          <TableCell>{new Date(message.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => {
                                  setSelectedMessage(message);
                                  setResponse(message.response || '');
                                  setNewStatus(message.status);
                                }}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Message Details</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium">Original Message</label>
                                    <div className="p-3 bg-muted rounded-md mt-1">
                                      {selectedMessage?.message}
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Status</label>
                                    <Select value={newStatus} onValueChange={setNewStatus}>
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="responded">Responded</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium">Response</label>
                                    <Textarea
                                      value={response}
                                      onChange={(e) => setResponse(e.target.value)}
                                      placeholder="Write your response..."
                                    />
                                  </div>
                                  <Button 
                                    onClick={() => {
                                      if (selectedMessage) {
                                        updateTeacherMessage(selectedMessage.id, {
                                          status: newStatus,
                                          response: response
                                        });
                                      }
                                    }}
                                  >
                                    Update Message
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscriptions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Subscriptions</CardTitle>
                  <CardDescription>Manage user subscription status</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Plan ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subscriptions.map((subscription) => (
                        <TableRow key={subscription.id}>
                          <TableCell className="font-medium">{subscription.user_id}</TableCell>
                          <TableCell>{subscription.plan_id}</TableCell>
                          <TableCell>{getStatusBadge(subscription.status)}</TableCell>
                          <TableCell>{new Date(subscription.start_date).toLocaleDateString()}</TableCell>
                          <TableCell>
                            {subscription.end_date 
                              ? new Date(subscription.end_date).toLocaleDateString() 
                              : 'N/A'
                            }
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;