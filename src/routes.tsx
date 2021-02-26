import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    )
}
