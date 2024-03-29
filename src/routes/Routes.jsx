import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from '../pages/not-found/NotFound'

import { routes } from './routes.data'

/* 

в этом компоненте используются библиотека react router dom 
для добавления навигации со страниц not found

*/

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
