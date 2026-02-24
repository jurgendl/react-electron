import {type ReactNode, StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, HashRouter} from "react-router-dom";
import './index.scss'
import App from './app/App'
import {isElectron} from "./app/app-func";

export function AppRouter({children}: { children: ReactNode }) {
	const Router = isElectron() ? HashRouter : BrowserRouter;
	return <Router>{children}</Router>;
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppRouter>
			<App />
		</AppRouter>
	</StrictMode>,
)
