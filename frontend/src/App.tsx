import { BrowserRouter as Router } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import DealsPage from './pages/deals/DealsPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={ queryClient }>
            <Router>
                <Routes>
                    <Route path="/" element={ <DealsPage /> } />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
