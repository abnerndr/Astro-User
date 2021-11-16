import React, { useState, UseEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './Pages/Global.css'
import './App.css'

import Acess from './Pages/Acess'
import Create from './Pages/Create'
const App = () => {
	return (
		<Router>
			<Link to="/">1</Link>
			<Link to="/cad">2</Link>

			<Routes>
				<Route path="/" exact element={<Acess />} />
				<Route path="/cad" element={<Create />} />
			</Routes>
		</Router>
	)
}

export default App
