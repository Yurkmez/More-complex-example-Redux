import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import AddPostForm from './components/AddPostForm';
import PostsList from './components/PostsList';
import SinglePostPage from './components/SinglePostPage';

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route
                            index={true}
                            element={
                                <>
                                    <AddPostForm />
                                    <PostsList />
                                </>
                            }
                        />
                        <Route
                            path="/posts/:postId"
                            element={<SinglePostPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
