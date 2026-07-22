import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Care } from './pages/Care';
import { Platform } from './pages/Platform';
import { Pricing } from './pages/Pricing';
import { Start } from './pages/Start';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

import { DashboardOverview } from './pages/dashboard/Overview';
import { DashboardEditor } from './pages/dashboard/Editor';
import { DashboardRequests } from './pages/dashboard/Requests';
import { DashboardFiles } from './pages/dashboard/Files';
import { DashboardInvoices } from './pages/dashboard/Invoices';
import { DashboardSubscriptions } from './pages/dashboard/Subscriptions';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/care" component={Care} />
      <Route path="/platform" component={Platform} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/start" component={Start} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      
      <Route path="/dashboard" component={DashboardOverview} />
      <Route path="/dashboard/editor" component={DashboardEditor} />
      <Route path="/dashboard/requests" component={DashboardRequests} />
      <Route path="/dashboard/files" component={DashboardFiles} />
      <Route path="/dashboard/invoices" component={DashboardInvoices} />
      <Route path="/dashboard/subscriptions" component={DashboardSubscriptions} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
