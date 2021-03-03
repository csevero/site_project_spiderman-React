import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/Home'
import NotFound from './pages/NotFound'
import Story from './pages/Story'
import WallpapersPage from './pages/Wallpapers'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/story" component={Story} />
                <Route path="/wallpapers" component={WallpapersPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
