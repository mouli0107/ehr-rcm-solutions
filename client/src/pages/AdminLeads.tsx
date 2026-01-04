import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Users, FileText, ArrowLeft, Search, Download, Mail, MapPin, Calendar, LogIn, Loader2
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

interface WhitePaperDownload {
  id: number;
  whitePaperId: string;
  firstName: string;
  lastName: string;
  email: string;
  practiceAddress: string;
  downloadReason: string;
  createdAt: string;
}

interface ContactRequest {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  requestType: string;
  message: string | null;
  createdAt: string;
}

const whitePaperTitles: Record<string, string> = {
  "ehr-selection": "EHR Selection Guide",
  "rcm-optimization": "RCM Optimization",
  "patient-engagement": "Patient Engagement",
  "telehealth": "Telehealth Best Practices",
  "hipaa-compliance": "HIPAA Compliance",
  "specialty-ehr": "Specialty EHR Benefits"
};

export default function AdminLeads() {
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  const [downloads, setDownloads] = useState<WhitePaperDownload[]>([]);
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"downloads" | "contacts">("downloads");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return;
    }
    
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [downloadsRes, contactsRes] = await Promise.all([
          fetch("/api/white-paper-downloads"),
          fetch("/api/contact-requests")
        ]);
        
        if (downloadsRes.ok) {
          const downloadsData = await downloadsRes.json();
          setDownloads(downloadsData);
        }
        
        if (contactsRes.ok) {
          const contactsData = await contactsRes.json();
          setContacts(contactsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background font-sans overflow-x-hidden">
        <Navbar />
        <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-md mx-auto text-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">Admin Access Required</h1>
              <p className="text-slate-600 mb-8">
                Please log in to access the lead management dashboard.
              </p>
              <a href="/api/login">
                <Button size="lg" className="h-12 px-8" data-testid="button-login">
                  <LogIn className="h-5 w-5 mr-2" />
                  Log In to Continue
                </Button>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const filteredDownloads = downloads.filter(d => 
    d.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.practiceAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (c.company && c.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const exportToCSV = () => {
    if (activeTab === "downloads") {
      const headers = ["First Name", "Last Name", "Email", "Practice Address", "White Paper", "Reason", "Date"];
      const rows = downloads.map(d => [
        d.firstName,
        d.lastName,
        d.email,
        d.practiceAddress.replace(/,/g, ";"),
        whitePaperTitles[d.whitePaperId] || d.whitePaperId,
        d.downloadReason.replace(/,/g, ";"),
        formatDate(d.createdAt)
      ]);
      const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "white-paper-leads.csv";
      a.click();
    } else {
      const headers = ["Name", "Email", "Phone", "Company", "Request Type", "Message", "Date"];
      const rows = contacts.map(c => [
        c.name,
        c.email,
        c.phone || "",
        c.company || "",
        c.requestType,
        (c.message || "").replace(/,/g, ";"),
        formatDate(c.createdAt)
      ]);
      const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "contact-requests.csv";
      a.click();
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="sm" data-testid="button-back-home">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Lead Management</h1>
              <p className="text-slate-600">View and export your leads from white paper downloads and contact requests</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <Button 
                variant={activeTab === "downloads" ? "default" : "outline"}
                onClick={() => setActiveTab("downloads")}
                data-testid="tab-downloads"
              >
                <FileText className="h-4 w-4 mr-2" />
                White Paper Downloads ({downloads.length})
              </Button>
              <Button 
                variant={activeTab === "contacts" ? "default" : "outline"}
                onClick={() => setActiveTab("contacts")}
                data-testid="tab-contacts"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Requests ({contacts.length})
              </Button>
            </div>
            
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                  data-testid="input-search"
                />
              </div>
              <Button variant="outline" onClick={exportToCSV} data-testid="button-export">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white min-h-[400px]">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : activeTab === "downloads" ? (
            filteredDownloads.length === 0 ? (
              <div className="text-center py-20">
                <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">No downloads yet</h3>
                <p className="text-slate-500">White paper download leads will appear here</p>
              </div>
            ) : (
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Practice Address</TableHead>
                      <TableHead>White Paper</TableHead>
                      <TableHead>Interest Reason</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDownloads.map((download) => (
                      <TableRow key={download.id} data-testid={`row-download-${download.id}`}>
                        <TableCell className="font-medium">
                          {download.firstName} {download.lastName}
                        </TableCell>
                        <TableCell>
                          <a 
                            href={`mailto:${download.email}`} 
                            className="text-primary hover:underline flex items-center gap-1"
                            data-testid={`link-email-${download.id}`}
                          >
                            <Mail className="h-3 w-3" />
                            {download.email}
                          </a>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="flex items-start gap-1">
                            <MapPin className="h-3 w-3 mt-1 text-slate-400 flex-shrink-0" />
                            <span className="text-sm text-slate-600 truncate">{download.practiceAddress}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {whitePaperTitles[download.whitePaperId] || download.whitePaperId}
                          </span>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <span className="text-sm text-slate-600 line-clamp-2">{download.downloadReason}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <Calendar className="h-3 w-3" />
                            {formatDate(download.createdAt)}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          ) : (
            filteredContacts.length === 0 ? (
              <div className="text-center py-20">
                <Mail className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">No contact requests yet</h3>
                <p className="text-slate-500">Contact form submissions will appear here</p>
              </div>
            ) : (
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Request Type</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id} data-testid={`row-contact-${contact.id}`}>
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>
                          <a 
                            href={`mailto:${contact.email}`} 
                            className="text-primary hover:underline flex items-center gap-1"
                            data-testid={`link-contact-email-${contact.id}`}
                          >
                            <Mail className="h-3 w-3" />
                            {contact.email}
                          </a>
                        </TableCell>
                        <TableCell>{contact.phone || "-"}</TableCell>
                        <TableCell>{contact.company || "-"}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                            {contact.requestType}
                          </span>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <span className="text-sm text-slate-600 line-clamp-2">{contact.message || "-"}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <Calendar className="h-3 w-3" />
                            {formatDate(contact.createdAt)}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
